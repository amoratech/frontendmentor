"use client";
import React from "react";
import { useState } from "react";
import { IconMinus, IconPlus, IconStackFront } from "@tabler/icons-react";
export default function Page() {
  const titles = [
    "Product preview card component",
    "FAQ Accordion",
    "Contact form",
  ];
  const descriptions = [
    "A product component with responsive design, works on both desktop and mobile",
    "In this challenge, I'll build an FAQ accordion. It's common front-end pattern, so it's an excellent opportunity to get some practice in",
    "Building accessible forms is a crucial task for front-end developers. This challenge will help you practice building a form with several input types and validation.",
  ];

  const links = [
    "/productReview",
    "/faqAccordion",
    "/contactForm"
  ];

  const [hidden, setHidden] = useState<boolean[]>([false, false, false, false]);

  const toggleHidden = (index:number) => {
    const updateHidden = [...hidden];
    updateHidden[index] = !updateHidden[index];
    setHidden(updateHidden);
  };
  const components = titles.map((title:string, index:number) => {
    return (
      <div key={index} onClick={() => toggleHidden(index)}>
        <div className="flex flex-row items-center gap-18 pl-[12px]">
          <p className="font-bold w-[90%] text-[14px] hover:text-[#1f73b8] select-none ">
            {title}
          </p>
          <div className="w-[10%]">
            {hidden[index] ? (
              <IconMinus className="p-10px bg-amber-200 rounded-4xl"/>
            ) : (
              <IconPlus className="p-10px bg-amber-200 rounded-4xl"/>
            )}
          </div>
        </div>
        {hidden[index] ? (
          <>
          <div className="text-black mt-[20px] pl-[12px] pb-[12px] w-[80%]">
            {descriptions[index]}
          </div>
          {/* ADD LINK HERE */}
          <div className=" mx-auto flex flex-col justify-center items-center">
            <button onClick={()=>{    window.location.href = links[index];}} className="bg-[#108b5cbb] w-[20%] py-[6px] rounded-4xl" >View Demo </button>
          </div>
          </>
        ) : (
          <>
          <div className="text-gray-400 mt-[20px] hidden w-[80%]">
            {descriptions[index]}
          </div></>
        )}
        <hr className=" w-[90%] mx-auto my-[8px] text-gray-300" />
      </div>
    );
  });

  return (
    <>
      <div className="bg-[#b1c3ca] w-[100vw] h-[100vh] relative ">
       {/*  <img
          src={"images/faqAccordion/background-pattern-mobile.svg"}
          width={"100%"}
          className="absolute z-0 md:hidden"
        />
        <img
          src={"homeBanner2.jpg"}
          width={"100%"}
          className="absolute z-0 hidden md:block"
        />*/}
       
        <div className=" w-[100vw] z-10 absolute mt-[220px] ">
          <div className="bg-[#64646435] mx-auto w-[85%] md:w-[60%] rounded-lg p-[12px] md:p-[24px] shadow-2xl">
            <div className="flex flex-row items-center my-[20px] ml-[20px]">
              <IconStackFront className="w-[44px] h-[44px]"/>
              <p className="text-[30px] md:text-[40px] ml-[20px] font-bold">
                Front End Mentor Challenges
              </p>
            </div>
            {components}
          </div>
        </div>
      </div>
    </>
  );
}
