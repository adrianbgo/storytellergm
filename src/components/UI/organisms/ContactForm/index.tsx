import React from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import InputWithLabel from "../../molecules/InputWithLabel";
import Button from "../../atoms/Button";
import styles from "./index.module.css";

interface IContactForm {
  onSubmit: (data: FieldValues) => void;
}

const ContactForm: React.FC<IContactForm> = ({ onSubmit }) => {
  const methods = useForm({
    mode: "all",
  });

  const handleSubmit = methods.handleSubmit(onSubmit);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => e.preventDefault()}
        noValidate
        autoComplete="off"
        className={styles.contactForm}
        data-testid="contact-form"
      >
        <InputWithLabel
          id="name"
          label="Name"
          validation={{
            required: {
              value: true,
              message: "required",
            },
          }}
          placeholder="John Doe"
        />
        <InputWithLabel
          id="email"
          label="Email"
          inputType="email"
          placeholder="john.doe@example.com"
          validation={{
            required: {
              value: true,
              message: "required",
            },
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: "must be valid email address",
            },
          }}
        />
        <InputWithLabel
          id="website"
          label="Website"
          inputType="url"
          placeholder="www.example.com"
          validation={{
            pattern: {
              value: new RegExp(
                "^(https?:\\/\\/)?" + // protocol
                  "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
                  "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR IP (v4) address
                  "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
                  "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
                  "(\\#[-a-z\\d_]*)?$", // fragment locator
                "i"
              ),
              message: "Invalid URL",
            },
          }}
        />
        <InputWithLabel inputType="long" id="message" label="Message" />
        <Button onClick={handleSubmit} text="Submit" disabled={false} />
      </form>
    </FormProvider>
  );
};

export default ContactForm;
