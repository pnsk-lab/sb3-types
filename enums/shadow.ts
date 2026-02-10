/**
 * @module
 * Shadow type indicating the appearance of the shadow.
 */
/** unobscured shadow */
export type SameBlockShadow = 1
export const SameBlockShadow: SameBlockShadow = 1
/** no shadow */
export type NoShadow = 2
export const NoShadow: NoShadow = 2
/** obscured shadow */
export type DiffBlockShadow = 3
export const DiffBlockShadow: DiffBlockShadow = 3
/**
 * Shadow type indicating the appearance of the shadow.
 */
export type All = SameBlockShadow | NoShadow | DiffBlockShadow
