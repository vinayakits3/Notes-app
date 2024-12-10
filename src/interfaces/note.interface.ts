export interface INote {
  id?: number;
  title: string;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface INoteService {
  findAll(): Promise<INote[]>;
  findById(id: number): Promise<INote | null>;
  create(data: INoteCreateRequest): Promise<INote>;
  update(id: number, data: INoteUpdateRequest): Promise<INote | null>;
  delete(id: number): Promise<boolean>;
}