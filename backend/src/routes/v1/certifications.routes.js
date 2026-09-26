import { Router } from 'express';
import { getCertifications } from '../../controllers/certifications.controller.js';

const router = Router();

router.get('/', getCertifications);

export default router;
