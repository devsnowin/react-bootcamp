import { QueryKey } from '@tanstack/react-query';

const API_ENDPOINT = 'https://pets-v2.dev-apis.com';

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
  const { animal, location, breed } = queryKey[1];

  const res = await fetch(
    `${API_ENDPOINT}/pets?animal=${animal}&location=${location}&breed=${breed}`
  );

  if (!res.ok)
    throw new Error(`pets search not ok ${animal}, ${location}, ${breed}`);
  const jsonData = await res.json();
  return jsonData.pets;
};
