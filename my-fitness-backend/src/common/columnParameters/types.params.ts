import { ColumnOptions } from "typeorm"

/* Strings */

export const varchar: ColumnOptions = { type: 'varchar' }
export const longtext: ColumnOptions = { type: 'longtext' }

/* Numbers */

export const int: ColumnOptions = { type: 'int' }
export const double: ColumnOptions = { type: 'double' }
export const float: ColumnOptions = { type: 'float' }

/* Boolean */

export const boolean: ColumnOptions = { type: 'bool' }

/* Date Time */

export const time: ColumnOptions = { type: 'time' }
export const date: ColumnOptions = { type: 'date' }

/* Enum */

export const enumType = (enumObj: Object): ColumnOptions => { return { type: 'enum', enum: enumObj} }

/* Blob */

export const blob: ColumnOptions = { type: 'blob' }