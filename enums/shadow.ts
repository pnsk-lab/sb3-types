/**
 * @module
 * Shadow type indicating the appearance of the shadow.
 */
/** unobscured shadow */
export type UnObscured = 1
export const UnObscured: UnObscured = 1
/** no shadow */
export type No = 2
export const No: No = 2
/** obscured shadow */
export type Obscured = 3
export const Obscured: Obscured = 3
/**
 * Shadow type indicating the appearance of the shadow.
 */
export type All = UnObscured | No | Obscured
