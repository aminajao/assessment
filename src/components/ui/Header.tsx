import React from 'react';

interface HeaderProps {
  title: string;
  text: string;
}

const Header: React.FC<HeaderProps> = ({ title, text }) => {
  return (
    <>
      <h1 className="text-5xl font-medium tracking-normal text-[#001242]">
        {title}
      </h1>
      <p className="text-base pl-1 tracking-normal font-normal text-[#001242]">
        {text}
      </p>
    </>
  );
};

export default Header;
