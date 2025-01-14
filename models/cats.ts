export interface CatImage {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: Breed[]; // Array of breeds if available
  categories?: Category[]; // Array of categories if available
}

export interface Breed {
  id: string;
  name: string;
  // Add more breed properties as needed (weight, temperament, etc.)
}

export interface Category {
  id: number;
  name: string;
}
