import { CreateFoodDialog } from "./CreateFoodDialog"
type DishesProps = {
    title: string,
    id: string,
}
export function DishSection({ title, id }: DishesProps) {
    return (
        <div className="m-auto w-[1170px] flex flex-col gap-4 mt-4">

            <div className="rounded-xl p-6 bg-white" key={id}>
                <h1 className="text-xl font-bold mb-4">{title}</h1>
                <CreateFoodDialog />
            </div>
        </div>
    )
}
