import { Button } from "@/components/ui/button";
import { getOrderById } from "@/lib/actions/order.actions";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

const SuccessPage = async (props: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ session_id?: string }>;
}) => {
  const { id } = await props.params;
  const { session_id: sessionId } = await props.searchParams;

  if (!sessionId) return notFound();

  //   Fetch order
  const order = await getOrderById(id);
  if (!order) notFound();

  //   Retrieve checkout session
  const session = await stripe.checkout.sessions.retrieve(sessionId);

  //   Check if session belongs to this order
  if (
    session.metadata?.orderId == null ||
    session.metadata.orderId !== order.id.toString()
  ) {
    return notFound();
  }

  //   Check if payment is successful
  const isSuccess =
    session.status === "complete" && session.payment_status === "paid";

  if (!isSuccess) {
    return redirect(`/order/${id}`);
  }

  return (
    <div className="max-w-4xl w-full mx-auto space-y-8">
      <div className="flex flex-col gap-6 items-center">
        <h1 className="h1-bold">Thanks for your purchase</h1>
        <div>We are processing your order.</div>
        <Button>
          <Link href={`/order/${id}`}>View Order</Link>
        </Button>
      </div>
    </div>
  );
};

export default SuccessPage;
