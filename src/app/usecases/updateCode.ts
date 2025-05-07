import { Code } from "../../domain/entities/code";
import { CodeRepository } from "../../domain/ports/codeRepository";

export const updateCode =
  (codeRepository: CodeRepository) =>
  async (id: string, updateData: Partial<Code>) => {
    const existingCode = await codeRepository.update(id, updateData);

    if (!existingCode) throw new Error("Code not found");

    return existingCode;
  };
