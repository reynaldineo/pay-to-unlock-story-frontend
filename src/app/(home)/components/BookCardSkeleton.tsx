import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export function BookCardSkeleton() {
  return (
    <Card className="w-full h-full overflow-hidden">
      <CardHeader className="pb-3">
        <div className="h-6 w-3/4 bg-muted animate-pulse rounded"></div>
        <div className="h-4 w-1/2 bg-muted animate-pulse rounded mt-2"></div>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="space-y-2">
          <div className="h-3 bg-muted animate-pulse rounded"></div>
          <div className="h-3 bg-muted animate-pulse rounded w-11/12"></div>
          <div className="h-3 bg-muted animate-pulse rounded w-4/5"></div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="h-5 w-1/3 bg-muted animate-pulse rounded"></div>
      </CardFooter>
    </Card>
  );
}
