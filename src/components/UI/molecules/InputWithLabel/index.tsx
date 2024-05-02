"use client";
import {
  findInputError,
  isFormInvalid,
} from "@/utils/formValidation/formValidation";
import { AnimatePresence, motion } from "framer-motion";
import React, { FC } from "react";
import { FieldValues, RegisterOptions, useFormContext } from "react-hook-form";
import { MdError } from "react-icons/md";
import styles from "./index.module.css";

interface IInputWithLabel {
  label: string;
  id: string;
  value?: string;
  validation?: RegisterOptions<FieldValues, string>;
  inputType?: "text" | "long" | "email" | "url";
  placeholder?: string;
}

const InputWithLabel: FC<IInputWithLabel> = ({
  label,
  id,
  value,
  validation,
  inputType = "text",
  placeholder,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = findInputError(errors, label);
  const isInvalid = isFormInvalid(inputError);

  return inputType === "long" ? (
    <div className={styles.container}>
      <div className={styles.labelContainer}>
        <label data-testid="label" htmlFor={id} className={styles.label}>
          {label}
        </label>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputError.error!.message!}
              key={inputError.error!.message!}
            />
          )}
        </AnimatePresence>
      </div>
      <textarea
        placeholder={placeholder || ""}
        data-testid="input-long"
        id={id}
        value={value}
        {...register(label, validation)}
        className={styles.inputLong}
      />
    </div>
  ) : (
    <div className={styles.container}>
      <div className={styles.labelContainer}>
        <label data-testid="label" htmlFor={id} className={styles.label}>
          {label}
        </label>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputError.error!.message!}
              key={inputError.error!.message!}
            />
          )}
        </AnimatePresence>
      </div>
      <input
        type={inputType}
        placeholder={placeholder || ""}
        data-testid="input"
        id={id}
        value={value}
        className={styles.input}
        {...register(label, validation)}
      />
    </div>
  );
};

interface IInputError {
  message: string;
}

const InputError: FC<IInputError> = ({ message }) => {
  return (
    <motion.p
      {...framer_error}
      className={styles.inputError}
      data-testid="input-error"
    >
      <MdError />
      {message}
    </motion.p>
  );
};

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};

export default InputWithLabel;
