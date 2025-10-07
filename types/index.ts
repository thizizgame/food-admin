export type CategoryType = {
    id: number;
    categoryName: string;
};
export type FoodType = {
    id: number;
    foodName: string;
    price: number;
    image?: string;
    ingredients: string;
    category?: CategoryType[];
}