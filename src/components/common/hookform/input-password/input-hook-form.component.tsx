import React, { FC } from "react"
import { useFormContext } from "react-hook-form"
import { InputPassword } from "@Components/common/ui/input-password/input-password.component"
import { InputProps } from "./input.type"

const InputPasswordHookForm: FC<InputProps> = (props) => {
  const { name, ...rest } = props
  const { register } = useFormContext()

  return <InputPassword {...register(name)} {...rest} />
}

export { InputPasswordHookForm }
