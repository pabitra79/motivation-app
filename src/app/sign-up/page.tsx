"use client"
import React,{useState} from "react";
import { Button } from "@/components/ui/button";
import { Card,CardContent,CardHeader,CardDescription,CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {FaGithub} from "react-icons/fa"
import {FcGoogle} from "react-icons/fc"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TriangleAlert } from "lucide-react";
import {signIn} from 'next-auth/react'
import { toast } from "sonner";
import { Separator } from "@radix-ui/react-dropdown-menu";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);

    if (form.password !== form.confirmpassword) {
      setError("Passwords do not match.");
      setPending(false);
      return;
    }

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message);
        router.push("/sign-in");
      } else {
        setError(data.message || "Something went wrong.");
      }
    } catch {
      setError("An unexpected error occurred.");
    } finally {
      setPending(false);
    }
  };

  const handleProvider = (
    event: React.MouseEvent<HTMLButtonElement>,
    value: "github" | "google"
  ) => {
    event.preventDefault();
    signIn(value, { callbackUrl: "/" });
  };

return(
  <div className="min-h-screen flex items-center justify-center bg-[#1b0918]">
      <Card className="w-full max-w-md p-6 sm:p-8 bg-slate-300 shadow-md rounded-md">
        <CardHeader>
          <CardTitle className="text-center text-xl font-semibold text-gray-900">Sign Up</CardTitle>
          <CardDescription className="text-sm text-center text-slate-900">
            Use email or service to create an account
          </CardDescription>
        </CardHeader>

        {!!error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6" role="alert">
            <span>{error}</span>
          </div>
        )}

        <CardContent className="px-2 sm:px-6">
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              name="name"
              type="text"
              disabled={pending}
              placeholder="Full-Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
              required
            />
            <Input
              name="email"
              type="email"
              disabled={pending}
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
              required
            />
            <Input
              name="password"
              type="password"
              disabled={pending}
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
              required
            />
            <Input
              name="confirmpassword"
              type="password"
              disabled={pending}
              placeholder="Confirm Password"
              value={form.confirmpassword}
              onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
              required
            />

            <Button className="w-full" size="lg" disabled={pending}>
              Continue
            </Button>
          </form>

          <Separator />

          <div className="flex my-4 gap-4 justify-center mx-auto items-center">
            <Button
              onClick={(e) => handleProvider(e, "google")}
              variant="outline"
              size="lg"
              className="bg-slate-400 hover:bg-slate-500 hover:scale-110"
            >
              <FcGoogle className="size-8 left-2.5 top-2.5" />
            </Button>
            <Button
              onClick={(e) => handleProvider(e, "github")}
              variant="outline"
              size="lg"
              className="bg-slate-400 hover:bg-slate-500 hover:scale-110"
            >
              <FaGithub className="size-8 left-2.5 top-2.5" />
            </Button>
          </div>
          <p className="text-center text-sm mt-2 text-muted-foreground">
            Already Have an Account?
            <Link className="text-sky-700  font-bold ml-4 hover:underline cursor-pointer" href="/sign-in">
              Sign In
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;