"use client";

import { buttonVariants } from "@/components/ui/Button";
import { Avatarloading } from "@/components/ui/Skeletonloading";
import { UsetimeoutLoader } from "@/hooks/Usetimeoutloader";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import avatar1 from "@/public/Images/avatar1.png";
import { Cardlayout } from "@/components/ui/Cardlayout";
export interface TrendingItem {
  id: string;
  title: string;
  isHot?: boolean;
  reward: string;
  imageUrl: string | StaticImageData;
}

export interface TrendingRepostProps {
  title?: string;
  items?: TrendingItem[];
  className?: string;
  onViewAll?: () => void;
}

const defaultTrending: TrendingItem[] = [
  {
    id: "tr-1",
    title: "Chennai Flood Updates",
    isHot: true,
    reward: "₹500 / 1K Impressions",
    imageUrl:
      avatar1,
  },
  {
    id: "tr-2",
    title: "Thalavar 171 Update",
    isHot: false,
    reward: "₹250 / 1K Impressions",
    imageUrl:
      avatar1,
  },
];

export default function TrendingRepost({
  title = "Trending Repost",
  items = defaultTrending,
  className = "",
  onViewAll,
}: TrendingRepostProps) {

    const [isLoading, setIsLoading] = useState( true);
  UsetimeoutLoader(setIsLoading);
  return (
    <Cardlayout
      title={title} 
      icon={null}   
      isLoading={isLoading}
      skeleton={<Avatarloading />}

      className={`rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] select-none flex flex-col gap-4 ${className}`}

      action={
        <button
          type="button"
          onClick={onViewAll}
          className={`${buttonVariants({ variant: 'link' })} text-xs font-bold`}
        >
          View All
        </button>
      }
    >

      <div className="flex flex-col gap-3.5">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 p-1 rounded-2xl hover:bg-gray-50/80 transition-colors select-none"
          >

            <div className="w-10 h-10 rounded-full relative overflow-hidden shrink-0 border border-gray-100 shadow-xs bg-gray-100">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover w-full h-full"
                sizes="40px"
              />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="font-bold text-xs sm:text-sm text-gray-900 truncate flex items-center gap-1 select-text">
                <span>{item.title}</span>
                {item.isHot && <span className="text-xs select-none">🔥</span>}
              </h4>
              <p className="text-[11px] text-gray-400 font-medium truncate mt-0.5 select-text">
                {item.reward}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Cardlayout>
  );
}
