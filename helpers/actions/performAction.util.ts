import { getInvalidConsoleArguments, getConsoleArgumentsByNames } from "../consoleArguments/consoleArguments.utils";

export interface IParams {
    [key: string]: any;
}

export interface IActionConfig {
    actionName: string;
    consoleArgumentNames: string[];
    initialParams?: IParams;
    request: (params: IParams) => Promise<void>
}

export const performAction = async (config: IActionConfig) => {
    const invalidArguments = getInvalidConsoleArguments(config.consoleArgumentNames);
    if (invalidArguments.length > 0) {
        console.error(
            `Error! Invalid or missing params for ${
                config.actionName
            }: ${invalidArguments}`
        );
        return;
    }

    const data = {
        ...getConsoleArgumentsByNames(config.consoleArgumentNames),
        ...config.initialParams
    };

    await config.request(data);
};