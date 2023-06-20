import {
    Router
} from 'express';
import {
    getAllStatistics
} from '../controllers/statistics.controller.js';

const router = Router();

router.get('/api/statistics', getAllStatistics);

export default router;