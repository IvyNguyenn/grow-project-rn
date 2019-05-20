import { NetInfo } from "react-native";
import axios from "axios";
import {
    ENV,
    TIME_OUT,
    LOGIN_ASYNCSTORAGE_OBJECT,
    TYPE_REQUEST,
    STRING,
    POSITION,
    BASE_URL,
} from "../Constants/Const";
import { ERROR_MESSAGE } from "../Constants/Messages";
import AsyncStorageService from "./AsyncStorageService";
import { parseJwt } from "../Utils/decript";

class Network {
    static instance = new Network();

    token = STRING.EMPTY;
    constructor() {
        if (Network.instance) {
            throw new Error(ERROR_MESSAGE.INSTANTIATION_FAIL.MESSAGE);
        }
        Network.instance = this;
    }
    static getInstance() {
        return Network.instance;
    }

    setToken(tokenType, token) {
        this.token = token;
        AsyncStorageService.set(LOGIN_ASYNCSTORAGE_OBJECT.TOKEN, token);
        AsyncStorageService.set(
            LOGIN_ASYNCSTORAGE_OBJECT.TOKEN_TYPE,
            tokenType
        );
        const dataToken = parseJwt(token);

        if (dataToken.exp > 0) {
            AsyncStorageService.set(
                LOGIN_ASYNCSTORAGE_OBJECT.TOKEN_TIME_OUT,
                (new Date().getTime() + dataToken.exp) * 1000 + STRING.EMPTY
            );
        } else {
            AsyncStorageService.set(
                LOGIN_ASYNCSTORAGE_OBJECT.TOKEN_TIME_OUT,
                "-1"
            );
        }
    }

    getToken() {
        if (!this.token) {
            this.token =
                AsyncStorageService.get(LOGIN_ASYNCSTORAGE_OBJECT.TOKEN_TYPE) +
                " " +
                AsyncStorageService.get(LOGIN_ASYNCSTORAGE_OBJECT.TOKEN);
        }
        return this.token;
    }

    /**
     * sendRequest
     * @param method : GET / POST / PUT / DELETE
     * @param endpoint : URL
     * @param body : JSON object
     * @returns {Promise<AxiosResponse<any> | never>}
     */
    sendRequest(type, method, url, data = {}, header = STRING.EMPTY) {
        header = Object.assign(
            header,
            type === TYPE_REQUEST.AUTHENTICATION
                ? { Authorization: this.getToken() }
                : STRING.EMPTY,
            header["Content-Type"] ? "" : { "Content-Type": "application/json" }
        );
        return axios({
            method: method,
            url: url,
            baseURL: BASE_URL,
            data: data,
            timeout: TIME_OUT.INTERVAL_REQUEST_SERVER,
            headers: {
                ...header,
                // "Access-Control-Allow-Origin": '*'
            },
        }).then(res => {
            return res;
        });
    }
}

export const service = Network.getInstance();
