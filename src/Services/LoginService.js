import { service } from "./Service.config";
import { METHOD, TYPE_REQUEST, STRING } from "../Constants/Const";
import { API_LOGIN, API_CHANGE_PASSWORD } from "../Constants/APINames";

/**
 * Post User Login
 * @returns {Promise<AxiosResponse<any> | never | never>}
 */
export function postLogin(username, password) {
    let formdata = new FormData();
    formdata.append(STRING.USER_NAME, username);
    formdata.append(STRING.PASSWORD, password);
    return service
        .sendRequest(TYPE_REQUEST.UNAUTHENTICATION, METHOD.POST, API_LOGIN, {
            username,
            password,
        })
        .then(res => {
            console.log({ res });
            return res.data;
        });
}

/**
 * Change password
 * @returns {Promise<AxiosResponse<any> | never | never>}
 */
export function postChangePassword(currentPassword, newPassword) {
    return service
        .sendRequest(
            TYPE_REQUEST.AUTHENTICATION,
            METHOD.POST,
            API_CHANGE_PASSWORD,
            { currentPassword, newPassword }
        )
        .then(res => res.data);
}
