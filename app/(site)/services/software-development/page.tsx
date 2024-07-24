import { SoftwareDevServices } from "@/components/Services/softwareDev/SoftwareDevServices";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Software Development - Services - Cybercraft Labs Pvt Ltd",
    description: "Turn your ideas into powerful software solutions with Cybercraft Labs. We offer custom mobile, web, and desktop app development services tailored to your business needs. Partner with us for innovative and scalable software."
}

export default function SoftwareDevelopmentPage() {
    return (
        <>
            <h1 className="text-center text-hero font-bold text-white mb-10">Software Development</h1>
            <div className="block my-10">
                <SoftwareDevServices />
            </div>
        </>
    );
}