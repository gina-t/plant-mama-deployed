import { loadStripe } from "@stripe/stripe-js";

const stripeKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY as string;
console.log("Stripe Publishable Key:", stripeKey);

if (!stripeKey) {
  throw new Error("Stripe publishable key is missing");
}

const stripePromise = loadStripe(stripeKey);

export default stripePromise;
