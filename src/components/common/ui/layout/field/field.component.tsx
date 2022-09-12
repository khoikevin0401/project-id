import React, { FC } from "react"
import { Box } from "@chakra-ui/react"
import { Text } from "@Components/common/ui/text/text.component"
import { FieldProps } from "@Components/common/ui/layout/field/field.type"

const Field: FC<FieldProps> = props => {
  const { children, label, messageError, optional, noted } = props

  return (
    <Box>
      <Box display={"flex"} justifyContent={"space-between"}>
        {label && (
          <Text variant="label" mb={"10px"} color={noted ? "black" : "#585858"}>
            {label}
          </Text>
        )}

        {optional && (
          <Text variant="label" mb={"3px"} opacity={0.4}>
            optional
          </Text>
        )}
      </Box>
      {noted && (
        <Text color={"#CACACA"} mb={"5px"} fontSize={"12px"}>
          {noted}
        </Text>
      )}

      {children}

      {messageError && (
        <Text variant="error" mt={"2px"}>
          {messageError}
        </Text>
      )}
    </Box>
  )
}

export { Field }
