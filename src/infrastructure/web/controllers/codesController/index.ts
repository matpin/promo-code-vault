import { Request, Response } from "express";
import CodeModel from "../../../../domain/models";
import { z } from "zod";

// Get all codes
export const getCodes = async (req: Request, res: Response) => {
  try {
    let codes = await CodeModel.find();
    res.status(200).send(codes);
  } catch (error) {
    res.status(500).send({ msg: "Internal server error", error });
  }
};

// Create new code
export const insertCode = async (req: Request, res: Response) => {
  const validation = z.object({
    code: z.string().optional(),
    gift: z.string().optional(),
    expire_code: z.string().optional(),
  });

  try {
    const result = validation.safeParse(req.body);

    if (!result.success) {
      res.status(400).json({ error: result.error.format() });
    }

    const newCode = await CodeModel.create(result.data);
    res.status(201).json({
      msg: "Code created successfully",
    });
  } catch (error) {
    res.status(500).json({ msg: "Internal server error", error });
  }
};

// Update code
export const updateCode = async (req: Request, res: Response) => {
  const validation = z.object({
    code: z.string().optional(),
    gift: z.string().optional(),
    expire_code: z.string().optional(),
  });

  const result = validation.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({ error: result.error.format() });
  }

  try {
    const updatedCode = await CodeModel.findByIdAndUpdate(
      req.params.id,
      result.data,
      { new: true }
    );

    if (!updatedCode) {
      res.status(404).json({ msg: "Code not found" });
    }

    res.status(200).json({
      msg: "Code updated successfully",
    });
  } catch (error) {
    res.status(500).json({ msg: "Internal server error", error });
  }
};

// Delete code
export const deleteCode = async (req: Request, res: Response) => {
  try {
    const deletedCode = await CodeModel.findByIdAndDelete(req.params.id);

    if (!deletedCode) {
      res.status(404).json({ msg: "Code not found" });
    }

    res.status(200).json({
      msg: "Code deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ msg: "Internal server error", error });
  }
};
