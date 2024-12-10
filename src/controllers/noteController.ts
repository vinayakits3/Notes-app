import { Request, Response } from 'express';
import Note from '../models/Note';

export const getNotes = async (req: Request, res: Response) => {
  try {
    const notes = await Note.findAll();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching notes', error });
  }
};

export const getNoteById = async (req: Request, res: Response) => {
  try {
    const note = await Note.findByPk(req.params.id);
    if (note) {
      res.json(note);
    } else {
      res.status(404).json({ message: 'Note not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching note', error });
  }
};

export const createNote = async (req: Request, res: Response) => {
  try {
    const note = await Note.create(req.body);
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ message: 'Error creating note', error });
  }
};

export const updateNote = async (req: Request, res: Response) => {
  try {
    const note = await Note.findByPk(req.params.id);
    if (note) {
      await note.update(req.body);
      res.json(note);
    } else {
      res.status(404).json({ message: 'Note not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating note', error });
  }
};

export const deleteNote = async (req: Request, res: Response) => {
  try {
    const note = await Note.findByPk(req.params.id);
    if (note) {
      await note.destroy();
      res.json({ message: 'Note deleted successfully' });
    } else {
      res.status(404).json({ message: 'Note not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting note', error });
  }
};