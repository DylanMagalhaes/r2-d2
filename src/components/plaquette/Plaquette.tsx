import { ArtLatteSection } from "./ArtLatteSection";
import { Concept } from "./Concept";
import { Cover } from "./Cover";
import { FooterCta } from "./FooterCta";
import { KukuMachineSection } from "./KukuMachineSection";
import { MachineBrandingSection } from "./MachineBrandingSection";
import { Navbar } from "./Navbar";
import { Offres } from "./Offres";
import { PartnershipSection } from "./PartnershipSection";
// import { PhotoCarousel } from './PhotoCarousel'

export function Plaquette() {
  return (
    <>
      <Navbar />
      <Cover />
      <Concept />
      <Offres />
      {/* <PhotoCarousel /> */}
      <ArtLatteSection />
      <KukuMachineSection />
      <MachineBrandingSection />
      <PartnershipSection />
      <FooterCta />
    </>
  );
}
