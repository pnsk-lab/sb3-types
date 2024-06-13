import type { InputType as TInputType, Shadow as TShadow } from './mod'
export const Shadow: {
  UnObscured: TShadow.UnObscured
  No: TShadow.No
  Obscured: TShadow.Obscured
} = {
  UnObscured: 0,
  No: 1,
  Obscured: 2,
}
export const InputType: {
  Number: TInputType.Number
  PossiveNumber: TInputType.PossiveNumber
  PossiveInteger: TInputType.PossiveInteger
  Integer: TInputType.Integer
  Angle: TInputType.Angle
  Color: TInputType.Color
  String: TInputType.String
  Broadcast: TInputType.Broadcast
  Variable: TInputType.Variable
  List: TInputType.List
} = {
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
}
