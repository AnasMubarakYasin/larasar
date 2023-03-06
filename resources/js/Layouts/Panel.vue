<script setup>
import { inject, ref } from "vue";
import { useQuasar } from "quasar";
import { Link } from "@inertiajs/vue3";
import {
    symRoundedMenuOpen,
    symRoundedMenu,
    symRoundedNotifications,
    symRoundedDarkMode,
    symRoundedLightMode,
    symRoundedSettings,
    symRoundedDashboard,
    symRoundedLogout,
    symRoundedHome,
    symRoundedGridView,
    symRoundedGroup,
    symRoundedKeyboardArrowUp,
} from "@quasar/extras/material-symbols-rounded";

defineProps({
    name: {
        type: String,
        default: () => "Panel",
    },
    brand: {
        type: String,
        default: () => "/logo.png",
    },
});

console.log("panel", "welcome");

const context = inject("context");
const panel = context.to_panel();
const store = panel.get_store()();

const $quasar = useQuasar();
const icon_menu = ref(symRoundedMenuOpen);
const icon_theme = ref(symRoundedDarkMode);
const drawer_left_show = ref(false);
const drawer_right_show = ref(false);
const breadcrumbs = location.pathname.replace(panel.base, "").split("/");

const check1 = ref(true);
const check2 = ref(false);
const check3 = ref(false);
const notif1 = ref(true);
const notif2 = ref(true);
const notif3 = ref(false);
const brightness = ref(3);
const mic = ref(8);

