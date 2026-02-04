import { betterAuth } from "better-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/lib/db";

export const auth = betterAuth({
  database: DrizzleAdapter(db),
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
    maxPasswordLength: 128,
  },
  trustedOrigins: process.env.TRUSTED_ORIGINS?.split(",") || [],
});
