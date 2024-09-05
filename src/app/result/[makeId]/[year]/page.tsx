'use client'

import { Suspense } from "react";
import { useVehicleResult } from "@/lib/hooks";
import Link from "next/link";
import {generateStaticParams} from "@/lib/static-params";

generateStaticParams()
export default function VehicleResultPage({
  params,
}: {
  params: { makeId: string; year: string };
}) {
  const { makeId, year } = params;
  const vehicles = useVehicleResult(Number(makeId), Number(year));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="max-w-[30rem] h-screen p-10 mx-auto flex flex-col justify-center">
        <h1 className="text-2xl font-semibold mb-6">
          Vehicle Models for Make ID: {makeId} in Year: {year}
        </h1>
        <ul className="space-y-4 h-80 overflow-y-scroll">
          {vehicles.length ? (
            vehicles.map((model) => (
              <li
                key={`${model.Make_Name}-${model.Model_ID}`}
                className="p-3 bg-gray-200 text-black rounded"
              >
                {model.Make_Name} {model.Model_Name}
              </li>
            ))
          ) : (
            <div>No vehicle models found for this selection.</div>
          )}
        </ul>
        <Link
          className="bg-gray-300 text-black py-2 px-6 rounded w-fit mx-auto mt-4"
          href="/"
        >
          Go back
        </Link>
      </div>
    </Suspense>
  );
}
