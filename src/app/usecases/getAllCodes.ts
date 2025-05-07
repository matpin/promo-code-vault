import { CodeRepository } from "../../domain/ports/codeRepository";

export const getAllCodes = (codeRepository: CodeRepository) => async () => {
  return codeRepository.getAll();
};
