'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/Button'
import { Eye, EyeOff } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError(false)

    const users = {
      admin: { email: 'admin@talktamila.com', pass: 'admin123', url: '/admin', role: 'admin' },
      freelancer: { email: 'free@talktamila.com', pass: 'free123', url: '/freelancer', role: 'freekancers' },
      influencer: { email: 'inf@talktamila.com', pass: 'inf123', url: '/influencer', role: 'influencers' }
    }

    if (email === users.admin.email && password === users.admin.pass) {
      localStorage.setItem("adminuser", JSON.stringify(users.admin))
      router.push(users.admin.url)
    } else if (email === users.freelancer.email && password === users.freelancer.pass) {
      localStorage.setItem("freelancer", JSON.stringify(users.freelancer))
      router.push(users.freelancer.url)
    } else if (email === users.influencer.email && password === users.influencer.pass) {
      localStorage.setItem("infuencer", JSON.stringify(users.influencer))
      router.push(users.influencer.url)
    } else {
      setError(true)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FFEAE2] p-4 font-sans">
      <div className="w-full max-w-md rounded-[32px] bg-white p-8 sm:p-12 shadow-xl shadow-orange-900/5">
        
       
        <div className="flex items-center gap-0.5 select-none shrink-0">
          <span className="text-md sm:text-lg font-bold text-[#1A1A1A] tracking-tight">Talk</span>
          <span className="text-base sm:text-lg font-bold text-[#FF6B35] tracking-tight flex items-center gap-0.5">
            Tamila<span className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full ${buttonVariants({ variant: "default" })} flex items-center justify-center gap-[1px] shrink-0 shadow-xs ml-0.5`}>
              <span className="w-[2px] h-[2px] sm:w-[2.5px] sm:h-[2.5px] rounded-full bg-white inline-block"></span>
              <span className="w-[2px] h-[2px] sm:w-[2.5px] sm:h-[2.5px] rounded-full bg-white inline-block"></span>
            </span>
          </span>
        </div>

   
        <div className="mt-6">
          <h1 
            style={{ fontFamily: 'var(--font-great-vibes)' }}
            className="text-4xl text-[#FA7A22] leading-none"
          >
            Welcome
          </h1>
          <p className="mt-1 text-xs text-gray-500">Sign in to continue</p>
        </div>

  
        {error && (
          <div className="mt-4 rounded-xl bg-red-50 p-2.5 text-center text-xs text-red-600 border border-red-100">
            Incorrect details! Try standard test credentials.
          </div>
        )}

    
        <form className="mt-6 space-y-4" onSubmit={handleLogin}>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-full bg-[#F3F4F6] px-5 py-3.5 text-sm text-gray-800 placeholder-gray-400 outline-none transition focus:bg-[#EAECEF]"
              required
            />
          </div>
          
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-full bg-[#F3F4F6] pl-5 pr-12 py-3.5 text-sm text-gray-800 placeholder-gray-400 outline-none transition focus:bg-[#EAECEF]"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <div className="flex justify-end px-2">
            <Link href="/forgot-password" className="text-xs font-medium text-[#FA7A22] hover:underline transition-all">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-[#FA7A22] py-3.5 font-bold text-white shadow-lg shadow-orange-500/30 hover:bg-[#E06412] active:scale-[0.99] transition duration-200"
          >
            Log in
          </button>
        </form>

       
        <p className="mt-6 text-center text-sm font-medium text-slate-600">
          Create A New Account :  
          <Link 
            href="/Register" 
            className="ml-1.5 font-semibold text-indigo-600 hover:text-indigo-500 hover:underline cursor-pointer transition-colors"
          >
            Sign Up
          </Link>
        </p>
         <div className='flex flex-col items-center justify-center gap-1 mt-6 pt-6 border-t border-gray-100 text-center text-gray-400'>
          <p className='text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1'>Domain Hint</p>
          <p className='text-xs font-mono bg-gray-50 px-2 py-0.5 rounded'>admin@talktamila.com || admin123</p>
          <p className='text-xs font-mono bg-gray-50 px-2 py-0.5 rounded'>inf@talktamila.com || inf123</p>
          <p className='text-xs font-mono bg-gray-50 px-2 py-0.5 rounded'>free@talktamila.com || free123</p>
        </div>
      </div>
    </div>
  )
}
//kela hint la email and password show aagaum for 3 user