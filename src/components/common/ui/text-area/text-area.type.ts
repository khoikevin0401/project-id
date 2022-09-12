import * as ChakraUI from "@chakra-ui/textarea"
import { FieldProps } from "@Components/common/ui/layout/field/field.type"

export interface TextareaProps extends FieldProps, ChakraUI.TextareaProps {
    name: string
}
