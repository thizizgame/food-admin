"use client"
import { AdminLayout } from "@/components/main/AdminLayout";
import { CreateFoodDialog } from "@/components/main/CreateFoodDialog";
import DishCategory from "@/components/main/DishCategory";
import { FoodType } from "@/types";
import { useEffect, useState } from "react";
export default function Home() {
  const [food, setFood] = useState<FoodType[]>([]);
  const getFoods = async () => {
    const result = await fetch("http://localhost:4000/api/food");
    const responseData = await result.json();
    console.log({ responseData });
    const { data } = responseData;
    console.log(data, "data");
    setFood(data);
  };
  useEffect(() => {
    getFoods();
  }, []);
  return (
    <AdminLayout>
      <DishCategory />
      <div className="m-auto w-[1170px] flex flex-wrap gap-2 rounded-xl p-6 bg-white mt-4">
        <CreateFoodDialog />
        {food.map((food) => (
          <div className="w-69 border-1 rounded-xl" key={food.foodName}>

            <img src={food.image} className="w-full rounded-xl h-40" />

            <div className="flex justify-between">
              <p className="text-[#EF4444] font-semibold">{food.foodName}</p>
              <p>{food.price} $</p>
            </div>
            <p>{food.ingredients}</p>
            <p>{food.category}</p>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}
