import * as servicesData from '../data/services.data.js';
import { ApiError } from '../utils/ApiError.js';

export function listServices() {
  return {
    services: servicesData.getAllServices(),
    developmentProcess: servicesData.developmentProcess,
    technologies: servicesData.technologiesUsed.map((tech) => tech.name),
  };
}

export function getServiceBySlug(slug) {
  const service = servicesData.getServiceBySlug(slug);
  if (!service) {
    throw ApiError.notFound(`No service found with slug "${slug}"`);
  }

  return {
    ...service,
    relatedServicesResolved: servicesData.getRelatedServices(service.relatedServices),
    technologiesUsed: servicesData.technologiesUsed,
  };
}

export default { listServices, getServiceBySlug };
