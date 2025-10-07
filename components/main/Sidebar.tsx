import { RiMenuSearchFill } from "react-icons/ri";
import { Button } from "../ui/button";
import { TbTruckDelivery } from "react-icons/tb";
import { IoSettingsSharp } from "react-icons/io5";

export function Sidebar() {
    return (
        <div className="w-1/8 bg-white h-screen p-5 sticky">
            <p className="text-3xl font-bold">  NomNom </p>
            Swift delivery
            <div className="flex flex-col w-fit gap-2 mt-10">
                <Button className="rounded-4xl py-5 px-10">
                    <RiMenuSearchFill />
                    Food Menu
                </Button>
                <Button className="rounded-4xl py-5 px-10">
                    <TbTruckDelivery />
                    Orders
                </Button>
                <Button className="rounded-4xl py-5 px-10">
                    <IoSettingsSharp />
                    Settings
                </Button>
            </div>

        </div>
    )
}
