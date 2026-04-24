import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { AuthContextProvider } from "@/contexts";
import LoginForm from "./forms/LoginForm";
import SignupForm from "./forms/SignupForm";

function AuthTabs() {
  return (
    <AuthContextProvider>
      <Tabs defaultValue="login" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger className="cursor-pointer" value="login">
            Login
          </TabsTrigger>
          <TabsTrigger className="cursor-pointer" value="signup">
            Sign Up
          </TabsTrigger>
        </TabsList>

        {/* Login Form */}
        <TabsContent value="login">
          <LoginForm />
        </TabsContent>

        {/* Signup Form */}
        <TabsContent value="signup">
          <SignupForm />
        </TabsContent>
      </Tabs>
    </AuthContextProvider>
  );
}

export default AuthTabs;
