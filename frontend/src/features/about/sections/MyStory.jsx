import {
  Lightbulb,
  Users,
  BarChart3,
  Heart,
  Camera,
  BookOpen,
  Plane,
  Gamepad2,
  Music,
  Bike,
} from 'lucide-react';

import { SlideUp, Stagger, StaggerItem } from '../../../components/animation';

import styles from './MyStory.module.css';

const VALUE_ICONS = [Lightbulb, Users, BarChart3, Heart];

const INTEREST_ICONS = {
  Photography: Camera,
  Reading: BookOpen,
  Traveling: Plane,
  Gaming: Gamepad2,
  Music,
  Cycling: Bike,
};

function MyStory({ story, values = [], interests = [] }) {
  if (!story) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT — MY STORY */}
        <div className={styles.storyColumn}>
          <SlideUp className={styles.headingBlock}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              {story.eyebrow || 'My Journey'}
            </span>

            <h2 className={styles.heading}>
              {story.title || 'My'} <span>{story.highlight || 'Story'}</span>
            </h2>
          </SlideUp>

          <div className={styles.storyContent}>
            {story.paragraphs?.map((paragraph, index) => (
              <SlideUp
                as="p"
                key={index}
                delay={index * 0.08}
                className={styles.paragraph}
              >
                {paragraph}
              </SlideUp>
            ))}
          </div>

          {story.pullQuote && (
            <SlideUp delay={0.25}>
              <div className={styles.quoteCard}>
                <span className={styles.quoteMark} aria-hidden="true">
                  “
                </span>

                <p>{story.pullQuote}</p>
              </div>
            </SlideUp>
          )}
        </div>

        {/* RIGHT */}
        <div className={styles.rightColumn}>
          {/* WHAT DRIVES ME */}
          {values.length > 0 && (
            <div className={styles.valuesSection}>
              <SlideUp className={styles.headingBlock}>
                <span className={styles.eyebrow}>
                  <span className={styles.eyebrowLine} />
                  My Values
                </span>

                <h2 className={styles.heading}>
                  What <span>Drives Me</span>
                </h2>
              </SlideUp>

              <Stagger className={styles.valuesGrid}>
                {values.map((value, index) => {
                  const Icon = VALUE_ICONS[index % VALUE_ICONS.length];

                  return (
                    <StaggerItem key={value.title}>
                      <article className={styles.valueCard}>
                        <div className={styles.valueIcon}>
                          <Icon size={25} strokeWidth={1.8} />
                        </div>

                        <div className={styles.valueContent}>
                          <h3>{value.title}</h3>
                          <p>{value.description}</p>
                        </div>
                      </article>
                    </StaggerItem>
                  );
                })}
              </Stagger>
            </div>
          )}

          {/* BEYOND CODE */}
          {interests.length > 0 && (
            <div className={styles.beyondSection}>
              <SlideUp className={styles.headingBlock}>
                <span className={styles.eyebrow}>
                  <span className={styles.eyebrowLine} />
                  Beyond Code
                </span>

                <h2 className={styles.heading}>
                  Outside <span>of Work</span>
                </h2>
              </SlideUp>

              <Stagger className={styles.interestsGrid}>
                {interests.map((interest) => {
                  const Icon = INTEREST_ICONS[interest] || Camera;

                  return (
                    <StaggerItem key={interest}>
                      <div className={styles.interestItem}>
                        <div className={styles.interestIcon}>
                          <Icon size={22} strokeWidth={1.8} />
                        </div>

                        <span>{interest}</span>
                      </div>
                    </StaggerItem>
                  );
                })}
              </Stagger>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default MyStory;
