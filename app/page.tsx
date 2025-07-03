import Aromatherapy from "@/components/home/Aromatherapy";
import HeroSection from "@/components/home/HeroSection";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <div>
      <main className="py-7 px-5 sm:px-15">
        <HeroSection/>
        <Services/>
        <Aromatherapy/>
      </main>
    </div>
  )
}
