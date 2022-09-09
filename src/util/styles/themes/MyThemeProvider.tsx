import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { defaulTheme } from './default'

interface ThemeProviderProps {
  children: ReactNode
}

export const MyThemeProvider = ({ children }: ThemeProviderProps) => {
  return <ThemeProvider theme={defaulTheme}>{children}</ThemeProvider>
}
