import { ProviderContext, VariantType, useSnackbar } from "notistack";

let useSnackbarRef: ProviderContext;
export const SnackbarUtilitiesConfigurator: React.FC = () => {
    useSnackbarRef = useSnackbar();
    return null;
}

export const snackbarUtilities = {
    toast(msg: string, variant: VariantType = 'default') {
        useSnackbarRef.enqueueSnackbar(msg, { variant });
    },
    success(msg: string) {
        this.toast(msg, 'success')
    },
    error(msg: string) {
        this.toast(msg, 'error')
    },
    warning(msg: string) {
        this.toast(msg, 'warning')
    },
    info(msg: string) {
        this.toast(msg, 'info')
    }
}