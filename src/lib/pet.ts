const API_ENDPOINT = 'https://pets-v2.dev-apis.com';

export const getPet = async (
  animal: string,
  location: string,
  breed: string
) => {
  const res = await fetch(
    `${API_ENDPOINT}/pets?animal=${animal}&location=${location}&breed=${breed}`
  );
  const jsonData = await res.json();
  return jsonData.pets;
};

export const getBreeds = async (animal: string) => {
  const res = await fetch(`${API_ENDPOINT}/breeds?animal=${animal}`);
  const jsonData = await res.json();
  return jsonData.breeds;
};
