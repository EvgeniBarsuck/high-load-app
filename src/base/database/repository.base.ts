export abstract class RepositoryBase<T> {
  abstract updateOne(params: Partial<T>, updateFields: Partial<T>): Promise<T>;
  abstract findOne(params: Partial<T>): Promise<T | null>;
}
