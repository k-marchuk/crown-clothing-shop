import 'dotenv/config';
import stripe from 'stripe';

const stripeClient = stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(event) {
  try {
    const { amount } = await event.json();

    const paymentIntent = await stripeClient.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });

    return Response.json(paymentIntent);
  } catch (error) {
    console.log({ error });

    return Response.json(error, {
      status: 400,
    });
  }
}
