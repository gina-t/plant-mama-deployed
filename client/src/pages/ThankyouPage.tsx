import { Elements } from '@stripe/react-stripe-js';
import StripePromise from '../utils/stripe/initStripe';
import PaymentStatus from '../utils/stripe/payment-status';

const ThankyouPage = () => {
  return (
    <Elements stripe={StripePromise}>
      <div className="container px-2 mx-auto laptop:px-40">
        <div className="mx-auto m-5 mt-12 p-4 text-xl text-gray-900 border-l-4 border border-[#D3F1DF] bg-[#D3F1DF] " role="alert">
          <svg className="inline-flex mr-2 mb-1 w-5" viewBox="0 0 24 24">
              <path fill="#FFB0B0" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
          </svg>
          <PaymentStatus />
        </div>
      </div>
    </Elements>
  )
};

export default ThankyouPage;