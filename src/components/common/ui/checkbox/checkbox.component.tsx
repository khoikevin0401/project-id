import React, { FC, forwardRef } from "react"
import { Checkbox as CheckboxChakra } from "@chakra-ui/react"
import { Controller } from "react-hook-form"

import { CheckboxProps } from "@Components/common/ui/checkbox/checkbox.type"
import { Field } from "@Components/common/ui/layout/field/field.component"

const Checkbox: FC<CheckboxProps> = forwardRef((props, ref: any) => {
  const { name, label, nameDisplay, ...rest } = props

  return (
    <Field label={label}>
      <Controller
        name={name}
        render={({ field: { onChange } }) => (
          <CheckboxChakra onChange={onChange} ref={ref} {...rest} />
        )}
      />
    </Field>
  )
})

export { Checkbox }
