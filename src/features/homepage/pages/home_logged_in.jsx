import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar/navbar";
import { usePetDetailsContext } from "@/features/pet_details/context/pet_details_context";
import { PetDetails } from "@/features/pet_details/index";
import { CTA } from "../components/cta_section";
import { WelcomeHeader } from "../components/welcome_header";
export function HomeLoggedIn({ pets }) {
  const { petDetailsAreOpened, setPetDetailsAreOpened, selectedPet } =
    usePetDetailsContext();

  return (
    <div className="h-full bg-white">
      <PetDetails
        open={petDetailsAreOpened}
        setOpen={setPetDetailsAreOpened}
        pet={selectedPet}
      />
      <Navbar pets={pets} />
      <WelcomeHeader />
      <CTA />
      <Footer />
    </div>
  );
}
