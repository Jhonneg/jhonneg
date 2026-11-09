"use client";

import dynamic from "next/dynamic";

const Blob = dynamic(() => import("./blob.client"), { ssr: false });

export default function BlobBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
      <div className="absolute inset-0 scale-125 opacity-50 blur-3xl">
        {/* <Blob /> */}
      </div>
    </div>
  );
}
