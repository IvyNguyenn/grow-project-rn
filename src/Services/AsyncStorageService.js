import AsyncStorage from "@react-native-community/async-storage";
import { ERROR_MESSAGE } from "../Constants/Messages";

// Singleton class
class AsyncStorageSingleton {
    static instance = new AsyncStorageSingleton();
    constructor() {
        if (AsyncStorageSingleton.instance) {
            throw new Error(ERROR_MESSAGE.INSTANTIATION_FAIL.MESSAGE);
        }
        AsyncStorageSingleton.instance = this;
    }
    static getInstance() {
        return AsyncStorageSingleton.instance;
    }

    /**
     * Get value with key into the Web Storage
     * @name get
     * @param {string} key
     * @return {*} value of the `key`
     */
    async get(key) {
        try {
            var result = await AsyncStorage.getItem(key);
            return result;
        } catch (e) {}
    }

    /**
     * Add value with key into the Web Storage
     * @name set
     * @param {string} key
     * @param {object, string} value
     */
    async set(key, value) {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (e) {}
    }

    /**
     * Delete the corresponding entry inside the Web Storage.
     * @name remove
     * @param {string} key
     */
    async remove(key) {
        try {
            AsyncStorage.removeItem(key);
        } catch (e) {}
    }

    /**
     * Clear the Storage in one go
     * @name removeAll
     */
    async removeAll() {
        try {
            await AsyncStorage.clear();
        } catch (e) {}
    }
}
const AsyncStorageService = AsyncStorageSingleton.getInstance();
export default AsyncStorageService;
