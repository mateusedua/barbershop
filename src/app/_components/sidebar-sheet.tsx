"use client"

import { Button } from "./ui/button"
import { SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import { useSession } from "next-auth/react"
import { LogIn, House, Calendar, LogOut } from "lucide-react"
import { Separator } from "./ui/separator"
import Link from "next/link"
import { quickSearchOptions } from "../_constants/search"
import Image from "next/image"
import { Dialog } from "@radix-ui/react-dialog"
import { DialogContent, DialogTrigger } from "./ui/dialog"
import SignInDialog from "./sign-in-dialog"
import { Avatar, AvatarImage } from "./ui/avatar"
import { signOut } from "next-auth/react"
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog"
import { AlertDialogAction } from "@radix-ui/react-alert-dialog"

const SidebarSheet = () => {
  const { data } = useSession()

  const handleClickLogout = () => signOut()

  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>
      <div className="flex items-center justify-between gap-3 py-5">
        {data?.user ? (
          <div className="flex gap-3">
            <Avatar>
              <AvatarImage src={data?.user?.image ?? ""} alt="" />
            </Avatar>
            <div>
              <h4 className="font-bold">{data?.user?.name}</h4>
              <p className="text-xs">{data?.user?.email}</p>
            </div>
          </div>
        ) : (
          <>
            <h2 className="font-bold">Olá. Faça seu login!</h2>
            <Dialog>
              <DialogTrigger>
                <Button>
                  <LogIn />
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[90%] rounded-md">
                <SignInDialog />
              </DialogContent>
            </Dialog>
          </>
        )}
      </div>
      <Separator />
      <div className="flex flex-col items-center justify-between gap-3 py-5">
        <Button className="w-full justify-start gap-3">
          <House />
          <Link href="/">Ínicio</Link>
        </Button>
        <Button className="w-full justify-start gap-3" variant="ghost">
          <Calendar />
          <Link href="#">Agendamentos</Link>
        </Button>
      </div>
      <Separator />
      <div className="flex flex-col gap-1 py-5">
        {quickSearchOptions.map((option) => (
          <Button
            key={option.title}
            variant="ghost"
            className="w-full justify-start gap-2"
            asChild
          >
            <Link href={`/barbershop?service=${option.title}`}>
              <Image
                src={option.imageUrl}
                alt={option.title}
                width={16}
                height={16}
              />
              {option.title}
            </Link>
          </Button>
        ))}
      </div>
      {data?.user && (
        <>
          <Separator />
          <div className="py-5">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="w-full justify-start gap-2" variant="ghost">
                  <LogOut />
                  Sair da Conta
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-[90%] rounded-md">
                <AlertDialogHeader>
                  <AlertDialogTitle>Sair</AlertDialogTitle>
                  <AlertDialogDescription>
                    Deseja mesmo sair da plataforma?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="flex flex-row items-center gap-3">
                  <AlertDialogCancel asChild className="mt-0">
                    <Button className="w-full">Cancelar</Button>
                  </AlertDialogCancel>
                  <AlertDialogAction asChild>
                    <Button
                      onClick={handleClickLogout}
                      className="w-full"
                      variant="destructive"
                    >
                      Sair
                    </Button>
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </>
      )}
    </SheetContent>
  )
}

export default SidebarSheet
