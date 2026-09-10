"use client";

import React, { useState } from "react";
import { RotateCw, ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/Button";
import { UsetimeoutLoader } from "@/hooks/Usetimeoutloader";
import { ContentSkeleton } from "@/components/ui/Skeletonloading";
import { Cardlayout } from "@/components/ui/Cardlayout";

interface HashtagItem {
  id: number;
  tag: string;
  interactions: string;
  growth: string;
}

interface TrendinghashtagProps {
  compact?: boolean;
  isLoading?: boolean;
}

const getRandomGrowthPercentage = (): string => {
  const randomArray = new Uint32Array(1);
  crypto.getRandomValues(randomArray);
  const randomVal = (randomArray[0] / 4294967296) * 100;
  return `+${Math.floor(randomVal) + 30}%`;
};

const updateHashtagsGrowth = (prevList: HashtagItem[]): HashtagItem[] =>
  prevList.map((item) => ({
    ...item,
    growth: getRandomGrowthPercentage(),
  }));

export default function Trendinghashtag({
  compact = false,
  isLoading: propIsLoading,
}: TrendinghashtagProps) {
  const [isLoading, setIsLoading] = useState(propIsLoading ?? true);
  UsetimeoutLoader(setIsLoading);
  const [isRotating, setIsRotating] = useState(false);
  const [hashtags, setHashtags] = useState<HashtagItem[]>([
    {
      id: 1,
      tag: "#தமிழ்நாடு",
      interactions: "124K interactions",
      growth: "+128%",
    },
    {
      id: 2,
      tag: "#ChennaiRains",
      interactions: "98K interactions",
      growth: "+98%",
    },
    {
      id: 3,
      tag: "#TamilCinema",
      interactions: "456K interactions",
      growth: "+74%",
    },
    {
      id: 4,
      tag: "#StartupTN",
      interactions: "82K interactions",
      growth: "+61%",
    },
  ]);

  const handleRefresh = () => {
    setIsRotating(true);
    setTimeout(() => {
      setIsRotating(false);
      setHashtags(updateHashtagsGrowth);
    }, 800);
  };

  return (
    <Cardlayout
      title="Trending Hashtags"
      isLoading={isLoading}
      compact={compact}
      skeleton={<ContentSkeleton count={4} height="h-[50px]" />}
      icon={
        compact ? (
          <span className="text-[#FF5A26] font-bold text-[11px] xs:text-[13px] sm:text-lg shrink-0">
            #
          </span>
        ) : null
      }
      className={`p-5 sm:p-7 gap-5 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(255,107,53,0.05)] ${
        compact ? "p-3 sm:p-5 gap-3" : "p-6 sm:p-7 gap-6"
      }`}
      action={
        !compact ? (
          <button
            onClick={handleRefresh}
            className="p-1.5 rounded-full text-gray-400 hover:text-[#FF5A26] hover:bg-[#FFF6ED] active:scale-90 transition-all duration-200 cursor-pointer select-none"
            title="Refresh Trends"
          >
            <RotateCw
              className={`w-4 h-4 sm:w-5 sm:h-5 ${isRotating ? "animate-spin text-[#FF5A26]" : ""}`}
            />
          </button>
        ) : null
      }
    >
      <div>
        <div className={`flex flex-col ${compact ? "gap-2.5" : "gap-5"}`}>
          {hashtags.map((item) => (
            <div
              key={item.id}
              className={`flex items-center justify-between group hover:bg-[#FFF9F5]/40 rounded-xl transition-all duration-200 ${
                compact ? "-mx-1 px-1 py-1" : "-mx-3 px-3 py-1.5"
              }`}
            >
              <div className="flex flex-col min-w-0">
                <span
                  className={`font-bold text-gray-800 transition-colors duration-200 group-hover:text-[#FF5A26] truncate ${compact ? "text-[11px] xs:text-xs sm:text-base" : "text-sm sm:text-base"}`}
                >
                  {item.tag}
                </span>
                {!compact && (
                  <span className="text-xs text-gray-400 font-semibold mt-0.5 select-none">
                    {item.interactions}
                  </span>
                )}
              </div>

              <div
                className={`flex items-center gap-0.5 text-[#FF5A26] font-bold select-none shrink-0 ${compact ? "text-[10px] xs:text-xs sm:text-base" : "text-sm sm:text-base"}`}
              >
                <ArrowUpRight
                  className={`${compact ? "w-3 h-3" : "w-4 h-4"} transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5`}
                />
                <span>{item.growth}</span>
              </div>
            </div>
          ))}
        </div>

        {!compact && (
          <div className="w-full pt-6 select-none">
            <button
              className={`w-full ${buttonVariants({ variant: "hoverButton" })} font-bold text-sm sm:text-base py-3 px-6`}
            >
              Explore More Topics
            </button>
          </div>
        )}
      </div>
    </Cardlayout>
  );
}
