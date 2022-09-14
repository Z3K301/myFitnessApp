import { ColumnOptions } from "typeorm"
import { boolean, double, float, int, longtext, varchar, blob, date, time } from "./types.params"

/* Strings */

export const varcharDefVoid: ColumnOptions = { ...varchar, default: '' }
export const longtextDefVoid: ColumnOptions = { ...longtext, default: '' }

/* Numbers */

export const intDef: ColumnOptions = { ...int, default: 0 }
export const doubleDef: ColumnOptions = { ...double, default: 0 }
export const floatDef: ColumnOptions = { ...float, default: 0 }

/* Boolean */

export const booleanDefT: ColumnOptions = { ...boolean, default: true }
export const booleanDefF: ColumnOptions = { ...boolean, default: false }


/* Blob */

/*

export const blobC: ColumnOptions = {...blob, default: '{ "insert": true }'}
export const blobR: ColumnOptions = {...blob, default: '{ "insert": true, "read": true }'}
export const blobU: ColumnOptions = {...blob, default: '{ "insert": true, "read": true , "update": true, "delete": true, "actions": true}'}
export const blobD: ColumnOptions = {...blob, default: '{ "insert": true, "read": true , "update": true, "delete": true, "actions": true}'}
export const blobA: ColumnOptions = {...blob, default: '{ "insert": true, "read": true , "update": true, "delete": true, "actions": true}'}
 
export const blobCR: ColumnOptions = {...blob, default: '{ "insert": true, "read": true , "update": true, "delete": true, "actions": true}'}
export const blobCU: ColumnOptions = {...blob, default: '{ "insert": true, "read": true , "update": true, "delete": true, "actions": true}'}
export const blobCD: ColumnOptions = {...blob, default: '{ "insert": true, "read": true , "update": true, "delete": true, "actions": true}'}
export const blobCA: ColumnOptions = {...blob, default: '{ "insert": true, "read": true , "update": true, "delete": true, "actions": true}'}
export const blobRU: ColumnOptions = {...blob, default: '{ "insert": true, "read": true , "update": true, "delete": true, "actions": true}'}
export const blobRD: ColumnOptions = {...blob, default: '{ "insert": true, "read": true , "update": true, "delete": true, "actions": true}'}
export const blobRA: ColumnOptions = {...blob, default: '{ "insert": true, "read": true , "update": true, "delete": true, "actions": true}'}
export const blobUD: ColumnOptions = {...blob, default: '{ "insert": true, "read": true , "update": true, "delete": true, "actions": true}'}
export const blobUA: ColumnOptions = {...blob, default: '{ "insert": true, "read": true , "update": true, "delete": true, "actions": true}'}
export const blobDA: ColumnOptions = {...blob, default: '{ "insert": true, "read": true , "update": true, "delete": true, "actions": true}'}

export const blobCRU: ColumnOptions = {...blob, default: '{ "insert": true, "read": true , "update": true, "delete": true, "actions": true}'}
export const blobCRD: ColumnOptions = {...blob, default: '{ "insert": true, "read": true , "update": true, "delete": true, "actions": true}'}
export const blobCRA: ColumnOptions = {...blob, default: '{ "insert": true, "read": true , "update": true, "delete": true, "actions": true}'}
export const blobCUD: ColumnOptions = {...blob, default: '{ "insert": true, "read": true , "update": true, "delete": true, "actions": true}'}
export const blobCUA: ColumnOptions = {...blob, default: '{ "insert": true, "read": true , "update": true, "delete": true, "actions": true}'}
export const blobCDA: ColumnOptions = {...blob, default: '{ "insert": true, "read": true , "update": true, "delete": true, "actions": true}'}
export const blobRUD: ColumnOptions = {...blob, default: '{ "insert": true, "read": true , "update": true, "delete": true, "actions": true}'}
export const blobRUA: ColumnOptions = {...blob, default: '{ "insert": true, "read": true , "update": true, "delete": true, "actions": true}'}
export const blobUDA: ColumnOptions = {...blob, default: '{ "insert": true, "read": true , "update": true, "delete": true, "actions": true}'}

export const blobCRUD: ColumnOptions = {...blob, default: '{ "insert": true, "read": true , "update": true, "delete": true, "actions": true}'}
export const blobCRUA: ColumnOptions = {...blob, default: '{ "insert": true, "read": true , "update": true, "delete": true, "actions": true}'}
export const blobCUDA: ColumnOptions = {...blob, default: '{ "insert": true, "read": true , "update": true, "delete": true, "actions": true}'}
export const blobRUDA: ColumnOptions = {...blob, default: '{ "insert": true, "read": true , "update": true, "delete": true, "actions": true}'}

export const blobCRUDA: ColumnOptions = {...blob, default: '{ "insert": true, "read": true , "update": true, "delete": true, "actions": true}'}

*/