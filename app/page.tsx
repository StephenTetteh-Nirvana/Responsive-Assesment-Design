import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <main className="py-7 px-5 sm:px-15">
        <HeroSection/>
        <Services/>
      </main>
    </div>
  )
}
