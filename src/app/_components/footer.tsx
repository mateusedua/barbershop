"use client"

import { Card, CardContent } from "./ui/card"
import { DateTime } from "luxon"

const Footer = () => {
  return (
    <footer className="mt-8">
      <Card className="rounded-none">
        <CardContent className="p-6">
          <p className="text-gray-400">
            © {DateTime.now().year} Copyright{" "}
            <span className="font-bold">FSW Barber</span>
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
