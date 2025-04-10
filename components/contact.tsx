import Link from "next/link";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center text-center bg-[url('/assets/gradient-bg.jpg')] bg-cover after:p-8 h-[30rem] rounded-3xl bg-slate-100"
    >
      <h2 className="text-[3.5rem]  mb-8" style={{fontFamily:'Montserrat'}}>Have a project in mind?</h2>
      <Link
  style={{ fontFamily: 'Montserrat' }}
  href="mailto:tobi@mactechnigeria.com.ng"
  className="contact-link text-[2.5rem] sm:text-[1.75rem] text-white bg-[#ff5e1a] py-[1.5rem] sm:py-[1rem] px-[2rem] sm:px-[1.5rem] font-semibold rounded-full w-full sm:w-auto max-w-[90%] mx-auto"
>
  tobi@mactechnigeria.com
</Link>

    </section>
  );
};

export default Contact;
