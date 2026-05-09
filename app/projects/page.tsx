import { FadeInSection } from "@/components/FadeInSection";
import { ProjectCard } from "@/components/ProjectCard";
import { siteContent } from "@/data/siteContent";
import styles from "./page.module.css";

const { featuredProjects, moreProjects } = siteContent;

export default function ProjectsPage() {
  const staticBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <FadeInSection className={styles.topBar}>
          <a className={styles.backLink} href={`${staticBasePath}/`}>
            Back to home
          </a>
          <a className={styles.contactLink} href={`${staticBasePath}/courses/`}>
            Courses
          </a>
          <a className={styles.contactLink} href={`${staticBasePath}/#contact`}>
            Contact
          </a>
        </FadeInSection>

        <FadeInSection className={styles.hero} delayMs={60}>
          <span className={styles.eyebrow}>Projects archive</span>
          <h1 className={styles.title}>More data science, analytics project.</h1>
          <p className={styles.description}>
            This page collects some of my coursework and projects.
          </p>
        </FadeInSection>

        <section className={styles.section}>
          <FadeInSection className={styles.sectionHeader}>
            <div>
              <span className={styles.eyebrow}>Featured</span>
              <h2 className={styles.sectionTitle}>Core portfolio projects.</h2>
            </div>
          </FadeInSection>

          <div className={styles.grid}>
            {featuredProjects.map((project, index) => (
              <FadeInSection
                key={project.title}
                delayMs={index * 90}
                className={styles.cardReveal}
              >
                <ProjectCard project={project} />
              </FadeInSection>
            ))}
          </div>
        </section>

        {moreProjects.length > 0 ? (
          <section className={styles.section}>
            <FadeInSection className={styles.sectionHeader}>
              <div>
                <span className={styles.eyebrow}>More work</span>
                <h2 className={styles.sectionTitle}>Additional projects to explore.</h2>
              </div>
            </FadeInSection>

            <div className={styles.grid}>
              {moreProjects.map((project, index) => (
                <FadeInSection
                  key={project.title}
                  delayMs={index * 90}
                  className={styles.cardReveal}
                >
                  <ProjectCard project={project} />
                </FadeInSection>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
}
