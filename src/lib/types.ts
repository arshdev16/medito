import { z } from "zod";

export type cardsData = {
  tier: string;
  rewards: Array<string>;
};

export const faqSchema = z.object({
  mail: z.string().email(),
  question: z.string().max(300),
});

export const donationSchema = z.object({
  amount: z.number()
})

export type FaqSchema = z.infer<typeof faqSchema>;
export type DonationSchema = z.infer<typeof donationSchema>;