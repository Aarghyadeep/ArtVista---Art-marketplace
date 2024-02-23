import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(`${import.meta.env.PUBLIC_STRIPE_PUBLISHABLE_KEY}`);
  }

  return stripePromise;
}

export default getStripe;