import { NavigationEditoriale } from "@/components/navigation-editoriale";
import { HeroEditoriale } from "@/components/hero-editoriale";
import { AboutEditoriale } from "@/components/about-editoriale";
import { ProgramEditoriale } from "@/components/program-editoriale";
import { TeamEditoriale } from "@/components/team-editoriale";
import { GalleryEditoriale } from "@/components/gallery-editoriale";
import { ContactEditoriale } from "@/components/contact-editoriale";
import { CtaBandEditoriale } from "@/components/cta-band-editoriale";
import { FooterEditoriale } from "@/components/footer-editoriale";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FBF3E6] overflow-x-hidden">
      <NavigationEditoriale />
      <HeroEditoriale />
      <AboutEditoriale />
      <ProgramEditoriale />
      <GalleryEditoriale />
      <TeamEditoriale />
      <ContactEditoriale />
      <CtaBandEditoriale />
      <FooterEditoriale />
    </div>
  );
}
