import { Button } from "@/shadcn/button";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-y-5">
      <div className="flex flex-col gap-y-1 items-center justify-center">
        <h1 className="text-3xl font-bold">Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>
      <Link to="/">
        <Button>Go Back Home</Button>
      </Link>
    </div>
  );
}
