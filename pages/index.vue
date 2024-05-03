<template>
    <div id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2">
        <div v-if="products" class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 
            sm:grid-cols-3 grid-cols-2 gap-4">
            <div v-for="product in products" :key="product.id">
                <ProductComponent :product="product" />
            </div>
        </div>
    </div>
</template>

<script setup>

definePageMeta({
    layout: 'default'
})

const products = [
    { id: 1, title: "Title", 
    description: "This is a description",
    url:  "https://picsum.photos/id/30/800",
    price: "9999"
    },
    {
    id: 2, title: "Title",
    description: "This is a description",
    url: "https://picsum.photos/id/32/800",
    price: "9999"
    },
    {
    id: 3, title: "Title",
    description: "This is a description",
    url: "https://picsum.photos/id/345/800",
    price: "9999"
    },
    {
    id: 4, title: "Title",
    description: "This is a description",
    url: "https://picsum.photos/id/145/800",
    price: "9999"
    },
    {
    id: 5, title: "Title",
    description: "This is a description",
    url: "https://picsum.photos/id/363/800",
    price: "9999"
    },
    {
    id: 6, title: "Title",
    description: "This is a description",
    url: "https://picsum.photos/id/212/800",
    price: "9999"
    },
]

</script>


<style scoped></style>
