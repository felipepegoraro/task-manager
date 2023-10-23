import {ChangeEvent, FormEvent} from 'react';
export type TEvent = ChangeEvent<HTMLInputElement| HTMLTextAreaElement | HTMLSelectElement>
export type TFormHandler = FormEvent<HTMLFormElement>;

import { Dispatch, SetStateAction } from 'react';
export type TsetStateFn<T> = Dispatch<SetStateAction<T>>;

export type DIFFICULTY = 
  | 'EASY'
  | 'MEDIUM'
  | 'HARD';

export type IMPORTANCE = 
  | 'WEAK'
  | 'MEDIUM'
  | 'URGENT';

export type TODO = {
  name: string;
  description: string;
  note: string;
  addedDate: Date;
  status: boolean;
  difficulty: DIFFICULTY;
  importance: IMPORTANCE;
};

export type TODOHandlerProps<T> = {
  key: 'name' | 'description' | 'note' | 'status' | 'addedDate' | 'difficulty' | 'importance';
  value: T;
}

export type DB_TODO = Array<TODO & {id: string}>;

export type TODOStatus = {
  data: DB_TODO,
  n_of_done: number
}

export type TFormProps = {
  onSubmitData: (enteredData: TODO) => void;
}