function toggle_drawer_left() {
    drawer_left_show.value = !drawer_left_show.value;
    icon_menu.value = drawer_left_show.value
        ? symRoundedMenuOpen
        : symRoundedMenu;
}
function toggle_drawer_right() {
    drawer_right_show.value = !drawer_right_show.value;
}
function toggle_dark_mode() {
    $quasar.dark.set(!$quasar.dark.isActive);
    icon_theme.value = $quasar.dark.isActive
        ? symRoundedLightMode
        : symRoundedDarkMode;
}
</script>
<style lang="scss">
@use "../../css/helper.scss";
#page-scroll > .q-scrollarea__container {
    min-height: 100vh;
}
</style>
<style scoped>
.link {
    @apply text-black dark:text-white;
}
.link-active {
    @apply bg-blue-100 text-black dark:bg-blue-400 dark:!text-white;
}
.breadcrumbs-active {
    @apply text-blue-500 dark:text-blue-400;
}
</style>
<template>
    <q-scroll-area id="page-scroll" class="min-h-screen font-sans antialiased">
        <q-layout view="lhh LpR lff">
            <q-header reveal :reveal-offset="Infinity" class="shadow:bar">
                <q-toolbar class="bar">
                    <q-btn
                        unelevated
                        square
                        padding="sm"
                        class="!rounded-xl"
                        :icon="icon_menu"
                        @click="toggle_drawer_left"
                    >
                        <q-tooltip> Side Menu </q-tooltip>
                    </q-btn>
                    <q-toolbar-title> </q-toolbar-title>
                    <q-btn
                        unelevated
                        square
                        padding="sm"
                        class="!rounded-xl"
                        :icon="symRoundedNotifications"
                    >
                        <q-tooltip> Notifications </q-tooltip>
                        <q-menu :offset="[0, 8]" class="dark:shadow-none">
                            <q-list
                                bordered
                                class="rounded-borders"
                                style="max-width: 350px"
                            >
                                <q-item-label
                                    header
                                    class="text-center text-base text-gray-700 dark:text-gray-300 font-semibold"
                                    >Notifications</q-item-label
                                >
                                <q-item clickable v-ripple>
                                    <q-item-section avatar>
                                        <q-avatar>
                                            <img
                                                src="https://cdn.quasar.dev/img/avatar2.jpg"
                                            />
                                        </q-avatar>
                                    </q-item-section>

                                    <q-item-section>
                                        <q-item-label lines="1"
                                            >Brunch this weekend?</q-item-label
                                        >
                                        <q-item-label caption lines="2">
                                            <span class="text-weight-bold"
                                                >Janet</span
                                            >
                                            -- I'll be in your neighborhood
                                            doing errands this weekend. Do you
                                            want to grab brunch?
                                        </q-item-label>
                                    </q-item-section>

                                    <q-item-section side top>
                                        1 min ago
                                    </q-item-section>
                                </q-item>

                                <q-separator inset="item" />

                                <q-item clickable v-ripple>
                                    <q-item-section avatar>
                                        <q-avatar>
                                            <img
                                                src="https://cdn.quasar.dev/img/avatar4.jpg"
                                            />
                                        </q-avatar>
                                    </q-item-section>

                                    <q-item-section>
                                        <q-item-label lines="1"
                                            >Linear Project</q-item-label
                                        >
                                        <q-item-label caption lines="2">
                                            <span class="text-weight-bold"
                                                >John</span
                                            >
                                            -- Can we schedule a call for
                                            tomorrow?
                                        </q-item-label>
                                    </q-item-section>

                                    <q-item-section side top>
                                        1 min ago
                                    </q-item-section>
                                </q-item>
                                <q-item-label
                                    header
                                    class="text-center py-2 text-sm text-gray-600 dark:text-gray-400 font-semibold"
                                >
                                    <Link href="/" class="hover:underline cursor-pointer">See all</Link>
                                </q-item-label>
                            </q-list>
                        </q-menu>
                    </q-btn>
                    <q-btn
                        unelevated
                        square
                        padding="sm"
                        class="!rounded-xl"
                        :icon="icon_theme"
                        @click="toggle_dark_mode"
                    >
                        <q-tooltip> Theme </q-tooltip>
                    </q-btn>
                    <q-btn
                        unelevated
                        square
                        padding="sm"
                        class="!rounded-xl"
                        :icon="symRoundedSettings"
                        @click="toggle_drawer_right"
                    >
                        <q-tooltip> Settings </q-tooltip>
                    </q-btn>
                    <q-btn
                        unelevated
                        square
                        padding="sm"
                        class="!rounded-xl aspect-square !text-base !font-extrabold"
                        label="EN"
                    >
                        <q-tooltip> Language </q-tooltip>
                    </q-btn>
                    <q-btn unelevated square padding="none" class="!rounded-xl">
                        <q-tooltip> Menu </q-tooltip>
                        <q-avatar square>
                            <img :src="brand" class="p-1" />
                        </q-avatar>
                        <q-menu :offset="[0, 8]" class="dark:shadow-none">
                            <q-list bordered>
                                <q-item>
                                    <q-item-section>
                                        <div
                                            class="font-semibold text-base text-gray-800 dark:text-gray-100"
                                        >
                                            {{ panel.get_account().name }}
                                        </div>
                                        <div
                                            class="font-medium text-sm text-gray-600 dark:text-gray-400"
                                        >
                                            {{ panel.get_account().desc }}
                                        </div>
                                    </q-item-section>
                                </q-item>
                                <q-separator />
                                <template v-for="menu of panel.get_top_menu()">
                                    <q-separator v-if="!!menu.tag" />
                                    <q-item
                                        clickable
                                        v-close-popup
                                        @click="menu?.onclick"
                                    >
                                        <q-item-section class="font-medium">
                                            {{ menu.name }}
                                        </q-item-section>
                                    </q-item>
                                </template>
                            </q-list>
                        </q-menu>
                    </q-btn>
                </q-toolbar>
            </q-header>
            <q-drawer
                show-if-above
                v-model="drawer_left_show"
                side="left"
                class="no-scroll shadow:bar"
            >
                <q-toolbar class="sticky top-0 bar shadow:bar">
                    <q-avatar square>
                        <img :src="brand" class="p-1" />
                    </q-avatar>
                    <q-toolbar-title>
                        {{ name }}
                    </q-toolbar-title>
                </q-toolbar>
                <q-scroll-area class="h-full bar-def">
                    <q-list padding>
                        <template v-for="(menu, key) in panel.get_side_menu()">
                            <q-item-label v-if="menu.tag" header class="pb-1">{{
                                menu.tag
                            }}</q-item-label>
                            <q-item
                                clickable
                                v-ripple
                                :active="store.active_link == menu.index"
                                @click="store.set_active_link(menu.index)"
                                active-class="link-active"
                                class="link"
                            >
                                <q-item-section :avatar="!!menu.icon">
                                    <q-icon
                                        v-if="!!menu.icon"
                                        :name="menu.icon"
                                        class="text-gray-700 dark:text-gray-200"
                                    />
                                </q-item-section>
                                <q-item-section
                                    class="text-base text-gray-800 dark:text-gray-100"
                                    >{{ menu.name }}</q-item-section
                                >
                            </q-item>
                            <q-separator v-if="!key" spaced />
                        </template>
                    </q-list>
                </q-scroll-area>
            </q-drawer>
            <q-drawer
                v-model="drawer_right_show"
                side="right"
                overlay
                class="shadow:bar"
            >
                <q-scroll-area class="h-full bar-def">
                    <q-list padding>
                        <q-item-label header>User Controls</q-item-label>

                        <q-item clickable v-ripple>
                            <q-item-section>
                                <q-item-label>Content filtering</q-item-label>
                                <q-item-label caption>
                                    Set the content filtering level to restrict
                                    apps that can be downloaded
                                </q-item-label>
                            </q-item-section>
                        </q-item>

                        <q-item clickable v-ripple>
                            <q-item-section>
                                <q-item-label>Password</q-item-label>
                                <q-item-label caption>
                                    Require password for purchase or use
                                    password to restrict purchase
                                </q-item-label>
                            </q-item-section>
                        </q-item>

                        <q-separator spaced />
                        <q-item-label header>General</q-item-label>

                        <q-item tag="label" v-ripple>
                            <q-item-section side top>
                                <q-checkbox v-model="check1" />
                            </q-item-section>

                            <q-item-section>
                                <q-item-label>Notifications</q-item-label>
                                <q-item-label caption>
                                    Notify me about updates to apps or games
                                    that I downloaded
                                </q-item-label>
                            </q-item-section>
                        </q-item>

                        <q-item tag="label" v-ripple>
                            <q-item-section side top>
                                <q-checkbox v-model="check2" />
                            </q-item-section>

                            <q-item-section>
                                <q-item-label>Sound</q-item-label>
                                <q-item-label caption>
                                    Auto-update apps at anytime. Data charges
                                    may apply
                                </q-item-label>
                            </q-item-section>
                        </q-item>

                        <q-item tag="label" v-ripple>
                            <q-item-section side top>
                                <q-checkbox v-model="check3" />
                            </q-item-section>

                            <q-item-section>
                                <q-item-label>Auto-add widgets</q-item-label>
                                <q-item-label caption>
                                    Automatically add home screen widgets
                                </q-item-label>
                            </q-item-section>
                        </q-item>

                        <q-separator spaced />
                        <q-item-label header>Notifications</q-item-label>

                        <q-item tag="label" v-ripple>
                            <q-item-section>
                                <q-item-label>Battery too low</q-item-label>
                            </q-item-section>
                            <q-item-section side>
                                <q-toggle
                                    color="blue"
                                    v-model="notif1"
                                    val="battery"
                                />
                            </q-item-section>
                        </q-item>

                        <q-item tag="label" v-ripple>
                            <q-item-section>
                                <q-item-label>Friend request</q-item-label>
                                <q-item-label caption
                                    >Allow notification</q-item-label
                                >
                            </q-item-section>
                            <q-item-section side top>
                                <q-toggle
                                    color="green"
                                    v-model="notif2"
                                    val="friend"
                                />
                            </q-item-section>
                        </q-item>

                        <q-item tag="label" v-ripple>
                            <q-item-section>
                                <q-item-label>Picture uploaded</q-item-label>
                                <q-item-label caption
                                    >Allow notification when uploading
                                    images</q-item-label
                                >
                            </q-item-section>
                            <q-item-section side top>
                                <q-toggle
                                    color="red"
                                    v-model="notif3"
                                    val="picture"
                                />
                            </q-item-section>
                        </q-item>

                        <q-separator spaced />
                        <q-item-label header>Other settings</q-item-label>

                        <q-item>
                            <q-item-section side>
                                <q-icon
                                    color="deep-orange"
                                    name="brightness_medium"
                                />
                            </q-item-section>
                            <q-item-section>
                                <q-slider
                                    v-model="brightness"
                                    :min="0"
                                    :max="10"
                                    label
                                    color="deep-orange"
                                />
                            </q-item-section>
                        </q-item>

                        <q-item>
                            <q-item-section side>
                                <q-icon color="primary" name="mic" />
                            </q-item-section>
                            <q-item-section>
                                <q-slider
                                    v-model="mic"
                                    :min="0"
                                    :max="50"
                                    label
                                />
                            </q-item-section>
                        </q-item>
                    </q-list>
                </q-scroll-area>
            </q-drawer>
            <q-page-container>
                <q-page
                    class="bg-gray-50 text-black dark:bg-gray-900 dark:text-white"
                >
                    <q-ajax-bar size="4px" />
                    <div class="grid gap-2 sm:gap-4 box">
                        <q-breadcrumbs class="paper" gutter="sm">
                            <q-breadcrumbs-el
                                label="Home"
                                :icon="symRoundedHome"
                                class="breadcrumbs-active"
                            />
                            <template v-for="breadcrumb of breadcrumbs">
                                <q-breadcrumbs-el
                                    v-if="breadcrumb"
                                    :label="breadcrumb"
                                    class="capitalize"
                                />
                            </template>
                        </q-breadcrumbs>
                        <slot />
                    </div>
                    <q-page-scroller
                        position="bottom-right"
                        :scroll-offset="150"
                        :offset="[16, 16]"
                    >
                        <q-btn
                            fab-mini
                            :icon="symRoundedKeyboardArrowUp"
                            class="!bg-blue-500 !text-white"
                        />
                    </q-page-scroller>
                </q-page>
            </q-page-container>
            <q-footer class="shadow:bar shadow-invert">
                <q-toolbar class="bar-def">
                    <q-toolbar-title class="text-center !text-base">
                        Copyright © 2022 Bladerlaiga, All Right Reserved.
                    </q-toolbar-title>
                    <div
                        class="absolute right-4 text-sm text-gray-600 !font-bold"
                    >
                        {{ panel.version }}
                    </div>
                </q-toolbar>
            </q-footer>
        </q-layout>
    </q-scroll-area>
</template>
