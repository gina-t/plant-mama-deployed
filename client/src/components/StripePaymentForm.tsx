import { useState, FormEvent, ChangeEvent } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const defaultFormFields = {
  displayName: "",
  email: "",
};

const StripePaymentForm = () => {
  const elements = useElements();
  const stripe = useStripe();
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email } = formFields;

  const API_BASE_URL =
    process.env.NODE_ENV === "production"
      ? "https://plant-mama-deployed.onrender.com"
      : "http://localhost:5173";

  const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // redirect to route thankyou
        return_url: `${API_BASE_URL}/thankyou/`,
        payment_method_data: {
          billing_details: {
            name: displayName,
            email: email,
            phone: "7873679090",
            address: {
              line1: "Example Building #129",
              city: "Carolina",
              state: "PR",
              postal_code: "00987",
              country: "US",
            },
          },
        },
      },
    });

    setIsProcessingPayment(false);
    if (error) {
      setErrorMessage(error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={paymentHandler} className="space-y-6">
          <div>
            <label
              htmlFor="displayName"
              className="block text-sm font-medium text-gray-900"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                id="displayName"
                name="displayName"
                type="text"
                required
                value={displayName}
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={handleChange}
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          <PaymentElement />
          {errorMessage && (
            <div className="bold mt-2 rounded-md bg-pink-100 p-2 text-pink-500">
              {errorMessage}
            </div>
          )}
          <button
            type="submit"
            className="shadow-xs flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            disabled={isProcessingPayment}
          >
            {isProcessingPayment ? "Processing..." : "Pay"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default StripePaymentForm;
