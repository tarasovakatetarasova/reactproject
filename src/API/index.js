import axios from "axios";

export const backUrl = "http://localhost:8080/"

export async function getUsers() {
    try {
        // запрос данных с бэка
        const response = await axios.get(backUrl + 'user')
        // засетили данные к себе
        const users = response.data
    } catch (e) {
        console.log(e)
    }
}

export async function getProducts() {
    try {
        // запрос данных с бэка
        const response = await axios.get(backUrl + 'post')
        // засетили данные к себе
        const posts = response.data
    } catch (e) {
        console.log(e)
    }
}