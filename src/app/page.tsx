import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Jurusan from "@/components/Jurusan";
import MengapaMemilih from "@/components/MengapaMemilih";
import ProgramSekolah from "@/components/ProgramSekolah";
import WallOfFame from "@/components/WallOfFame";
import Alumni from "@/components/Alumni";
import VirtualTour from "@/components/VirtualTour";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden selection:bg-telkom-red selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Jurusan />
        <MengapaMemilih />
        <ProgramSekolah />
        <WallOfFame />
        <Alumni />
        <VirtualTour />
      </main>
      <Footer />
    </div>
  );
}
