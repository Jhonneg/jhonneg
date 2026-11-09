import "server-only";
import { cookies } from "next/headers";
import { localeCookie, resolveLocale } from "./config";

export function getLocale() {
  return resolveLocale(cookies().get(localeCookie)?.value);
}
