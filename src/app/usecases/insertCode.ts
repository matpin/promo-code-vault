import { Code } from "../../domain/entities/code";
import { CodeRepository } from "../../domain/ports/codeRepository";

export const insertCode =
  (codeRepository: CodeRepository) => async (codeData: Partial<Code>) => {
    return codeRepository.insert(codeData as Code);
  };
