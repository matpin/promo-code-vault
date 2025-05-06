import { Code } from "../../entities/code";

export interface CodeRepository {
  getAll(): Promise<Code[]>;
  create(data: Code): Promise<Code>;
  update(id: string, data: Partial<Code>): Promise<Code | null>;
  delete(id: string): Promise<Code | null>;
}
