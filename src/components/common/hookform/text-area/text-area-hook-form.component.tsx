import { TextArea } from "@Components/common/ui"
import React, { FC } from "react"
import { useFormContext } from "react-hook-form"
import { FieldHookForm } from "@Components/common/hookform/index"
import { TextareaHookProps } from "./text-area-hook-form.type"

const TextAreaHookForm: FC<TextareaHookProps> = props => {
  const { name, label,optional, ...rest } = props
  const { register } = useFormContext()
  return (
    <FieldHookForm label={label} name={name} optional={optional}>
      <TextArea {...register(name)} {...rest} />
    </FieldHookForm>
  )
}

export { TextAreaHookForm }
