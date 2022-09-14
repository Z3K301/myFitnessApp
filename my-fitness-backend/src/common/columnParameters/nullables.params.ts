import { ColumnOptions } from "typeorm"
import { boolean, double, float, int, longtext, varchar, time, date } from "./types.params"

/* Strings */

export const varcharNull: ColumnOptions = {...varchar, nullable: true}
export const varcharNotNull: ColumnOptions = {...varchar, nullable: false}

export const longtextNull: ColumnOptions = {...longtext, nullable: true}
export const longtextNotNull: ColumnOptions = {...longtext, nullable: false}

/* Numbers */

export const intNull: ColumnOptions = {...int, nullable: true}
export const intNotNull: ColumnOptions = {...int, nullable: false}

export const doubleNull: ColumnOptions = {...double, nullable: true}
export const doubleNotNull: ColumnOptions = {...double, nullable: false}

export const floatNull: ColumnOptions = {...float, nullable: true}
export const floatNotNull: ColumnOptions = {...float, nullable: false}

/* Boolean */

export const booleanNull: ColumnOptions = {...boolean, nullable: true}
export const booleanNotNull: ColumnOptions = {...boolean, nullable: false}

/* Date Time */

export const timeNull: ColumnOptions = {...time, nullable: true}
export const timeNotNull: ColumnOptions = {...time, nullable: false}

export const dateNull: ColumnOptions = {...date, nullable: true}
export const dateNotNull: ColumnOptions = {...date, nullable: false}
