import React from "react";
import Image from "next/image";
export default function Page() {
  return (
    <>
      <main className="bg-[#F2EBE3] w-[100vw] h-[100vh]">
        <div className=" flex flex-col md:flex-row">
          <div className="flex flex-col md:flex-row w-[90%] md:w-[40%] h-auto mx-auto justify-center items-center bg-white rounded-2xl mt-[96px]">
            <div className="w-[100%]">
              <img
                src={"/images/product-preview/image-product-desktop.jpg"}
                alt="cologne-image"
                className="rounded-tl-2xl rounded-tr-2xl md:rounded-bl-2xl md:rounded-tl-2xl"
              />
            </div>

            <div className="w-[100%]">
              <div className="w-[85%] mx-auto">
                <div>Perfume</div>
                <div>Gabrielle Essence Eau De Parfum</div>
                <div>
                  A floral, solar and voluptuous interpretation composed by
                  Olivier Polge, Perfumer-Creator for the House of CHANEL.
                </div>
                <div>$149.99 $169.99</div>
                <div>Add to Cart</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
