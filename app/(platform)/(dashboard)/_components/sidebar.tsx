"use client"

import Link from "next/link"
import { Plus } from "lucide-react"
import { useLocalStorage } from "usehooks-ts"
import { useOrganization, useOrganizationList } from "@clerk/nextjs"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Accordion } from "@/components/ui/accordion"

//storageKey used inside accordion; change sidebar items according to selected workspace
interface SidebarProps {
    storageKey?: string
}

export const Sidebar = ({storageKey}: SidebarProps) => {
    return (
        <>
            <div className="font-medium text-xs flex items-center mb-1">
                <span className="pl-4">Workspaces</span>
                
            </div>
        </>
    )
}