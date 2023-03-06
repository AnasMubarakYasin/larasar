<script setup>
import SignIn from "@larasar/js/Layouts/Entry/SignIn.vue";
</script>
<template>
    <SignIn
        :api="route('api.entry.signin')"
        :name="'anas'"
        :password="'1234'"
        :remember="false"
    ></SignIn>
</template>
