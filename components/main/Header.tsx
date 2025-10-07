"use client"
import * as React from "react"
import { ModeToggle } from "./ThemeToggler"
export function Header() {
    return (
        <div className="bg-white rounded-xl p-5 flex justify-between">
            Header
            <ModeToggle />
        </div>
    )
}
