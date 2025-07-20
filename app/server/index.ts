import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";
import * as build from "../../build";

export const onRequest = createPagesFunctionHandler({ build });