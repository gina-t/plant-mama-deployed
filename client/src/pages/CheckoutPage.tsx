import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
// import { ChevronDownIcon } from "@heroicons/react/16/solid";
// import { Radio, RadioGroup } from "@headlessui/react";
// import { CheckCircleIcon } from "@heroicons/react/20/solid";
import StripePaymentForm from "../components/StripePaymentForm";
import stripePromise from "../utils/stripe/initStripe";

// const deliveryMethods = [
//   {
//     id: 1,
//     title: "Standard",
//     turnaround: "4–10 business days",
//     price: "$8.00",
//   },
//   { id: 2, title: "Express", turnaround: "2–5 business days", price: "$16.00" },
// ];

export type StripeTypes = {
  clientSecret: string;
  appearance: {
    theme: "stripe";
    variables: {
      colorPrimary: string;
    };
  };
};

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { client_secret } = location.state || {};

  // const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(
  //   deliveryMethods[0],
  // );

  useEffect(() => {
    if (!client_secret) {
      navigate("/cart");
    }
  }, [client_secret, navigate]);

  if (!client_secret) {
    return <div>Error: Missing client secret</div>;
  }

  const options: StripeTypes = {
    clientSecret: client_secret,
    appearance: {
      theme: "stripe",
      variables: {
        colorPrimary: "#6366F1",
      },
    },
  };

  return (
    <div className="bg-gray-50">
      {client_secret && (
              <Elements stripe={stripePromise} options={options}>
                <StripePaymentForm />
              </Elements>
            )}
    </div>
  );

};

export default CheckoutPage;
