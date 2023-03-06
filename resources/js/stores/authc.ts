import { defineStore } from 'pinia'
export interface LoginData {
    name: string
    email: string
    remember: boolean
    aggrement: boolean
    password: string
    password_confirmation: string
}
export interface RegisterData { }
export default defineStore("authc", {
    state: () => {
        return {
            user: null,
            token: null,
            remembers: [],
            api: {
                auth: "/auth",
                login: "/login",
                logout: "/logout",
                register: "/register",
            }
        }
    },
    getters: {},
    actions: {
        async auth(token: string) {
            console.log("auth")
        },
        async login(data: LoginData) {
            console.log("login")
        },
        async logout() {
            console.log("logout")
        },
        async register(data: RegisterData) {
            console.log("register")
        },
    },
})
