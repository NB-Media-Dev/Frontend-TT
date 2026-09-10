"use client";

import { useState } from "react";
import { Megaphone, CheckCircle2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/Button";
import { UsetimeoutLoader } from "@/hooks/Usetimeoutloader";
import { ContentSkeleton } from "@/components/ui/Skeletonloading";
import { Cardlayout } from "@/components/ui/Cardlayout";

export interface AnnouncementProps {
  title?: string;
  timeAgo?: string;
  badgeText?: string;
  platform?: string;
  className?: string;
  onRepostNow?: () => void;
  onPreview?: () => void;
}

export default function Announcement({
  title = "Election Awareness 2024",
  timeAgo = "6 hours ago",
  badgeText = "Official Campaign",
  platform = "FACEBOOK",
  className = "",
  onRepostNow,
  onPreview,
}: AnnouncementProps) {
    const [isLoading, setIsLoading] = useState( true);
  UsetimeoutLoader(setIsLoading);

  return (
       <Cardlayout
      title={title} 
      icon={null}   
      isLoading={isLoading}
      skeleton={<ContentSkeleton count={1} />}
      className={`rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] select-none flex flex-col gap-4 ${className}`}
    >

      <div>
        <div className="flex items-center gap-3">
          <div className={`${buttonVariants({ variant: "ghost" })} shrink-0 select-none`}>
            <Megaphone className="w-5 h-5" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="text-xs sm:text-sm font-semibold text-gray-400 select-none">
                {badgeText}
              </span>
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C04808] fill-[#C04808] text-white shrink-0 select-none" />
            </div>

            <p className="text-[11px] text-gray-400 font-medium truncate mt-0.5 select-none">
              {timeAgo}
            </p>
          </div>
        </div>

        <div className="mt-4 select-none">
          <span className="text-[10px] font-extrabold text-gray-400 tracking-wider uppercase block">
            PLATFORM: {platform}
          </span>
        </div>

        <div className="flex items-center gap-3 mt-4 select-none">
          <button
            type="button"
            onClick={onRepostNow}
            className={`flex-1 ${buttonVariants({ variant: "default" })} sm:text-sm py-2.5 px-4 rounded-full text-center shadow-xs cursor-pointer active:scale-[0.98] transition-all`}
          >
            Repost Now
          </button>
          
          <button
            type="button"
            onClick={onPreview}
            className={`flex-1 ${buttonVariants({ variant: "outline" })} text-xs sm:text-sm py-2.5 px-4 rounded-full cursor-pointer active:scale-[0.98] transition-all`}
          >
            Preview
          </button>
        </div>
      </div>
    </Cardlayout>

  );
}
