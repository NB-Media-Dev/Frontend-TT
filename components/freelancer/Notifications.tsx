"use client";

import React, { useState } from "react";
import { buttonVariants } from "../ui/Button";
import { UsetimeoutLoader } from "@/hooks/Usetimeoutloader";
import { NotificationSkeleton } from "@/components/ui/Skeletonloading";
import { Cardlayout } from "../ui/Cardlayout";

export interface NotificationItem {
  id: string;
  title: string;
  time: string;
  unread?: boolean;
}

export interface NotificationsProps {
  title?: string;
  markReadText?: string;
  notifications?: NotificationItem[];
  isLoading?: boolean;
  onMarkRead?: () => void;
  onNotificationClick?: (notification: NotificationItem) => void;
  className?: string;
}

const defaultNotifications: NotificationItem[] = [
  {
    id: "1",
    title: "New reel approved: IPL 2024 Highlights",
    time: "2m ago",
    unread: true,
  },
  {
    id: "2",
    title: "You earned ₹156.80 from impressions",
    time: "15m ago",
    unread: false,
  },
];

export default function Notifications({
  title = "Notifications",
  markReadText = "Mark Read",
  notifications: initialNotifications,
  isLoading: propIsLoading,
  onMarkRead,
  onNotificationClick,
  className = "",
}: NotificationsProps) {
  const [isLoading, setIsLoading] = useState(propIsLoading ?? true);
  UsetimeoutLoader(setIsLoading);
  const [notifications, setNotifications] = useState<NotificationItem[]>(
    initialNotifications || defaultNotifications
  );

  const handleMarkAllRead = () => {
    if (onMarkRead) {
      onMarkRead();
    } else {
      setNotifications((prev) =>
        prev.map((item) => ({ ...item, unread: false }))
      );
    }
  };

  return (
    <Cardlayout
      title={title} 
      icon={null}  
      isLoading={isLoading}
      skeleton={<NotificationSkeleton count={2} />}

      className={`rounded-[28px] border border-gray-100/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] select-none flex flex-col gap-4 ${className}`}

      action={
        <button
          type="button"
          onClick={handleMarkAllRead}
          className={`${buttonVariants({ variant: 'link' })} text-sm font-bold`}
        >
          {markReadText}
        </button>
      }
    >

      <div className="flex flex-col gap-4">
        {notifications.map((item) => (
          <button
            type="button"
            key={item.id}
            onClick={() => onNotificationClick?.(item)}
            className="flex items-start gap-2.5 group cursor-pointer w-full text-left bg-transparent border-0 p-0 select-none outline-none focus-visible:bg-gray-50/50 rounded-xl"
          >
            <div className="pt-1.5 shrink-0 w-2.5 flex justify-center">
              {item.unread ? (
                <span className="w-2 h-2 rounded-full bg-[#B84218] inline-block transition-transform group-hover:scale-125 duration-200" />
              ) : (
                <span className="w-2 h-2 inline-block" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-800 leading-snug group-hover:text-gray-900 transition-colors select-text">
                {item.title}
              </p>
              <span className="text-xs text-gray-400 font-normal mt-0.5 block select-none">
                {item.time}
              </span>
            </div>
          </button>
        ))}
      </div>
    </Cardlayout>
  );
}
