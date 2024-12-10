export interface IBaseService<T, CreateDTO, UpdateDTO> {
  findAll(): Promise<T[]>;
  findById(id: number): Promise<T | null>;
  create(data: CreateDTO): Promise<T>;
  update(id: number, data: UpdateDTO): Promise<T | null>;
  delete(id: number): Promise<boolean>;
}