import SignupForm from "@/components/signupFrom";

export default function signUp() {
    return (
        <div className="flex min-h-svh flex-col items-center bg-muted p-6 md:p-10">
          <div className="w-full max-w-md">
            <SignupForm />
          </div>
        </div>
    )
}