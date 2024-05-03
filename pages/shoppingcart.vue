<template>
    <div id="ShoppingCartPage" class="mt-4 max-w-[1200px] mx-auto px-2">
        <div v-if="false" class="h-[500px] flex items-center justify-center">
            <div class="pt-20">
                <img src="/cart-empty.png" alt="" width="250" class="mx-auto">
                <div class="text-xl text-center mt-4">
                    No items yet?
                </div>
                <div v-if="true" class="flex text-center">
                    <NuxtLink to="/auth" class="bg-[#FD374F]
                        w-full text-white text-[21px]
                        font-semibold p-1.5 
                        rounded-full
                        mt-4">
                        Sign In
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div v-else class="md:flex gap-4 justify-between mx-auto w-full">
            <div class="md:w-[65%]">
                <div class="bg-white rounded-lg p-4">
                    <div class="text-2xl font-bold mb-2">
                        Shopping Cart (0)
                    </div>
                </div>
                <div class="bg-[#FEEEEF] rounded-lg pt-4 mt-4">
                    <div class="text-red-500 font-bold">
                        Welcome Deal applicable on 1 item
                    </div>
                </div>
                <div id="Items" class="bg-white rounded-lg pt-4 pb-4 mt-4">
                    <div v-for="product in products" :key="product.id">
                        <CartItem 
                            :product="product" 
                            :selectedArray="selectedArray"
                            @selectedRadio="selectedRadioFunc" 
                        />
                    </div>
                </div>
            </div>
            <div class="md:hidden block my-4" />
            <div class="md:w-[35%]">
                <div id="Summary" class="bg-white rounded-lg p-4">
                    <div class="text-2xl font-extrabold mb-2">
                        Summary
                    </div>
                    <div class="flex items-center justify-between my-4">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const products = [
    {
        id: 1, title: "Title",
        description: "This is a description",
        url: "https://picsum.photos/id/30/800",
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