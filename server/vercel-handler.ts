import express, { type Request, type Response } from "express";
import { registerRoutes } from "./routes";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let readyPromise: Promise<unknown> | null = null;
function ensureReady() {
  if (!readyPromise) {
    readyPromise = registerRoutes(app);
  }
  return readyPromise;
}

export default async function handler(req: Request, res: Response) {
  await ensureReady();
  app(req, res);
}
