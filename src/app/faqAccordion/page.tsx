"use client";
import React from "react";
import { useState } from "react";

export default function Page() {
  const titles = [
    "What is Frontend Mentor, and how will it help me?",
    "Is Frontend Mentor free?",
    "Can I use Frontend Mentor projects in my portfolio?",
    "How can I get help if I'm stuck on a Frontend Mentor challenge?",
  ];
  const descriptions = [
    "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  ];

  const [hidden, setHidden] = useState([false, false, false, false]);

  const toggleHidden = (index) => {
    const updateHidden = [...hidden];
    updateHidden[index] = !updateHidden[index];
    setHidden(updateHidden);
  };
  const components = titles.map((title, index) => {
    return (
      <div key={index} onClick={() => toggleHidden(index)}>
        <div className="flex flex-row items-center gap-18 pl-[12px]">
          <p className="font-bold w-[90%] text-[14px] hover:text-purple-400">{title}</p>
          <div className="w-[10%]">
            {hidden[index] ? (
              <img
                src={"images/faqAccordion/icon-minus.svg"}
                className="mx-auto"
               
              />
            ) : (
              <img
                src={"images/faqAccordion/icon-plus.svg"}
                className="mx-auto"
            
              />
            )}
          </div>
        </div>
        {hidden[index] ? 
        (<div className="text-gray-400 mt-[20px] pl-[12px] pb-[12px]">{descriptions[index]}</div>):
        (<div className="text-gray-400 mt-[20px] hidden">{descriptions[index]}</div>)}
        <hr className=" w-[90%] mx-auto my-[8px] text-gray-300"/>
      </div>
    );
  });

  return (
    <>
      <div className="bg-[#F9F0FF] w-[100vw] h-[100vh] relative ">
        <img
          src={"images/faqAccordion/background-pattern-mobile.svg"}
          width={"100%"}
          className="absolute z-0 md:hidden"
        />
        <img
          src={"images/faqAccordion/background-pattern-desktop.svg"}
          width={'100%'}
          className="absolute z-0 hidden md:block"
        />
        <div />
        <div className=" w-[100vw] z-10 absolute mt-[120px] ">
          <div className="bg-[#ffffff] mx-auto w-[85%] md:w-[60%] rounded-lg p-[12px] md:p-[24px] shadow-2xl">
            <div className="flex flex-row items-center my-[20px] ml-[20px]">
              <img
                src={"images/faqAccordion/icon-star.svg"}
                className="w-[30px]"
              ></img>
              <p className="text-[30px] md:text-[48px] ml-[20px] font-bold">FAQs</p>
            </div>
            {components}
          </div>
        </div>
      </div>
    </>
  );
}
