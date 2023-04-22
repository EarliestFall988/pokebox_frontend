<script setup>
import { ref } from 'vue'

const run = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "test'"
            })
        }, 2000);
    })
}

const data = ref(await run())

</script>

<template>
    <div>test</div>
    <Suspense>
        <template #default>
            {{ data.name }}
        </template>
        <template #fallback>
            loading...
        </template>
    </Suspense>
</template>
