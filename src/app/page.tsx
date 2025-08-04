
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
            The Animation Library
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Your ultimate destination for discovering and using animations from across the web. Built for developers, designers, and creators.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/animations">
                Explore Animations <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
