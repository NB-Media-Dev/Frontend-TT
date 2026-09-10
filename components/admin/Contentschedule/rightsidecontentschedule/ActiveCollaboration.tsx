"use client";

import Image from "next/image";
import avatar4 from "@/public/Images/avatar4.png";
import avatar5 from "@/public/Images/avatar5.png";
import { useState } from "react";
import { UsetimeoutLoader } from "@/hooks/Usetimeoutloader";
import { Avatarloading } from "@/components/ui/Skeletonloading";
import { Cardlayout } from "@/components/ui/Cardlayout";

export default function ActiveCollaboration() {
  const collaborators = [
    {
      id: 1,
      name: "Mr. Vlogger",
      subtext: "345K • Tech Hub",
      avatar: avatar4,
    },
    {
      id: 2,
      name: "Indhu Vlogs",
      subtext: "162K • Lifestyle",
      avatar: avatar5,
    },
  ];
  const [isLoading, setIsLoading] = useState(true);
  UsetimeoutLoader(setIsLoading);
  return (
    <Cardlayout
      title="Active Collaborators"
      icon={null}
      isLoading={isLoading}
      skeleton={<Avatarloading count={2} />}
      className="p-4 sm:p-6 select-none hover:scale-[1.01] hover:shadow-[0_8px_32px_rgba(0,0,0,0.05)] transition-all duration-300"
    >
      <div className="flex flex-col gap-4 mt-1">
        {collaborators.map((collab) => (
          <div
            key={collab.id}
            className="flex items-center justify-between gap-3"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-[#FFEFE0] relative shrink-0">
                <Image
                  src={collab.avatar}
                  alt={collab.name}
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>

              <div className="flex flex-col min-w-0">
                <h3 className="text-xs text-gray-900 leading-none truncate">
                  {collab.name}
                </h3>
                <span className="text-[10px] font-bold mt-1.5 truncate">
                  {collab.subtext}
                </span>
              </div>
            </div>

            <button className="text-[10px] font-black text-[#F27D42] hover:text-[#d65f27] hover:underline cursor-pointer transition-all duration-200 uppercase tracking-wider shrink-0 whitespace-nowrap">
              Message
            </button>
          </div>
        ))}
      </div>
    </Cardlayout>
  );
}
