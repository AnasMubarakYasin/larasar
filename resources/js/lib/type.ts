import type Panel from "./panel"

export interface Entriable {
    to_entry(): Entry
}
export interface Panelable {
    to_panel(): Panel
}
export interface Entry {
    name: string
    guest: boolean
    signin?: () => string
    signup?: () => string
    index?: () => string
    forgot_password?: () => string
    visit(): string
}