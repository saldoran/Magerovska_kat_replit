export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-white border-t py-8" data-testid="footer-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-500 text-sm" data-testid="footer-copyright">
          © 2023 Magerovska Permanent. Все права защищены.
        </p>
      </div>
    </footer>
  );
}
