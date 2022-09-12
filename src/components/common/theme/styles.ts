import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools"
import { Dict } from "@chakra-ui/utils"

export const globalStyles = {
  colors: {
    gray: {
      700: "#1f2733",
    },
  },
  styles: {
    global: (props: Dict<any> | StyleFunctionProps) => ({
      body: {
        bg: mode("#EFEFF0", "#EFEFF0")(props),
        fontFamily: "Open Sans",
      },
      html: {
        fontFamily: "Open Sans",
      },
    }),
  },
}
