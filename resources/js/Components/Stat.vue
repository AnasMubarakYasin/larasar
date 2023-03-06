<script setup>
defineProps(["title", "count", "icon", "desc"]);
</script>
<style lang="scss">
@use "../../css/helper.scss";
</style>
<template>
    <div class="paper">
        <div class="w-full flex items-center justify-between">
            <div class="flex flex-col">
                <div
                    class="text-lg text-gray-700 dark:text-gray-300 font-medium"
                >
                    {{ title }}
                </div>
                <div class="text-xl text-black dark:text-white font-medium">
                    {{ count }}
                </div>
            </div>
            <q-icon
                :name="icon"
                size="2rem"
                class="p-2 bg-gray-300 dark:bg-gray-500 text-gray-700 dark:text-gray-300 rounded-md"
            />
        </div>
        <div v-if="desc" class="text-base text-gray-600 dark:text-white">
            {{ desc }}
        </div>
    </div>
</template>
