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
    <div className="m-auto w-[1280px] shadow-2xl">
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button variant="outline" className="px-20 py-40">Add New Dishes</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[472px]">
            <DialogHeader>
              <DialogTitle>Dishes info</DialogTitle>

            </DialogHeader>
            <div className="grid gap-4">
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
            <DialogFooter className="flex justify-between">

              <Button variant="outline"><BiTrash /></Button>

              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}
