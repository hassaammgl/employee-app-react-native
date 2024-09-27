import { Storage } from 'expo-storage'

export const store = {
    set: async (key, value) => {
        return await Storage.setItem({ key, value: JSON.stringify(value) });
    },
    get: async (key) => {
        return await Storage.getItem({ key });
    },
    remove: async (key) => {
        return await Storage.removeItem({ key });
    },
    allKeys: async () => {
        let keys = await Storage.getAllKeys();
        console.log(keys);
        return keys;
    }
};