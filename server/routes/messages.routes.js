import {
    Router
} from 'express';
import {
    createMessage,
    getAllMessages
} from '../controllers/messages.controller.js';

const router = Router();

router.get('/api/messages', getAllMessages);
router.post('/api/createMessage/:date', createMessage);

export default router;