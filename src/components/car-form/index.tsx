import { Formik, Field, Form, ErrorMessage } from "formik";
import { carFormValidationScema } from "@/lib/schemas";
import Link from "next/link";
import { vehicleProp } from "@/lib/types";
import { useVehicleTypes } from "@/lib/hooks";

interface CarFormProps {
  currentYear: number;
}

export const CarForm: React.FC<CarFormProps> = ({ currentYear }) => {
  const vehicleTypes = useVehicleTypes();

  return (
    <Formik
      initialValues={{ carType: "", carYear: "" }}
      validationSchema={carFormValidationScema}
      onSubmit={(values) => console.log(values)}
    >
      {({ values, setFieldValue }) => (
        <Form className="space-y-4 flex flex-col">
          <div>
            <label className="mr-2" htmlFor="carType">Car Type</label>
            <Field
              className="text-black max-w-[13rem]"
              as="select"
              id="carType"
              name="carType"
              onChange={(e: { target: { value: string } }) =>
                setFieldValue("carType", e.target.value)
              }
              required
            >
              <option value="">Select a car type</option>
              {vehicleTypes.map((vehicle: vehicleProp) => (
                <option key={vehicle.MakeId} value={vehicle.MakeId}>
                  {vehicle.MakeName}
                </option>
              ))}
            </Field>
            <ErrorMessage
              name="carType"
              component="div"
              className="text-red-500"
            />
          </div>

          <div>
            <label className="mr-2" htmlFor="carYear">Car Year</label>
            <Field
              className="text-black"
              as="select"
              id="carYear"
              name="carYear"
              onChange={(e: { target: { value: string } }) =>
                setFieldValue("carYear", e.target.value)
              }
              required
            >
              <option value="">Select a model year</option>
              {Array.from({ length: currentYear - 2014 }, (_, i) => (
                <option key={i} value={2015 + i}>
                  {2015 + i}
                </option>
              ))}
            </Field>
            <ErrorMessage
              name="carYear"
              component="div"
              className="text-red-500"
            />
          </div>

          <Link className=" w-fit" href={`/result/${values.carType}/${values.carYear}`} passHref>
            <button
              type="button"
              className="bg-gray-300 text-black py-1 px-4 rounded"
              disabled={!values.carType || !values.carYear}
            >
              Next
            </button>
          </Link>
        </Form>
      )}
    </Formik>
  );
};
