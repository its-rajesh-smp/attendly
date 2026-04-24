import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { authNavigationPaths } from "@/constants/auth.const";
import { AuthContext } from "@/contexts";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router";

function LoginForm() {
  const {
    handleLogin,
    userInput,
    setUserInput,
    togglePasswordVisibility,
    isPasswordVisible,
    loading,
  } = useContext(AuthContext);

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <div className="space-y-2">
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            type="email"
            placeholder="Email"
            className="pl-10"
            value={userInput.email}
            onChange={(e) =>
              setUserInput((p) => ({ ...p, email: e.target.value }))
            }
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Password"
            className="pl-10 pr-10"
            value={userInput.password}
            onChange={(e) =>
              setUserInput((p) => ({ ...p, password: e.target.value }))
            }
            required
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-3 cursor-pointer text-blue-600 hover:text-blue-700"
          >
            {isPasswordVisible ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      <div className="flex justify-end">
        <Link
          to={authNavigationPaths.FORGOT_PASSWORD}
          className="text-sm text-purple-600 hover:text-purple-800"
        >
          Forgot password?
        </Link>
      </div>

      <Button
        loading={loading}
        disabled={loading}
        type="submit"
        className="w-full bg-purple-600 hover:bg-purple-700"
      >
        Login
      </Button>
    </form>
  );
}

export default LoginForm;
