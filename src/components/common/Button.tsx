import React from "react";
interface ButtonProps {
  text?: string;
  Icon?: React.ReactNode;
}

const Button = ({ text, Icon }: ButtonProps) => {
  return (
    <button className="border border-[#d9d9d9] px-[14px] py-[6px] rounded-[4px] flex items-center gap-[7px] hover:bg-[#d9d9d9]">
      {text && <span className="text-[16px] font-normal capitalize text-[#4d4d4d]">{text}</span>}
      {Icon && Icon}
    </button>
  );
};

export default Button;
