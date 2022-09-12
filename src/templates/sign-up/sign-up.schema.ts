import * as yup from "yup"

export const schema = yup
.object()
.shape({
  displayName: yup.string().required("This field is required"),
  email: yup.string().required("This field is required"),
  password: yup.string().required("This field is required"),
  opt: yup.boolean()
})
.required()
