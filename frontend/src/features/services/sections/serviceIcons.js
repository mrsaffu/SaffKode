import { Monitor, Smartphone, Server, Shield, Database, Cloud, Code, Lightbulb } from 'lucide-react';

/**
 * serviceIcons — maps the `icon` string key on each service record (set
 * in services.data.js) to its lucide-react component. Centralized here
 * so every section that needs a service's icon (hero, related services,
 * listing cards) resolves it the same way.
 */
export const SERVICE_ICONS = {
  monitor: Monitor,
  smartphone: Smartphone,
  server: Server,
  shield: Shield,
  database: Database,
  cloud: Cloud,
  code: Code,
  lightbulb: Lightbulb,
};

export function getServiceIcon(key) {
  return SERVICE_ICONS[key] || Code;
}

export default getServiceIcon;
