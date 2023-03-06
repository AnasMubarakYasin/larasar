<script setup>
import SignUp from "@larasar/js/Layouts/Entry/SignUp.vue";
</script>
<template>
    <SignUp
        :api="route('api.entry.signup')"
        :name="'anas'"
        :email="'anas@mail.id'"
        :password="'1234'"
        :password_confirmation="'1234'"
        :remember="false"
    ></SignUp>
</template>
