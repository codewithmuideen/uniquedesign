import Link from "next/link";
import * as React from "react";

interface SocialButtonProps {
  children: React.ReactNode;
  bgColor?: string | undefined;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  children,
  bgColor = "black",
}) => {
  let bgHoverColor;

  switch (bgColor) {
    case "dribbble":
      bgHoverColor = "hover:bg-dribbble";
      break;
    case "twitter":
      bgHoverColor = "hover:bg-twitter";
      break;
    case "instagram":
      bgHoverColor = "hover:bg-instagram";
      break;
    case "linkedin":
      bgHoverColor = "hover:bg-linkedin";
      break;
    default:
      bgHoverColor = "hover:bg-black";
      break;
  }
  return (
    <Link
      href="#"
      className={`group h-12 w-12 bg-white ${bgHoverColor} rounded-full transition-colors duration-200 ease-in-out flex justify-center items-center`}
    >
      {children}
    </Link>
  );
};

export default SocialButton;
