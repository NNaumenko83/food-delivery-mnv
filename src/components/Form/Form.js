import React, { useState } from "react";
import { ErrorText, FormCart, FormInput, SubmitButton } from "./Form.styled";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { selectProducts } from "../../redux/productsSlice";

export const Form = () => {
  const selectedProducts = useSelector(selectProducts);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    adress: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formIsValid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      formIsValid = false;
      newErrors.name = "Name is required";
    } else if (newErrors.email) {
      newErrors.email = "";
    }

    const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!formData.email.trim()) {
      formIsValid = false;
      newErrors.email = "Email is required";
    } else if (!emailRegExp.test(formData.email)) {
      formIsValid = false;
      newErrors.email = "Invalid email address";
    }

    const phoneRegExp = /^\d{3} \d{3}-\d{2}-\d{2}$/;

    if (!formData.phone.trim()) {
      formIsValid = false;
      newErrors.phone = "Phone is required";
    } else if (!phoneRegExp.test(formData.phone)) {
      formIsValid = false;
      newErrors.phone = "Invalid phone number";
    }

    if (!formData.adress.trim()) {
      formIsValid = false;
      newErrors.adress = "Address is required";
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
    } else {
      toast.error("Fill all fields", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <FormCart onSubmit={handleSubmit}>
      <label>
        Name:
        <FormInput type="text" name="name" onChange={handleChange} />
        {errors.name && <ErrorText>{errors.name}</ErrorText>}
      </label>
      <label>
        Email:
        <FormInput type="email" name="email" onChange={handleChange} />
        {errors.email && <ErrorText>{errors.email}</ErrorText>}
      </label>
      <label>
        Phone:
        <FormInput
          type="text"
          name="phone"
          onChange={handleChange}
          placeholder="XXX XXX-XX-XX"
        />
        {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
      </label>
      <label>
        Adress:
        <FormInput type="text" name="adress" onChange={handleChange} />
        {errors.adress && <ErrorText>{errors.adress}</ErrorText>}
      </label>
      <SubmitButton type="submit" disabled={selectedProducts.length === 0}>
        Submit
      </SubmitButton>
    </FormCart>
  );
};
