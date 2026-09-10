"use client";

import { Cardlayout } from "@/components/ui/Cardlayout";
import { Avatarloading } from "@/components/ui/Skeletonloading";
import { UsetimeoutLoader } from "@/hooks/Usetimeoutloader";
import { Calendar } from "lucide-react";
import { useState } from "react";

export default function UpcomingSchedule() {
  const [isLoading, setIsLoading] = useState(true);

  UsetimeoutLoader(setIsLoading);
  const events = [
    {
      id: 1,
      time: "09:30",
      title: "Morning news drop",
      platform: "TalkTamila - Instagram",
    },
    {
      id: 2,
      time: "13:00",
      title: "Metro explainer reel",
      platform: "YouTube - Threads",
    },
    {
      id: 3,
      time: "19:45",
      title: "Live Q&A",
      platform: "TalkTamila Live",
    },
  ];

  return (
    <Cardlayout
      title="Upcoming Schedule"
      isLoading={isLoading}
      skeleton={<Avatarloading />}
      className="@container p-4 @xs:p-5 select-none flex flex-col gap-4"
      icon={<Calendar className="w-5 h-5 text-[#FF5A26]" />}
    >
      <div className="flex flex-col gap-4.5 py-1">
        {events.map((event) => (
          <div key={event.id} className="flex gap-4 items-start">
            <span className="text-xs font-black text-[#FF5A26] min-w-[42px] whitespace-nowrap">
              {event.time}
            </span>

            <div className="flex-grow min-w-0">
              <h3 className="text-xs text-gray-900 truncate">{event.title}</h3>
              <p className="text-[10px] text-gray-500 font-semibold mt-0.5 truncate">
                {event.platform}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Cardlayout>
  );
}
