import { Share } from "lucide-react";
import { Button } from "../ui/button";
import { toast } from "sonner";

const ShareButton = () => {
  const copyToClipboard = () => {
    const currentUrl = window.location.href;

    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        toast.success("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Error copying to clipboard:", err);
        toast.error("Failed to copy the link.");
      });
  };

  return (
    <div className="absolute bottom-4 right-4">
      <Button
        variant="secondary"
        size="sm"
        className="shadow-md"
        onClick={copyToClipboard}
      >
        <Share className="h-4 w-4 mr-2" />
        Share
      </Button>
    </div>
  );
};

export default ShareButton;
