"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { CyberSecurityServices } from "@/components/Services/ServicesSection";
import { ServicesFeatures } from "@/components/Services/shared/ServicesFeatures";


export default function CybersecurityPage() {
    return (
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
                    <h1 className="text-center text-hero font-bold text-white mb-10">Cyber Security</h1>
                    <p className="text-center">Cybersecurity services are essential for protecting your organization or company from a wide range of cyber threats. They help:</p><br />
                    <ol>
                        <li><b>Prevent Data Breaches: </b> By identifying and addressing vulnerabilities, you can prevent unauthorized access to sensitive information.</li>
                        <li><b>Maintain Customer Trust:</b> Ensuring the security of your systems builds trust with customers, clients, and partners.</li>
                        <li><b>Comply with Regulations:</b> Regular security assessments help meet industry standards and regulatory requirements.</li>
                        <li><b>Reduce Financial Risks:</b> Proactively addressing security threats minimizes the risk of costly data breaches and cyber-attacks.</li>
                        <li><b>Enhance Business Continuity:</b> Robust cybersecurity measures ensure your operations continue smoothly, even in the face of potential threats.</li>
                    </ol><br />
                    <p>
                        Investing in these cybersecurity services is crucial for safeguarding your organization’s assets, reputation, and overall success.
                    </p>

                    <div className="block my-10">
                        <CyberSecurityServices />
                    </div>
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
    );
}
