import { defineStore } from 'pinia'

export default defineStore("ctx", {
    state: () => ({
        splash: "init",
        app_state: "init",
    }),
    getters: {},
    actions: {
        splash_in() {
            this.state.splash = "in"
        },
        splash_on() {
            this.state.splash = "on"
        },
        splash_out() {
            this.state.splash = "out"
        },
        app_ready() {
            this.state.app_state = "ready"
        },
        app_active() {
            this.state.app_state = "active"
        },
    },
})
