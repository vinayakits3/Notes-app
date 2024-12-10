export class NoteCreateRequest {
  title!: string;
  content!: string;

  constructor(data: Partial<NoteCreateRequest>) {
    Object.assign(this, data);
  }
}

export class NoteUpdateRequest {
  title?: string;
  content?: string;

  constructor(data: Partial<NoteUpdateRequest>) {
    Object.assign(this, data);
  }
}

export class NoteQueryRequest {
  page?: number;
  limit?: number;
  searchTerm?: string;

  constructor(data: Partial<NoteQueryRequest>) {
    Object.assign(this, data);
  }
}