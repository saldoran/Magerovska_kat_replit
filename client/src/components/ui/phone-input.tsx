import { useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import intlTelInput, { Iti } from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  onValidationChange?: (isValid: boolean) => void;
  placeholder?: string;
  className?: string;
  "data-testid"?: string;
}

const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ value, onChange, onValidationChange, placeholder, className, "data-testid": dataTestId }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const itiRef = useRef<Iti | null>(null);
    const normalizedValue = value ?? "";

    useImperativeHandle(ref, () => inputRef.current!);

    useEffect(() => {
      if (inputRef.current && !itiRef.current) {
        const inputElement = inputRef.current;
        itiRef.current = intlTelInput(inputElement, {
          initialCountry: "pl",
          separateDialCode: true,
          nationalMode: false,
        } as any);

        const handleChange = () => {
          if (itiRef.current && inputElement) {
            const selectedCountryData = itiRef.current.getSelectedCountryData();
            const dialCode = selectedCountryData.dialCode || "";
            const inputValue = inputElement.value.trim();
            
            let fullNumber = "";
            if (inputValue) {
              if (inputValue.startsWith("+")) {
                fullNumber = inputValue;
              } else {
                fullNumber = dialCode ? `+${dialCode}${inputValue}` : inputValue;
              }
            } else if (dialCode) {
              fullNumber = `+${dialCode}`;
            }
            
            onChange(fullNumber);
            
            if (onValidationChange) {
              const isValid = itiRef.current.isValidNumber();
              onValidationChange(isValid !== null ? isValid : false);
            }
          }
        };

        inputElement.addEventListener("countrychange", handleChange);
        inputElement.addEventListener("input", handleChange);
        inputElement.addEventListener("blur", handleChange);

        const selectedCountryData = itiRef.current.getSelectedCountryData();
        const dialCode = selectedCountryData.dialCode || "";
        if (dialCode && !normalizedValue) {
          onChange(`+${dialCode}`);
        }

        return () => {
          inputElement.removeEventListener("countrychange", handleChange);
          inputElement.removeEventListener("input", handleChange);
          inputElement.removeEventListener("blur", handleChange);
          if (itiRef.current) {
            itiRef.current.destroy();
            itiRef.current = null;
          }
        };
      }
    }, [onChange, onValidationChange]);

    useEffect(() => {
      if (itiRef.current && inputRef.current) {
        if (normalizedValue !== itiRef.current.getNumber()) {
          itiRef.current.setNumber(normalizedValue);
        }
      }
    }, [normalizedValue]);

    return (
      <input
        ref={inputRef}
        type="tel"
        className={className || "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"}
        placeholder={placeholder}
        data-testid={dataTestId}
      />
    );
  }
);

PhoneInput.displayName = "PhoneInput";

export { PhoneInput };
