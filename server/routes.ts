import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  console.log('Registering API routes...');
  
  // Test route
  app.get("/api/test", (req, res) => {
    console.log('Test API endpoint hit');
    res.json({ message: "API is working!" });
  });

  const httpServer = createServer(app);

  return httpServer;
}
