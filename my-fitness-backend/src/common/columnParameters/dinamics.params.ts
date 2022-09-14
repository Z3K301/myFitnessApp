import { ColumnOptions } from "typeorm";

export const withLen = (n: number, columnOptions: ColumnOptions) => {
    switch(columnOptions?.type) {
        case 'varchar': case 'longtext': return {...columnOptions, length: n};
        case 'int': case 'double': case 'float': return {...columnOptions, with: n};
        default: return columnOptions;
      }
}

export const withName = (name: string, columnOptions: ColumnOptions) => {
    return {...columnOptions, name: name}
}

export const joinOpts = (...args: ColumnOptions[]) => args.reduce((acc, opt) => Object.assign(acc, opt))