export interface Project {
  name: string;
}

export interface Level {
  name: string;
  projects?: Project[];
}

export interface Framework {
  name: String;
  levels?: Level[];
}

export interface Language {
  name: string;
  frameworks: Framework[];
  jobId: string;
}

export interface jobsList {
  languages: Language[];
}
