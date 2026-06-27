import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import MengapaMemilih from "@/components/MengapaMemilih";
import ProgramSekolah from "@/components/ProgramSekolah";
import Fasilitas from "@/components/Fasilitas";
import Alumni from "@/components/Alumni";
import Jurusan from "@/components/Jurusan";
import KarirProduk from "@/components/KarirProduk";
import MitraPrestasi from "@/components/MitraPrestasi";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-telkom-red selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AboutUs />
        <MengapaMemilih />
        <ProgramSekolah />
        <Fasilitas />
        <Alumni />
        <Jurusan />
        <KarirProduk />
        <MitraPrestasi />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
