"use client";

import { Card } from "@/components/ui/card";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useCreateTransactionMutation } from "../../hooks/useCreateTransactionMutation";
import { formatCurrency } from "@/lib/utils";

interface AccessDeniedCardProps {
  storyId: string;
  price: number;
}

export function AccessDeniedCard({ storyId, price }: AccessDeniedCardProps) {
  const { mutate: createTransaction, isPending } =
    useCreateTransactionMutation();

  const handlePurchase = () => {
    createTransaction(
      { story_id: storyId },
      {
        onSuccess: (response) => {
          const { invoice_id } = response.data.data;

          // Open Xendit checkout in a new tab
          window.open(
            `https://checkout-staging.xendit.co/web/${invoice_id}`,
            "_blank",
          );

          toast.success("Redirecting to payment gateway");
        },
        onError: () => {
          toast.error("Failed to process your purchase. Please try again.");
        },
      },
    );
  };

  return (
    <Card className="p-6 mb-8 text-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="rounded-full bg-amber-100 dark:bg-amber-900/20 p-3">
          <Lock className="h-8 w-8 text-amber-600 dark:text-amber-500" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Premium Content</h3>
          <p className="text-muted-foreground">
            You don't have access to this story. Purchase it to read the full
            content.
          </p>
        </div>
        <Button
          onClick={handlePurchase}
          disabled={isPending}
          className="min-w-[200px]"
        >
          {isPending ? (
            <>
              <div className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin mr-2"></div>
              Processing...
            </>
          ) : (
            `Purchase Story (${formatCurrency(price)})`
          )}
        </Button>
      </div>
    </Card>
  );
}
