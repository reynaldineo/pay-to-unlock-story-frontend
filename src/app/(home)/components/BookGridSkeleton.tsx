import { BookCardSkeleton } from "./BookCardSkeleton";

export function BookGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, index) => (
        <BookCardSkeleton key={index} />
      ))}
    </div>
  );
}
