<script setup>
import { ref } from "vue";
const show = ref(false);
document.addEventListener("splash-out", (event) => {
    show.value = true;
    sessionStorage.setItem("screen-show", true);
    document.dispatchEvent(new CustomEvent("screen-show"));
});
document.dispatchEvent(new CustomEvent("screen-ready"));
</script>
<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
<template>
    <Transition name="fade">
        <div v-if="show">
            <slot></slot>
        </div>
    </Transition>
</template>
