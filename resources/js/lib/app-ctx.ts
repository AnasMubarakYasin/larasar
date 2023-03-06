import { defineStore } from 'pinia'
export interface AppCtxState {
  splash: "init" | "in" | "out" | "on"
  app_state: "init" | "ready" | "active"
  [key: string]: any
}
export default class AppCtx {
  private store = null
  name = "App"
  index = "/app"
  state: AppCtxState = {
    splash: "init",
    app_state: "init",
  }
  allow_splash = true
  in_scope() {
    return location.pathname.startsWith(this.index)
  }
  get_store() {
    if (!this.store) {
      this.store = defineStore(this.name, {
        state: () => this.state,
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
    }
    return this.store
  }
}
