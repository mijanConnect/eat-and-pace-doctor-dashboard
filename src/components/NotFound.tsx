import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 bg-background text-foreground">
      <div className="text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="mt-2 text-lg text-muted-foreground">Page not found</p>
        <p className="mt-1 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
      </div>
      <Button asChild>
        <Link to="/">Go back to home</Link>
      </Button>
    </div>
  );
}
