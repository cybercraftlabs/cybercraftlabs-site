import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Cybercraft Labs Pvt Ltd",
  description: "Get in touch with CyberCraft! Contact us for inquiries, support, or to learn more about our customized software development and cybersecurity services. We're here to help you transform your bold ideas into reality.",
  // other metadata
};

const ContactPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Contact />
    </div>
  );
};

export default ContactPage;
