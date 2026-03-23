import axios from "axios";
const BaseURL = "https://dummyjson.com";

// Bu yerga 'export' so'zini qo'shing
export const api = axios.create({
    baseURL: BaseURL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    },
});

