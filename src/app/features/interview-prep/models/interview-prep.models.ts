export interface Technology {
  id: string;
  name: string;
  slug: string;
  icon: string; // tabler icon class, e.g. 'ti ti-brand-java'
  description: string;
  questionCount: number;
}

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface CodeSnippet {
  language: string;
  code: string;
}

export interface Question {
  id: string;
  technologyId: string;
  category: string;
  difficulty: Difficulty;
  question: string;
  answer: string;
  codeSnippet?: CodeSnippet;
  tags: string[];
  relatedQuestionIds?: string[];
}
