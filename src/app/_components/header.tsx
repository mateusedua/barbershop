"use client"

import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Menu } from "lucide-react"
import { Button } from "./ui/button"
import { Sheet, SheetTrigger } from "./ui/sheet"
import SidebarSheet from "./sidebar-sheet"

const Header = () => {
  return (
    <Card className="rounded-none">
      <CardContent className="flex justify-between p-6">
        <Image alt="logo" src="/Logo.svg" width={120} height={18} />
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <Menu />
            </Button>
          </SheetTrigger>
          <SidebarSheet />
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
