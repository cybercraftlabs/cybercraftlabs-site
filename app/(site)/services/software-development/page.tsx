"use client"
import { SoftwareDevServices } from "@/components/Services/softwareDev/SoftwareDevServices";

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