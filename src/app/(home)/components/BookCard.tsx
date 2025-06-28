import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Story } from "@/types/entities/story";
import { formatCurrency } from "@/lib/utils";
import { BookOpen } from "lucide-react";
import Link from "next/link";

interface BookCardProps {
  story: Story;
}

export function BookCard({ story }: BookCardProps) {
  // Generate a random pastel color for the book cover
  const getBookCoverGradient = () => {
    const hue = (story.id.charCodeAt(0) + story.id.charCodeAt(1)) % 360;
    return `linear-gradient(135deg, hsl(${hue}, 85%, 90%) 0%, hsl(${hue}, 80%, 70%) 100%)`;
  };

  return (
    <Link href={`/stories/${story.id}`} className="w-full h-full">
      <Card className="w-full h-full cursor-pointer transition-all hover:shadow-lg group overflow-hidden border-2 flex flex-col">
        <div
          className="h-40 w-full flex items-center justify-center relative overflow-hidden"
          style={{ background: getBookCoverGradient() }}
        >
          <BookOpen className="text-white/90 h-16 w-16 drop-shadow-md" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
            <Button variant="secondary" size="sm" className="shadow-md">
              Read Preview
            </Button>
          </div>
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="truncate text-lg">{story.title}</CardTitle>
          <CardDescription className="font-medium">
            By {story.author}
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-2 flex-grow">
          <p className="line-clamp-3 text-sm text-muted-foreground">
            {story.description}
          </p>
        </CardContent>
        <CardFooter className="justify-between pt-2 border-t">
          <div className="text-base font-semibold text-primary">
            {formatCurrency(story.price)}
          </div>
          <Button
            variant="outline"
            size="sm"
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          >
            View Details
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
