'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AuthPage() {
  const router = useRouter()

  useEffect(() => {
    const redirectToGen = () => {
      router.push('/gen')
    }

    // Simulate login redirect
    setTimeout(redirectToGen, 1500)
  }, [router])

  return (
    <div className="p-8 text-white">
      <h2 className="text-xl">Auth Page</h2>
      <p>Supabase Auth iframe goes here.</p>
    </div>
  )
}
