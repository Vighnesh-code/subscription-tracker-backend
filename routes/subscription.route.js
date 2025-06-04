import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import {
  createSubscription,
  getUserSubscriptions,
} from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) =>
  res.send({ title: "GET all subscriptions" })
);

subscriptionRouter.post("/", authorize, createSubscription);

subscriptionRouter.get("/:id", authorize, getUserSubscriptions);

subscriptionRouter.put("/:id", (req, res) =>
  res.send({ title: "Update Subscription" })
);

subscriptionRouter.delete("/:id", (req, res) =>
  res.send({ title: "Delete subscriptions" })
);

subscriptionRouter.get("/user/:id", (req, res) =>
  res.send({ title: "Get all user subscriptions" })
);

subscriptionRouter.put("/:id/cancel", (req, res) =>
  res.send({ title: "CANCEL subscription" })
);

subscriptionRouter.get("/upcoming-renewals", (req, res) =>
  res.send({ title: "GET upcoming renewals" })
);

export default subscriptionRouter;
