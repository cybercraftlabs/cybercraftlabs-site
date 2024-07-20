"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
        title: "Web Penetration Testing",
        description:
            "Web Penetration Testing is a critical service that simulates cyber-attacks on your web applications to identify vulnerabilities before malicious hackers can exploit them. Our experts use advanced techniques to probe your web apps for security weaknesses, ensuring robust protection against threats. This service helps safeguard sensitive data, maintain user trust, and comply with industry regulations.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/linear.webp"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Network Penetration Testing",
        description:
            "Network Penetration Testing involves evaluating the security of your network infrastructure. Our skilled professionals simulate real-world attacks to uncover vulnerabilities in your network’s defenses. This proactive approach helps prevent unauthorized access, data breaches, and potential financial losses. Regular network penetration testing ensures your network remains secure and resilient against evolving cyber threats.",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <Image src="/images/services/network-pentest.png" height={300} width={300} alt="Network Penetration Testing" className="h-full w-full object-cover" />
            </div>
        ),
    },
    {
        title: "External Penetration Testing",
        description:
            "External Penetration Testing focuses on assessing the security of your external-facing systems, such as websites and email servers. By simulating attacks from an outsider’s perspective, we identify and mitigate vulnerabilities that could be exploited by external attackers. This service is essential for protecting your organization’s online presence and preventing unauthorized access to sensitive information.",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <Image src="/images/services/external-pentest.png" height={300} width={300} alt="Network Penetration Testing" className="h-full w-full object-cover" />
            </div>
        ),
    },
    {
        title: "Internal Penetration Testing",
        description:
            "Internal Penetration Testing examines the security of your internal network and systems. Our experts mimic insider threats to identify vulnerabilities that could be exploited by malicious employees or compromised devices. This service helps strengthen your internal defenses, ensuring your organization’s critical assets are protected from internal breaches.",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <Image src="/images/services/internal-pentest.png" height={300} width={300} alt="Network Penetration Testing" className="h-full w-full object-cover" />
            </div>
        ),
    },
    {
        title: "Source Code Auditing",
        description:
            "Source Code Auditing involves a thorough review of your application’s source code to identify security flaws and vulnerabilities. Our experienced auditors use both manual and automated techniques to examine the code for potential weaknesses. This service helps enhance the security of your applications, ensuring they are resilient against attacks and comply with security best practices.",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <Image src="/images/services/source-code.png" height={300} width={300} alt="Network Penetration Testing" className="h-full w-full object-cover" />
            </div>
        ),
    },
    {
        title: "Vulnerability Assessment",
        description:
            "Vulnerability Assessment is a systematic process of identifying, classifying, and prioritizing security vulnerabilities in your IT environment. Our team conducts comprehensive scans and analyses to uncover weaknesses in your systems, networks, and applications. Regular vulnerability assessments help you stay ahead of potential threats, ensuring your organization’s security posture is always up-to-date.",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <Image src="/images/services/vuln-assess.png" height={300} width={300} alt="Network Penetration Testing" className="h-full w-full object-cover" />
            </div>
        ),
    },
];
export function CyberSecurityServices() {
    return (
        <div className="md:p-10 xl:p-10">
            <StickyScroll content={content} />
        </div>
    );
}
