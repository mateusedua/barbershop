"use client"

import Image from "next/image"
import { Button } from "./ui/button"
import { DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog"
import { signIn } from "next-auth/react"

const SignInDialog = () => {
  const handlelogin = () => signIn("google")

  return (
    <>
      <DialogHeader>
        <DialogTitle>Faça login na plataforma</DialogTitle>
        <DialogDescription>
          Conecte-se usando sua conta do Google
        </DialogDescription>
      </DialogHeader>
      <Button variant="outline" className="gap-2" onClick={handlelogin}>
        <Image src="/google.svg" alt="Google" width={16} height={16} />
        Google
      </Button>
    </>
  )
}

export default SignInDialog
