import { Router } from 'express';
import { NoteController } from '../controllers/note.controller';

const router = Router();
const noteController = new NoteController();

router.get('/', noteController.getNotes);
router.get('/:id', noteController.getNoteById);
router.post('/', noteController.createNote);
router.put('/:id', noteController.updateNote);
router.delete('/:id', noteController.deleteNote);

export default router;