import BooksContainer from "./(home)/containers/BooksContainer";
import HeroBanner from "./(home)/containers/HeroBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroBanner />

      <div className="container mx-auto py-8 px-4">
        <BooksContainer />
      </div>

      <Footer />
    </div>
  );
}
