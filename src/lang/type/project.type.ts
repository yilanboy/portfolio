type ProjectDetail = {
  name: string;
  description: string;
};

type ProjectTranslation = {
  section_title: string;
  blog: ProjectDetail;
  note: ProjectDetail;
  slide: ProjectDetail;
  go: string;
};

export type { ProjectTranslation, ProjectDetail };
