'use client'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { redirect } from "next/navigation"

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 flex flex-col items-center justify-center p-4">
      
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-6">
        How was your SNBP result
        </h1>

        <div className="mb-8 rounded-lg overflow-hidden">
        <Image
          src={'/tenor.gif'}
          layout={'responsive'}
          height={175}
          width={175}
          alt={`Bee Rizzz`}
          unoptimized={true}
        />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium px-6 py-2">
            <Link href={"https://gift-card-inky-seven.vercel.app/"}>
            
            Nice Try
            </Link>
          </Button>

          <Button
            variant="outline"
            className="border-2 border-pink-400 text-pink-500 hover:bg-pink-50 font-medium px-6 py-2"
            onClick={() => redirect("https://success-snbt.vercel.app/")}
          >
            Success
          </Button >
        </div>
      </div>
    </div>
  )
}

