"use client"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { ChangeEvent, useEffect, useState } from "react"
type DishesProps = {
    title: string,
    id: string,
}
export function DishSection({ title, id }: DishesProps) {
    const [name, setName] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const [ingredients, setIngredients] = useState<string>("");
    const [foods, setFoods] = useState<string[]>([]);
    async function getFoods() {
        const result = await fetch("http://localhost:4000/foods");
        const responseData = await result.json();
        setFoods(responseData);
    }

    useEffect(() => {
        getFoods()
    }, [])
    function addFoodHandler() {
        fetch('http://localhost:4000/create-food', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ingredients: ingredients,
                price: price,
                name: name,
            }),
        })
    }
    function nameChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        setName(e.target.value)
    }
    function priceChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        setPrice(Number(e.target.value))
    }
    function ingredientsChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        setIngredients(e.target.value)
    }
    return (
        <div className="m-auto w-[1170px] flex flex-col gap-4 mt-4">

            <div className="rounded-xl p-6 bg-white">
                <h1 className="text-xl font-bold mb-4">{title}</h1>
                <Dialog>
                    <form>
                        <DialogTrigger asChild>
                            <Button variant="outline" className="w-[270px] h-[240px] border-2 border-red-500 border-dashed text-[14px]">
                                <div className="flex flex-col gap-3 items-center">
                                    <p className="bg-red-500 text-white py-3 px-4.5 rounded-full mb-4">+</p>
                                    <p>Add new Dish to {title}</p>
                                </div>
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[472px]">
                            <DialogHeader>
                                <DialogTitle>Add new Dish to {title}</DialogTitle>
                            </DialogHeader>
                            <div className="grid gap-4 mt-6">
                                <div className="flex justify-between gap-10">
                                    <div className="flex flex-col w-fit">
                                        <p className="font-semibold mb-2">Food Name</p>
                                        <Input id="name" name="name" type="text" placeholder="Type food name" defaultValue="Food" value={name} onChange={nameChangeHandler} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-semibold mb-2">Food price</p>
                                        <Input id="price" name="price" type="number" defaultValue="0" value={price} onChange={priceChangeHandler} placeholder="Enter price..." />
                                    </div>
                                </div>
                                <p className="font-semibold"> Ingredients</p>
                                <Input className="h-22.5" defaultValue={ingredients} value={ingredients} onChange={ingredientsChangeHandler} placeholder="List ingredients..." />
                                <p className="font-semibold">Food image</p>
                                <Input type="file" />
                            </div>
                            <DialogFooter>
                                <Button key={id} className="px-10 py-5 mt-12" type="submit" onClick={addFoodHandler}>Add Dish</Button>
                            </DialogFooter>
                        </DialogContent>
                    </form>
                </Dialog>
            </div>
        </div>
    )
}
