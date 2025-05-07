import { MongoCodeRepository } from "../../infrastructure/database/mongo";
import { deleteCode } from "./deleteCode";
import { getAllCodes } from "./getAllCodes";
import { insertCode } from "./insertCode";
import { updateCode } from "./updateCode";

const mongoCodeRepository = new MongoCodeRepository();

export const getAllCodesUseCase = getAllCodes(mongoCodeRepository);
export const insertCodeUseCase = insertCode(mongoCodeRepository);
export const updateCodeUseCase = updateCode(mongoCodeRepository);
export const deleteCodeUseCase = deleteCode(mongoCodeRepository);
