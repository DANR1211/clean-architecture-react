import { TypeWithKey } from "../models"

export const getValidationError = (errorCode: any) => {
    const codeMatcher: TypeWithKey<string> = {
        ERR_NETWORK: "Error de API",
    };

    return codeMatcher[errorCode];
}