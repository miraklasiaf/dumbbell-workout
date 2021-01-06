import { theme as defaultTheme } from '@chakra-ui/react'
import foundations from './foundations'
import styles from './styles'

const theme = {
  ...defaultTheme,
  ...foundations,
  styles
}

export default theme
