import { ColumnOptions } from "typeorm"
import { longtextDefVoid, varcharDefVoid, intDef, doubleDef, floatDef, booleanDefT, booleanDefF } from "./defaults.params"
import { longtextNotNull, longtextNull, varcharNotNull, varcharNull, intNotNull, intNull, doubleNotNull, doubleNull, floatNotNull, floatNull, booleanNull, booleanNotNull } from "./nullables.params"
import { longtext, varchar, int, double, float, boolean } from "./types.params"
import { longtextUniq, varcharUniq, intUniq, doubleUniq, floatUniq } from "./uniques.params"

/* Strings */

export const varcharNotUpdNotSel: ColumnOptions = {...varchar, update: false, select: false}
export const varcharNotUpd: ColumnOptions = {...varchar, update: false}
export const varcharNotSel: ColumnOptions = {...varchar, select: false}
export const longtextNotUpdNotSel: ColumnOptions = {...longtext, update: false, select: false}
export const longtextNotUpd: ColumnOptions = {...longtext, update: false}
export const longtextNotSel: ColumnOptions = {...longtext, select: false}

export const varcharDefVoidNotSel: ColumnOptions = {...varcharDefVoid, select: false}
export const longtextDefVoidNotSel: ColumnOptions = {...longtextDefVoid, select: false}

export const varcharNullNotUpdNotSel: ColumnOptions = {...varcharNull, update: false, select: false}
export const varcharNullNotUpd: ColumnOptions = {...varcharNull, update: false}
export const varcharNullNotSel: ColumnOptions = {...varcharNull, select: false}
export const varcharNotNullNotUpdNotSel: ColumnOptions = {...varcharNotNull, update: false, select: false}
export const varcharNotNullNotUpd: ColumnOptions = {...varcharNotNull, update: false}
export const varcharNotNullNotSel: ColumnOptions = {...varcharNotNull, select: false}
export const longtextNullNotUpdNotSel: ColumnOptions = {...longtextNull, update: false, select: false}
export const longtextNullNotUpd: ColumnOptions = {...longtextNull, update: false}
export const longtextNullNotSel: ColumnOptions = {...longtextNull, select: false}
export const longtextNotNullNotUpdNotSel: ColumnOptions = {...longtextNotNull, update: false, select: false}
export const longtextNotNullNotUpd: ColumnOptions = {...longtextNotNull, update: false}
export const longtextNotNullNotSel: ColumnOptions = {...longtextNotNull, select: false}

export const varcharUniqNotUpdNotSel: ColumnOptions = {...varcharUniq, update: false, select: false}
export const varcharUniqNotUpd: ColumnOptions = {...varcharUniq, update: false}
export const varcharUniqNotSel: ColumnOptions = {...varcharUniq, select: false}
export const longtextUniqNotUpdNotSel: ColumnOptions = {...longtextUniq, update: false, select: false}
export const longtextUniqNotUpd: ColumnOptions = {...longtextUniq, update: false}
export const longtextUniqNotSel: ColumnOptions = {...longtextUniq, select: false}

/* Numbers */

export const intNotUpdNotSel: ColumnOptions = {...int, update: false, select: false}
export const intNotUpd: ColumnOptions = {...int, update: false}
export const intNotSel: ColumnOptions = {...int, select: false}
export const doubleNotUpdNotSel: ColumnOptions = {...double, update: false, select: false}
export const doubleNotUpd: ColumnOptions = {...double, update: false}
export const doubleNotSel: ColumnOptions = {...double, select: false}
export const floatNotUpdNotSel: ColumnOptions = {...float, update: false, select: false}
export const floatNotUpd: ColumnOptions = {...float, update: false}
export const floatNotSel: ColumnOptions = {...float, select: false}

export const intDefVoidNotSel: ColumnOptions = {...intDef, select: false}
export const doubleDefVoidNotSel: ColumnOptions = {...doubleDef, select: false}
export const floatDefVoidNotSel: ColumnOptions = {...floatDef, select: false}

