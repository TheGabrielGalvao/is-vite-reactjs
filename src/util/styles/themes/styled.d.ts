import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      default: string
      primary: string
      secondary: string
      danger: string
      success: string
      warning: string
      info: string
      title: string
      text: string
      moduleIcon: string
      shadow: string
      moduleIconActive: string
      background: string
      textSecond: string
    }
  }
}
