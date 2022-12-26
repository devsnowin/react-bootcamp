import { useEffect, useState } from 'react';
import { getBreeds } from './pet';

const localCache: any = {};

export default function useBreedList(animal: string) {
  const [breedList, setBreedList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchBreeds = async () => {
      setBreedList([]);
      setIsLoading(true);
      const data = await getBreeds(animal);
      localCache[animal] = data || [];
      setBreedList(localCache[animal]);
      setIsLoading(false);
    };

    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      fetchBreeds();
    }
  }, [animal]);

  return [breedList, isLoading];
}
