"use client";

import { Cardlayout } from "@/components/ui/Cardlayout";
import { ContentSkeleton } from "@/components/ui/Skeletonloading";
import { UsetimeoutLoader } from "@/hooks/Usetimeoutloader";
import { Lightbulb } from "lucide-react";
import { useState } from "react";

interface InspirationItem {
  id: number;
  text: string;
  bgClass: string;
  hoverBgClass: string;
}

export default function ContentInspiration() {
  const [isLoading, setIsLoading] = useState(true);

  UsetimeoutLoader(setIsLoading);

  const inspirations: InspirationItem[] = [
    {
      id: 1,
      text: "5 Tamil hooks that doubled watch time this week",
      bgClass: "bg-[#FFE8D6]",
      hoverBgClass: "hover:bg-[#FCD8B8]",
    },
    {
      id: 2,
      text: "Turn today's news into a 30s reel script",
      bgClass: "bg-[#FFF3E8]",
      hoverBgClass: "hover:bg-[#FEE5D0]",
    },
    {
      id: 3,
      text: "Carousel idea: Pongal recipes from 5 districts",
      bgClass: "bg-[#FFF9F2]",
      hoverBgClass: "hover:bg-[#FDF0E2]",
    },
  ];

  return (
    <Cardlayout
      title="Content Inspiration"
      isLoading={isLoading}
      skeleton={<ContentSkeleton height="h-[40px]" width="w-full" />}
      icon={
        <div className="p-1.5 rounded-lg bg-[#FFF7ED] text-[#EA580C]">
          <Lightbulb className="w-5 h-5" />
        </div>
      }
    >
      <div className="flex flex-col gap-3">
        {inspirations.map((item) => (
          <div
            key={item.id}
            className={`px-5 py-4 ${item.bgClass} ${item.hoverBgClass} text-gray-800 text-sm rounded-[24px] cursor-pointer transition-all duration-300 hover:shadow-sm hover:-translate-y-0.5`}
          >
            {item.text}
          </div>
        ))}
      </div>
    </Cardlayout>
  );
}
