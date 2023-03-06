<script setup>
import { ref } from "vue";
const show = ref(false);
document.addEventListener("splash-in", (event) => {
    show.value = true;
    setTimeout(() => {
        document.dispatchEvent(new CustomEvent("splash-on"));
    }, 1000);
});
document.addEventListener("splash-out", (event) => {
    show.value = false;
});
</script>
<style>
body {
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
    overflow: hidden;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
<style scoped>
div {
    display: grid;
    width: 100vw;
    height: 100vh;
    place-content: center;
    background-color: rgb(59, 130, 246);
}
img {
    width: 64px;
    height: 64px;
}
@media (min-width: 640px) {
    img {
        width: 98px;
        height: 98px;
    }
}
</style>
<template>
    <Transition name="fade">
        <div v-if="show">
            <img src="/logo.png" alt="" />
        </div>
    </Transition>
</template>
