export enum TodoCategory {
  Work = "Work",
  Family = "Family",
  Personal = "Personal",
  Miscellaneous = "Miscellaneous",
}

export enum TodoLevel {
  Important = "important",
  SoSo = "so so",
  Whatever = "whatever",
}

export type Todo = {
  id: string;
  importance: TodoLevel;
  category: TodoCategory;
  label: string;
  description: string;
  location: string;
  isDone: boolean;
};