export const intNullNotUpdNotSel: ColumnOptions = {...intNull, update: false, select: false}
export const intNullNotUpd: ColumnOptions = {...intNull, update: false}
export const intNullNotSel: ColumnOptions = {...intNull, select: false}
export const intNotNullNotUpdNotSel: ColumnOptions = {...intNotNull, update: false, select: false}
export const intNotNullNotUpd: ColumnOptions = {...intNotNull, update: false}
export const intNotNullNotSel: ColumnOptions = {...intNotNull, select: false}
export const doubleNullNotUpdNotSel: ColumnOptions = {...doubleNull, update: false, select: false}
export const doubleNullNotUpd: ColumnOptions = {...doubleNull, update: false}
export const doubleNullNotSel: ColumnOptions = {...doubleNull, select: false}
export const doubleNotNullNotUpdNotSel: ColumnOptions = {...doubleNotNull, update: false, select: false}
export const doubleNotNullNotUpd: ColumnOptions = {...doubleNotNull, update: false}
export const doubleNotNullNotSel: ColumnOptions = {...doubleNotNull, select: false}
export const floatNullNotUpdNotSel: ColumnOptions = {...floatNull, update: false, select: false}
export const floatNullNotUpd: ColumnOptions = {...floatNull, update: false}
export const floatNullNotSel: ColumnOptions = {...floatNull, select: false}
export const floatNotNullNotUpdNotSel: ColumnOptions = {...floatNotNull, update: false, select: false}
export const floatNotNullNotUpd: ColumnOptions = {...floatNotNull, update: false}
export const floatNotNullNotSel: ColumnOptions = {...floatNotNull, select: false}

export const intUniqNotUpdNotSel: ColumnOptions = {...intUniq, update: false, select: false}
export const intUniqNotUpd: ColumnOptions = {...intUniq, update: false}
export const intUniqNotSel: ColumnOptions = {...intUniq, select: false}
export const doubleUniqNotUpdNotSel: ColumnOptions = {...doubleUniq, update: false, select: false}
export const doubleUniqNotUpd: ColumnOptions = {...doubleUniq, update: false}
export const doubleUniqNotSel: ColumnOptions = {...doubleUniq, select: false}
export const floatUniqNotUpdNotSel: ColumnOptions = {...floatUniq, update: false, select: false}
export const floatUniqNotUpd: ColumnOptions = {...floatUniq, update: false}
export const floatUniqNotSel: ColumnOptions = {...floatUniq, select: false}

/* Boolean */

export const booleanNotUpdNotSel: ColumnOptions = {...boolean, update: false, select: false}
export const booleanNotUpd: ColumnOptions = {...boolean, update: false}
export const booleanNotSel: ColumnOptions = {...boolean, select: false}

export const booleanDefTNotUpdNotSel: ColumnOptions = {...booleanDefT, update: false, select: false}
export const booleanDefTNotSelNotIns: ColumnOptions = {...booleanDefT, select: false, insert: false}
export const booleanDefTNotUpd: ColumnOptions = {...booleanDefT, update: false}
export const booleanDefTNotSel: ColumnOptions = {...booleanDefT, select: false}
export const booleanDefTNotIns: ColumnOptions = {...booleanDefT, insert: false}

export const booleanDefFNotUpdNotSel: ColumnOptions = {...booleanDefF, update: false, select: false}
export const booleanDefFNotSelNotIns: ColumnOptions = {...booleanDefF, select: false, insert: false}
export const booleanDefFNotUpd: ColumnOptions = {...booleanDefF, update: false}
export const booleanDefFNotSel: ColumnOptions = {...booleanDefF, select: false}
export const booleanDefFNotIns: ColumnOptions = {...booleanDefF, insert: false}

export const booleanNullNotUpdNotSel: ColumnOptions = {...booleanNull, update: false, select: false}
export const booleanNullNotSelNotIns: ColumnOptions = {...booleanNull, select: false, insert: false}
export const booleanNullNotUpd: ColumnOptions = {...booleanNull, update: false}
export const booleanNullNotSel: ColumnOptions = {...booleanNull, select: false}
export const booleanNullNotIns: ColumnOptions = {...booleanNull, insert: false}

export const booleanNotNullNotUpdNotSel: ColumnOptions = {...booleanNotNull, update: false, select: false}
export const booleanNotNullNotSelNotIns: ColumnOptions = {...booleanNotNull, select: false, insert: false}
export const booleanNotNullNotUpd: ColumnOptions = {...booleanNotNull, update: false}
export const booleanNotNullNotSel: ColumnOptions = {...booleanNotNull, select: false}
export const booleanNotNullNotIns: ColumnOptions = {...booleanNotNull, insert: false}
