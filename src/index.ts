/**
 * @amlplugins/vercel-ai-azure
 *
 * Thin namespaced re-export of the native @ai-sdk/azure SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Vercel AI SDK Azure OpenAI provider — GPT-4o/o1/o3 via Azure deployments with Entra ID auth.
 */

import * as _sdk from "@ai-sdk/azure";
export * from "@ai-sdk/azure";
export { _sdk as sdk };
export default _sdk;

import * as _secondary from "ai";
export * as secondary from "ai";
export { _secondary };
