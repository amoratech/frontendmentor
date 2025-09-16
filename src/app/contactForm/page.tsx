import React from "react";

export default function Page() {
  return (
    <>
      <div className="bg-green-50 w-[100vw] h-[100vh] flex justify-center items-center">
        <div className="bg-white md:w-[45%] md:h-[50%] w-[90%] h-[90%] shadow-2xl rounded-2xl flex flex-row">
          <div className="w-[90%] flex flex-col mx-auto justify-baseline ">
            <div className=" mt-[12px]">
              <h1 className="font-bold text-[24px] w-[100%]">Contact Us</h1>
            </div>
            <form>
              <div className="pt-[12px]">
                <label className="font-medium text-[#4d4d4d7a] text-[12px]">
                  First Name *
                </label>
                <div className="pt-[8px]">
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    className="border rounded-md h-[32px] w-[80%] "
                  />
                </div>
              </div>

              <div className="pt-[12px]">
                <label className="font-medium text-[#4d4d4d7a] text-[12px]">
                  Last Name *
                </label>
                <div className="pt-[8px]">
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    className="border rounded-md h-[32px] w-[80%] "
                  />
                </div>
              </div>

              <div className="pt-[12px]">
                <label className="font-medium text-[#4d4d4d7a] text-[12px]">
                  Email Address *
                </label>
                <div className="pt-[8px]">
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    className="border rounded-md h-[32px] w-[80%] "
                  />
                </div>
              </div>

               <div className="pt-[12px]">
                <label className="font-medium text-[#4d4d4d7a] text-[12px]">
                  Query Type *
                </label>
                <div className="pt-[8px]">
                  <input
                    type="radio"
                    id="fname"
                    name="fname"
                    className="border rounded-md h-[32px] w-[80%] "
                  />
                </div>
              </div>


            </form>
          </div>
        </div>
      </div>
    </>
  );
}
