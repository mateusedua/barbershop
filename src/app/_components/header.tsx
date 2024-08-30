"use client"

import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Menu } from "lucide-react"
import { Button } from "./ui/button"
import { Sheet, SheetTrigger } from "./ui/sheet"
import SidebarSheet from "./sidebar-sheet"
import Link from "next/link"

const Header = () => {
  return (
    <Card className="rounded-none">
      <CardContent className="flex items-center justify-between p-6">
        <Link href="/">
          <Image alt="logo" src="/Logo.svg" width={120} height={18} />
        </Link>
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
