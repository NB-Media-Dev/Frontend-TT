"use client";

import  { useState } from "react";
import { InstagramIcon, YoutubeIcon } from "@/public/Svgicons/svgicons";
import { buttonVariants } from "../ui/Button";
import { UsetimeoutLoader } from "@/hooks/Usetimeoutloader";
import { Avatarloading} from "@/components/ui/Skeletonloading";
import Image, { StaticImageData } from "next/image";
import avatar1 from "@/public/Images/avatar1.png";
import { Cardlayout } from "../ui/Cardlayout";

export interface UpcomingPostItem {
  id: string;
  thumbnail: string | StaticImageData;
  title: string;
  date: string;
  time: string;
  platform: "Instagram" | "YouTube";
  status: "Scheduled" | "Draft";
}

const upcomingPostsData: UpcomingPostItem[] = [
  {
    id: "1",
    thumbnail: avatar1,
    title: "Dubai Travel Vlog",
    date: "28 May 2025",
    time: "06:00 PM",
    platform: "Instagram",
    status: "Scheduled",
  },
  {
    id: "2",
    thumbnail: avatar1,
    title: "Packing Tips for Travel",
    date: "30 May 2025",
    time: "07:30 PM",
    platform: "YouTube",
    status: "Scheduled",
  },
  {
    id: "3",
    thumbnail: avatar1,
    title: "Top 10 Beaches in India",
    date: "01 Jun 2025",
    time: "06:00 PM",
    platform: "Instagram",
    status: "Scheduled",
  },
  {
    id: "4",
    thumbnail: avatar1,
    title: "Travel Photography Tips",
    date: "03 Jun 2025",
    time: "08:30 PM",
    platform: "Instagram",
    status: "Scheduled",
  },
];

interface UpcomingPostProps {
  isLoading?: boolean;
}

export default function UpcomingPost({ isLoading: propIsLoading }: UpcomingPostProps = {}) {
  const [isLoading, setIsLoading] = useState(propIsLoading ?? true);
  UsetimeoutLoader(setIsLoading);


  return (
     <Cardlayout
      title="Upcoming Posts" 
      icon={null}           
      isLoading={isLoading}
      skeleton={<Avatarloading />}

      className="rounded-[20px] sm:rounded-[28px] p-4 sm:p-5 md:p-6 border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.03)] select-none"

      action={
        <button className={`${buttonVariants({ variant: 'link' })} text-sm`}>
          View All
        </button>
      }
    >

      <div className="flex flex-col divide-y divide-gray-100">
        {upcomingPostsData.map((post) => (
          <div
            key={post.id}
            className="flex items-center justify-between py-3 first:pt-0 last:pb-0 group hover:bg-gray-50/50 rounded-xl transition-colors -mx-1 px-1 gap-2"
          >

            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
 
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden shrink-0 bg-gray-100 border border-gray-100">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  fill
                  className="w-full h-full object-cover"
                  sizes="(max-width: 640px) 40px, 44px"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="shrink-0 select-none">
                    {post.platform === "Instagram" ? <InstagramIcon /> : <YoutubeIcon />}
                  </span>

                  <h4 className="text-xs sm:text-sm text-gray-900 truncate group-hover:text-[#FF6B35] transition-colors font-medium">
                    {post.title}
                  </h4>
                </div>

                <p className="text-[10px] sm:text-[11px] font-medium text-gray-400 mt-0.5 truncate select-none">
                  {post.date} &nbsp;•&nbsp; {post.time}
                </p>
              </div>
            </div>

            <div className="shrink-0 select-none">
              <span className="inline-block px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs bg-[#E0F2FE] text-[#0284C7] font-semibold">
                {post.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Cardlayout>
  );
}
