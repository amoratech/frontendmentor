"use client";
import React from "react";
import { useParams, usePathname } from "next/navigation";

export default function Page() {
  const params = useParams();
  const pathname = usePathname(); 
    const cleanPath = pathname.replace(/^\/+/, ""); // → "products/123"
  

  console.log(cleanPath);
  return (
    <>
    </>
  );
}
