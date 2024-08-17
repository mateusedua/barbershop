"use client"

import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Menu } from "lucide-react"
import { Button } from "./ui/button"

const Header = () => {
  return (
    <Card className="rounded-none">
      <CardContent className="flex justify-between p-6">
        <Image alt="logo" src="/Logo.png" width={120} height={18} />
        <Button size="icon" variant="outline">
          <Menu />
        </Button>
      </CardContent>
    </Card>
  )
}

export default Header
