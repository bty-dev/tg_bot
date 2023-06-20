import {
    Router
} from 'express';

import {
    getAllEmployees,
    getEmployee
} from '../controllers/employees.controller.js';

const router = Router();

router.get('/api/employees', getAllEmployees)
    .get('/api/employees/:id', getEmployee);

export default router;