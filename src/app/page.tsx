"use client";
import { CarForm } from "@/components/car-form";

export default function Home() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="flex justify-center h-screen items-center flex-col p-8">
            <h1 className="text-2xl font-semibold mb-6">Select type and year of the car</h1>
            <CarForm currentYear={currentYear} />
        </div>
    );
}
