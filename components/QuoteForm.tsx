"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

// --- Types ---
type FormValues = {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    service: string;
    message: string;
};

// --- Data ---
const serviceOptions = [
  { value: "", label: "Select a Service..." },
  { value: "residential-hvac-repair", label: "Residential HVAC Repair" },
  { value: "ac-installation", label: "AC Installation" },
  { value: "ac-repair", label: "AC Repair" },
  { value: "heating-repair", label: "Heating Repair" },
  { value: "air-duct-repair", label: "Air Duct Repair" },
  { value: "exhaust-fan-repair", label: "Exhaust Fan Repair" },
  { value: "water-heater-repair", label: "Water Heater Repair" },
  { value: "commercial-hvac", label: "Commercial HVAC" },
  { value: "hvac-maintenance", label: "HVAC Maintenance" },
  { value: "emergency-service", label: "Emergency Service" },
  { value: "other", label: "Other" },
  ];

// --- Helper components ---
const CheckCircleIcon = () => (
    <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-12 h-12 text-green-500"
          aria-hidden="true"
        >
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
    </svg>
  );

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
    return (
          <label htmlFor={htmlFor} className="block text-sm font-semibold text-gray-700 mb-1.5">
            {children}
          </label>
        );
}

function FieldError({ message }: { message?: string }) {
    if (!message) return null;
    return (
          <p role="alert" className="mt-1 text-xs text-red-600 font-medium">
            {message}
          </p>
        );
}

const inputBase =
    "block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 shadow-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30";
const inputError = "border-red-400 focus:border-red-500 focus:ring-red-400/30";

