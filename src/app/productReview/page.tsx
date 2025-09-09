import React from "react";
import Image from "next/image";
import { Montserrat, Fraunces } from "next/font/google";
export default function Page() {
  return (
    <>
      <main className="bg-[#F2EBE3] w-[100vw] h-[100vh]">
        <div className=" flex flex-col md:flex-row">
          <div className="flex flex-col md:flex-row w-[90%] md:w-[35%]  h-auto mx-auto justify-center items-center bg-white rounded-2xl mt-[96px]">
            <div className="w-[100%] ">
              <img
                src={"/images/product-preview/image-product-desktop.jpg"}
                alt="cologne-image"
                className="rounded-tl-2xl rounded-bl-2xl  hidden md:block"
              />
               <img
                src={"/images/product-preview/image-product-mobile.jpg"}
                alt="cologne-image"
                className="rounded-tl-2xl rounded-tr-2xl md:rounded-bl-2xl md:rounded-tl-2xl md:hidden"
              />
            </div>

            <div className="w-[100%]">
              <div className="w-[85%] mx-auto">
                <div className="tracking-[5px] uppercase my-[20px] text-[14px] font-medium text-gray-400">Perfume</div>
                <div className="font-[Montserrat] font-bold text-[36px]/9">Gabrielle Essence Eau De Parfum</div>
                <div className=" my-[20px] text-[14px] text-gray-400 font-medium">
                  A floral, solar and voluptuous interpretation composed by
                  Olivier Polge, Perfumer-Creator for the House of CHANEL.
                </div>
                <div className="flex flex-row items-center"><span className="text-[#3C8067] font-[Fraunces] font-bold text-[38px] pr-[12px]">$149.99</span><span className="line-through text-gray-400">$169.99</span></div>
                <div className="w-full mx-auto text-center bg-[#3C8067] text-white font-bold flex flex-row justify-center items-center py-[12px] rounded-lg mb-[24px]"><img src={'/images/product-preview/icon-cart.svg'} className="size-[18px] mr-[8px]"></img>Add to Cart</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
