// servicesData.ts
import { Services } from "@/types/services";

const servicesData: Services = {
    cybersecurity: [
        {
            id: 1,
            title: "Web Penetration Testing",
            description:
                "Web Penetration Testing is a critical service that simulates cyber-attacks on your web applications to identify vulnerabilities before malicious hackers can exploit them. Our experts use advanced techniques to probe your web apps for security weaknesses, ensuring robust protection against threats. This service helps safeguard sensitive data, maintain user trust, and comply with industry regulations.",
        },
        {
            id: 2,
            title: "Network Penetration Testing",
            description:
                "Network Penetration Testing involves evaluating the security of your network infrastructure. Our skilled professionals simulate real-world attacks to uncover vulnerabilities in your network’s defenses. This proactive approach helps prevent unauthorized access, data breaches, and potential financial losses. Regular network penetration testing ensures your network remains secure and resilient against evolving cyber threats.",
        },
        {
            id: 3,
            title: "External Penetration Testing",
            description:
                "External Penetration Testing focuses on assessing the security of your external-facing systems, such as websites and email servers. By simulating attacks from an outsider’s perspective, we identify and mitigate vulnerabilities that could be exploited by external attackers. This service is essential for protecting your organization’s online presence and preventing unauthorized access to sensitive information.",
        },
        {
            id: 4,
            title: "Internal Penetration Testing",
            description:
                "Internal Penetration Testing examines the security of your internal network and systems. Our experts mimic insider threats to identify vulnerabilities that could be exploited by malicious employees or compromised devices. This service helps strengthen your internal defenses, ensuring your organization’s critical assets are protected from internal breaches.",
        },
        {
            id: 5,
            title: "Source Code Auditing",
            description:
                "Source Code Auditing involves a thorough review of your application’s source code to identify security flaws and vulnerabilities. Our experienced auditors use both manual and automated techniques to examine the code for potential weaknesses. This service helps enhance the security of your applications, ensuring they are resilient against attacks and comply with security best practices.",
        },
        {
            id: 6,
            title: "Vulnerability Assessment",
            description:
                "Vulnerability Assessment is a systematic process of identifying, classifying, and prioritizing security vulnerabilities in your IT environment. Our team conducts comprehensive scans and analyses to uncover weaknesses in your systems, networks, and applications. Regular vulnerability assessments help you stay ahead of potential threats, ensuring your organization’s security posture is always up-to-date.",
        },
    ],
    software: [
        {
            id: 1,
            title: "Web Application Development",
            description:
                "Our web application development services offer dynamic and interactive solutions using modern technologies like ReactJS, VueJS, AngularJS, and NextJS for front-end development, and PHP and NodeJS for robust and secure back-end development. We ensure your web applications are high-performing, scalable, and user-friendly, delivering exceptional user experiences and reliability.",
        },
        {
            id: 2,
            title: "Mobile Application Development",
            description:
                "We specialize in high-quality mobile application development for both Android and iOS platforms. Our expertise includes creating native applications using Java and Swift, and cross-platform solutions using frameworks like Flutter and React Native. These applications provide seamless user experiences and are designed to meet various business requirements efficiently and cost-effectively.",
        },
        {
            id: 3,
            title: "Desktop Application Development",
            description:
                "External Penetration Testing focuses on assessing the security of your external-facing systems, such as websites and email servers. By simulating attacks from an outsider’s perspective, we identify and mitigate vulnerabilities that could be exploited by external attackers. This service is essential for protecting your organization’s online presence and preventing unauthorized access to sensitive information.",
        },
        {
            id: 4,
            title: "Cloud and CLI Application Development",
            description:
                "We provide cloud and command-line interface (CLI) application development to streamline and automate your business operations. Our cloud solutions leverage the power of platforms like AWS, Azure, and Google Cloud, ensuring scalability, security, and efficiency. Our CLI applications enhance productivity by providing powerful tools for managing tasks and processes directly from the command line.",
        },
    ]
};

export default servicesData;
