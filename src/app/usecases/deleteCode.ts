import { CodeRepository } from "../../domain/ports/codeRepository";

export const deleteCode =
  (codeRepository: CodeRepository) => async (id: string) => {
    const deletedCode = await codeRepository.delete(id);

    if (!deletedCode) throw new Error("Code not found");

    return deletedCode;
  };
