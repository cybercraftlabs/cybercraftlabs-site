"use client"

import { HeroParallax } from "@/components/Services/HeroParallax";
import Image from "next/image";
import { motion } from "framer-motion";
import { ServicesFeatures } from "@/components/Services/shared/ServicesFeatures";

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const products = [
        {
            title: "Carepulse",
            link: "https://carepulse-theta.vercel.app/gomoonbeam.com",
            thumbnail:
                "https://raw.githubusercontent.com/thehackersbrain/carepulse/main/screenshots/healthcare.png",
        },
        {
            title: "Snapgram",
            link: "https://snapgram-two-self.vercel.app/",
            thumbnail:
                "https://raw.githubusercontent.com/thehackersbrain/snapgram/main/screenshots/snapgram.png",
        },
        {
            title: "Minimal Portfolio",
            link: "https://minimal-portfolio-blue.vercel.app/",
            thumbnail:
                "https://raw.githubusercontent.com/thehackersbrain/minimal-portfolio/main/screenshots/minimal-portfolio.png",
        },

        {
            title: "Brainwave",
            link: "https://brainwave-pearl-five.vercel.app/",
            thumbnail:
                "https://raw.githubusercontent.com/thehackersbrain/brainwave/main/screenshots/brainwave.png",
        },
        {
            title: "Hoobank",
            link: "https://hoobank-two-wine.vercel.app/",
            thumbnail:
                "https://raw.githubusercontent.com/thehackersbrain/hoobank/main/screenshots/hoobank.png",
        },
        {
            title: "Pixel Perfect",
            link: "https://app.pixelperfect.quest",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
        },

        {
            title: "Algochurn",
            link: "https://algochurn.com",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
        },
        {
            title: "Aceternity UI",
            link: "https://ui.aceternity.com",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
        },
        {
            title: "Tailwind Master Kit",
            link: "https://tailwindmasterkit.com",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
        },
        {
            title: "SmartBridge",
            link: "https://smartbridgetech.com",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
        },
        {
            title: "Renderwork Studio",
            link: "https://renderwork.studio",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
        },

        {
            title: "Creme Digital",
            link: "https://cremedigital.com",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
        },
        {
            title: "Golden Bells Academy",
            link: "https://goldenbellsacademy.com",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
        },
        {
            title: "Invoker Labs",
            link: "https://invoker.lol",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/invoker.png",
        },
        {
            title: "E Free Invoice",
            link: "https://efreeinvoice.com",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
        },
    ];

    return (
        <>
            <HeroParallax products={products} />
            <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
                <div className="container mx-auto">
                    <motion.div
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: -10,
                            },

                            visible: {
                                opacity: 1,
                                y: 0,
                            },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="animate_top z-40transition-all"
                    >
                        <section className="px-4 md:px-8 2xl:px-0 sm:w-full">
                            <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20 sm:w-full sm:mb-5">
                                <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
                                <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
                                    <Image
                                        src="/images/shape/shape-dotted-light.svg"
                                        alt="Dotted"
                                        className="dark:hidden"
                                        fill
                                    />
                                    <Image
                                        src="/images/shape/shape-dotted-dark.svg"
                                        alt="Dotted"
                                        className="hidden dark:block"
                                        fill
                                    />
                                </div>
                                {children}
                                <motion.div
                                    variants={{
                                        hidden: {
                                            opacity: 0,
                                            y: -10,
                                        },

                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                        },
                                    }}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: true }}
                                    className="animate_top z-40 rounded-lg border border-white bg-white px-7.5 py-6 shadow-solid-3 transition-all dark:border-strokedark dark:bg-blacksection xl:p-12.5"
                                >
                                    <ServicesFeatures />
                                </motion.div>
                            </div>
                        </section>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
