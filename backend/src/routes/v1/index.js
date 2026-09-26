import { Router } from 'express';
import { ApiResponse } from '../../utils/ApiResponse.js';
import portfolioRoutes from './portfolio.routes.js';
import aboutRoutes from './about.routes.js';
import servicesRoutes from './services.routes.js';
import projectsRoutes from './projects.routes.js';
import experienceRoutes from './experience.routes.js';
import skillsRoutes from './skills.routes.js';
import educationRoutes from './education.routes.js';
import certificationsRoutes from './certifications.routes.js';

/**
 * v1 router — every feature router (portfolio, about, services, projects,
 * experience, skills, education, certifications, blog, contact) mounts
 * here as its phase is implemented.
 */
const router = Router();

router.get('/', (req, res) => {
  ApiResponse.ok(res, {
    name: 'Safwan Ahmad Portfolio API',
    version: 'v1',
  });
});

router.use('/portfolio', portfolioRoutes);
router.use('/about', aboutRoutes);
router.use('/services', servicesRoutes);
router.use('/projects', projectsRoutes);
router.use('/experience', experienceRoutes);
router.use('/skills', skillsRoutes);
router.use('/education', educationRoutes);
router.use('/certifications', certificationsRoutes);

// Additional feature routers are added here in later phases.

export default router;
