import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="max-w-6xl mx-auto py-10">{/* <Navbar /> */}</header>

      <div className="flex flex-col h-[700px] items-center justify-center">
        <h1 className="bg-gradient-to-br from-black from-30% to-black/40 dark:from-white dark:to-white/40 bg-clip-text text-transparent py-6 text-8xl font-semibold leading-none tracking-tighter">
          Page Not Found!
        </h1>
        <Link href="/">
          <Button>
            Back to Home <HomeIcon />
          </Button>
        </Link>
      </div>

      {/* <Footer /> */}
    </>
  );
}
