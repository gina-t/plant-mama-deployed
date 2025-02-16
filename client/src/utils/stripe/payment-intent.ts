export const paymentIntent = async (
  cartTotal: number,
): Promise<{ secret: string }> => {
  console.log("Cart Total:", cartTotal);
  const url = "http://localhost:3001/secret";

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: cartTotal * 100,
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to create payment intent");
    }

    const { client_secret: clientSecret } = await res.json();
    console.log("Client Secret:", clientSecret);
    return { secret: clientSecret };
  } catch (error) {
    console.error("Error in paymentIntent:", error);
    throw error;
  }
};
