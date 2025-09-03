"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { getDeviceType } from "@/utils/detectDevice";

export default function Home() {
  const [device, setDevice] = useState<null | string>(null);
  const [downloadUrl, setDownloadUrl] = useState("");

  const detectDevice = useCallback(() => {
    const detectedDevice = getDeviceType();
    setDevice(detectedDevice);

    if (detectedDevice === "iOS") {
      setDownloadUrl(
        "https://apps.apple.com/cn/app/%E6%8E%8C%E4%B8%8A%E5%90%BE%E7%90%86/id1494650352",
      );
    } else if (detectedDevice === "HMOS") {
      setDownloadUrl("");
    } else {
      setDownloadUrl("https://download.tokenteam.net/latest.apk");
    }
  }, []);

  useEffect(() => {
    detectDevice();
    window.addEventListener("resize", detectDevice);
    return () => {
      window.removeEventListener("resize", detectDevice);
    };
  }, [detectDevice]);

  if (!device) return null;

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 sm:items-start">
        <div className="flex gap-4 items-center justify-center flex-col sm:flex-row">
          <div className="flex flex-col gap-64 sm:gap-12 items-center">
            <div className="flex items-center gap-6">
              <Image
                src="/logo.webp"
                alt="掌上吾理"
                width={60}
                height={60}
                priority
                unoptimized
              />
              <div className="text-4xl font-bold tracking-wider">
                <h1>掌上吾理</h1>
              </div>
            </div>

            <div>
              <div className="flex justify-center">
                <a
                  href={downloadUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-solid border-transparent transition-colors flex items-center justify-center text-background gap-2 bg-[#3996FD] font-medium text-sm sm:text-base h-12 px-6 sm:px-10 w-72"
                >
                  <FiDownload size={20} className="dark:invert" />
                  <span className="text-s">下载 {device} 版</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
