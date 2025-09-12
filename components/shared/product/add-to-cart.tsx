"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { CartItem, Cart } from "@/types";
import { addItemToCart, removeItemFromCart } from "@/lib/actions/cart.actions";
import { toast } from "sonner";
import { MinusIcon, Plus, PlusIcon, Loader } from "lucide-react";
import { useTransition } from "react";

const AddToCart = ({ cart, item }: { cart?: Cart; item: CartItem }) => {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const handleAddToCart = async () => {
    startTransition(async () => {
      const res = await addItemToCart(item);

      if (!res?.success) {
        toast.error(res?.message);
        return;
      }

      // Handle success add to cart
      toast.success(res.message, {
        action: {
          label: "Go To Cart",
          onClick: () => router.push("/cart"),
        },
      });
    });
  };

  // Handle remove from cart
  const handleRemoveFromCart = async () => {
    startTransition(async () => {
      const res = await removeItemFromCart(item.productId);

      if (!res.success) {
        toast.error(res.message);
      }

      toast.success(res.message);

      return;
    });
  };

  // Check if item is in cart
  const existItem =
    cart && cart?.items.find((x) => x.productId === item.productId);

  return existItem ? (
    <div className="">
      <Button type="button" variant={"outline"} onClick={handleRemoveFromCart}>
        {isPending ? (
          <Loader className="h-4 w-4 animate-spin" />
        ) : (
          <MinusIcon className="h-4 w-4" />
        )}
      </Button>

      <span className="px-2">{existItem?.qty}</span>

      <Button type="button" variant={"outline"} onClick={handleAddToCart}>
        {isPending ? (
          <Loader className="h-4 w-4 animate-spin" />
        ) : (
          <PlusIcon className="h-4 w-4" />
        )}
      </Button>
    </div>
  ) : (
    <Button className="w-full" type="button" onClick={handleAddToCart}>
      {isPending ? <Loader className="h-4 w-4 animate-spin" /> : <Plus />}
      Add To Cart
    </Button>
  );
};

export default AddToCart;
