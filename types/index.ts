export type CategoryType = {
    _id: string,
    name: string | null
}
export type FoodType = {
    foodName: string;
    price: number;
    image: File | undefined;
    ingredients: string;
    category: string;
}