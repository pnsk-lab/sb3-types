import type { InputType as TInputType, Shadow as TShadow } from './mod'
export const Shadow = {
  UnObscured: 0,
  No: 1,
  Obscured: 2,
} as const satisfies Record<string, TShadow.All>
export const InputType = {
  Number: 4,
  PossiveNumber: 5,
  PossiveInteger: 6,
  Integer: 7,
  Angle: 8,
  Color: 9,
  String: 10,
  Broadcast: 11,
  Variable: 12,
  List: 13,
  additionalProperty: 4,
} as const satisfies Record<string, TInputType.All>
