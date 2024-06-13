export type Number = 4
// 汚染されるのはこのモジュールだけなので問題なし
// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
export const Number: Number = 4
export type PossiveNumber = 5
export const PossiveNumber: PossiveNumber = 5
export type PossiveInteger = 6
export const PossiveInteger: PossiveInteger = 6
export type Integer = 7
export const Integer: Integer = 7
export type Angle = 8
export const Angle: Angle = 8
export type Color = 9
export const Color: Color = 9
export type String = 10
// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
export const String: String = 10
export type Broadcast = 11
export const Broadcast: Broadcast = 11
export type Variable = 12
export const Variable: Variable = 12
export type List = 13
export const List: List = 13
export type All =
  | Number
  | PossiveNumber
  | PossiveInteger
  | Integer
  | Angle
  | Color
  | String
  | Broadcast
  | Variable
  | List
