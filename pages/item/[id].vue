<template>
    <div id="ItemPage" class="mt-4 mx-auto px-2 max-w-[1200px]">
        <div class="md:flex gap-4 justify-between mx-auto w-full">
            <div class="md:w-[40%]">
                <img v-if="currentImage" :src="currentImage">
                <div v-if="images[0] !== ''" class="flex items-center justify-center mt-2">
                    <div v-for="image in images" :key="image">
                        <img @mouseover="currentImage = image" @click="currentImage = image" width="70"
                            class="rounded-md object-fit border-[3px] cursor-pointer"
                            :class="currentImage === image ? 'border-[#FF5353]' : ''" :src="image" alt="">
                    </div>
                </div>
            </div>
            <div class="bg-white p-3 rounded-lg md:w-[60%]">
                <div v-if="product && product.data">
                    <p class="mb-2">{{ product.data.title }}</p>
                    <p class="font-ligt mb-2 text-[12px]">{{ product.data.description }}</p>
                </div>
                <div class="flex items-center pt-1.5">
                    <span class="h-4 min-w-4 ronded-full p-0.5 mr-2 bg-[#FFD000]">
                        <Icon name="material-symbols:star-rounded" class="-mt-[17px]" size="12" />
                    </span>
                    <p class="text-[#FF5353]">
                        Extra 5% off
                    </p>
                </div>

                <div class="flex items-center justify-start my-2">
                    <Icon name="material-symbols:star-rounded" color="#FF5353" />
                    <Icon name="material-symbols:star-rounded" color="#FF5353" />
                    <Icon name="material-symbols:star-rounded" color="#FF5353" />
                    <Icon name="material-symbols:star-rounded" color="#FF5353" />
                    <Icon name="material-symbols:star-rounded" color="#FF5353" />
                    <span class="text-[13px] font-light ml-2">
                        5 213 reviews 1,000+ orders
                    </span>
                </div>
                <div class="border-b" />
                <div class="flex items-center justify-start gap-2 my-2">
                    <div class="text-xl font-bold">${{ priceComputed }}</div>
                    <span class="bg-[#F5F5F5] border text-[#C08562] text-[9px] font-semibold px-1.5 rounded-sm">70%
                        off</span>
                </div>
                <p class="text-[#009A66] text-xs font-semibold pt-1">
                    Free 11-day delivery over $8.88
                </p>
                <p class="text-[#009A66] text-xs font-semibold pt-1">
                    Free Shipping
                </p>
                <div class="py-2" />
                <button class="px-6 py-2 rounded-lg text-white font-semibold 
                bg-gradient-to-r
                from-[#FF851A]
                to-[#FFAC2C]">
                    <div v-if="isInCart">Is Added</div>
                    <div v-else>Add to Cart</div>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '~/stores/user'
const userStore = useUserStore()
const route = useRoute()

let product         = ref(null)
let currentImage    = ref(null)

onBeforeMount(async () => {
    product.value = await useFetch(`/api/prisma/get-product-by-id/${route.params.id}`)
})

watchEffect(() => {
    if (product.value && product.value.data){
        currentImage.value  = product.value.data.url
        images.value[0]     = product.value.data.url
        userStore.isLoading = false
    }
})


const isIncart = computed(() => {
    let res = false 
    userStore.cart.forEach(prod => {
        if(route.params.id == prod.id){
            res = true
        }
    })
})


const priceComputed = computed(() => {
    if (product.value && product.value.data) {
        return product.value.data.price / 100
    }
    return '0.00'
})


const images = ref([
    '',
    'https://picsum.photos/id/212/800',
    'https://picsum.photos/id/223/800',
    'https://picsum.photos/id/165/800',
    'https://picsum.photos/id/99/800'
])

const addToCart = () => {
    userStore.cart.push(product.value.data)
}

</script>