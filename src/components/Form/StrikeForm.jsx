import React from "react";
import { FormProvider, useForm } from "react-hook-form";

const formConfig = {};

export default function StrikeForm({
  children,
  onSubmit,
  defaultValues,
  resolver,
}) {
  if (defaultValues) {
    formConfig.defaultValues = defaultValues;
  }

  if (resolver) {
    formConfig.resolver = resolver;
  }

  const submit = (data) => {
    onSubmit(data, methods);
  };

  const methods = useForm(formConfig);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
}
