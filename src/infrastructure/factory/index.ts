import { CodeRepository } from "../../domain/ports/codeRepository";
import { MongoCodeRepository } from "../database/mongo";

const dbType = process.env.DB_TYPE;

export class RepositoryFactory {
  static getCodeRepository(): CodeRepository {
    switch (dbType) {
      case "mongo":
        return new MongoCodeRepository();
      default:
        throw new Error(`Unsupported DB type: ${dbType}`);
    }
  }
}
