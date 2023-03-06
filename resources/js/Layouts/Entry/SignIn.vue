<script setup>
import { reactive, inject } from "vue";
import { router, Link, useForm } from "@inertiajs/vue3";
import {
    symRoundedArrowBack,
    symRoundedVisibility,
    symRoundedVisibilityOff,
} from "@quasar/extras/material-symbols-rounded";
import Layout from "./Layout.vue";
import authc from "../../stores/authc";
import { app } from "@larasar/js/lib/app";

const props = defineProps({
    api: String,
    name: "",
    password: "",
    remember: false,
});
const emit = defineEmits({
    submit: null,
});
const store = authc();
const context = inject("context");
const entry = context.to_entry()
const form = useForm({
    name: props.name,
    password: props.password,
});
const helper = reactive({
    password: false,
});
store.$patch({
    api: { login: props.api },
});
async function submit(event) {
    // emit("submit", form);
    // store.login(form);
    form.post(props.api, {
        onSuccess: (page) => {
            app().reload();
        },
    });
}
</script>
<style></style>
<template>
    <Layout>
        <div class="w-screen h-screen grid place-content-center bg-gray-50">
            <div
                class="relative sm:w-[400px] grid justify-items-center gap-2 bg-white p-2 sm:p-4 shadow-md rounded-md"
            >
                <q-btn
                    unelevated
                    square
                    padding="sm"
                    class="absolute top-2 sm:top-4 left-2 sm:left-4 rounded-xl"
                    :icon="symRoundedArrowBack"
                    @click="router.visit(context.to_entry().index())"
                >
                    <q-tooltip> Entry </q-tooltip>
                </q-btn>
                <div class="grid gap-2 justify-items-center">
                    <q-avatar rounded>
                        <img src="/logo.png" alt="" />
                    </q-avatar>
                    <div class="text-xl font-bold mb-4">Sign In</div>
                </div>
                <q-form class="w-full grid gap-2" @submit.prevent="submit">
                    <q-input
                        outlined
                        :dense="false"
                        debounce
                        v-model="form.name"
                        label="Name"
                        :disabled="form.processing"
                        :error="!!form.errors.name"
                        :error-message="form.errors.name"
                    />
                    <q-input
                        outlined
                        :dense="false"
                        debounce
                        v-model="form.password"
                        label="Password"
                        :type="helper.password ? 'text' : 'password'"
                        :disabled="form.processing"
                        :error="!!form.errors.password"
                        :error-message="form.errors.password"
                    >
                        <template v-slot:append>
                            <q-icon
                                :name="
                                    helper.password
                                        ? symRoundedVisibilityOff
                                        : symRoundedVisibility
                                "
                                class="cursor-pointer"
                                @click="helper.password = !helper.password"
                            />
                        </template>
                    </q-input>
                    <div class="flex justify-between items-center">
                        <q-checkbox
                            v-model="form.remember"
                            label="Remember"
                            class="flex"
                            dense
                        />
                        <div>
                            <Link href="/" class="text-blue-700 hover:underline"
                                >Forgot Password?</Link
                            >
                        </div>
                    </div>
                    <q-btn
                        color="primary"
                        label="Submit"
                        type="submit"
                        class="mt-4"
                        :disabled="form.processing"
                    />
                    <div class="flex gap-2">
                        <div class="text-gray-800 font-medium">Already have an account?</div>
                        <Link :href="entry.signup()" class="text-blue-700 hover:underline"
                            >Sign Up</Link
                        >
                    </div>
                </q-form>
            </div>
        </div>
    </Layout>
</template>
