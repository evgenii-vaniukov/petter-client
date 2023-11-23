"use client";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar/navbar";
import { useState } from "react";
import { CTA } from "../components/cta_section";

export function HomeLoggedOut({ pets }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logInModalOpen, setLogInModalOpen] = useState(false);

  return (
    <div className="bg-white">
      <Navbar pets={pets} />
      <CTA />
      <Footer />
    </div>
  );
}
