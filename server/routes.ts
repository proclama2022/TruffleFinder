import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBookingSchema, insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Booking endpoint
  app.post("/api/bookings", async (req, res) => {
    try {
      const booking = insertBookingSchema.parse(req.body);
      const createdBooking = await storage.createBooking(booking);
      res.json(createdBooking);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid booking data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to create booking" });
      }
    }
  });

  // Contact endpoint - sends data to Make.com webhook
  app.post("/api/contacts", async (req, res) => {
    try {
      const contact = insertContactSchema.parse(req.body);
      
      // Send data to Make.com webhook
      const webhookUrl = process.env.MAKE_WEBHOOK_URL;
      
      if (!webhookUrl) {
<<<<<<< HEAD
        console.error('MAKE_WEBHOOK_URL not configured');
        return res.status(500).json({ 
          message: "Server configuration error", 
          error: "Webhook URL not configured" 
        });
=======
        throw new Error('MAKE_WEBHOOK_URL not configured');
>>>>>>> 53c7d0dc6cb5df58fd4d9436887fe7ab0a7d34f5
      }

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
      });

      if (!response.ok) {
<<<<<<< HEAD
        const errorText = await response.text().catch(() => 'Unknown error');
        console.error(`Webhook failed with status: ${response.status}, response: ${errorText}`);
        return res.status(500).json({ 
          message: "Failed to send message", 
          error: `Webhook error: ${response.status}` 
        });
=======
        throw new Error(`Webhook failed with status: ${response.status}`);
>>>>>>> 53c7d0dc6cb5df58fd4d9436887fe7ab0a7d34f5
      }

      res.json({ message: "Message sent successfully", success: true });
    } catch (error) {
<<<<<<< HEAD
      console.error('Contact endpoint error:', error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Invalid contact data", 
          errors: error.errors 
        });
      } else {
        return res.status(500).json({ 
          message: "Failed to send message",
          error: error instanceof Error ? error.message : 'Unknown error'
        });
=======
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid contact data", errors: error.errors });
      } else {
        console.error('Webhook error:', error);
        res.status(500).json({ message: "Failed to send message" });
>>>>>>> 53c7d0dc6cb5df58fd4d9436887fe7ab0a7d34f5
      }
    }
  });

  // Get all bookings (admin endpoint)
  app.get("/api/bookings", async (req, res) => {
    try {
      const bookings = await storage.getAllBookings();
      res.json(bookings);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch bookings" });
    }
  });

  // Get all contacts (admin endpoint) 
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getAllContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch contacts" });
    }
  });

  // Site status endpoint
  app.get("/api/status", (req, res) => {
    const showComingSoon = process.env.SHOW_COMING_SOON === 'true';
    res.json({ 
      status: showComingSoon ? 'coming-soon' : 'live',
      message: showComingSoon ? 'Site is in coming soon mode' : 'Site is live'
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
