import minimist from "minimist";

export interface IConsoleArguments {
    [key: string]: string;
}

export const getConsoleArguments = (): minimist.ParsedArgs => {
    return minimist(process.argv.slice(2));
};

export const getConsoleArgumentByName = (paramName: string): string => {
    return getConsoleArguments()[paramName];
};

export const getConsoleArgumentsByNames = (
    requiredParamNames: string[]
): IConsoleArguments => {
    const formattedConsoleData = getConsoleArguments();
    const data = {};
    for (const paramName of requiredParamNames) {
        const paramValue = formattedConsoleData[paramName];
        if (!paramValue) {
            console.error(`Missing argument: ${paramName}`);
        } else {
            data[paramName] = paramValue;
        }
    }

    return data;
};

export const getInvalidConsoleArguments = (
    requiredParamNames: string[],
    consoleArguments: IConsoleArguments
) => {
    return requiredParamNames.filter(paramName => !consoleArguments[paramName]);
};

export const areConsoleParamsValid = (
    paramNames: string[],
    consoleArguments: IConsoleArguments
) => {
    return paramNames.length === Object.keys(consoleArguments).length;
};
