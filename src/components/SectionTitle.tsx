import React from "react";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="border border-neutral-700 bg-opacity-20 rounded-3xl p-1 pl-6 pr-6">
        <p className=" text-sm  text-neutral-400">{title}</p>
      </div>
    </div>
  );
};

export default SectionTitle;
