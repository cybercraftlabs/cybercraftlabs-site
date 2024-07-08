"use client"
import SingleService from "@/components/Services/SingleService";
import servicesData from "@/components/Services/servicesData";
import { Service } from "@/types/services";

export default function SoftwareDevelopmentPage() {
    return (
        <>
            <h1>Software Development</h1>
            <p>Software development services are essential for transforming your ideas into reality. They help:</p>
            <ol>
                <li><b>Enhance Business Efficiency:</b> Custom software solutions streamline processes and improve productivity.</li>
                <li><b>Improve User Engagement:</b> High-quality web, mobile, and desktop applications offer exceptional user experiences.</li>
                <li><b>Ensure Scalability:</b> Scalable solutions grow with your business, accommodating increasing demands and user base.</li>
                <li><b>Strengthen Security:</b> Secure software development practices protect your data and maintain user trust.</li>
                <li><b>Gain Competitive Advantage:</b> Innovative and efficient software solutions give you a competitive edge in the market.</li>
            </ol>
            <p>
                Investing in professional software development services is crucial for driving business growth, enhancing user satisfaction, and maintaining a strong market presence.
            </p>

            <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-2">
                {servicesData.software.map((service: Service) => (
                    <SingleService key={service.id} service={service} />
                ))}
            </div>
        </>
    );
}