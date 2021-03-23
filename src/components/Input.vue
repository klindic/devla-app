<template functional>
    <div class="relative h-12 mb-5">
        <input
            :id="props.id"
            :type="props.type"
            :name="props.id"
            class="h-full w-full border border-gray-300 px-2 border-blue rounded-md text-black"/>
        <label for="name" class="absolute left-2 text-xs bg-white px-1">
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

<style scoped>

label {
  transform: translateY(-50%);
  color: var(--primary-color)
}

input:focus {
  outline: none;
  border-color: var(--primary-color);
}
</style>