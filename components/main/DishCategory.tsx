"use client";
import { Badge } from "@/components/ui/badge";

import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { ChangeEvent, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CategoryType } from "@/types";


export default function DishCategory() {
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [newCategory, setNewCategory] = useState<string | undefined>();
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const getCategories = async () => {
        const result = await fetch("http://localhost:4000/api/categories");
        const responseData = await result.json();
        console.log({ responseData });
        const { data } = responseData;
        console.log(data, "data");
        setCategories(data);
    };

    useEffect(() => {
        getCategories();
    }, []);

    const newCategoryNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewCategory(e.target.value);
    };
    const createCategoryHandler = async () => {
        await fetch("http://localhost:4000/api/categories", {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                newCategory,
            }),
        });
        setModalOpen(false);
        await getCategories();
    };

    const deleteCategoryHandler = async (category: string) => {
        await fetch("http://localhost:4000/api/categories/delete", {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(category),
        });
    };

    return (
        <div className="m-auto w-[1170px] flex flex-col gap-4 mt-4">

            <div className="rounded-xl p-6 bg-white">
                <h1 className="text-xl font-bold mb-4">Dish Categories</h1>
                <div className="flex items-center gap-2 flex-wrap">
                    {categories.map((category) => (
                        <Badge className="px-3 py-1" key={category._id}>{category.name}</Badge>
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
                                    <Input type="text" placeholder="Type category name..." onChange={newCategoryNameChangeHandler} />
                                </div>
                                <DialogFooter>
                                    <Button className="px-10 py-5 mt-12" type="submit" onClick={createCategoryHandler}>Add category</Button>
                                </DialogFooter>
                            </DialogContent>
                        </form>
                    </Dialog>
                </div>
            </div>
        </div>
    )
}
