import { useQuery } from '@tanstack/react-query';
import { fetchBreedList } from './pet';

export default function useBreedList(animal: Animal | null) {
  const results = useQuery(['breeds', animal], fetchBreedList);

  return [results?.data ?? [], results.status];
}
