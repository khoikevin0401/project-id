import * as yup from "yup"

export const schema = yup
.object()
.shape({
  title: yup.string().required("This field is required"),
  body: yup.mixed()
})
.required()
