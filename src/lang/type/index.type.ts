import type { HeaderTranslation } from './header.type';
import type { IntroductionTranslation } from './introduction.type';
import type { ProjectTranslation } from './project.type';
import type { ExperienceTranslation } from './experience.type';
import type { SkillTranslation } from './skill.type';
import type { AboutTranslation } from './about.type';
import type { FooterTranslation } from './footer.type';
import type { PostTranslation } from './post.type';

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
