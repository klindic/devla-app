<template functional>
    <div class="relative h-12 input-component mb-5">
        <input
            :id="props.id"
            :type="props.type"
            :name="props.id"
            class="h-full w-full border-gray-300 px-2 transition-all border-blue rounded-md"/>
        <label for="name" class="absolute left-2 transition-all bg-white px-1">
            {{ props.label }}
        </label>
    </div>
</template>

<script>
export default {
    props: {
        id: String,
        label: String,
        type: String
    }
}
</script>