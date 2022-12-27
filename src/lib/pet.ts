import { QueryKey } from '@tanstack/react-query';

const API_ENDPOINT = 'https://pets-v2.dev-apis.com';
type SearchOptions = {
  animal: string;
  location: string;
  breed: string;
};

export const fetchPet = async ({ queryKey }: { queryKey: QueryKey }) => {
  const id = queryKey[1];
  const res = await fetch(`${API_ENDPOINT}/pets?id=${id}`);

  if (!res.ok) throw new Error(`details/${id} fetch not ok`);
  const jsonData = await res.json();
  return jsonData.pets;
};

export const fetchBreedList = async ({ queryKey }: { queryKey: QueryKey }) => {
  const animal = queryKey[1];

  if (!animal) return [];

  const res = await fetch(`${API_ENDPOINT}/breeds?animal=${animal}`);

  if (!res.ok) throw new Error(`breeds/${animal} fetch not ok`);
  const jsonData = await res.json();
  return jsonData.breeds;
};

export const searchPets = async ({ queryKey }: { queryKey: QueryKey }) => {
  const data = queryKey[1] as unknown as SearchOptions;

  const res = await fetch(
    `${API_ENDPOINT}/pets?animal=${data.animal}&location=${data.location}&breed=${data.breed}`
  );

  if (!res.ok)
    throw new Error(
      `pets search not ok ${data.animal}, ${data.location}, ${data.breed}`
    );
  const jsonData = await res.json();
  return jsonData.pets;
};
