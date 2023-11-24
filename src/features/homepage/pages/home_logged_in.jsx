import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar/navbar";
import { CTA } from "../components/cta_section";

export function HomeLoggedIn({ pets }) {
  return (
    <div className="bg-white">
      <Navbar pets={pets} />
      <CTA />
      <Footer />
    </div>
  );
}
