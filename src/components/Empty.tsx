import { toast } from "sonner";
import { cn } from "@/lib/utils";

// Empty component
export function Empty() {
  return (
    <div className={cn("flex h-full items-center justify-center")} onClick={() => toast('Coming soon')}>
      <span className="text-xl text-gray-400">页面内容即将上线</span>
    </div>
  );
}