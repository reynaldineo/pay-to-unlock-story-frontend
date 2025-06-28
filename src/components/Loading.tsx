import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <section className="flex items-center justify-center h-screen">
      <LoaderCircle className="w-8 h-8 text-gray-500" />
    </section>
  );
}
