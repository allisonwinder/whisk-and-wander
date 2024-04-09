export interface Recipe {
  id: number;
  fullName: string;
  abrvName: string;
  category: string;
  subcategory: string | null;
  instructions: string;
  image: string;
  prepTime: string | null;
  cookTime: string | null;
  totalTime: string | null;
  ingredients: string;
}
