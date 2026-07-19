// app/components/Layout.tsx
import type { ReactElement, ReactNode } from "react";
import { NavigationBar } from "./NavigationBar";

type LayoutProps = {
  children: ReactNode;
  className?: string;
};

export function Layout({
  children,
  className = "",
}: LayoutProps): ReactElement {
  return (
    <div className={`min-h-screen bg-zinc-50 text-zinc-900 ${className}`.trim()}>
      <NavigationBar />

      <main
        id="main-content"
        className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-8 sm:px-6 lg:px-8"
      >
        {children}
      </main>
    </div>
  );
}