// --- Component ---
export default function QuoteForm() {
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
  
    const {
          register,
          handleSubmit,
          formState: { errors, isSubmitting },
          reset,
    } = useForm<FormValues>({ mode: "onTouched" });
  
    const onSubmit: SubmitHandler<FormValues> = async (data) => {
          setSubmitError(null);
          try {
                  const res = await fetch("/api/contact", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                        first_name: data.firstName,
                                        last_name: data.lastName,
                                        phone: data.phone,
                                        email: data.email,
                                        service_type: data.service,
                                        contact_method: "",
                                        message: data.message,
                            }),
                  });
                  if (!res.ok) {
                            const json = await res.json().catch(() => ({}));
                            throw new Error((json as { error?: string }).error || "Submission failed. Please try again.");
                  }
                  setSubmitted(true);
                  reset();
          } catch (err) {
                  setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
          }
    };
  
    if (submitted) {
          return (
                  <div className="flex flex-col items-center justify-center text-center py-12 px-6 gap-4">
                          <CheckCircleIcon />
                          <h3 className="text-2xl font-bold text-gray-900">Thank You!</h3>
                          <p className="text-gray-600 max-w-sm leading-relaxed">
                                    We&apos;ve received your request and will contact you within{" "}
                                    <strong className="text-blue-700">1 business hour</strong> to schedule your free quote.
                          </p>
                          <p className="text-sm text-gray-500">
                                    Need immediate help?{" "}
                                    <a href="tel:8132916146" className="text-blue-600 font-semibold hover:underline">
                                                Call (813) 291-6146
                                    </a>
                          </p>
                          <button
                                      onClick={() => setSubmitted(false)}
                                      className="mt-2 text-sm text-blue-600 hover:text-blue-800 underline transition-colors"
                                    >
                                    Submit another request
                          </button>
                  </div>
                );
    }
  
    return (
          <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  aria-label="Free quote request form"
                  className="space-y-5"
                >
            {/* First Name + Last Name */}
                <div className="grid grid-cols-2 gap-4">
                        <div>
                                  <Label htmlFor="quote-firstName">
                                              First Name <span className="text-red-500">*</span>
                                  </Label>
                                  <input
                                                id="quote-firstName"
                                                type="text"
                                                autoComplete="given-name"
                                                placeholder="Jane"
                                                className={`${inputBase} ${errors.firstName ? inputError : ""}`}
                                    {...register("firstName", {
                                                    required: "First name is required.",
                                                    minLength: { value: 2, message: "Must be at least 2 characters." },
                                    })}
                                              />
                                  <FieldError message={errors.firstName?.message} />
                        </div>
                        <div>
                                  <Label htmlFor="quote-lastName">
                                              Last Name <span className="text-red-500">*</span>
                                  </Label>
                                  <input
                                                id="quote-lastName"
                                                type="text"
                                                autoComplete="family-name"
                                                placeholder="Smith"
                                                className={`${inputBase} ${errors.lastName ? inputError : ""}`}
                                    {...register("lastName", {
                                                    required: "Last name is required.",
                                                    minLength: { value: 2, message: "Must be at least 2 characters." },
                                    })}
                                              />
                                  <FieldError message={errors.lastName?.message} />
                        </div>
                </div>
          
            {/* Phone + Email */}
                <div className="grid grid-cols-2 gap-4">
                        <div>
                                  <Label htmlFor="quote-phone">
                                              Phone Number <span className="text-red-500">*</span>
                                  </Label>
                                  <input
                                                id="quote-phone"
                                                type="tel"
                                                autoComplete="tel"
                                                placeholder="(813) 555-0100"
                                                className={`${inputBase} ${errors.phone ? inputError : ""}`}
                                    {...register("phone", {
                                                    required: "A phone number is required.",
                                                    pattern: {
                                                                      value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                                                                      message: "Please enter a valid phone number.",
                                                    },
                                    })}
                                              />
                                  <FieldError message={errors.phone?.message} />
                        </div>
                        <div>
                                  <Label htmlFor="quote-email">
                                              Email Address <span className="text-red-500">*</span>
                                  </Label>
                                  <input
                                                id="quote-email"
                                                type="email"
                                                autoComplete="email"
                                                placeholder="jane@example.com"
                                                className={`${inputBase} ${errors.email ? inputError : ""}`}
                                    {...register("email", {
                                                    required: "An email address is required.",
                                                    pattern: {
                                                                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                                      message: "Please enter a valid email address.",
                                                    },
                                    })}
                                              />
                                  <FieldError message={errors.email?.message} />
                        </div>
                </div>
          
            {/* Service */}
                <div>
                        <Label htmlFor="quote-service">
                                  Service Needed <span className="text-red-500">*</span>
                        </Label>
                        <select
                                    id="quote-service"
                                    className={`${inputBase} ${errors.service ? inputError : ""} cursor-pointer`}
                          {...register("service", {
                                        required: "Please select the service you need.",
                                        validate: (v) => v !== "" || "Please select the service you need.",
                          })}
                                  >
                          {serviceOptions.map(({ value, label }) => (
                                                <option key={value} value={value} disabled={value === ""}>
                                                  {label}
                                                </option>
                                              ))}
                        </select>
                        <FieldError message={errors.service?.message} />
                </div>
          
            {/* Message */}
                <div>
                        <Label htmlFor="quote-message">
                                  Message / Details{" "}
                                  <span className="text-gray-400 font-normal text-xs">(optional)</span>
                        </Label>
                        <textarea
                                    id="quote-message"
                                    rows={4}
                                    placeholder="Describe the issue or service you need..."
                                    className={`${inputBase} resize-none ${errors.message ? inputError : ""}`}
                          {...register("message", {
                                        maxLength: { value: 1000, message: "Message must be under 1000 characters." },
                          })}
                                  />
                        <FieldError message={errors.message?.message} />
                </div>
          
            {/* Server-side error */}
            {submitError && (
                          <p role="alert" className="text-sm text-red-600 font-medium text-center">
                            {submitError}
                          </p>
                )}
          
            {/* Submit */}
                <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-bold text-base rounded-xl transition-colors shadow-md hover:shadow-lg"
                        >
                  {isSubmitting ? (
                                    <>
                                                <svg
                                                                className="animate-spin w-5 h-5 text-white"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                aria-hidden="true"
                                                              >
                                                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                              <path
                                                                                className="opacity-75"
                                                                                fill="currentColor"
                                                                                d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4z"
                                                                              />
                                                </svg>
                                                Submitting...
                                    </>
                                  ) : (
                                    "Get My Free Quote"
                                  )}
                </button>
          
                <p className="text-center text-xs text-gray-400 leading-relaxed">
                        We respect your privacy and will never share your information.
                        <br />
                        Or call us directly:{" "}
                        <a href="tel:8132916146" className="text-blue-600 font-semibold hover:underline">
                                  (813) 291-6146
                        </a>
                </p>
          </form>
        );
}
