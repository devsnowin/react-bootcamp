import { useGetBreedsQuery } from '../features/pet';

export default function useBreedList(animal: Animal | null) {
  const { data: breeds, isLoading } = useGetBreedsQuery(animal, {
    skip: !animal,
  });

  if (!animal) return [[], 'loaded'];

  return [breeds ?? [], isLoading];
}
