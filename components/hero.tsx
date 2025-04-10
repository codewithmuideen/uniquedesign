import Link from "next/link";
import SocialButton from "./ui/social-button";

import Dribbble from "@/public/assets/icons/dribbble.svg";
import Instagram from "@/public/assets/icons/instagram.svg";
import Linkedin from "@/public/assets/icons/linkedin.svg";
import Twitter from "@/public/assets/icons/twitter.svg";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-4">
      <div className="flex flex-col justify-between bg-[url('/assets/gradient-bg.jpg')] bg-cover bg-zinc-200 h-auto rounded-3xl p-6 sm:p-8 md:p-12 overflow-hidden">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug break-words">
          Hello, I&apos;m a Product Designer with 4 years of experience.
        </h1>
        <p className="mt-4 text-sm sm:text-base font-medium text-gray-800 break-words">
          I am deeply passionate about the transformative power of design when
          used to create positive change. I find immense joy in crafting
          user-centric, delightful and inherently human experiences that not
          only address users needs but also enrich their lives. My work is
          rooted in a commitment to inclusivity, accessibility, and
          sustainability ensuring that every solution is meaningful impactful,
          and designed for all.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-6">
          <Link
            href="https://wa.me/2348063362208"
            className="px-6 py-3 font-medium text-white bg-[#ff5e1a] rounded-full w-full sm:w-auto text-center"
          >
            Contact me
          </Link>
          <div className="flex items-center gap-3 sm:gap-4">
            <SocialButton bgColor="dribbble">
              <Dribbble className="w-5 h-5" />
            </SocialButton>
            <SocialButton bgColor="instagram">
              <Instagram className="w-5 h-5" />
            </SocialButton>
            <SocialButton bgColor="linkedin">
              <Linkedin className="w-5 h-5" />
            </SocialButton>
            <SocialButton bgColor="twitter">
              <Twitter className="w-5 h-5" />
            </SocialButton>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8 h-[24rem] sm:h-[30rem] rounded-3xl bg-[url('/assets/tobiloba.png')] bg-cover bg-center"></div>
    </section>
  );
};

export default Hero;
