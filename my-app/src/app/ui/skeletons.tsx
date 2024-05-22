import React from 'react';
import { HiOutlineCheckBadge } from "react-icons/hi2";
export function ProductCardSkeleton() {
    return (
        <div className="w-[440px] h-[500px] bg-slate-300 animate-pulse rounded-3xl">
            <div className="w-full h-[200px] bg-slate-300 animate-pulse rounded-3xl"></div>
        </div>
    )
}


export function MarqueeSkeleton() {
  return (
    <div className="w-full mt-4 bg-gray-200 h-12 rounded-3xl animate-pulse" />
  );
}