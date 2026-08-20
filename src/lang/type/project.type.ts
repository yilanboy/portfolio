type ProjectDetail = {
  name: string;
  description: string;
};

type ProjectTranslation = {
  section_title_prefix: string;
  section_title_highlight: string;
  section_title_suffix: string;
  blog: ProjectDetail;
  note: ProjectDetail;
  slide: ProjectDetail;
  go: string;
};

export type { ProjectTranslation, ProjectDetail };
