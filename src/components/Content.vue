<template functional>
    <div class="flex flex-col justify-center items-center container mx-auto my-40">
        <h1 v-if="parent.userName" class="text-8xl font-bold text-center">
            {{ parent.userName }}
        </h1>
        <p v-if="parent.title" class="text-4xl font-bold my-14 uppercase text-center">
            {{ parent.title }}
        </p>
        <p v-if="parent.shortCV" class="text-3xl text-center mx-20">
            {{ parent.shortCV }}
        </p>
    </div>
</template>