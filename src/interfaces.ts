import { Dispatch, SetStateAction } from "react";

export interface IAnimal {
  id: number;
  type: string;
  name: string;
  age?: number;
  city?: string;
  price?: number;
  color?: string;
  favoriteFood?: string[];
}

type TypeSetState<T> = Dispatch<SetStateAction<T>>;

export interface IContext {
  isDark: boolean;
  setIsDark?: TypeSetState<boolean>;
}
