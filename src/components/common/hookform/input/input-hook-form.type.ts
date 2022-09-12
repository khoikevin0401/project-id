import { InputProps } from '@Components/common/ui/input/input.type';
export interface InputHookProps extends InputProps {
  name: string
  placeholder?: string
  label?: string
  noted?: string
  errorMessage?: string
  type?: string
}
