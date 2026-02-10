/**
 * @module
 * @example
 * ```ts
 * import type { ScratchProject } from '@pnsk-lab/sb3-types'
 */

import type { Shadow } from './enums/index.ts'
import type { InputPrimitive, TopLevelPrimitive } from './primitive.ts'

/**
 * Scratch 3.0 Project Schema
 */
export interface ScratchProject {
  meta: Meta
  targets: (Stage | Sprite)[]
}

/**
 * Metadata for the Scratch Project
 */
export interface Meta {
  /**
   * Semantic versioning of the project
   * @pattern ^(3\.[0-9]+\.[0-9]+)$
   */
  semver: string

  /**
   * Version of the Scratch Virtual Machine
   * @pattern ^([0-9]+\.[0-9]+\.[0-9]+)($|-)
   */
  vm?: string

  /**
   * Agent used for creating the project
   */
  agent?: string

  /**
   * Origin of the project
   */
  origin?: string
}

/**
 * Stage type, representing the backdrop and stage-specific properties
 */
export interface Stage extends Target {
  /**
   * Name of the stage
   */
  name: 'Stage'

  /**
   * Indicates that this target is a stage
   */
  isStage: true

  /**
   * Tempo of the stage
   */
  tempo?: number

  /**
   * Transparency level of the video
   */
  videoTransparency?: number

  /**
   * State of the video
   */
  videoState?: 'on' | 'off' | 'on-flipped'

  /**
   * Layer order of the stage
   */
  layerOrder?: 0
}

/**
 * Sprite type, representing the individual characters in the project
 */
export interface Sprite extends Target {
  /**
   * Name of the sprite
   * @not "\_stage\_"
   */
  name: string

  /**
   * Indicates that this target is not a stage
   */
  isStage: false

  /**
   * Visibility of the sprite
   */
  visible?: boolean

  /**
   * X position of the sprite
   */
  x?: number

  /**
   * Y position of the sprite
   */
  y?: number

  /**
   * Size of the sprite
   */
  size?: number

  /**
   * Direction the sprite is facing
   */
  direction?: number

  /**
   * Whether the sprite is draggable
   */
  draggable?: boolean

  /**
   * Rotation style of the sprite
   */
  rotationStyle?: 'all around' | "don't rotate" | 'left-right'

  /**
   * Layer order of the sprite
   * @minimum 1
   */
  layerOrder?: number
}

/**
 * Common properties for both stages and sprites
 */
export interface Target {
  /**
   * Index of the current costume
   * @minimum 0
   */
  currentCostume: number

  /**
   * Blocks associated with this target
   */
  blocks: { [id: string]: Block | TopLevelPrimitive }

  /**
   * Variables associated with this target
   */
  variables: { [id: string]: ScalarVariable }

  /**
   * Lists associated with this target
   */
  lists: { [id: string]: List }

  /**
   * Broadcast messages associated with this target
   */
  broadcasts: { [id: string]: string }

  /**
   * Comments associated with this target
   */
  comments?: { [id: string]: Comment }

  /**
   * Costumes associated with this target
   */
  costumes: Costume[]

  /**
   * Sounds associated with this target
   */
  sounds: Sound[]

  /**
   * Volume of the target
   */
  volume?: number
}

/**
 * Definition for a block
 * @see https://en.scratch-wiki.info/wiki/Scratch_File_Format#Blocks
 */
export interface Block {
  /**
   * A string naming the block.
   */
  opcode: string

  /**
   * Comment associated with the block
   */
  comment?: string
  /**
   * An object associating names with arrays representing inputs into which other blocks may be dropped, including C mouths.
   * The first element of each array is 1 if the input is a shadow, 2 if there is no shadow, and 3 if there is a shadow but it is obscured by the input.
   * The second is either the ID of the input or an array representing it as described in the table below.
   * If there is an obscured shadow, the third element is its ID or an array representing it.
   * @related {@link Input}
   */
  inputs?: { [id: string]: Input }

  /**
   * Fields are text boxes, drop-down menus, etc.
   * These are used directly in {@link https://en.scratch-wiki.info/wiki/Blocks blocks} where there is an {@link https://en.scratch-wiki.info/wiki/Argument input} into which one cannot drop a {@link https://en.scratch-wiki.info/wiki/Reporter_Block reporter}.
   * However, more often than not, one should be able to do this;
   * in this case no field exists directly in the block, but an input does, and that input may have a shadow block in it.

   * An object associating names with arrays representing fields.
   * The first element of each array is the field's value.
   * For certain fields, such as variable and broadcast dropdown menus, there is also a second element, which is the ID of the field's value.
   * @example ```json
   * { "KEY_OPTION": ["enter", null] }
   * { "VARIABLE": ["variable_name", "variable_id"] }
   * ```
   */
  fields?: {
    [id: string]: Fields
  }

  /**
   * The ID of the following block or `null`.
   */
  next?: string | null

  /**
   * False if the block has a parent and true otherwise.
   */
  topLevel?: boolean

