import { Button } from "@/components/ui/button"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { BiTrash } from "react-icons/bi";
export default function Home() {

  return (
    <div className="bg-secondary">
      <div className="m-auto w-[1170px] flex flex-col gap-4">
        <div className="rounded-xl p-6 bg-white">
          Category
        </div>
        <div className="rounded-xl p-6 bg-white">
          <Dialog>
            <form>
              <DialogTrigger asChild>
                <Button variant="outline" className="px-20 py-40 border-2 border-red-500 border-dashed text-[14px]">

                  Add new Dish to Appetizers
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[572px]">
                <DialogHeader>
                  <DialogTitle>Dishes info</DialogTitle>

                </DialogHeader>
                <div className="grid gap-4 mt-5">
                  <div className="flex gap-3 items-center">
                    <DialogDescription className="w-26">
                      Dish name
                    </DialogDescription>
                    <Input className="flex-1" id="name-1" name="name" />
                  </div>
                  <div className="flex gap-3 items-center">
                    <DialogDescription className="w-26">
                      Dish category                </DialogDescription>
                    <Input className="flex-1" id="name-1" name="name" />
                  </div>
                  <div className="flex gap-3 items-center">
                    <DialogDescription className="w-26">
                      Ingredients                </DialogDescription>
                    <Input className="flex-1" id="name-1" name="name" />
                  </div>
                  <div className="flex gap-3 items-center">
                    <DialogDescription className="w-26">
                      Price               </DialogDescription>
                    <Input className="flex-1" id="name-1" name="name" />
                  </div>
                  <div className="flex gap-3 items-center">
                    <DialogDescription className="w-26">
                      Image             </DialogDescription>
                    <Input className="flex-1" type="file" />
                  </div>

                </div>
                <DialogFooter>
                  <div className="flex w-full justify-between mt-4">
                    <Button variant="outline"><BiTrash color="red" /></Button>
                    <Button className="px-10 py-5" type="submit">Save changes</Button>
                  </div>
                </DialogFooter>
              </DialogContent>
            </form>
          </Dialog>
        </div>

      </div>
    </div>

  );
}
