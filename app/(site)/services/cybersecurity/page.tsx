"use client"
import SingleService from "@/components/Services/SingleService";
import servicesData from "@/components/Services/servicesData";


export default function CybersecurityPage() {
    return (
        <>
            <h1>Cyber Security</h1>
            <p>Cybersecurity services are essential for protecting your organization or company from a wide range of cyber threats. They help:</p>
            <ol>
                <li><b>Prevent Data Breaches: </b> By identifying and addressing vulnerabilities, you can prevent unauthorized access to sensitive information.</li>
                <li><b>Maintain Customer Trust:</b> Ensuring the security of your systems builds trust with customers, clients, and partners.</li>
                <li><b>Comply with Regulations:</b> Regular security assessments help meet industry standards and regulatory requirements.</li>
                <li><b>Reduce Financial Risks:</b> Proactively addressing security threats minimizes the risk of costly data breaches and cyber-attacks.</li>
                <li><b>Enhance Business Continuity:</b> Robust cybersecurity measures ensure your operations continue smoothly, even in the face of potential threats.</li>
            </ol>
            <p>
                Investing in these cybersecurity services is crucial for safeguarding your organization’s assets, reputation, and overall success.
            </p>

            <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-2 ">
                {servicesData.cybersecurity.map((item, key) => (
                    <SingleService service={item} key={key} />
                ))}
            </div>
        </>
    );
}
