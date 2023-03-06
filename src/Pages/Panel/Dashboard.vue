<script setup>
import Layout from '@larasar/js/Layouts/Panel.vue';
import Stat from '@larasar/js/Components/Stat.vue';
import {
    symRoundedGroups,
} from '@quasar/extras/material-symbols-rounded'

</script>
<template>
    <Layout>
        <div class="grid grid-cols-3 gap-2 sm:gap-4">
            <Stat v-ripple title="Visitors Today" count="1000" :icon="symRoundedGroups" desc="25 person"
                class="relative cursor-pointer" />
            <Stat v-ripple title="Users Today" count="1000" :icon="symRoundedGroups" desc="25 person"
                class="relative cursor-pointer" />
        </div>
    </Layout>
</template>
