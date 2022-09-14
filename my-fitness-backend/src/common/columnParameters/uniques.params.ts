import { ColumnOptions } from "typeorm"
import { double, float, int, longtext, varchar, time, date } from "./types.params"

/* Basics */

export const uniq: ColumnOptions = {unique: true}

/* Strings */

export const varcharUniq: ColumnOptions = {...varchar, unique: true}
export const longtextUniq: ColumnOptions = {...longtext, unique: true}

/* Numbers */

export const intUniq: ColumnOptions = {...int, unique: true}
export const doubleUniq: ColumnOptions = {...double, unique: true}
export const floatUniq: ColumnOptions = {...float, unique: true}

/* Date Time */

export const timeUniq: ColumnOptions = {...time, unique: true}
export const dateUniq: ColumnOptions = {...date, unique: true}
