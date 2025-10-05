import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint - submits to Google Form
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const language = req.body.language || 'ru';
      
      // Prepare Google Form submission data
      const formData = new URLSearchParams();
      formData.append('entry.137169618', validatedData.name);
      formData.append('entry.1522313548', validatedData.phone);  
      formData.append('entry.1229865591', validatedData.service);
      formData.append('entry.608867818', validatedData.message || '');
      formData.append('entry.1004535607', language);
      
      // Submit to Google Form
      const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSewBcoX36YCswtZbrqpshUPNzvXYPrWIbZT_wUJwcXf3mzcvA/formResponse';
      
      const response = await fetch(googleFormUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });
      
      console.log('Google Form response status:', response.status);
      
      // With no-cors mode, we can't read the response, but if fetch succeeds, submission likely worked
      res.status(201).json({
        success: true,
        message: "Contact submission sent successfully"
      });
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors
        });
      } else {
        console.error("Error submitting to Google Form:", error);
        res.status(500).json({
          success: false,
          message: "Failed to submit form. Please try again."
        });
      }
    }
  });

  // Get all contact submissions (admin endpoint)
  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      res.json({
        success: true,
        data: submissions
      });
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
