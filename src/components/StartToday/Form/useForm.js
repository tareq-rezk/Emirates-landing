import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    carModel: "",
    name: "",
    phone: "",
    allRequired: false,
    disabled: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setValues({
      ...values,
      disabled: false,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      setValues({ ...values, disabled: true });
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
