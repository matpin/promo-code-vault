import mongoose, { Schema } from "mongoose";

export interface ScrapedCodes {
  code?: string;
  gift?: string;
  expire_code?: string;
}

// Mongoose schema
const codeSchema = new Schema(
  {
    code: { type: String, unique: true },
    gift: { type: String },
    expire_code: { type: String },
  },
  { timestamps: true }
);

// Model export
const CodeModel = mongoose.model<ScrapedCodes>("Code", codeSchema);
export default CodeModel;
