import * as Yup from 'yup';

const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

// Schema for yup
export const validationSchema = Yup
    .object()
    .shape({
        name: Yup
            .string()
            .min(2, "*Names must have at least 2 characters")
            .max(100, "*Names can't be longer than 100 characters")
            .required("*Name is required"),
        surname: Yup
            .string()
            .min(2, "*Surname must have at least 2 characters")
            .max(100, "*Surname can't be longer than 100 characters")
            .required("*Surname is required"),
        email: Yup
            .string()
            .email("*Must be a valid email address")
            .max(100, "*Email must be less than 100 characters")
            .required("*Email is required"),
        phone: Yup
            .string()
            .matches(phoneRegExp, "*Phone number is not valid")
            .required("*Phone number required")
    });
