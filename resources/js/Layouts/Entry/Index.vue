<script setup>
import { inject } from "vue";
import { Link } from "@inertiajs/vue3";
import Layout from "./Layout.vue";

const context = inject("context");

defineProps({
    entries: {
        type: Array,
        default: () => [],
    },
});
</script>
<template>
    <Layout>
        <div
            class="absolute w-screen h-screen grid place-content-center bg-gray-50"
        >
            <div class="container grid justify-items-center gap-2 sm:gap-4">
                <img src="/logo.png" alt="" class="w-16 aspect-square" />
                <h1 class="text-center text-2xl font-bold">Entry Point</h1>
                <div class="flex flex-wrap gap-2 sm:gap-4">
                    <div
                        v-for="entry of entries"
                        class="relative w-[180px] grid content-start gap-2 p-2 sm:p-4 bg-white text-black rounded-lg shadow-lg"
                    >
                        <h2
                            class="text-center text-lg text-gray-800 font-semibold"
                        >
                            {{ entry.name }}
                        </h2>
                        <div
                            class="grid place-items-center p-4 bg-gray-100 text-gray-800 aspect-square"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-12 h-12"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                                />
                            </svg>
                        </div>
                        <div v-if="entry.guest">
                            <button
                                class="hover:underline font-medium text-base"
                            >
                                <Link :href="entry.visit()">Visit</Link>
                            </button>
                        </div>
                        <div v-else class="flex flex-wrap gap-2">
                            <button
                                class="hover:underline font-medium text-base"
                            >
                                <Link :href="entry.signup()">SignUp</Link>
                            </button>
                            <button
                                class="hover:underline font-medium text-base"
                            >
                                <Link :href="entry.signin()">SignIn</Link>
                            </button>
                            <button
                                class="hover:underline font-medium text-base"
                            >
                                <Link :href="entry.visit()">Visit</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>
