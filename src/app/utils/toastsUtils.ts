import { toast, ToastOptions } from "react-toastify"

export const errorToast = (msg?: string, options?: ToastOptions) => {
    toast(msg || 'An error occured, please try again!', {
        type: 'error',
        ...(options && options)
    })
}
export const successToast = (msg: string, options?: ToastOptions) => {
    toast(msg, {
        type: 'success',
        ...(options && options)
    })
}
