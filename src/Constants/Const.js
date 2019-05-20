// Method call API
export const METHOD = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",
};

export const BASE_URL = "http://datnt.net/englishapp";
export const SUB_URL = "/auth/";
export const RADIAN = Math.PI / 180;

export const STRING = {
    EMPTY: "",
    DOT: ".",
    COMMA: ",",
    QUESTION_MARK: "?",
    ENABLED: "enabled",
    STATE: "state",
    USER_NAME: "username",
    PASSWORD: "password",
    ACCESS_LEVEL: "accessLevel",
    TOTAL: "total",
    TODAY: "Today",
    MONTH: "month",
    DAY: "day",
};

export const OBJECT_TYPE = {
    NUMBER: "number",
};

// AsyncStorage
export const LOGIN_ASYNCSTORAGE_OBJECT = {
    LOGIN_SAVE_USE_NAME: "userName",
    TOKEN_TIME_OUT: "timeout",
    TOKEN: "token",
    TOKEN_TYPE: "tokenType",
    SIGNAL: "signal",
    PUBLICKEY: "PUBLICKEY",
    PERMISSION: "permission",
};

export const POSITION = {
    FIRST: 0,
    SECOND: 1,
    THIRST: 2,
};

export const STATE = {
    DISABLE: "DISABLE",
    ASSIGNED: "ASSIGNED",
    AVAILABLE: "AVAILABLE",
};

export const ACTIVE = {
    ON: {
        NAME: "ON",
        VALUE: 1,
        NAME_DIFF: "ACTIVE",
    },
    OFF: {
        NAME: "OFF",
        VALUE: 0,
        NAME_DIFF: "DISABLE",
    },
};

export const ACTIVE_SCHEME = {
    ON: {
        NAME: "ON",
        VALUE: 1,
        TRUE: true,
    },
    OFF: {
        NAME: "OFF",
        VALUE: 2,
        FALSE: false,
    },
};

export const TIME_OUT = {
    INTERVAL_CHECK_TOKEN: 1000,
    TOKEN_TIME_OUT: 1000,
    TIMEOUT_SLEEP_API: 500,
    INTERVAL_CHECK_EXTEND_TOKEN: 600000,
};

export const FORMAT_DATE = {
    TIME_BEGIN_DAY: " 00:00:00",
    TIME_END_DAY: " 23:59:59",
    DATE: "DD/MM/YYYY",
    DATE_NO_SLASH: "YYYYMMDD",
    DATE_TIME: "DD/MM/YYYY HH:mm:ss",
};

export const INFORM = {
    FAIL: "Error",
    WARNING: "Warning",
    SUCCESS: "Success",
};

export const ENV = {
    DEV: "development",
    PRO: "production",
};

export const SORT_TYPE = {
    ASC: "asc",
    DESC: "desc",
};

export const TYPE_REQUEST = {
    AUTHENTICATION: "AUTHENTICATION",
    UNAUTHENTICATION: "UNAUTHENTICATION",
};

export const MENU = [
    {
        id: 10,
        label: "",
        icon: "",
    },
    {
        id: 20,
        label: "",
        icon: "",
    },
];

export const CHECKBOX_STATUS = {
    ALL: 2,
    CHECKED: 1,
    UNCHECKED: 0,
};
