import * as Yup from "yup";

export const carFormValidationScema = Yup.object().shape({
  carType: Yup.string().required("Car type is required"),
  carYear: Yup.string().required("Car year is required"),
});
