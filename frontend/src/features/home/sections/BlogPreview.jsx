import { ArrowUpRight, Clock, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../../../components/layout/Section';
import Button from '../../../components/ui/Button';
import styles from './BlogPreview.module.css';

function formatDate(value) {
  if (!value) return '';

  return new Date(value).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },

  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: index * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function BlogPreview({ posts = [] }) {
  if (posts.length === 0) return null;

  const visiblePosts = posts.slice(0, 3);

  return (
    <Section className={styles.blogSection}>
      <div className={styles.wrapper}>
        {/* ======================================
            HEADER
        ======================================= */}
        <div className={styles.header}>
          <div className={styles.headingGroup}>
            <div className={styles.eyebrowRow}>
              <span className={styles.headingIcon}>
                <Sparkles size={16} strokeWidth={2} />
              </span>

              <span className={styles.eyebrow}>Latest From Blog</span>
            </div>

            <h2 className={styles.heading}>
              Insights & <span>Thoughts</span>
            </h2>
          </div>

          <Button
            to="/blog"
            variant="ghost"
            size="sm"
            icon={<ArrowUpRight size={15} />}
            className={styles.viewAll}
          >
            View All Posts
          </Button>
        </div>

        {/* ======================================
            BLOG CARDS
        ======================================= */}
        <div className={styles.grid}>
          {visiblePosts.map((post, index) => (
            <motion.article
              key={post.slug}
              className={styles.article}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.25,
              }}
              variants={cardVariants}
            >
              <Link
                to={`/blog/${post.slug}`}
                className={styles.card}
                aria-label={`Read ${post.title}`}
              >
                {/* IMAGE */}
                <div className={styles.imageWrapper}>
                  {post.image ? (
                    <img
                      src={post.image}
                      alt=""
                      className={styles.image}
                      loading="lazy"
                    />
                  ) : (
                    <div className={styles.imageFallback} aria-hidden="true" />
                  )}

                  <span className={styles.imageOverlay} />

                  <span className={styles.imageArrow}>
                    <ArrowUpRight size={14} />
                  </span>
                </div>

                {/* CONTENT */}
                <div className={styles.content}>
                  <div className={styles.titleArea}>
                    <h3 className={styles.title}>{post.title}</h3>
                  </div>

                  <div className={styles.meta}>
                    <time dateTime={post.publishedAt}>
                      {formatDate(post.publishedAt)}
                    </time>

                    <span className={styles.separator}>·</span>

                    <span className={styles.readTime}>
                      <Clock size={11} />
                      {post.readingTime} min read
                    </span>
                  </div>
                </div>

                <span className={styles.cardGlow} aria-hidden="true" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default BlogPreview;
