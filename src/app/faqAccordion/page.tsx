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

  const components = titles.map((title, index) => {
    return(
    <>
      <div className="flex flex-row items-center gap-18">
        <p className="font-bold w-[80%]">
          {title}
        </p>
        <div className="w-[20%]">
          <img src={"images/faqAccordion/icon-plus.svg"} className="mx-auto" onClick={}/>
        </div>
      </div>
      <div className="text-gray-400 mt-[20px]">
        {descriptions[index]}
      </div>
    </>
  )});
  return (
    <>
    
      <div className="bg-[#F9F0FF] w-[100vw] h-[100vh] relative">
        <img
          src={"images/faqAccordion/background-pattern-mobile.svg"}
          width={"100%"}
          className="absolute z-0"
        />
        <div />
        <div className=" w-[100vw] z-10 absolute mt-[120px] ">
          <div className="bg-[#ffffff] mx-auto w-[85%] rounded-lg p-[12px]">
            {components}
          </div>
        </div>
      </div>
    </>
  );
}
