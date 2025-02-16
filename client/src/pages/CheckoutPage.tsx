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
    //   <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
    //     <h2 className="sr-only">Checkout</h2>

    //     <form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
    //       <div>
    //         <div>
    //           <h2 className="text-lg font-medium text-gray-900">
    //             Contact information
    //           </h2>

    //           <div className="mt-4">
    //             <label
    //               htmlFor="email-address"
    //               className="block text-sm/6 font-medium text-gray-700"
    //             >
    //               Email address
    //             </label>
    //             <div className="mt-2">
    //               <input
    //                 id="email-address"
    //                 name="email-address"
    //                 type="email"
    //                 autoComplete="email"
    //                 className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
    //               />
    //             </div>
    //           </div>
    //         </div>

    //         <div className="mt-10 border-t border-gray-200 pt-10">
    //           <h2 className="text-lg font-medium text-gray-900">
    //             Shipping information
    //           </h2>

    //           <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
    //             <div>
    //               <label
    //                 htmlFor="first-name"
    //                 className="block text-sm/6 font-medium text-gray-700"
    //               >
    //                 First name
    //               </label>
    //               <div className="mt-2">
    //                 <input
    //                   id="first-name"
    //                   name="first-name"
    //                   type="text"
    //                   autoComplete="given-name"
    //                   className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
    //                 />
    //               </div>
    //             </div>

    //             <div>
    //               <label
    //                 htmlFor="last-name"
    //                 className="block text-sm/6 font-medium text-gray-700"
    //               >
    //                 Last name
    //               </label>
    //               <div className="mt-2">
    //                 <input
    //                   id="last-name"
    //                   name="last-name"
    //                   type="text"
    //                   autoComplete="family-name"
    //                   className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
    //                 />
    //               </div>
    //             </div>

    //             <div className="sm:col-span-2">
    //               <label
    //                 htmlFor="company"
    //                 className="block text-sm/6 font-medium text-gray-700"
    //               >
    //                 Company
    //               </label>
    //               <div className="mt-2">
    //                 <input
    //                   id="company"
    //                   name="company"
    //                   type="text"
    //                   className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
    //                 />
    //               </div>
    //             </div>

    //             <div className="sm:col-span-2">
    //               <label
    //                 htmlFor="address"
    //                 className="block text-sm/6 font-medium text-gray-700"
    //               >
    //                 Address
    //               </label>
    //               <div className="mt-2">
    //                 <input
    //                   id="address"
    //                   name="address"
    //                   type="text"
    //                   autoComplete="street-address"
    //                   className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
    //                 />
    //               </div>
    //             </div>

    //             <div className="sm:col-span-2">
    //               <label
    //                 htmlFor="apartment"
    //                 className="block text-sm/6 font-medium text-gray-700"
    //               >
    //                 Apartment, suite, etc.
    //               </label>
    //               <div className="mt-2">
    //                 <input
    //                   id="apartment"
    //                   name="apartment"
    //                   type="text"
    //                   className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
    //                 />
    //               </div>
    //             </div>

    //             <div>
    //               <label
    //                 htmlFor="city"
    //                 className="block text-sm/6 font-medium text-gray-700"
    //               >
    //                 City
    //               </label>
    //               <div className="mt-2">
    //                 <input
    //                   id="city"
    //                   name="city"
    //                   type="text"
    //                   autoComplete="address-level2"
    //                   className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
    //                 />
    //               </div>
    //             </div>

    //             <div>
    //               <label
    //                 htmlFor="country"
    //                 className="block text-sm/6 font-medium text-gray-700"
    //               >
    //                 Country
    //               </label>
    //               <div className="mt-2 grid grid-cols-1">
    //                 <select
    //                   id="country"
    //                   name="country"
    //                   autoComplete="country-name"
    //                   className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pl-3 pr-8 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
    //                 >
    //                   <option>Australia</option>
    //                   <option>New Zealand</option>
    //                 </select>
    //                 <ChevronDownIcon
    //                   aria-hidden="true"
    //                   className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
    //                 />
    //               </div>
    //             </div>

    //             <div>
    //               <label
    //                 htmlFor="region"
    //                 className="block text-sm/6 font-medium text-gray-700"
    //               >
    //                 State / Province
    //               </label>
    //               <div className="mt-2">
    //                 <input
    //                   id="region"
    //                   name="region"
    //                   type="text"
    //                   autoComplete="address-level1"
    //                   className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
    //                 />
    //               </div>
    //             </div>

    //             <div>
    //               <label
    //                 htmlFor="postal-code"
    //                 className="block text-sm/6 font-medium text-gray-700"
    //               >
    //                 Postal code
    //               </label>
    //               <div className="mt-2">
    //                 <input
    //                   id="postal-code"
    //                   name="postal-code"
    //                   type="text"
    //                   autoComplete="postal-code"
    //                   className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
    //                 />
    //               </div>
    //             </div>

    //             <div className="sm:col-span-2">
    //               <label
    //                 htmlFor="phone"
    //                 className="block text-sm/6 font-medium text-gray-700"
    //               >
    //                 Phone
    //               </label>
    //               <div className="mt-2">
    //                 <input
    //                   id="phone"
    //                   name="phone"
    //                   type="text"
    //                   autoComplete="tel"
    //                   className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
    //                 />
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="mt-10 border-t border-gray-200 pt-10">
    //           <fieldset>
    //             <legend className="text-lg font-medium text-gray-900">
    //               Delivery method
    //             </legend>
    //             <RadioGroup
    //               value={selectedDeliveryMethod}
    //               onChange={setSelectedDeliveryMethod}
    //               className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4"
    //             >
    //               {deliveryMethods.map((deliveryMethod) => (
    //                 <Radio
    //                   key={deliveryMethod.id}
    //                   value={deliveryMethod}
    //                   aria-label={deliveryMethod.title}
    //                   aria-description={`${deliveryMethod.turnaround} for ${deliveryMethod.price}`}
    //                   className="shadow-xs focus:outline-hidden data-checked:border-transparent data-focus:ring-2 data-focus:ring-indigo-500 group relative flex cursor-pointer rounded-lg border border-gray-300 bg-white p-4"
    //                 >
    //                   <span className="flex flex-1">
    //                     <span className="flex flex-col">
    //                       <span className="block text-sm font-medium text-gray-900">
    //                         {deliveryMethod.title}
    //                       </span>
    //                       <span className="mt-1 flex items-center text-sm text-gray-500">
    //                         {deliveryMethod.turnaround}
    //                       </span>
    //                       <span className="mt-6 text-sm font-medium text-gray-900">
    //                         {deliveryMethod.price}
    //                       </span>
    //                     </span>
    //                   </span>
    //                   <CheckCircleIcon
    //                     aria-hidden="true"
    //                     className="group-not-data-checked:hidden size-5 text-indigo-600"
    //                   />
    //                   <span
    //                     aria-hidden="true"
    //                     className="group-data-checked:border-indigo-500 group-data-focus:border pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent"
    //                   />
    //                 </Radio>
    //               ))}
    //             </RadioGroup>
    //           </fieldset>
    //         </div>

            
      //     </div>
      //   </form>
      // </div>
    // </div>

};

export default CheckoutPage;
