import * as aboutData from '../data/about.data.js';

/**
 * about.service.js — assembles the full About page payload. Reads the
 * interim static data source today; swapped for a Mongoose query once
 * an About model is introduced, with the same return shape.
 */
export function getAboutPage() {
  return {
    profile: aboutData.profile,
    story: aboutData.story,
    values: aboutData.values,
    interests: aboutData.interests,
    journey: aboutData.journey,
    certifications: aboutData.certificationsPreview,
    education: aboutData.educationDetail,
  };
}

export default { getAboutPage };
