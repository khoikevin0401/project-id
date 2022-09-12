import React, { FC, forwardRef } from "react"
import { Textarea } from "@chakra-ui/react"
import { TextareaProps } from "./text-area.type"

const TextArea: FC<TextareaProps> = forwardRef(
  (props: TextareaProps, ref: any) => {
    const { label, rows, ...rest } = props

    return (
      <Textarea
        type={"text"}
        ref={ref}
        {...rest}
        rows={rows}
        borderRadius={"md"}
        fontSize={"sm"}
      />
    )
  }
)

export { TextArea }
