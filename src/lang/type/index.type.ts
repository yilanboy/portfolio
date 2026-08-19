import type { HeaderTranslation } from "./header.type.js";
import type { IntroductionTranslation } from "./introduction.type.js";
import type { ProjectTranslation } from "./project.type.js";
import type { ExperienceTranslation } from "./experience.type.js";
import type { SkillTranslation } from "./skill.type.js";
import type { AboutTranslation } from "./about.type.js";
import type { FooterTranslation } from "./footer.type.js";
import type { PostTranslation } from "./post.type.js";

type Translation = {
  header: HeaderTranslation;
  introduction: IntroductionTranslation;
  project: ProjectTranslation;
  experience: ExperienceTranslation;
  skill: SkillTranslation;
  about: AboutTranslation;
  footer: FooterTranslation;
  post: PostTranslation;
};

export type { Translation };
