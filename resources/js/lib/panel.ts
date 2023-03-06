import { StoreDefinition, defineStore } from 'pinia'
// @ts-ignore
import { router } from "@inertiajs/vue3";

export interface Accountable {
    name: string
    desc: string
}
export default class Panel {
    name = "Panel"
    version = "1.0.0"
    brand = "/logo.png"
    base = "/panel"
    features: Feature[] = []
    get_features() {
        return this.features
    }
    get_side_menu(): Menu[] {
        return []
    }
    get_top_menu(): Menu[] {
        return []
    }
    get_account(): Accountable {
        return {
            name: "",
            desc: "",
        }
    }

    state(): State {
        return {
            active_link: location.href
        }
    }
    action(): Action {
        return {
            set_active_link(link: string) {
                this.active_link = link
                router.visit(link)
            }
        }
    }
    store: StoreDefinition<string, {
        active_link: string;
    }, {}, {
        set_active_link(link: string): void;
    }> = null
    get_store() {
        if (!this.store) {
            // @ts-ignore
            this.store = defineStore(this.name, {
                state: () => {
                    return this.state()
                },
                getters: {},
                actions: this.action()
            })
        }
        return this.store
    }
}
export interface Menu {
    tag?: string
    icon?: string
    name: string
    index: string
    sub?: Menu[]
    onclick?: (event: any) => any
}
export interface State {
    [key: string]: string | number | object
}
export interface Action {
    [key: string]: (...any: any[]) => any
}
export class Feature {
    name = ""
    icon = ""
    version = ""
    state: State = {}
    action: Action = {}
    store = null
    get_store() {
        if (!this.store) {
            this.store = defineStore(this.name, {
                state: () => this.state,
                getters: {},
                actions: this.action,
            })
        }
        return this.store
    }
}