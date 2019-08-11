import * as minimist from "minimist";

export interface IConsoleArguments {
    [key: string]: string;
}

export const getConsoleArguments = (): minimist.ParsedArgs => {
    return minimist(process.argv.slice(2));
}

export const getConsoleArgumentsByNames = (requiredParamNames: string[]): IConsoleArguments => {
    const formattedConsoleData = getConsoleArguments();
    const data = {};
    for(const paramName of requiredParamNames) {
        const paramValue = formattedConsoleData[paramName];
        if(!paramValue) {
            console.error(`Missing argument: ${paramName}`);
        } else {
            data[paramName] = paramValue;
        }
    }

    return data;
};

export const getInvalidConsoleArguments = (requiredParamNames: string[]) => {
    const formattedConsoleData = getConsoleArguments();

    return requiredParamNames.filter((paramName) => !formattedConsoleData[paramName]);
}