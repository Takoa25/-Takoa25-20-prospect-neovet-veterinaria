import Contato from '@/components/Contato';
import Especialidades from '@/components/Especialidades';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LenisProvider from '@/components/LenisProvider';
import Servicos from '@/components/Servicos';
import Sobre from '@/components/Sobre';

export default function Home() {
  return (
    <LenisProvider>
      <Header />
      <main>
        <Hero />
        <Especialidades />
        <Servicos />
        <Sobre />
        <Contato />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </LenisProvider>
  );
}
