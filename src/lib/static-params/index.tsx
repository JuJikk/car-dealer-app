import {vehicleProp} from "@/lib/types";

async function getVehicleTypes(): Promise<vehicleProp[]> {
    try {
        const response = await fetch("https://example.com/api/vehicle-types");

        if (!response.ok) {
            throw new Error("Failed to fetch vehicle types");
        }

        const data = await response.json();
        return data as vehicleProp[];
    } catch (error) {
        console.error("Error fetching vehicle types:", error);
        return [];
    }
}

export async function generateStaticParams() {
    const vehicleTypes: vehicleProp[] = await getVehicleTypes();
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 2014 }, (_, i) => 2015 + i);

    return vehicleTypes.flatMap((vehicle) =>
        years.map((year) => ({
            params: { makeId: vehicle.MakeId.toString(), year: year.toString() },
        }))
    );
}