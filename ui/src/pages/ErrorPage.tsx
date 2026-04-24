import { NOT_FOUND_PAGE_IMAGE } from "@/assets";
import { Button } from "@/components/ui/Button";
import { homeNavigationPaths } from "@/constants";
import { Link } from "react-router";

function ErrorPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <div className="flex flex-col justify-center items-center text-2xl font-bold">
        <h1>OOps</h1>
        <p>Page Not Found</p>
      </div>
      <img src={NOT_FOUND_PAGE_IMAGE} className="w-[25rem] h-[25rem]" />
      <Link to={homeNavigationPaths.HOME}>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white border-none">
          Back to Home
        </Button>
      </Link>
    </div>
  );
}

export default ErrorPage;
