<template functional>
    <nav class="flex items-center h-40 w-full">
        <h1 v-if="parent.userName" class="mr-auto ml-5 h-1/2 px-14 flex items-center text-4xl font-semibold">
            {{ parent.userName }}
        </h1>
        <button @click.prevent="parent.logout()" class="ml-auto mr-5 h-1/2 px-14 rounded-md border-black border-solid text-lg font-semibold">Logout</button>
    </nav>
</template>