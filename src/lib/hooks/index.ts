'use client'

import { useEffect, useState } from "react";
import {vehicleProp, vehicleResultProp} from "@/lib/types";

export const useVehicleTypes = () => {
  const [vehicleTypes, setVehicleTypes] = useState<vehicleProp[]>([]);

  useEffect(() => {
    const fetchVehicleTypes = async () => {
      const response = await fetch(
        "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json",
      );
      const data = await response.json();
      setVehicleTypes(data.Results);
    };
    fetchVehicleTypes();
  }, []);

  return vehicleTypes;
};

export const useVehicleResult = (makeId: number, year: number) => {
  const [vehicleResult, setVehicleResult] = useState<vehicleResultProp[]>([]);

  useEffect(() => {
    const fetchVehicleResul = async () => {
      const response = await fetch(
          `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
      );
      const data = await response.json();
      setVehicleResult(data.Results);
    };
    fetchVehicleResul();
  }, []);

  return vehicleResult;
};

