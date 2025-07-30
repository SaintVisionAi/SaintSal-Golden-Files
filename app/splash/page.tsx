'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function SplashPage() {
  const router = useRouter()
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/applehome')
    }, 2000)
    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold">Welcome to SAINTSAL™</h1>
    </div>
  )
}
