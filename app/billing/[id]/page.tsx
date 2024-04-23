"use client";

import FormProvider from "../../components/hook-form/form-provider";
import { useForm } from "react-hook-form";
import View from "../view";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]{7,15}$/, "Must be a valid phone number")
    .required("Phone number is required"),
  address: yup.string().required("Address is required"),
  townOrCity: yup.string().required("Town or City is required"),
  pickup: yup.object({
    location: yup.string().required("Location is required"),
  }),
  dropoff: yup.object({
    location: yup.string().required("Location is required"),
  }),
  cardNumber: yup.string().required("Card Number is required"),
  expDate: yup.string().required("Expration Date is required"),
  cardHolder: yup.string().required("Card Holder is required"),
  cvc: yup.string().required("CVC is required"),
  agree1: yup.boolean(),
  agree2: yup.boolean(),
});
const Billing = ({ params }: { params: { id: number } }) => {
  const methods = useForm({
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      phoneNumber: "",
      address: "",
      townOrCity: "",
      pickup: { location: "" },
      dropoff: { location: "" },
      cardNumber: "",
      expDate: "",
      cardHolder: "",
      cvc: "",
    },
    resolver: yupResolver(schema),
  });

  return (
    <FormProvider methods={methods}>
      <View id={params.id} isValid={methods.formState.isValid} />
    </FormProvider>
  );
};

export default Billing;
