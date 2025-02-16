import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStripe } from '@stripe/react-stripe-js';
import { PaymentIntentResult } from '@stripe/stripe-js';

const PaymentStatus = () => {
  const navigate = useNavigate();
  const stripe = useStripe();
  // const { clearCart } = useContext(ShoppingCartContext);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!stripe) {
      return;
    }
    // Retrieve the "payment_intent_client_secret" query parameter appended to your return_url by Stripe.js
    const clientSecret: string | null = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    );

    if (!clientSecret) {
      setMessage('No client secret found.');
      return;
    }

    stripe
      .retrievePaymentIntent(clientSecret)
      .then((result: PaymentIntentResult) => {
        const paymentIntent = result.paymentIntent;

        if (!paymentIntent) {
          setMessage('No payment intent found.');
          return;
        }

        switch (paymentIntent.status) {
          case 'succeeded':
            // clearCart();
            setMessage(`Thank you for your order. Your purchase for $${paymentIntent.amount / 100} was successful. Check your email for confirmation and shipping details.`);
            break;

          case 'processing':
            setMessage("Payment processing. You will receive an email confirmation once payment is complete.");
            break;

          case 'requires_payment_method':
            // Redirect your user back to your payment page to attempt collecting payment again
            navigate(-1);
            setMessage('Payment failed. Please try a different payment method.');
            break;

          default:
            navigate(-1);
            setMessage('Payment cannot be processed.');
            break;
        }
      })
      .catch((error) => {
        setMessage('Error retrieving payment intent.');
        console.error('Error retrieving payment intent', error);
      });
  }, [stripe, navigate]);

  return message;
};

export default PaymentStatus;