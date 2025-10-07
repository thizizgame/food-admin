"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "../ui/input"
export function DishCategory() {
    const [categories, setCategories] = useState<string[]>([]);
    const [name, setName] = useState<string>("");
    async function getCategories() {
        const result = await fetch("http://localhost:4000/categories");
        const responseData = await result.json();
        setCategories(responseData);
    }

    useEffect(() => {
        getCategories()
    }, [])
    async function createNewCategory() {
        await fetch("http://localhost:4000/categories", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name }),
        });
        getCategories()
    }
    function categoryNameChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        setName(e.target.value)
    }
    return (
        <div className="m-auto w-[1170px] flex flex-col gap-4 mt-4">

            <div className="rounded-xl p-6 bg-white">
                <h1 className="text-xl font-bold mb-4">Dish Categories</h1>
                <div className="flex items-center gap-2 flex-wrap">
                    {categories.map((category) => (
                        <Button key={category}>{category}</Button>
                    ))}
                    <Dialog>
                        <form>
                            <DialogTrigger asChild>
                                <Button className="bg-red-500 text-white rounded-full py-3 px-3.5">
                                    +
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[472px]">
                                <DialogHeader>
                                    <DialogTitle>Add new category</DialogTitle>
                                </DialogHeader>
                                <div className="grid gap-4 mt-6">
                                    <p className="font-semibold"> Category name</p>
                                    <Input placeholder="Type category name..." defaultValue={name} value={name} onChange={categoryNameChangeHandler} />
                                </div>
                                <DialogFooter>
                                    <Button className="px-10 py-5 mt-12" type="submit" onClick={createNewCategory}>Add category</Button>
                                </DialogFooter>
                            </DialogContent>
                        </form>
                    </Dialog>
                </div>
            </div>
        </div>
    )
}
