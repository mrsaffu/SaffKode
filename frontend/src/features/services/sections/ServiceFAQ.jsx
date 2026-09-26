import { memo } from 'react';
import { CircleHelp } from 'lucide-react';

import Section from '../../../components/layout/Section';
import { Accordion, AccordionItem } from '../../../components/ui';
import { SlideUp } from '../../../components/animation';

import styles from './ServiceFAQ.module.css';

function ServiceFAQ({ faqs = [] }) {
  if (!faqs.length) return null;

  return (
    <Section background="secondary" className={styles.mainsection}>
      <div className={styles.topborder}></div>
      <div className={styles.section}>

        <div className={styles.layout}>
          <SlideUp className={styles.header}>
            <div className={styles.headingIcon} aria-hidden="true">
              <CircleHelp size={25} strokeWidth={1.8} />
            </div>

            <div className={styles.headingContent}>
              <p className={styles.eyebrow}>FAQ</p>

              <h2 className={styles.title}>Frequently Asked Questions</h2>

              <p className={styles.description}>
                Got questions? Here are some common ones.
              </p>
            </div>
          </SlideUp>

          <div className={styles.wrapper}>
            <Accordion className={styles.accordion}>
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  id={`faq-${index}`}
                  title={faq.question}
                >
                  {faq.answer}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
      <div className={styles.bottomborder}></div>
      {/* <hr /> */}

    </Section>
  );
}

export default memo(ServiceFAQ);
