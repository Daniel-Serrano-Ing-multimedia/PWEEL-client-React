
export type layaoutProps = {
  routes: Iroute[]
}
export interface Iroute {
  path      : string,
  Component : React.FC<layaoutProps>,
  exact     : boolean
}
export interface Ilayaout{
  path              : string,
  LayaoutComponent  : React.FC<layaoutProps>,
  exact             : boolean,
  routes            : Iroute[]
}