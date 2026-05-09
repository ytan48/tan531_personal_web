import type { Metadata } from "next";
import { FadeInSection } from "@/components/FadeInSection";
import { siteContent } from "@/data/siteContent";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: `${siteContent.profile.name} | Courses`,
  description: siteContent.courses.intro,
};

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function CoursesPage() {
  const staticBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const { profile, courses } = siteContent;
  const totalCourses = courses.categories.reduce(
    (count, category) => count + category.courses.length,
    0,
  );

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <FadeInSection className={styles.topBar}>
          <a className={styles.brandLink} href={`${staticBasePath}/`}>
            {profile.name}
          </a>
          <nav className={styles.topNav} aria-label="Courses page">
            <a className={styles.topLink} href={`${staticBasePath}/`}>
              Home
            </a>
            <a
              className={`${styles.topLink} ${styles.activeLink}`}
              href={`${staticBasePath}/courses/`}
              aria-current="page"
            >
              Courses
            </a>
            <a className={styles.topLink} href={`${staticBasePath}/projects/`}>
              Projects
            </a>
            <a className={styles.topLink} href={`${staticBasePath}/#contact`}>
              Contact
            </a>
          </nav>
        </FadeInSection>

        <section className={styles.hero}>
          <FadeInSection className={styles.heroCopy}>
            <span className={styles.eyebrow}>Coursework</span>
            <h1 className={styles.title}>Courses shaping my quantitative foundation.</h1>
            <p className={styles.description}>{courses.intro}</p>
            <div className={styles.heroFacts}>
              <span className={styles.factChip}>UIUC</span>
              <span className={styles.factChip}>{courses.categories.length} course groups</span>
              <span className={styles.factChip}>{totalCourses} courses listed</span>
            </div>
          </FadeInSection>
        </section>

        <section className={styles.jumpSection}>
          <span className={styles.indexLabel}>Browse by area</span>
          <nav className={styles.jumpNav} aria-label="Course categories">
            {courses.categories.map((category, index) => {
              const categoryId = `category-${slugify(category.title)}`;

              return (
                <a key={category.title} className={styles.jumpLink} href={`#${categoryId}`}>
                  <span className={styles.jumpNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{category.title}</span>
                </a>
              );
            })}
          </nav>
        </section>

        <section className={styles.catalog}>
          <div className={styles.categoryList}>
            {courses.categories.map((category, index) => {
              const categoryId = `category-${slugify(category.title)}`;

              return (
                <FadeInSection
                  key={category.title}
                  className={styles.categorySection}
                  delayMs={index * 70}
                >
                  <div className={styles.categoryIntro} id={categoryId}>
                    <span className={styles.categoryNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className={styles.categoryCopy}>
                      <h2 className={styles.categoryTitle}>{category.title}</h2>
                      <p className={styles.categoryDescription}>{category.description}</p>
                    </div>
                  </div>

                  <ul className={styles.courseList}>
                    {category.courses.map((course) => (
                      <li key={course.code} className={styles.courseRow}>
                        <span className={styles.courseCode}>{course.code}</span>
                        <div className={styles.courseCopy}>
                          {course.githubHref ? (
                            <a
                              className={styles.courseLink}
                              href={course.githubHref}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {course.title}
                            </a>
                          ) : (
                            <span className={styles.courseName}>{course.title}</span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </FadeInSection>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
