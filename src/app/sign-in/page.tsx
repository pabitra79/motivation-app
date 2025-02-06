"use client"
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import {Card,CardHeader,CardDescription,CardContent,CardTitle} from "@/components/ui/card"
import {Separator} from "@/components/ui/separator"
import { Input } from '@/components/ui/input'
import { FaGithub } from 'react-icons/fa' 
import { FcGoogle } from 'react-icons/fc'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { TriangleAlert } from 'lucide-react'

const Signin = () => {
const [email,setEmail] = useState<string>("");
  const [password,setPassword] = useState<string>("")
  const [pending,setPending]  = useState(false)
  const router = useRouter()
  const [error,setError] = useState("");


  const handleSubmit = async (e:React.FormEvent)=>{
    e.preventDefault()
    setPending(true);

    const res = await signIn("credentials",{
      redirect:false,
      email,
      password
    })
    if(res?.ok){
      router.push("/")
      toast.success("login succesfull");
    }else if(res?.status === 401){
      setError("invalid credential");
      setPending(false);
    }else{
      setError("Sometheing went wrong");
    }
  };
  const handleProvider = (
    event: React.MouseEvent<HTMLButtonElement>,
    value: "github" | "google"
  ) => {
    event.preventDefault();
    signIn(value, { callbackUrl: "/" });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1b0918] ">
      <Card className="w-full max-w-md p-6 sm:p-8 bg-white shadow-md rounded-xl">
        <CardHeader>
          <CardTitle className='text-center'>
        Sign In
          </CardTitle>
          <CardDescription className='text-sm text-center text-accent-foreground'>
        You Have an Account, Use email or services to LogIn
          </CardDescription>
        </CardHeader>
        {!!error && (
          <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
            <TriangleAlert/>
          <p>{error}</p>
          </div>
        )}
        <CardContent className='px-2 sm:px-6'>

          <form  onSubmit ={handleSubmit} action="" className='space-y-3'>
        <Input
        type='email'
        disabled={pending}
        placeholder='email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        required
        />
        <Input
        type='password'
        disabled={pending}
        placeholder='password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        required
        />
        <Button className='w-full' size='lg' disabled={pending}>
          continue
        </Button>
          </form>
        <Separator/>
        <div className='flex my-4 gap-4 justify-center mx-auto items-center'>
          
          <Button
        disabled={false}
        onClick={(e)=>handleProvider(e,"google")}
        variant="outline"
        size="lg"
        className='bg-slate-400 hover:bg-slate-500 hover:scale-110'
          ><FcGoogle className='size-8 left-2.5 top-2.5'/>
          </Button>

          <Button
        disabled={false}
        onClick={(e)=>handleProvider(e,"github")}
        variant="outline"
        size="lg"
        className='bg-slate-400 hover:bg-slate-500 hover:scale-110'
          ><FaGithub className='size-8 left-2.5 top-2.5'/>
          </Button>

        </div>
        <p className='text-center text-sm mt-2 text-muted-foreground'>
          Create a new account
      <Link  className="text-sky-700 ml-4 hover:underline cursor-pointer font-bold " href="/sign-up"> Sign Up</Link>
        </p>
        </CardContent>
      </Card>
      
    </div>
  )
}


export default Signin;
