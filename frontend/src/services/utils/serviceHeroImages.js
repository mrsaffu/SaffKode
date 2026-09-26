import webApplicationHero from '../../assets/images/serviceDetails/hero/service-details-hero-bg.png';
import responsiveFrontendHero from '../../assets/images/serviceDetails/hero/responsive-frontend.png';
import backendApiHero from '../../assets/images/serviceDetails/hero/BackendAPIDevelopment.png';
import authenticationHero from '../../assets/images/serviceDetails/hero/Authentication&AccessControl.png';
import databaseHero from '../../assets/images/serviceDetails/hero/Database Design&Optimization.png';
import deploymentHero from '../../assets/images/serviceDetails/hero/Deployment & Cloud Solutions.png';
import maintenanceHero from '../../assets/images/serviceDetails/hero/Maintenance & Support.png';
import GuidanceHero from '../../assets/images/serviceDetails/hero/Consultation & Technical Guidance.png';



const SERVICE_HERO_IMAGES = {
    'web-application-development': webApplicationHero,
    'responsive-frontend-development': responsiveFrontendHero,
    'backend-api-development': backendApiHero,
    'authentication-access-control': authenticationHero,
    'database-design-optimization': databaseHero,
    'deployment-cloud-solutions': deploymentHero,
    'maintenance-support': maintenanceHero,
    'consultation-technical-guidance': GuidanceHero,

};

export function getServiceHeroImage(slug) {
    if (!slug || typeof slug !== 'string') {
        return null;
    }

    return SERVICE_HERO_IMAGES[slug] || null;
}

export default SERVICE_HERO_IMAGES;