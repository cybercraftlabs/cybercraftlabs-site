"use client"
import { HeroParallax } from "@/components/Services/HeroParallax";
import { ServicesFeatures } from "@/components/Services/shared/ServicesFeatures";
import { SoftwareDevServices } from "@/components/Services/softwareDev/SoftwareDevServices";
import { motion } from "framer-motion";

export default function SoftwareDevelopmentPage() {
    const products = [
        {
            title: "Carepulse",
            link: "https://carepulse-theta.vercel.app/gomoonbeam.com",
            thumbnail:
                "https://raw.githubusercontent.com/thehackersbrain/carepulse/main/screenshots/healthcare.png",
        },
        {
            title: "Cursor",
            link: "https://cursor.so",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/cursor.png",
        },
        {
            title: "Rogue",
            link: "https://userogue.com",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/rogue.png",
        },

        {
            title: "Editorially",
            link: "https://editorially.org",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/editorially.png",
        },
        {
            title: "Editrix AI",
            link: "https://editrix.ai",
            thumbnail:
                "https://aceternity.com/images/products/thumbnails/new/editrix.png",
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
                        className="animate_top z-40 rounded-lg border border-white bg-white xl:mx-30 md:mx-30 px-7.5 py-6 shadow-solid-3 transition-all dark:border-strokedark dark:bg-blacksection xl:p-12.5"
                    >
                        <SoftwareDevServices />
                    </motion.div>
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
                        className="animate_top transition-all mt-5"
                    >
                        <ServicesFeatures />
                    </motion.div>
                </div>
            </section>
        </>
    );
}