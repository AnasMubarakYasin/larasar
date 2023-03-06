import contexts from "../contexts/index.js"
import type AppCtx from "./app-ctx";
import { createApp, App as AppVue } from "vue";
// @ts-ignore
import { Promiseify } from "./helper.js";

export function app() {
    return App.app;
}
export function app_plugin(vue: AppVue) {
    App.app_vue = vue;
    vue.provide("context", app().context);
}
export default class App {
    static app: App = null
    static app_vue: AppVue = null
    static create() {
        if (!this.app) {
            this.app = new this()
        }
        return this.app
    }
    context: AppCtx = null
    contexts: AppCtx[] = []
    private main: any
    async run() {
        await this.create_context()
        if (!this.context) {
            throw new Error("Context doesn't exist, try check context dir");
        }
        if (this.context.allow_splash) {
            await this.create_splash()
        }
        await this.load_main();
        await this.run_main();
    }
    async reload() {
        App.app_vue.unmount();
        delete App.app_vue
        this.select_context();
        if (!this.context) {
            throw new Error("Context doesn't exist, try check context dir");
        }
        if (this.context.allow_splash) {
            await this.create_splash()
        }
        await this.run_main();
    }
    async create_context() {
        for (const Context of contexts) {
            const context = new Context()
            this.contexts.push(context)
            if (!this.context && context.in_scope()) {
                this.context = context
            }
        }
    }
    select_context() {
        delete this.context;
        for (const context of this.contexts) {
            if (!this.context && context.in_scope()) {
                return this.context = context
            }
        }
    }
    async load_main() {
        // @ts-ignore
        const module = await import("../app.ts");
        this.main = module.default
    }
    async run_main() {
        this.main(this.context)
    }
    async create_splash() {
        const promise = new Promiseify()
        // @ts-ignore
        const module = await import('../Components/SplashScreen.vue')
        const app = createApp(module.default);
        app.mount("#splash-screen");

        document.addEventListener("splash-on", async () => {
            promise.resolver();
        });
        document.addEventListener("screen-ready", async () => {
            
            document.dispatchEvent(new CustomEvent("splash-out"));
        });
        document.addEventListener("screen-show", async () => {
            requestAnimationFrame(() => {
                app.unmount();
            });
        });
        document.addEventListener("screen-show", () => {
            promise.resolver();
        })
        document.dispatchEvent(new CustomEvent("splash-in"));
        return promise;
    }
}