export interface INote {
  id?: number;
  title: string;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface INoteCreate extends Omit<INote, 'id' | 'createdAt' | 'updatedAt'> {}

export interface INoteUpdate extends Partial<INoteCreate> {}

export interface INoteService {
  findAll(): Promise<INote[]>;
  findById(id: number): Promise<INote | null>;
  create(data: INoteCreate): Promise<INote>;
  update(id: number, data: INoteUpdate): Promise<INote | null>;
  delete(id: number): Promise<boolean>;
}