export type PaymentType = "subscription" | "tip" | "micropayment" | "bundle";
export type PricingTier = "starter" | "creator" | "pro";

export interface Subscription {
  id: string;
  subscriberId: string;
  creatorId: string;
  tier: "free" | "paid";
  price?: number;
  active: boolean;
  createdAt: Date;
}

export interface Payment {
  id: string;
  type: PaymentType;
  amount: number;
  stripePaymentId: string;
  userId: string;
  creatorId: string;
  createdAt: Date;
}