  /**
   * If the block is a {@link https://en.scratch-wiki.info/wiki/Stack_Block stack block} and is preceded, this is the ID of the preceding block.
   * If the block is the first stack block in a {@link https://en.scratch-wiki.info/wiki/C_Block C mouth}, this is the ID of the C block.
   * If the block is an input to another block, this is the ID of that other block.
   * Otherwise it is `null`.
   */
  parent?: string | null

  /**
   * True if this is a shadow block and false otherwise.
   */
  shadow?: boolean

  /**
   * X position of the block
   */
  x?: number

  /**
   * Y position of the block
   */
  y?: number

  /**
   * Mutation data for the block
   * A special block is used to hold data.
   */
  mutation?: Mutation
}

/**
 * look {@link Block.mutation}
 */
export type Mutation =
  | Mutation_procedures_call
  | Mutation_procedures_prototype
  | Mutation_control_stop

interface MutationBase {
  /** The tag name, which is always 'mutation'. */
  tagName?: 'mutation'

  /** An array of child elements (typically empty). */
  children?: []
}

interface Mutation_procedures_call extends MutationBase {
  /** The procedure code for custom blocks. */
  proccode?: string
  /*
   * https://github.com/scratchfoundation/scratch-parser/blob/665f05d739a202d565a4af70a201909393d456b2/lib/sb3_definitions.json#L282-L284
   * ではstring
   * https://en.scratch-wiki.info/wiki/Scratch_File_Format
   * ではAn array of the ids of the argumentsとの記述。
  /** The IDs of arguments for the procedure. */
  argumentids?: string | string[]

  /** Indicates if the procedure is a warp (runs without screen refresh). */
  warp?: 'true' | 'false' | 'null' | boolean | null
}
interface Mutation_procedures_prototype extends MutationBase {
  /**
   * An array of the names of the arguments. This is only present when the block has an opcode of procedures_prototype.
   */
  argumentnames: string | string[]
  /**
   * An array of the defaults of the arguments; for string/number arguments, this is an empty string, and for boolean arguments it is false. This is only present when the block has an opcode of procedures_prototype.
   */
  argumentdefaults: (string | boolean)[]
}
interface Mutation_control_stop extends MutationBase {
  /** Indicates if the procedure has a next block. */
  hasnext?: 'true' | 'false' | 'null' | boolean | null
}

/**
 * Definition for a comment
 */
export interface Comment {
  /**
   * ID of the block this comment is attached to
   */
  blockId?: string | null

  /**
   * Text of the comment
   * @maxLength 8000
   */
  text: string

  /**
   * Indicates if the comment is minimized
   */
  minimized?: boolean

  /**
   * X position of the comment
   */
  x?: number | null

  /**
   * Y position of the comment
   */
  y?: number | null

  /**
   * Width of the comment
   */
  width?: number

  /**
   * Height of the comment
   */
  height?: number
}

/**
 * Costume definition
 */
export interface Costume {
  /**
   * Asset ID of the costume
   * @pattern ^[a-fA-F0-9]{32}$
   */
  assetId: string

  /**
   * Bitmap resolution of the costume
   */
  bitmapResolution?: number

  /**
   * Data format of the costume
   * @enum ["png", "svg", "jpeg", "jpg", "bmp", "gif"]
   */
  dataFormat: 'png' | 'svg' | 'jpeg' | 'jpg' | 'bmp' | 'gif'

  /**
   * MD5 extension of the costume
   * @pattern ^[a-fA-F0-9]{32}\.[a-zA-Z]+$
   */
  md5ext?: string

  /**
   * Name of the costume
   */
  name: string

  /**
   * X coordinate of the costume's rotation center
   */
  rotationCenterX?: number

  /**
   * Y coordinate of the costume's rotation center
   */
  rotationCenterY?: number
}

/**
 * Sound definition
 */
export interface Sound {
  /**
   * Asset ID of the sound
   * @pattern ^[a-fA-F0-9]{32}$
   */
  assetId: string

  /**
   * Data format of the sound
   */
  dataFormat: 'wav' | 'wave' | 'mp3'

  /**
   * MD5 extension of the sound
   * @pattern ^[a-fA-F0-9]{32}\.[a-zA-Z0-9]+$
   */
  md5ext?: string

  /**
   * Name of the sound
   */
  name: string

  /**
   * Sample rate of the sound
   */
  rate?: number

  /**
   * Sample count of the sound
   */
  sampleCount?: number
}

/**
 * Represents a scalar value, which can be a string, number, or boolean.
 */
export type ScalarVal = string | number | boolean

/**
 * Represents a scalar variable.
 */
export type ScalarVariable = [
  displayName: string,
  defaultValue: ScalarVal,
  isCloudVariable?: boolean,
]

/**
 * Represents a list.
 */
export type List = [displayName: string, defaultValue: ScalarVal[]]

export type InputPrimitiveOrReference = InputPrimitive | /* blockId */ string

/**
 * The input value held by the block
 * @related
 */
export type Input =
  | [Shadow.SameBlock | Shadow.No, InputPrimitiveOrReference]
  | [Shadow.DiffBlock, InputPrimitiveOrReference, InputPrimitiveOrReference]

/**
 * look {@link Block.fields}
 */
export type Fields = [string, null] | [string, string]

export * from './primitive'
