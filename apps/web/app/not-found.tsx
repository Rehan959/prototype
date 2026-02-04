"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <div className="text-center space-y-4">
        <h1 className="text-10xl font-bold text-primary">404</h1>
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        <p className="text-lg text-muted-foreground max-w-md">
          The page you are looking for does not exist.
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <Button asChild>
            <Link href="/">Go Home</Link>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
export default NotFoundPage;