import { RiMenuSearchFill } from "react-icons/ri";
import { Button } from "../ui/button";
import { TbTruckDelivery } from "react-icons/tb";

export function Sidebar() {
    return (
        <div className="w-1/8 bg-white h-screen p-5 sticky">
            NomNom Food Delivery
            <div className="flex flex-col w-fit gap-2 mt-10">
                <Button className="rounded-4xl py-5 px-10 text-left">
                    <RiMenuSearchFill />
                    Food Menu
                </Button>
                <Button className="rounded-4xl py-5 px-10">
                    <TbTruckDelivery />
                    Orders
                </Button>
            </div>

        </div>
    )
}
