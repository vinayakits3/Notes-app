import { INoteService } from '../interfaces/note.interface';
import { NoteCreateRequest, NoteUpdateRequest } from '../models/request/note.request';
import { NoteResponse, NotesListResponse } from '../models/response/note.response';
import Note from '../models/Note.model';
import { NotFoundError } from '../utils/errors';
import { logger } from '../utils/logger';

export class NoteService implements INoteService {
  public async findAll(): Promise<NoteResponse[]> {
    try {
      const notes = await Note.findAll();
      return notes.map(note => new NoteResponse(note));
    } catch (error) {
      logger.error('Error in NoteService.findAll:', error);
      throw error;
    }
  }

  public async findById(id: number): Promise<NoteResponse | null> {
    try {
      const note = await Note.findByPk(id);
      if (!note) throw new NotFoundError('Note not found');
      return new NoteResponse(note);
    } catch (error) {
      logger.error(`Error in NoteService.findById: ${id}`, error);
      throw error;
    }
  }

  public async create(data: NoteCreateRequest): Promise<NoteResponse> {
    try {
      const note = await Note.create(data);
      return new NoteResponse(note);
    } catch (error) {
      logger.error('Error in NoteService.create:', error);
      throw error;
    }
  }

  public async update(id: number, data: NoteUpdateRequest): Promise<NoteResponse | null> {
    try {
      const note = await Note.findByPk(id);
      if (!note) throw new NotFoundError('Note not found');
      await note.update(data);
      return new NoteResponse(note);
    } catch (error) {
      logger.error(`Error in NoteService.update: ${id}`, error);
      throw error;
    }
  }

  public async delete(id: number): Promise<boolean> {
    try {
      const note = await Note.findByPk(id);
      if (!note) throw new NotFoundError('Note not found');
      await note.destroy();
      return true;
    } catch (error) {
      logger.error(`Error in NoteService.delete: ${id}`, error);
      throw error;
    }
  }
}