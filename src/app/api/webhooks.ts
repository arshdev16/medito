import Stripe from "stripe";
import getRawBody from "raw-body";
import { z } from "zod";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
const endpointsecret = process.env.WEBHOOK_SECRET as string;

export const config = {
  api: { bodyParser: false },
};

const bodySchema = z.object({
  amount: z.number().int().gte(1),
  //   currency: z.enum(possibleCurrencies),
  //   interval: z.enum(possibleIntervals),
});

type reqBody = z.infer<typeof bodySchema>;

export async function POST(req: Request) {
  const body = (await req.json()) as reqBody;

  //use zod to check the body of the request before proceeding
  let parseRes;
  try {
    parseRes = bodySchema.parse(body);
  } catch (error) {
    return NextResponse.json({ error });
  }

  const origin = req.headers.get("origin") || "http://localhost:3000";
  const success_url = `${origin}/thankyou`;
  const cancel_url = `${origin}/cancel`;

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "USD",
            recurring: undefined,
            unit_amount: body.amount * 100,
          },
          quantity: 1,
        },
      ],
      success_url,
      cancel_url,
    });
    return NextResponse.json(session);
  } catch (error) {
    if (error instanceof Stripe.errors.StripeError) {
      const { message } = error;
      return NextResponse.json({ message }, { status: error.statusCode });
    }
  }
}
