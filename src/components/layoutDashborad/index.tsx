import { ReactNode } from "react";
import { Head } from "next/document";

export function LayoutDasboard({ children }: { children: ReactNode }) {
  return (
    <div className="w-full mx-auto px-4">
      {children}
    </div>
  );
}
