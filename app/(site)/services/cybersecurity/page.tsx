import { CyberSecurityServices } from "@/components/Services/ServicesSection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "CyberSecurity - Services - Cybercraft Labs Pvt Ltd",
    description: "Protect your business with Cybercraft Labs' comprehensive cybersecurity services. Our experts deliver cutting-edge solutions to safeguard your data, mitigate risks, and ensure compliance. Secure your digital assets with us.",
    // other metadata
};

export default function CybersecurityPage() {
    return (
        <>
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


        </>
    );
}
