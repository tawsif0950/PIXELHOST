import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen font-sans selection:bg-[#FFE873]">
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-32 text-center">
        <h1 className="text-6xl lg:text-9xl font-black uppercase mb-8 font-display">
          404
        </h1>
        <p className="text-2xl font-bold uppercase mb-12">
          Oops! The page you are looking for has vanished into thin air.
        </p>
        <Link 
          href="/"
          className="inline-block px-10 py-5 border-4 border-black rounded-2xl bg-[#FF90E8] shadow-[8px_8px_0px_0px_#000] transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[10px_10px_0px_0px_#000] font-black uppercase tracking-wide text-xl"
        >
          Return Home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
