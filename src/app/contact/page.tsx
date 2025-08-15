"use client";
import contactImg from "/public/contact.jpg";
import Hero from "@/components/hero";
import { useState } from "react";
import { email, phoneNumber } from "@/helper/constants";
import Profiles from "@/components/profiles";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    body: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    try {
      await fetch("api/send", {
        method: "POST",
        body: JSON.stringify({
          name: formData.name,
          subject: formData.subject,
          body: formData.body,
        }),
      });
      setSuccess(true);
      setFormData({ name: "", subject: "", body: "" });
    } catch (error) {
      console.log(error);
      setError("Failed to send email");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Hero heroImg={contactImg} />
      <div className="pt-30 lg:pt-40  flex justify-center items-center">
        <h1 className="text-white text-4xl lg:text-7xl">Contact</h1>
      </div>
      <div className="p-4 mt-10 flex flex-col justify-center w-full items-center">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center gap-5 w-[90vw] max-w-140">
            <div className="flex gap-4 w-full">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="p-2 w-full bg-white rounded-lg border-1 shadow"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              className="p-2 bg-white rounded-lg border-1 shadow w-[100%]"
              required
            />
            <textarea
              placeholder="Message"
              value={formData.body}
              onChange={(e) =>
                setFormData({ ...formData, body: e.target.value })
              }
              className="p-2 bg-white rounded-lg border-1 shadow w-[100%] h-40"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-blue-500 text-white p-4 rounded-lg shadow-md w-1/4 transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isSubmitting
                  ? "opacity-70 cursor-not-allowed"
                  : "opacity-100 cursor-pointer"
              }`}
            >
              Send
            </button>
            <br />
            {success && (
              <div className="bg-green-500 text-white p-4 rounded-lg shadow-lg animate-in slide-in-from-top-5 duration-300">
                Message sent successfully!
              </div>
            )}
            {error && (
              <div className="bg-red-500 text-white p-4 rounded-lg shadow-lg animate-in slide-in-from-top-5 duration-300">
                {error}
              </div>
            )}
          </div>
        </form>
      </div>
      <div className="text-white text-xl lg:text-3xl flex flex-col justify-center items-center gap-5">
        <p className="p-2 rounded-lg bg-black/20 transition-transform duration-200 hover:scale-102">
          <a href="tel:+14076248456">{phoneNumber}</a>
        </p>
        <p className="p-2 rounded-lg bg-black/20 transition-transform duration-200 hover:scale-102">
          <a href={`mailto:${email}`}>{email}</a>
        </p>
        <Profiles />
      </div>
    </>
  );
}
