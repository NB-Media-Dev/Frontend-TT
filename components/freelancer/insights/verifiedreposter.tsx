"use client";

import { Star, CheckCircle2 } from "lucide-react";
import verified from "@/public/Images/verifiyedprofile.jpg";
import { useState } from "react";
import { UsetimeoutLoader } from "@/hooks/Usetimeoutloader";
import { ContentSkeleton } from "@/components/ui/Skeletonloading";
import Image, { StaticImageData } from "next/image";
import { Cardlayout } from "@/components/ui/Cardlayout";

export interface VerifiedReposterProps {
  name?: string;
  role?: string;
  level?: string;
  rating?: number;
  reviewsCount?: number;
  avatarUrl?: string | StaticImageData;
  className?: string;
}

export default function VerifiedReposter({
  name = "Arun Kumar",
  role = "Verified Reposter",
  level = "Lv 6",
  rating = 4.8,
  reviewsCount = 235,
  avatarUrl = verified,
  className = "",
}: VerifiedReposterProps) {

    const [isLoading, setIsLoading] = useState(true);
    UsetimeoutLoader(setIsLoading);
  return (
   <Cardlayout
      title=""  
      icon={null}   
      isLoading={isLoading}
      skeleton={<ContentSkeleton count={1} width="w-[200px]" />}
      className={`rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col items-center text-center relative p-5 sm:p-6 select-none ${className}`}
    >
      <div className="flex flex-col items-center justify-center w-full">
        <div className="relative mb-3 select-none">
        
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-md relative bg-gray-100 shrink-0">
               <Image
          src={avatarUrl}
          alt={name}
          width={80}
          height={80}
          className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-md"
         loading="lazy"/>
          </div>

          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-[#C04808] text-white text-[10px] font-bold px-2 py-0.5 rounded-full border border-white shadow-xs whitespace-nowrap">
            {level}
          </span>
        </div>

        <div className="flex items-center gap-1.5 justify-center mt-1 w-full max-w-full">
          <h3 className="font-bold text-gray-900 text-base sm:text-lg tracking-tight truncate select-text">
            {name}
          </h3>
          <CheckCircle2 className="w-4 h-4 text-[#C04808] fill-[#C04808] text-white shrink-0 select-none" />
        </div>

        <p className="text-xs text-gray-500 font-medium mt-0.5 select-text truncate w-full max-w-full">
          {role}
        </p>

        <div className="flex items-center justify-center gap-1 mt-3 select-none">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((starVal) => (
              <Star
                key={`star-${starVal}`}
                className="w-3.5 h-3.5 fill-[#C04808] text-[#C04808] shrink-0"
              />
            ))}
          </div>

          <span className="font-black text-xs text-gray-900 ml-1 select-text">
            {rating.toFixed(1)}
          </span>
          <span className="text-xs text-gray-400 font-medium select-text ml-0.5">
            ({reviewsCount})
          </span>
        </div>
      </div>
    </Cardlayout>
  );
}
