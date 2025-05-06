import { Code } from "../../../domain/entities/code";
import CodeModel from "../../../domain/models";
import { CodeRepository } from "../../../domain/ports/codeRepository";

export class MongoCodeRepository implements CodeRepository {
  async getAll(): Promise<Code[]> {
    return await CodeModel.find();
  }

  async create(data: Code): Promise<Code> {
    return await CodeModel.create(data);
  }

  async update(id: string, data: Partial<Code>): Promise<Code | null> {
    return await CodeModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string): Promise<Code | null> {
    return await CodeModel.findByIdAndDelete(id);
  }
}
