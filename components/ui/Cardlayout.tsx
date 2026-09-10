// components/SidebarCard.tsx
import * as React from "react";

interface SidebarCardProps {
  title: string;
  icon: React.ReactNode;
  action?: React.ReactNode; 
  children: React.ReactNode; 
  footer?: React.ReactNode; 
  isLoading?: boolean;       
  skeleton?: React.ReactNode; 
  className?: string;
  compact?: boolean; // 👈 Added this optional prop to support compact view changes
}

export function Cardlayout({
  title,
  icon,
  action,
  children,
  footer,
  isLoading = false,
  skeleton,
  className = "",
  compact = false 
}: SidebarCardProps) {
  return (
    <div 
      className={`w-full bg-white rounded-[24px] sm:rounded-[32px] ${
        compact ? "p-3 sm:p-5" : "p-4 sm:p-5"
      } shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-[#FFEFE0] flex flex-col justify-between ${className}`}
    >
      <div>
  
        <div className={`flex items-center justify-between gap-2 ${compact ? "mb-2" : "mb-4"}`}>
          <div className="flex items-center gap-1.5 min-w-0">
            {icon}
            <h2 className={`font-bold text-gray-900 tracking-tight truncate ${
              compact ? "text-[11px] xs:text-[13px] sm:text-lg" : "text-base sm:text-lg"
            }`}>
              {title}
            </h2>
          </div>

          {!isLoading && action && (
            <div className="shrink-0">
              {action}
            </div>
          )}
        </div>


        <div className="flex flex-col">
          {isLoading ? (
 
            skeleton 
          ) : (

            children 
          )}
        </div>
      </div>
    </div>
  );
}
