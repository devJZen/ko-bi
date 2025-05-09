import { LoginForm } from "@/components/loginForm"

export default function LoginPage() {
  return (
    <div className="flex min-h-svh flex-col items-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  )
}
