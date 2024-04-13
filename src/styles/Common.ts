// import { font } from './Common';
import { theme } from './Theme';
type FontPropsType = {
  family?:string
  weight?: number
  color?:string
  lineheight?: number
  Fmin?:number
  Fmax?:number
}

export const font= ({family,weight,color,lineheight,Fmin,Fmax}: FontPropsType) => `
font-family:${family || 'Popins'};
font-weight:${weight || 400};
color:${color || theme.colors.font};
line-height: ${lineheight || 1.2};
// font-size: calc((100vw - Vmin)/(Vmax - Vmin)*(Fmax-Fmin)+Fmin)
font-size:calc((100vw - 360px)/(1440 - 360)*(${Fmax}-${Fmin}) +${Fmin}px);

`