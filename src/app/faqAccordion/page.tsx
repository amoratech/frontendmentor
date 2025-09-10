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

  const components = titles.map(function)

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
            <div className="flex flex-row items-center my-[20px] ml-[20px]">
              <img
                src={"images/faqAccordion/icon-star.svg"}
                className="w-[30px]"
              ></img>
              <p className="text-[30px] ml-[20px] font-bold">FAQs</p>
            </div>
            <div className="flex flex-row items-center gap-18">
              <p className="font-bold w-[80%]">
                What is Frontend Mentor, and how will it help me?
              </p>
              <div className="w-[20%]">
                <img
                  src={"images/faqAccordion/icon-plus.svg"}
                  className="mx-auto"
                />
              </div>
            </div>
            <div className="text-gray-400">
              Frontend Mentor offers realistic coding challenges to help
              developers improve their frontend coding skills with projects in
              HTML, CSS, and JavaScript. It's suitable for all levels and ideal
              for portfolio building.
            </div>
            Is Frontend Mentor free? Yes, Frontend Mentor offers both free and
            premium coding challenges, with the free option providing access to
            a range of projects suitable for all skill levels. Can I use
            Frontend Mentor projects in my portfolio? Yes, you can use projects
            completed on Frontend Mentor in your portfolio. It's an excellent
            way to showcase your skills to potential employers! How can I get
            help if I'm stuck on a Frontend Mentor challenge? The best place to
            get help is inside Frontend Mentor's Discord community. There's a
            help channel where you can ask questions and seek support from other
            community members.
            <div>
              Challenge by{" "}
              <a
                href="https://www.frontendmentor.io?ref=challenge"
                target="_blank"
              >
                Frontend Mentor
              </a>
              . Coded by <a href="#">Your Name Here</a>.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
