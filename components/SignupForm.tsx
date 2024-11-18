"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LollipopIcon, Sparkles, ShoppingBag } from 'lucide-react'

export function SignupForm() {
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gradient-to-br from-pink-100 to-purple-100">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 bg-pink-50">
        <div className="text-center mb-8 animate-fade-in-down">
          <h1 className="text-4xl font-bold text-pink-600 mb-2">Mel Shop</h1>
          <p className="text-pink-500">Votre destination beauté préférée</p>
        </div>
        <div className="w-full max-w-md relative animate-fade-in-up">
          <div className="absolute inset-0 bg-white bg-opacity-40 backdrop-blur-sm rounded-lg" />
          <div className="relative p-6 grid grid-cols-2 gap-4">
            <div className="col-span-2 flex justify-center items-center">
              <Sparkles className="text-pink-500 w-16 h-16" />
            </div>
            <div className="bg-pink-200 p-4 rounded-lg flex flex-col items-center justify-center transition-transform hover:scale-105">
              <LollipopIcon className="text-pink-600 w-12 h-12 mb-2" />
              <span className="text-pink-700 font-semibold">Maquillage</span>
            </div>
            <div className="bg-purple-200 p-4 rounded-lg flex flex-col items-center justify-center transition-transform hover:scale-105">
              <ShoppingBag className="text-purple-600 w-12 h-12 mb-2" />
              <span className="text-purple-700 font-semibold">Accessoires</span>
            </div>
            <div className="col-span-2 bg-pink-300 p-4 rounded-lg text-center transition-transform hover:scale-105">
              <span className="text-pink-800 font-bold text-lg">Nouveautés chaque semaine !</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center p-8 bg-white">
        <div className="w-full max-w-md animate-fade-in-right">
          <form onSubmit={onSubmit} className="space-y-6">
            <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">Inscription</h2>
            <div className="space-y-2">
              <Label htmlFor="name" className="text-pink-600">Nom</Label>
              <Input id="name" placeholder="Votre nom" required className="border-pink-300 focus:border-pink-500" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-pink-600">Email</Label>
              <Input id="email" type="email" placeholder="votre@email.com" required className="border-pink-300 focus:border-pink-500" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-pink-600">Mot de passe</Label>
              <Input id="password" type="password" placeholder="••••••••" required className="border-pink-300 focus:border-pink-500" />
            </div>
            <Button className="w-full bg-pink-500 hover:bg-pink-600 transition-colors" type="submit" disabled={isLoading}>
              {isLoading ? "Inscription en cours..." : "S'inscrire"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}