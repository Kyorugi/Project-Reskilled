export interface Project {
  name: string;
}

export interface Level {
  name: string;
  projects?: Project[];
}

export interface Framework {
  name: string;
  levels?: Level[];
}

export interface Language {
  name: string;
  frameworks: Framework[];
  jobId: string;
}

export interface JobsListTypes {
  languages: Language[];
}

export interface NestedListItemProps {
  icon?: React.ReactNode;
  itemText: string;
  nestedItems?: NestedListItemProps[];
}
