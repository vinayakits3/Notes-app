import { Request, Response } from 'express';
import { NoteService } from '../services/note.service';
import { validateNote } from '../validators/note.validator';
import { ApiResponse } from '../utils/apiResponse';
import { asyncHandler } from '../utils/asyncHandler';
import { NoteCreateRequest, NoteUpdateRequest, NoteQueryRequest } from '../models/request/note.request';

export class NoteController {
  private noteService: NoteService;

  constructor() {
    this.noteService = new NoteService();
  }

  public getNotes = asyncHandler(async (req: Request, res: Response) => {
    const query = new NoteQueryRequest(req.query);
    const notes = await this.noteService.findAll();
    ApiResponse.success(res, notes);
  });

  public getNoteById = asyncHandler(async (req: Request, res: Response) => {
    const note = await this.noteService.findById(Number(req.params.id));
    ApiResponse.success(res, note);
  });

  public createNote = asyncHandler(async (req: Request, res: Response) => {
    await validateNote(req);
    const noteRequest = new NoteCreateRequest(req.body);
    const note = await this.noteService.create(noteRequest);
    ApiResponse.success(res, note, 201);
  });

  public updateNote = asyncHandler(async (req: Request, res: Response) => {
    await validateNote(req, true);
    const noteRequest = new NoteUpdateRequest(req.body);
    const note = await this.noteService.update(Number(req.params.id), noteRequest);
    ApiResponse.success(res, note);
  });

  public deleteNote = asyncHandler(async (req: Request, res: Response) => {
    await this.noteService.delete(Number(req.params.id));
    ApiResponse.success(res, null, 204);
  });
}