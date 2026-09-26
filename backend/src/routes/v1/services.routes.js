import { Router } from 'express';
import { getServices, getServiceDetail } from '../../controllers/services.controller.js';

const router = Router();

router.get('/', getServices);
router.get('/:slug', getServiceDetail);

export default router;


