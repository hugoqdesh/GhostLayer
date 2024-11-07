"use client";

import {
  BookCopy,
  Chrome,
  CircleUser,
  Cog,
  Compass,
  Cookie,
  EarthLock,
  ExternalLinkIcon,
  Facebook,
  FileLock,
  Fingerprint,
  Github,
  GlobeLock,
  Instagram,
  KeyRound,
  LockKeyholeOpen,
  Monitor,
  Radar,
  Rss,
  ScanFace,
  ShieldAlert,
  TrendingUpDown,
  Twitter,
  UserCheck,
  Videotape,
  Waypoints,
  Webcam,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

import React, { useEffect, useState } from "react";
import AnimatedCircularProgressBar from "./ui/animated-circular-progress-bar";
import OrbitingCircles from "./ui/orbiting-circles";
import { AnimatedList } from "./ui/animated-list";
import { cn } from "@/lib/utils";

export default function Features() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const handleIncrement = (prev: number) => {
      if (prev === 100) {
        return 0;
      }
      return prev + 10;
    };
    setValue(handleIncrement);
    const interval = setInterval(() => setValue(handleIncrement), 1300);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="w-full flex-col pt-28 text-black/80 dark:text-white/80"
      id="features"
    >
      <div className="mx-auto mt-16 flex w-full flex-col md:w-5/6 lg:w-3/4 lg:flex-row">
        <div className="flex-1 p-5 lg:p-12">
          <div className="flex flex-col justify-center p-12">
            <h3 className="text-4xl text-black dark:text-white">
              Custom{" "}
              <span className="font-bold text-purple-500 dark:text-purple-400">
                Privacy
              </span>{" "}
              Guides{" "}
              <Cog className="inline h-10 w-10 text-purple-500 dark:text-purple-400" />
            </h3>
            <p className="mt-4 text-lg">
              With our guide, you can learn how to set your online privacy and
              security settings to your needs. From selecting secure browsers to
              configuring encrypted messaging apps, we provide all the resources
              you need.
            </p>
            <div className="relative">
              <Link href="/">
                <Button className="mt-8 rounded-full h-12 w-56">
                  Explore Privacy Guides
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-center p-12">
            <h3 className="text-4xl text-black dark:text-white">
              <span className="font-bold text-yellow-500 dark:text-yellow-400">
                Always
              </span>{" "}
              Up to Date{" "}
              <Rss className="inline h-10 w-10 text-yellow-500 dark:text-yellow-400" />
            </h3>
            <p className="mt-4 text-lg">
              We stay on top of the latest technologies and news, so you don’t
              have to. Our content is updated regularly to ensure you’re
              learning the most effective and up-to-date methods to protect
              yourself online.
            </p>
            <div className="relative">
              <Link href="/">
                <Button className="mt-8 rounded-full h-12 w-56">
                  Stay Secure Today
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex-1 p-5 lg:p-12">
          <div className="flex flex-col justify-center p-12">
            <h3 className="text-4xl text-black dark:text-white">
              <span className="font-bold text-blue-500 dark:text-blue-400">
                Community
              </span>
              -Driven Knowledge{" "}
              <BookCopy className="inline h-10 w-10 text-blue-500 dark:text-blue-400" />
            </h3>
            <p className="mt-4 text-lg">
              GhostLayer thrives on the contributions of everyone! As an
              open-source project, we encourage collaboration to keep our guides
              accurate, fresh, and useful for all.
            </p>
            <div className="relative">
              <Link href="/">
                <Button className="mt-8 rounded-full h-12 w-56">
                  Contribute on GitHub
                </Button>
              </Link>
            </div>
            <div className="mt-14 w-full">
              <div className="flex items-center">
                <UserCheck className="h-7 w-7 text-blue-500 p-1 dark:text-blue-400" />
                <p className="ml-2">Focused on Security</p>
              </div>
              <div className="mt-5 flex items-center">
                <UserCheck className="h-7 w-7 text-blue-500 p-1 dark:text-blue-400" />
                <p className="ml-2">Open Source Content</p>
              </div>
              <div className="mt-5 flex items-center">
                <UserCheck className="h-7 w-7 text-blue-500 p-1 dark:text-blue-400" />
                <p className="ml-2">Regular Updates with New Privacy Tools</p>
              </div>
              <div className="mt-5 flex items-center">
                <UserCheck className="h-7 w-7 text-blue-500 p-1 dark:text-blue-400" />
                <p className="ml-2">Collaborative Community of Experts</p>
              </div>
              <div className="mt-5 flex items-center">
                <UserCheck className="h-7 w-7 text-blue-500 p-1 dark:text-blue-400" />
                <p className="ml-2">Constantly Improving Knowledge Base</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-36 flex w-full flex-col md:w-5/6 lg:w-3/4 xl:flex-row">
        <div className="flex flex-col justify-center p-16 lg:w-1/2">
          <h2 className="text-4xl text-black dark:text-white">
            <span className="font-bold text-green-500 dark:text-green-400">
              Protecting
            </span>{" "}
            Your Accounts{" "}
            <CircleUser className="inline h-8 w-8 text-green-500 dark:text-green-400" />
          </h2>
          <p className="mt-4 text-lg">
            We walk you through practical steps to secure your devices and
            accounts against cyber threats. From creating strong passwords to
            enabling two-factor authentication, GhostLayer covers it all:
          </p>
          <div className="mt-8 w-full">
            <div className="flex items-center">
              <KeyRound className="h-7 w-7 text-green-500 p-1 dark:text-green-400" />
              <p className="ml-2">Password Management</p>
            </div>
            <div className="mt-4 flex items-center">
              <ScanFace className="h-7 w-7 text-green-500 p-1 dark:text-green-400" />
              <p className="ml-2">Two-Factor Authentication (2FA)</p>
            </div>
            <div className="mt-4 flex items-center">
              <FileLock className="h-7 w-7 text-green-500 p-1 dark:text-green-400" />
              <p className="ml-2">Secure Backups</p>
            </div>
            <div className="mt-4">
              <p className="ml-2">And More...</p>
            </div>
          </div>
        </div>
        <div
          className={cn(
            "relative hidden md:flex h-[484px] mx-auto p-6 overflow-hidden"
          )}
        >
          <AnimatedList>
            {notifications.map((item, idx) => (
              <Notification {...item} key={idx} />
            ))}
          </AnimatedList>
        </div>
      </div>

      <div className="mx-auto mt-36 flex w-full flex-col md:w-5/6 lg:w-3/4 xl:flex-row">
        <div className="relative hidden md:flex lg:w-1/2 h-[484px] items-center justify-center">
          <OrbitingCircles
            className="size-[40px] border-none"
            duration={20}
            delay={20}
            radius={80}
          >
            <Twitter className="text-yellow-500 dark:text-yellow-400" />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[40px] border-none"
            duration={20}
            delay={10}
            radius={80}
          >
            <Facebook className="text-yellow-500 dark:text-yellow-400" />
          </OrbitingCircles>

          <OrbitingCircles
            className="size-[40px] border-none"
            radius={190}
            duration={20}
            reverse
          >
            <Chrome className="text-yellow-500 dark:text-yellow-400" />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[40px] border-none"
            radius={190}
            duration={20}
            delay={20}
            reverse
          >
            <Github className="text-yellow-500 dark:text-yellow-400" />
          </OrbitingCircles>
        </div>

        <div className="flex flex-col justify-center p-16 lg:w-1/2">
          <h2 className="text-4xl text-black dark:text-white">
            Stay{" "}
            <span className="font-bold text-yellow-500 dark:text-yellow-400">
              Invisible
            </span>{" "}
            to Trackers{" "}
            <Webcam className="inline h-8 w-8 text-yellow-500 dark:text-yellow-400" />
          </h2>
          <p className="mt-4 text-lg">
            Your data is constantly collected, tracked, and sold without your
            consent. Our guide helps you minimize your digital footprint and
            take control of your personal information:
          </p>
          <div className="mt-8 w-full">
            <div className="flex items-center">
              <Chrome className="h-7 w-7 text-yellow-500 p-1 dark:text-yellow-400" />
              <p className="ml-2">Private Browsing</p>
            </div>
            <div className="mt-4 flex items-center">
              <Compass className="h-7 w-7 text-yellow-500 p-1 dark:text-yellow-400" />
              <p className="ml-2">Browser Tracking Protection</p>
            </div>
            <div className="mt-4 flex items-center">
              <TrendingUpDown className="h-7 w-7 text-yellow-500 p-1 dark:text-yellow-400" />
              <p className="ml-2">Data Minimization</p>
            </div>
            <div className="mt-4">
              <p className="ml-2">And More...</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-36 flex w-full flex-col p-5 md:w-5/6 lg:w-3/4 lg:flex-row xl:p-12">
        <div className="flex flex-col justify-center p-16 lg:w-1/2">
          <h3 className="text-4xl text-black dark:text-white">
            We are Not{" "}
            <span className="font-bold text-red-500 dark:text-red-400">
              Private
            </span>{" "}
            <LockKeyholeOpen className="inline h-8 w-8 text-red-500 dark:text-red-400" />
          </h3>
          <div className="mt-8 w-full">
            <div className="flex items-center">
              <p className="ml-2">
                <span className="text-red-500 dark:text-red-400">
                  Every 39 seconds
                </span>
                , a cyberattack occurs somewhere.
              </p>
            </div>
            <div className="mt-4 flex items-center">
              <p className="ml-2">
                <span className="text-red-500 dark:text-red-400">
                  93% of websites
                </span>{" "}
                track your browsing habits unknowingly.
              </p>
            </div>
            <div className="mt-4 flex items-center">
              <p className="ml-2">
                <span className="text-red-500 dark:text-red-400">
                  4.1 billion records
                </span>{" "}
                were exposed in data breaches in 2019.
              </p>
            </div>
            <div className="mt-4 flex items-center">
              <p className="ml-2">
                <span className="text-red-500 dark:text-red-400">
                  70% of people
                </span>{" "}
                believe their online activities are monitored.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col p-16 lg:w-1/2">
          <h3 className="text-4xl text-black dark:text-white">
            Your{" "}
            <span className="font-bold text-purple-500 dark:text-purple-400">
              Security
            </span>{" "}
            and{" "}
            <span className="font-bold text-purple-500 dark:text-purple-400">
              Privacy
            </span>{" "}
            Simplified{" "}
            <Fingerprint className="inline h-8 w-8 text-purple-500 dark:text-purple-400" />
          </h3>
          <p className="mt-4 text-lg">
            Our step-by-step guides make online security and privacy accessible
            for all, providing clear, practical advice for both beginners and
            those seeking deeper knowledge.
          </p>
          <div className="relative">
            <Link href="/">
              <Button className="mt-8 rounded-full h-12 w-56" variant="ghost">
                Join the movement{" "}
                <ExternalLinkIcon className="ml-4 h-4 w-4 opacity-50" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-36 flex w-full flex-col md:w-5/6 lg:w-3/4 xl:flex-row md:pb-8 lg:pb-0">
        <div className="flex flex-col justify-center p-16 xl:w-1/2">
          <h2 className="text-4xl text-black dark:text-white">
            <span className="font-bold text-blue-500 dark:text-blue-400">
              Disappear
            </span>{" "}
            from the Grid{" "}
            <Radar className="ml-1 inline h-8 w-8 text-blue-500 dark:text-blue-400" />
          </h2>
          <p className="mt-4 text-lg">
            If anonymity is your goal, GhostLayer teaches you how to stay hidden
            and untraceable online, offering step-by-step guides on:
          </p>
          <div className="mt-8 w-full">
            <div className="flex items-center">
              <EarthLock className="h-7 w-7 text-blue-500 p-1 dark:text-blue-400" />
              <p className="ml-2">VPNs & Proxies</p>
            </div>
            <div className="mt-4 flex items-center">
              <GlobeLock className="h-7 w-7 text-blue-500 p-1 dark:text-blue-400" />
              <p className="ml-2">Tor Browser</p>
            </div>
            <div className="mt-4 flex items-center">
              <Waypoints className="h-7 w-7 text-blue-500 p-1 dark:text-blue-400" />
              <p className="ml-2">Encrypted Messaging</p>
            </div>
            <div className="mt-4">
              <p className="ml-2">And More...</p>
            </div>
          </div>
        </div>
        <AnimatedCircularProgressBar
          max={100}
          min={0}
          value={value}
          className="hidden md:flex mx-auto my-auto w-max h-max"
          gaugePrimaryColor="#6da0f8"
          gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
        />
      </div>

      <div className="mt-20 py-44 px-4 mx-auto max-w-lg flex flex-col text-center gap-4">
        <h2 className="text-4xl tracking-tight text-black dark:text-white">
          And so Much More
        </h2>
        <p className="mt-4 text-lg tracking-tight">
          We can help you and others take back control of their online presence
          with recourses all around the web.
        </p>
        <Link href="/">
          <Button className="rounded-full w-max mx-auto">
            Get Started Now
          </Button>
        </Link>
      </div>
    </section>
  );
}

interface Item {
  name: string;
  icon: string;
  color: string;
}

let notifications = [
  {
    name: "Protecting Passwords",
    icon: "🔐",
    color: "#00C9A7",
  },
  {
    name: "2FA Locks",
    icon: "🛡️",
    color: "#FFB800",
  },
  {
    name: "Safe Backups",
    icon: "📂",
    color: "#FF3D71",
  },
  {
    name: "Device Defenders",
    icon: "💻",
    color: "#FFB800",
  },
  {
    name: "Securing Devices",
    icon: "🔒",
    color: "#00C9A7",
  },
  {
    name: "Encryption",
    icon: "🔏",
    color: "#FF3D71",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, icon, color }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light mode
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark mode
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
            <span className="text-sm sm:text-lg text-green-500 dark:text-green-400">
              {name}
            </span>
          </figcaption>
        </div>
      </div>
    </figure>
  );
};
