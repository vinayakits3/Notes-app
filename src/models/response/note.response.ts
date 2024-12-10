import { INote } from '../../interfaces/note.interface';

export class NoteResponse implements INote {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(note: INote) {
    this.id = note.id!;
    this.title = note.title;
    this.content = note.content;
    this.createdAt = note.createdAt!;
    this.updatedAt = note.updatedAt!;
  }
}

export class NotesListResponse {
  items: NoteResponse[];
  total: number;
  page: number;
  limit: number;

  constructor(notes: INote[], total: number, page: number, limit: number) {
    this.items = notes.map(note => new NoteResponse(note));
    this.total = total;
    this.page = page;
    this.limit = limit;
  }
}