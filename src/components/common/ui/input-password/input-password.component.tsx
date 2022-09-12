import React, { FC, forwardRef } from "react"
import { Box, Input } from "@chakra-ui/react"

import { InputProps } from "./input-password.type"
import { FieldHookForm } from "@Components/common/hookform/index"

const InputPassword: FC<InputProps> = forwardRef(
  (props: InputProps, ref: any) => {
    const { label, ...rest } = props
    return (
      <FieldHookForm label={label} {...rest}>
        <Box position={"relative"}>
          <Input
            type={"password"}
            ref={ref}
            {...rest}
            borderRadius={"md"}
            fontSize={"sm"}
            height={"40px"}
            rounded={"5px"}
            border={"1px solid #CACACA"}
          />
        </Box>
      </FieldHookForm>
    )
  }
)

export { InputPassword }
