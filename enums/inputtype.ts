/**
 * @module
 * Primitive type identifiers.
 */
/** When accepting all numbers */
export type Number = 4
// 汚染されるのはこのモジュールだけなので問題なし
// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
export const Number: Number = 4
/** When accepting all positive numbers */
export type PositiveNumber = 5
export const PositiveNumber: PositiveNumber = 5
/** When accepting all positive integers */
export type PositiveInteger = 6
export const PositiveInteger: PositiveInteger = 6
/** When accepting all integers */
export type Integer = 7
export const Integer: Integer = 7
/**
 * A wheel from -180 to 180 is displayed when editing the value.
 */
export type Angle = 8
export const Angle: Angle = 8
/**
 * Color picker appears when editing value.
 * @example "#rrggbb"
 */
export type Color = 9
export const Color: Color = 9
/** When accepting all strings (and numbers) */
export type String = 10
// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
export const String: String = 10
/**  It is a message. */
export type Broadcast = 11
export const Broadcast: Broadcast = 11
/**
 * It is a round variable block.
 */
export type Variable = 12
export const Variable: Variable = 12
/**
 * It is a round list block.
 */
export type List = 13
export const List: List = 13
/** Primitive type identifiers. */
export type All =
  | Number
  | PositiveNumber
  | PositiveInteger
  | Integer
  | Angle
  | Color
  | String
  | Broadcast
  | Variable
  | List
