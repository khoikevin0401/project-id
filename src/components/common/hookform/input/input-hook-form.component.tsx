import React, { FC } from "react"
import { Input } from "@Components/common/ui"
import { useFormContext } from "react-hook-form"
import { InputHookProps } from "./input-hook-form.type"
import { FieldHookForm } from "@Components/common/hookform/index"

const InputHookForm: FC<InputHookProps> = props => {
  const { name, label, placeholder, optional, noted } = props
  const { register } = useFormContext()

  return (
    <FieldHookForm name={name} label={label} optional={optional} noted={noted}>
      <Input {...register(name)} placeholder={placeholder} />
    </FieldHookForm>
  )
}

export { InputHookForm }
