type Animal = 'dog' | 'cat' | 'bird' | 'reptile' | 'rabbit';

type SearchOptions = {
  animal: Animal;
  location: string;
  breed: string;
};

interface Pet {
  id: number;
  name: string;
  animal: Animal;
  city: string;
  state: string;
  description: string;
  breed: string;
  images: string[];
}

interface PetAPIResponse {
  numberOfResults: number;
  startIndex: number;
  endIndex: number;
  hasNext: boolean;
  pets: Pet[];
}
