"use client";

import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, Mail, Phone } from "lucide-react";
import { serviceGroups } from "@/data/services";
import { salonConfig } from "@/lib/salon-config";

type FormStatus = "idle" | "submitting" | "submitted" | "error";

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes: string;
  contactMethod: "email" | "phone";
}

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  date: "",
  time: "",
  notes: "",
  contactMethod: "email",
};

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Please share your name.";
  if (!form.email.trim()) {
    errors.email = "Please include an email address.";
  } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!form.service) errors.service = "Please choose a service.";
  return errors;
}

export function BookingSection() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [emailHref, setEmailHref] = useState<string | null>(null);

  const bookingUrlConfigured = useMemo(
    () => Boolean(salonConfig.bookingUrl),
    [],
  );

  const updateField = <K extends keyof FormState>(
    key: K,
    value: FormState[K],
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    const subject = `New booking inquiry — ${form.name}`;
    const lines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "Not provided"}`,
      `Service of interest: ${form.service}`,
      `Preferred date: ${form.date || "Flexible"}`,
      `Preferred time: ${form.time || "Flexible"}`,
      `Preferred contact: ${form.contactMethod}`,
      "",
      "Notes:",
      form.notes || "(none)",
    ];

    const body = encodeURIComponent(lines.join("\n"));
    const href = `mailto:${salonConfig.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${body}`;

    // Open the visitor's email application
    setEmailHref(href);
    setStatus("submitted");
  };

  return (
    <section
      id="booking"
      aria-labelledby="booking-heading"
      className="section-padding"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <div className="container-editorial">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left text column */}
          <div className="lg:col-span-5">
            <p className="eyebrow reveal">Your Time, Your Transformation</p>
            <h2
              id="booking-heading"
              className="serif-heading section-heading mt-4 reveal"
            >
              Let&apos;s Plan
              <br />
              <em style={{ fontStyle: "italic", color: "var(--color-blush)" }}>
                Your Next Visit
              </em>
            </h2>
            <p
              className="mt-6 max-w-[420px] text-[15.5px] leading-[1.85] reveal"
              style={{ color: "var(--color-text)" }}
            >
              Tell us a little about the look you&apos;re dreaming of, and
              we&apos;ll help you take the next step.
            </p>

            <ul className="mt-10 space-y-4 reveal">
              {[
                "A personalized consultation before every appointment",
                "Calm, considered environment with attention to your comfort",
                "Followed-up booking confirmation within one business day",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[14.5px] leading-[1.7]"
                  style={{ color: "var(--color-text)" }}
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 inline-block h-px w-5"
                    style={{ backgroundColor: "var(--color-blush)" }}
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div
              className="mt-10 space-y-3 reveal"
              style={{ color: "var(--color-text)" }}
            >
              <a
                href={`mailto:${salonConfig.email}`}
                className="flex items-center gap-3 text-[14.5px]"
              >
                <Mail size={16} aria-hidden="true" style={{ color: "var(--color-blush)" }} />
                {salonConfig.email}
              </a>
              <a
                href={`tel:${salonConfig.phoneTel}`}
                className="flex items-center gap-3 text-[14.5px]"
              >
                <Phone size={16} aria-hidden="true" style={{ color: "var(--color-blush)" }} />
                {salonConfig.phone}
              </a>
            </div>
          </div>

          {/* Right form column */}
          <div className="lg:col-span-7">
            <form
              noValidate
              onSubmit={onSubmit}
              className="border bg-white p-7 sm:p-10 reveal"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-white)",
              }}
              aria-describedby="form-status"
            >
              {/* Live status region for screen readers */}
              <p
                id="form-status"
                role="status"
                aria-live="polite"
                className="sr-only"
              >
                {status === "submitted"
                  ? "Inquiry ready. Opening your email application."
                  : status === "error"
                    ? "Please review the highlighted fields."
                    : ""}
              </p>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  id="name"
                  label="Full Name"
                  error={errors.name}
                >
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    className="form-input"
                  />
                </Field>

                <Field id="email" label="Email Address" error={errors.email}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    className="form-input"
                  />
                </Field>

                <Field id="phone" label="Phone Number (optional)">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className="form-input"
                  />
                </Field>

                <Field id="service" label="Preferred Service" error={errors.service}>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={(e) => updateField("service", e.target.value)}
                    aria-invalid={Boolean(errors.service)}
                    className="form-input"
                  >
                    <option value="">Choose a service…</option>
                    {serviceGroups.flatMap((group) =>
                      group.services.map((svc) => (
                        <option key={svc.id} value={svc.name}>
                          {group.category} — {svc.name}
                        </option>
                      )),
                    )}
                  </select>
                </Field>

                <Field id="date" label="Preferred Date">
                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={(e) => updateField("date", e.target.value)}
                    className="form-input"
                  />
                </Field>

                <Field id="time" label="Preferred Time">
                  <input
                    id="time"
                    name="time"
                    type="time"
                    value={form.time}
                    onChange={(e) => updateField("time", e.target.value)}
                    className="form-input"
                  />
                </Field>

                <div className="sm:col-span-2">
                  <Field id="notes" label="Hair Goals or Additional Notes">
                    <textarea
                      id="notes"
                      name="notes"
                      rows={4}
                      value={form.notes}
                      onChange={(e) => updateField("notes", e.target.value)}
                      className="form-input"
                      placeholder="Share your inspiration, history, or anything else that helps us prepare."
                    />
                  </Field>
                </div>

                <fieldset className="sm:col-span-2">
                  <legend
                    className="text-[11px] font-medium uppercase tracking-[0.16em]"
                    style={{ color: "var(--color-muted)" }}
                  >
                    Preferred Contact Method
                  </legend>
                  <div className="mt-3 flex flex-wrap gap-6 text-[14.5px]">
                    {(["email", "phone"] as const).map((method) => (
                      <label
                        key={method}
                        className="inline-flex cursor-pointer items-center gap-2 capitalize"
                        style={{ color: "var(--color-text)" }}
                      >
                        <input
                          type="radio"
                          name="contactMethod"
                          value={method}
                          checked={form.contactMethod === method}
                          onChange={() => updateField("contactMethod", method)}
                          style={{ accentColor: "var(--color-olive)" }}
                        />
                        {method}
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>

              <div className="mt-9 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p
                  className="text-[12px] leading-[1.7]"
                  style={{ color: "var(--color-muted)" }}
                >
                  {bookingUrlConfigured
                    ? "Submitting will open our booking system in a new tab."
                    : "Submitting will open your email application with your inquiry ready to send."}
                </p>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Preparing…" : "Send Inquiry"}
                  <ArrowRight
                    size={14}
                    aria-hidden="true"
                    className="btn-arrow"
                  />
                </button>
              </div>

              {status === "submitted" && emailHref && (
                <div
                  className="mt-7 flex items-start gap-3 border p-5"
                  style={{
                    borderColor: "var(--color-blush)",
                    backgroundColor: "var(--color-rose)",
                    color: "var(--color-text)",
                  }}
                >
                  <CheckCircle2
                    size={20}
                    aria-hidden="true"
                    style={{ color: "var(--color-blush)" }}
                    className="mt-0.5 shrink-0"
                  />
                  <div>
                    <p className="font-medium text-[14px]">
                      Your inquiry is ready to send.
                    </p>
                    <p
                      className="mt-1 text-[13px] leading-[1.6]"
                      style={{ color: "var(--color-muted)" }}
                    >
                      We&apos;ve prepared an email with your details. Once sent,
                      our team will follow up to confirm your appointment. This
                      is not a confirmed booking.
                    </p>
                    <a
                      href={emailHref}
                      className="mt-3 inline-flex text-[13px] font-medium underline underline-offset-4"
                      style={{ color: "var(--color-text)" }}
                    >
                      Open your email application
                    </a>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(.form-input) {
          width: 100%;
          background-color: var(--color-ivory);
          color: var(--color-text);
          border: 1px solid var(--color-border);
          border-radius: 6px;
          padding: 0.85rem 0.95rem;
          font-size: 14.5px;
          line-height: 1.4;
          font-family: var(--font-sans);
          transition: border-color 200ms var(--ease-editorial),
            background-color 200ms var(--ease-editorial);
        }
        :global(.form-input:focus) {
          outline: none;
          border-color: var(--color-text);
          background-color: #ffffff;
        }
        :global(.form-input[aria-invalid="true"]) {
          border-color: #b1564a;
        }
      `}</style>
    </section>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[11px] font-medium uppercase tracking-[0.16em]"
        style={{ color: "var(--color-muted)" }}
      >
        {label}
      </label>
      <div className="mt-2">{children}</div>
      {error && (
        <p
          className="mt-2 text-[12px]"
          style={{ color: "#b1564a" }}
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
