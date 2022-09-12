import { CheckboxProps as CheckboxChakraProps } from "@chakra-ui/checkbox"
import { FieldProps } from "@Components/common/ui/layout/field/field.type"

export interface CheckboxProps extends CheckboxChakraProps, FieldProps {
    nameDisplay? : string
    label?: string
    name: string
}
