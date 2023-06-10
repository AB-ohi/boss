import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/Sectiontitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "./Checkout";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../Hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_PK);
const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | PAYMENT</title>
      </Helmet>
      <SectionTitle Heading="PAYMENT" />
      <Elements stripe={stripePromise}>
        <Checkout cart={cart} price={price}></Checkout>
      </Elements>
    </div>
  );
};

export default Payment;
