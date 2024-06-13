/**
 * @module
 * @example
 * ```ts
 * import type { ScratchProject } from '@pnsk-lab/sb3-types'
 */

/**
 * Scratch 3.0 Project Schema
 */
export interface ScratchProject {
  meta: Meta
  targets: Array<Stage | Sprite>
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
   * @enum ["Stage"]
   */
  name: 'Stage'

  /**
   * Indicates that this target is a stage
   * @enum [true]
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
   * @enum ["on", "off", "on-flipped"]
   */
  videoState?: 'on' | 'off' | 'on-flipped'

  /**
   * Layer order of the stage
   * @enum [0]
   */
  layerOrder?: number
}

/**
 * Sprite type, representing the individual characters in the project
 */
export interface Sprite extends Target {
  /**
   * Name of the sprite
   * @not {"enum": ["_stage_"]}
   */
  name: string

  /**
   * Indicates that this target is not a stage
   * @enum [false]
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
   * @enum ["all around", "don't rotate", "left-right"]
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
  blocks: { [key: string]: Block | TopLevelPrimitive }

  /**
   * Variables associated with this target
   */
  variables: { [key: string]: ScalarVariable }

  /**
   * Lists associated with this target
   */
  lists: { [key: string]: List }

  /**
   * Broadcast messages associated with this target
   */
  broadcasts: { [key: string]: string }

  /**
   * Comments associated with this target
   */
  comments?: { [key: string]: Comment }

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
 */
export interface Block {
  /**
   * Opcode of the block
   */
  opcode: string

  /**
   * Comment associated with the block
   */
  comment?: string

  /**
   * Inputs for the block
   */
  inputs?: { [key: string]: [number, (string | InputPrimitive)?] }

  /**
   * Fields for the block
   */
  fields?: { [key: string]: [string, string] }

  /**
   * ID of the next block
   */
  next?: string | null

  /**
   * Indicates if this is a top-level block
   */
  topLevel?: boolean

  /**
   * ID of the parent block
   */
  parent?: string | null

  /**
   * Indicates if this block is a shadow block
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
   */
  mutation?: {
    tagName: 'mutation'
    children?: []
    proccode?: string
    argumentids?: string
    warp?: boolean | string | null
    hasnext?: boolean | string | null
  }
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
   * @enum ["wav", "wave", "mp3"]
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
 * Scalar variable definition
 */
export interface ScalarVariable {
  /**
   * Name of the variable
   */
  name: string

  /**
   * Value of the variable
   */
  value: string | number | boolean

  /**
   * Whether this is a cloud variable
   */
  isCloud?: true
}

/**
 * List definition
 */
export interface List {
  /**
   * Name of the list
   */
  name: string

  /**
   * Contents of the list
   */
  contents: Array<string | number | boolean>
}

/**
 * Top-level primitive block
 */
export type TopLevelPrimitive = VariablePrimitive | ListPrimitive

/**
 * Variable primitive block
 */
export interface VariablePrimitive {
  [index: number]: number | string
}

/**
 * List primitive block
 */
export interface ListPrimitive {
  [index: number]: number | string
}

/**
 * Input primitive block
 */
export type InputPrimitive =
  | NumPrimitive
  | ColorPrimitive
  | TextPrimitive
  | BroadcastPrimitive
  | VariablePrimitive
  | ListPrimitive

/**
 * Number primitive block
 */
export interface NumPrimitive {
  [index: number]: number | string
}

/**
 * Color primitive block
 */
export interface ColorPrimitive {
  [index: number]: number | string
}

/**
 * Text primitive block
 */
export interface TextPrimitive {
  [index: number]: number | string
}

/**
 * Broadcast primitive block
 */
export interface BroadcastPrimitive {
  [index: number]: number | string
}
