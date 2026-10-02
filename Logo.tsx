import { Link } from "@tanstack/react-router";
import { Infinity as InfinityIcon } from "lucide-react";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <div className="relative size-10 grid place-items-center">
        <div className="absolute inset-0 clip-hex bg-foreground group-hover:bg-[var(--pal-600)] transition-colors" />
        <div className="absolute inset-[1.5px] clip-hex bg-background" />
        <InfinityIcon className="relative size-5 text-foreground" strokeWidth={1.5} />
      </div>
      <span className="font-wordmark font-bold text-lg tracking-[0.28em] uppercase">
        Limitless
      </span>
    </Link>
  );
}
