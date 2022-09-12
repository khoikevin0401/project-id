import { TextareaProps } from '@Components/common/ui/text-area/text-area.type';
export interface TextareaHookProps extends TextareaProps {
    name: string
    placeholder?: string
    label?: string
    errorMessage?: string
    rows?: number
}