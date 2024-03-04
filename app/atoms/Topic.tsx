import React, { ReactNode } from "react";

interface TopicProps {
  text1?: string,
  text2?: string,
  classTxt1?: string,
  classTxt2?: string
}

export const Topic: React.FC<TopicProps> = ({text1, text2, classTxt1, classTxt2}) => {

  return (
    <div className="flex w-full">
      <label className={`font-bold ${classTxt1}`}>{text1}</label>
      <label className={`pl-1 ${classTxt2}`}>{text2}</label>
    </div>
  );
};