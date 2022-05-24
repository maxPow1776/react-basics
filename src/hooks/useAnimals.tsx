import { useMemo } from "react";
import { IAnimal } from "../interfaces";

export const useAnimals = (animals: IAnimal[], withCats: boolean) => {
  const sortedAnimals = useMemo(() => {
    if (withCats) {
      return [...animals].filter(
        (animal) => animal.type.toLowerCase() !== "cat"
      );
    }
    return animals;
  }, [withCats, animals]);

  return sortedAnimals;
};
