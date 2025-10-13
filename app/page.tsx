import { AdminLayout } from "@/components/main/AdminLayout";
import { DishCategory } from "@/components/main/DishCategory";
import { DishSection } from "@/components/main/DishSection";
export default function Home() {

  return (
    <AdminLayout>
      <DishCategory />
      <DishSection id="1" title="Appetizers" />
      <DishSection id="2" title="Salad" />
      <DishSection id="3" title="Pizzas" />
       <DishSection id="4" title="Lunch Favorites" />
    </AdminLayout>
  );
}
