import { DefaultTheme } from 'styled-components'
import config from './config'

export const defaulTheme: DefaultTheme = {
  colors: {
    default: config.white,
    primary: config.darkBlue400,
    secondary: config.red400,
    danger: config.red500,
    success: config.green400,
    warning: config.yellow300,
    info: config.gray200,
    title: config.gray500,
    text: config.gray500,
    moduleIcon: config.darkBlue400,
    shadow: config.gray200,
    moduleIconActive: config.white,
    background: config.white,
    textSecond: config.white,
  },
}
