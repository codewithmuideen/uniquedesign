import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center text-center rounded-3xl bg-slate-100 p-5 mt-5 mb-5">
      <div className="flex items-center gap-[1ch]">
        <div className="w-5 h-5 bg-[#ff5e1a] rounded-full" />
        <Link
  href="https://wa.me/2348063362208"
  className="font-medium hidden sm:block"
  style={{ fontFamily: 'Montserrat', fontWeight: 700 }}
>
  OLUWATOBI OLANIPEKUN
</Link>

      </div>

      <p className="font-medium" style={{fontFamily:'Montserrat'}}>All rights reserved. © 2025</p>
    </footer>
  );
};

export default Footer;
