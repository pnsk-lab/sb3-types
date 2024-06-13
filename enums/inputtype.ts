/**
 * enum of InputType
 */
export type Number = 4
// 汚染されるのはこのモジュールだけなので問題なし
// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
export const Number = 4
export type PossiveNumber = 5
export const PossiveNumber = 5
export type PossiveInteger = 6
export const PossiveInteger = 6
export type Integer = 7
export const Integer = 7
export type Angle = 8
export const Angle = 8
export type Color = 9
export const Color = 9
export type String = 10
// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
export const String = 11
export type Broadcast = 11
export const Broadcast = 11
export type Variable = 12
export const Variable = 12
export type List = 13
export const List = 13
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
