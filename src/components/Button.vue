<template functional>
    <button :type="props.type" class="w-full py-4 bg-green-500 text-center text-white rounded-md">
        <slot/>
    </button>
</template>

<script>
export default {
    props: {
        label: String,
        type: String
    }
}
</script>