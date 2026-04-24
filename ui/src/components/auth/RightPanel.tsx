import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { authNavigationPaths } from "@/constants/auth.const";
import { Link } from "react-router";
import AuthTabs from "./AuthTabs";

function RightPanel() {
  return (
    <div className="w-full md:w-1/2 p-4 sm:p-8 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            Welcome to Attendly
          </CardTitle>
          <CardDescription>
            Sign in to your account or create a new one
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AuthTabs />
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 text-center text-sm text-muted-foreground">
          <div>
            By continuing, you agree to Attendly's{" "}
            <Link
              to={authNavigationPaths.TERMS_AND_CONDITIONS}
              className="text-purple-600 hover:text-purple-800 underline"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              to={authNavigationPaths.PRIVACY_POLICY}
              className="text-purple-600 hover:text-purple-800 underline"
            >
              Privacy Policy
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default RightPanel;
