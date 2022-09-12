import { extendTheme } from "@chakra-ui/react"
import { globalStyles } from "./styles"
import { breakpoints } from "./foundations/breakpoints"
import { textStyles } from "./foundations/text"
import colors from "./color"
import { buttonStyles } from "./components/button"

const theme = extendTheme(
  { breakpoints, color: colors }, // Breakpoints
  globalStyles,
  textStyles,
  buttonStyles
)

export default theme
