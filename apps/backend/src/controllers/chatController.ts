import { Request, Response } from "express";

const chatHandler = (req: Request, res: Response) => {
  res.json({ message: "Chat endpoint is working!" });
};

export default chatHandler;
