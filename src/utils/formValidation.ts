import Error from "next/error";
import { FieldError, FieldErrors, FieldValues } from "react-hook-form";

export const findInputError = (
  errors: FieldErrors<FieldValues>,
  name: string
) => {
  const filtered: { error?: FieldError } = Object.keys(errors)
    .filter((key) => key.includes(name))
    .reduce((cur, key) => {
      return Object.assign(cur, { error: errors[key] });
    }, {});

  return filtered;
};

export const isFormInvalid = (error: { error?: FieldError }) => {
  if (Object.keys(error).length > 0) return true;
  return false;
};
