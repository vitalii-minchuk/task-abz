import * as yup from "yup";
import { normalizePhone } from "../../utils/helpers";

const SCHEMA = yup.object({
  photo: yup
    .mixed()
    .required("File is required")
    .test(
      "FILE_SIZE",
      "File too big, can't exceed 5 MB",
      (value) => value && value.size < 5000000,
    )
    .test(
      "FILE_SIZE",
      "File too small",
      (value) => value && value.size > 70 * 70,
    )
    .test(
      "FILE_Type",
      "Please provide a supported file type",
      (value) => value && ["image/jpeg", "image/jpg"].includes(value.type),
    ),
  name: yup
    .string()
    .required("Please enter your name")
    .min(2, "Your name is too short")
    .max(60, "Your name is too long"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Please enter email"),
  phone: yup
    .string()
    .test((value) => !!normalizePhone(value).match(/^[+]{0,1}380([0-9]{9})$/))
    .required("Please enter phone number"),
  position: yup.string().required("Please choose one"),
});

export default SCHEMA;
