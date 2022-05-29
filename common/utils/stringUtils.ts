import {camelCase, startCase} from "lodash";

export const pascalCase = (str: string) => startCase(camelCase(str)).replace(/ /g, '');