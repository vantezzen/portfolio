import { gateway } from "@ai-sdk/gateway";

/**
 * Every call goes through Vercel AI Gateway: one key, provider fallbacks,
 * and usage visible in the Vercel dashboard. Authenticates with
 * `AI_GATEWAY_API_KEY` locally and with Vercel OIDC when deployed.
 *
 * `BENNET_MODEL` overrides the model, e.g. to test locally on an account
 * whose tier does not include the default.
 */
export const DEFAULT_MODEL_ID = "deepseek/deepseek-v4.1-flash";

export const MODEL_ID = process.env.BENNET_MODEL || DEFAULT_MODEL_ID;

export const model = gateway(MODEL_ID);
