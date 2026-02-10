/**
 * @module
 * Shadow type indicating the appearance of the shadow.
 */
/** unobscured shadow */
export type SameBlock = 1
export const SameBlock: SameBlock = 1
/** no shadow */
export type No = 2
export const No: No = 2
/** obscured shadow */
export type DiffBlock = 3
export const DiffBlock: DiffBlock = 3
/**
 * Shadow type indicating the appearance of the shadow.
 */
export type All = SameBlock | No | DiffBlock
