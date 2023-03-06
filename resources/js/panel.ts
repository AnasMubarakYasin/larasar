import PanelBase, { Feature, Menu, Action, State, Accountable } from "@larasar/js/lib/panel";
import {
    symRoundedDashboard,
    symRoundedGroup,
    symRoundedLogout,
} from "@quasar/extras/material-symbols-rounded";
import { route } from "./lib/ziggy.js";
// @ts-ignore
import { router } from "@inertiajs/vue3";

export default class Panel extends PanelBase {
    name = "Panel"
    version = "1.0.0"
    brand = "/logo.png"
    features: Feature[] = []
    get_features() {
        return this.features
    }
    get_side_menu(): Menu[] {
        return [
            {
                name: "Dashboard",
                icon: symRoundedDashboard,
                index: route("web.panel.dashboard"),
            },
            {
                tag: "Accounts",
                name: "Users",
                icon: symRoundedGroup,
                index: route("web.panel.users.index"),
            }
        ]
    }
    get_top_menu(): Menu[] {
        return [
            {
                name: "Profile",
                icon: symRoundedDashboard,
                index: route("web.panel.dashboard"),
            },
            {
                tag: "Accounts",
                name: "Users",
                icon: symRoundedGroup,
                index: route("web.panel.users.index"),
            },
            {
                name: "Sign Out",
                icon: symRoundedLogout,
                index: "",
                onclick(event) {
                    router.post(route('api.entry.signout'));
                }
            }
        ]
    }
    get_account(): Accountable {
        return {
            name: "Manager",
            desc: "administrator",
        }
    }
}
