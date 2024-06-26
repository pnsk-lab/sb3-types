import type { InputType } from './enums'

/**
 * Represents a number primitive in Scratch 3.0.
 */

export interface NumPrimitive {
  /** Primitive type identifier. */
  0:
    | InputType.Number
    | InputType.PossiveNumber
    | InputType.PossiveInteger
    | InputType.Integer
    | InputType.Angle

  /** The value of the number primitive, which can be a string or a number. */
  1: string | number
}

/**
 * Represents a color primitive in Scratch 3.0.
 */
export interface ColorPrimitive {
  /** Primitive type identifier. */
  0: InputType.Color

  /** The color value in hex format (e.g., #RRGGBB). */
  1: `#${string}`
}

/**
 * Represents a text primitive in Scratch 3.0.
 */
export interface TextPrimitive {
  /** Primitive type identifier. */
  0: InputType.String

  /** The value of the text primitive, which can be a string or a number. */
  1: string | number
} /**
 * Represents a broadcast primitive in Scratch 3.0.
 */
export interface BroadcastPrimitive {
  /** Primitive type identifier. */
  0: InputType.Broadcast

  /** The name of broadcast message. */
  1: string

  /** The broadcast message ID. */
  2: string
} /**
 * Represents a variable primitive in Scratch 3.0.
 */
export interface VariablePrimitive {
  /** Primitive type identifier. */
  0: InputType.Variable

  /** The name of the variable. */
  1: string

  /** The ID of the variable. */
  2: string

  /** x position */
  3?: number

  /** y position */
  4?: number
} /**
 * Represents a list primitive in Scratch 3.0.
 */
export interface ListPrimitive {
  /** Primitive type identifier. */
  0: InputType.List

  /** The name of the list. */
  1: string

  /** The ID of the list. */
  2: string

  /** x position */
  3?: number

  /** y position */
  4?: number
}
/**
 * Represents input primitives in Scratch 3.0.
 */
export type InputPrimitive =
  | NumPrimitive
  | ColorPrimitive
  | TextPrimitive
  | BroadcastPrimitive
  | VariablePrimitive
  | ListPrimitive
/**
 * Top-level primitive block
 */

export type TopLevelPrimitive = VariablePrimitive | ListPrimitive
