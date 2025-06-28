import { formatCurrency } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PriceDisplayProps {
  price: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function PriceDisplay({
  price,
  size = "md",
  className,
}: PriceDisplayProps) {
  const sizeClasses = {
    sm: "text-sm py-0.5 px-2",
    md: "text-base py-1 px-3",
    lg: "text-lg py-1.5 px-4",
  };

  return (
    <Badge
      variant="default"
      className={cn(
        "font-bold bg-black text-white rounded-full",
        sizeClasses[size],
        className,
      )}
    >
      {formatCurrency(price)}
    </Badge>
  );
}
