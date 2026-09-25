"use client";

import { loadStripe } from "@stripe/stripe-js";
import {
  CheckoutElementsProvider,
  ContactDetailsElement,
  PaymentElement,
  useCheckout,
} from "@stripe/react-stripe-js/checkout";

import { useTheme } from "next-themes";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string,
);

const StripePayment = ({
  priceInCents,
  orderId,
  clientSecret,
}: {
  priceInCents: number;
  orderId: string;
  clientSecret: string;
}) => {
  const { theme, systemTheme } = useTheme();

  const CheckoutForm = () => {
    const checkoutState = useCheckout();
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>();

    if (checkoutState.type === "loading") {
      return <div>Loading...</div>;
    } else if (checkoutState.type === "error") {
      return (
        <div className="text-destructive">
          Error: {checkoutState.error.message}
        </div>
      );
    }

    const { checkout } = checkoutState;

    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();

      if (email == null) return;

      setIsLoading(true);

      const result = await checkout.confirm();

      if (result.type === "error") {
        setErrorMessage(result.error.message);
      }

      setIsLoading(false);
    };

    return (
      <form onSubmit={handleSubmit}>
        .<div className="text-xl">Stripe Checkout</div>
        {errorMessage && <div className="text-destructive">{errorMessage}</div>}
        <PaymentElement />
        <ContactDetailsElement onChange={(e) => setEmail(e.value.email)} />
        <Button
          className="w-full mt-4"
          disabled={!checkout.canConfirm || isLoading}
        >
          {isLoading
            ? "Purchasing..."
            : `Purchase ${formatCurrency(priceInCents / 100)}`}
        </Button>
      </form>
    );
  };

  return (
    <CheckoutElementsProvider
      stripe={stripePromise}
      options={{
        clientSecret,
        elementsOptions: {
          appearance: {
            theme:
              theme === "dark"
                ? "night"
                : theme === "system"
                  ? systemTheme === "dark"
                    ? "night"
                    : "stripe"
                  : "stripe",
          },
        },
      }}
    >
      <CheckoutForm />
    </CheckoutElementsProvider>
  );
};

export default StripePayment;
