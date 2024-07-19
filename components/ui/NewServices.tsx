"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";

export function NewServices() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full mt-12.5 lg:mt-15 xl:mt-20">
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full bg-sclr1 min-h-[500px] lg:min-h-[300px]"
                className=""
            >
                <div className="max-w-xs">
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Cybersecurity Services
                    </h2>
                    <p className="mt-4 text-left  text-base/6 text-neutral-200">
                        Although security is integrated into the core of any product you get from us. We also provide them separately, like Network/Internal/External Penetration Testing, Black/White Box Source Code Auditing, or anything in security.
                    </p>
                </div>
                <Image
                    src="/linear.webp"
                    width={500}
                    height={500}
                    alt="linear demo image"
                    className="absolute -right-4 lg:-right-[20%] grayscale filter -bottom-10 object-contain rounded-2xl"
                />
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 bg-blackho min-h-[300px]">
                <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    DevOps Services
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                    We provide DevOps services to help you streamline your software development process. This includes continuous integration and continuous delivery (CI/CD), infrastructure as code (IaC), and automated testing (i.e. Apache Jenkins, etc.)
                </p>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-black min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
                <div className="max-w-sm">
                    <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Software Development Services
                    </h2>
                    <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                        We specialize in developing secure software solutions, including mobile apps (android or ios and games), web apps (custom like MERN, LAMP etc. or using CMSes like wordpress, joomla etc.), and Desktop Apps (like in C#, Java, Flutter, C++ etc.)
                    </p>
                </div>
                <Image
                    src="/linear.webp"
                    width={500}
                    height={500}
                    alt="linear demo image"
                    className="absolute -right-10 md:-right-[40%] lg:-right-[10%] -bottom-10 object-contain rounded-2xl"
                />
            </WobbleCard>
        </div>
    );
}
