import { Facebook, Instagram } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="pt-16 pb-32 lg:pb-16 flex flex-col md:flex-row items-stretch text-center md:text-left justify-between gap-8 relative z-10 w-full overflow-hidden bg-white border-t-[6px] border-black px-6 md:px-12 mt-20">
      
      {/* Brand & Social Column */}
      <div className="flex flex-col items-center md:items-start gap-6 flex-1 border-b-[6px] md:border-b-0 md:border-r-[6px] border-black pb-8 md:pb-0 md:pr-8">
        <div className="bg-black p-4 inline-block">
          <Logo />
        </div>
        <p className="max-w-sm font-bold text-black text-lg">
          Un espacio para aprender, compartir y colaborar en el corazón del Valle del Mantaro.
        </p>
        <div className="flex gap-4 items-center">
          <a href="https://www.facebook.com/gdghuancayo/" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#3b5998] border-[4px] border-black hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000] transition-all text-white" aria-label="Facebook">
            <Facebook size={24} strokeWidth={3} />
          </a>
          <a href="https://www.instagram.com/gdghuancayo/" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#e1306c] border-[4px] border-black hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000] transition-all text-white" aria-label="Instagram">
            <Instagram size={24} strokeWidth={3} />
          </a>
        </div>
      </div>

      {/* Links Column */}
      <div className="flex flex-col items-center md:items-start gap-4 flex-1 border-b-[6px] md:border-b-0 md:border-r-[6px] border-black pb-8 md:pb-0 md:px-8">
         <span className="bg-[#ffbd2e] text-black font-black uppercase tracking-widest text-lg px-4 py-1 border-[3px] border-black shadow-[4px_4px_0px_0px_#000] mb-4">
           Comunidad
         </span>
         <a href="#" className="font-black text-black text-xl hover:bg-black hover:text-white px-2 py-1 transition-colors border-2 border-transparent hover:border-black">Código de Conducta</a>
         <a href="#" className="font-black text-black text-xl hover:bg-black hover:text-white px-2 py-1 transition-colors border-2 border-transparent hover:border-black">Términos y Condiciones</a>
      </div>
      
      {/* Disclaimer Column */}
      <div className="w-full md:w-auto md:max-w-sm flex-1 md:pl-8 flex flex-col justify-between">
        <div className="bg-[#ff5f56] border-[4px] border-black shadow-[6px_6px_0px_0px_#000] p-4 text-black font-bold text-sm leading-relaxed text-justify md:text-left mb-6">
          <span className="font-black uppercase block mb-1">Disclaimer:</span> 
          GDG Huancayo is an independent group; our activities and the opinions expressed here should in no way be linked to Google, the corporation. To learn more about the GDG program, visit{' '}
          <a href="https://developers.google.com/community/gdg" target="_blank" rel="noopener noreferrer" className="underline font-black hover:bg-black hover:text-white px-1">
            developers.google.com/community/gdg
          </a>.
        </div>
        <p className="font-black text-xl uppercase tracking-widest text-black bg-[#00bcd4] inline-block px-4 py-2 border-[4px] border-black shadow-[4px_4px_0px_0px_#000]">
           © {new Date().getFullYear()} Tech Week.
        </p>
      </div>
    </footer>
  );
}
