
<template>
    <div id="MainLayout" class="w-full fixed z-50">
        <div id="TopMenu" class="w-full bg-[#FAFAFA] border-b md:block hidden
        ">
            <ul class="flex items-center justify-end text-xs
            text-[#333333] font-light px-2 h-10 bg-[#FAFAFA] 
            max-w-[1200px]
            ">
                <li class="border-r border-r-gray-400 px-3 
            hover:text-[#FF4646] cursor-pointer">
                    Sell on AliExpress
                </li>
                <li class="border-r border-r-gray-400 px-3 
            hover:text-[#FF4646] cursor-pointer">
                    Cookie Preference
                </li>
                <li class="border-r border-r-gray-400 px-3 
            hover:text-[#FF4646] cursor-pointer">
                    Help
                </li>
                <li class="border-r border-r-gray-400 px-3 
            hover:text-[#FF4646] cursor-pointer">
                    Buyer Protection
                </li>
                <li class="border-r border-r-gray-400 px-3 
            hover:text-[#FF4646] cursor-pointer">
                    <Icon name="ic:sharp-install-mobile" size="17" />
                </li>
                <li @mouseenter="isAccountMenu = true" @mouseleave="isAccountMenu = false" class="relative flex items-center px-2.5 
                hover:text-[#FF4646] h-full cursor-pointer"
                    :class="isAccountMenu ? 'bg-white broder z-40 shadow-[0_15px_100px_40px_rgba(0,0,0,0.3)]' : 'border border-[#FAFAFA]'">
                    <Icon name="ph:user-thin" size="17" />
                    Account
                    <Icon name="mdi:chevron-down" size="15" class="ml-5" />
                    <div id="AccountMenu" v-if="isAccountMenu"
                        class="absolute bg-white w-[220px] text-[#333333] z-40 top-[38px] -left-[100px] border-x border-b">
                        <div v-if="true">
                            <div class="text-semibold text-[15px] my-5 px-3">Welcome to AliExpress!</div>
                            <div class="flex items-center gap-1 px-3 mb-3">
                                <NuxtLink to="/auth"
                                    class="bg-[#FF4646] text-center w-full text-[16px] rounded-sm text-white font-semibold p-2">
                                    Login / Register
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="border-b" />
                        <ul class="bg-white">
                            <li v-if="true" class="text-[13px] py-2 px-4 w-full hover:bg-gray-200">
                                My Orders
                            </li>
                            <li v-if="true" class="text-[13px] py-2 px-4 w-full hover:bg-gray-200">
                                Sign Out
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>

        <div id="MainHeader" class="flex items-center w-full bg-white">
            <div class="flex lg:justify-start justify-between gap-10 
            max-w-[1150px] w-full px-3 py-5 mx-auto">
                <NuxtLink to="/" class="min-w-[170px]">
                    <img width="170" src="/AliExpress-logo.png" alt="">
                </NuxtLink>
                <div class="max-w-[700px] w-full md:block hidden">
                    <div class="relative">
                        <div class="flex items-center border-2 border-[#FF4646]
                        rounded-md w-full
                        ">
                            <input class="w-full placeholder-gray-400
                                text-sm pl-3 focus:outline-none" placeholder="kitchen accessories" type="text"
                                v-model="searchItem">
                            <Icon v-if="isSearching" name="eos-icons:loading" size="25" class="mr-2" />
                            <button class="flex items-center h-[100%] p-1.5 px-2
                            bg-[#FF4646]
                            ">
                                <Icon name="ph:magnifying-glass" size="20" color="#FFFFFF" />
                            </button>
                        </div>
                        <div class="absolute bg-white max-w-[700px] h-auto w-full">
                            <div v-if="false" class="p-1">
                                <NuxtLink to="`/item/1`"
                                    class="flex items-center justify-between w-full cursor-pointer hover:bg-gray-100">
                                    <div class="flex items-center">
                                        <img src="https://picsum.photos/id/82/300/300" 
                                            class="rounded-md" width="40"
                                            alt="">
                                        <div class="truncate ml-2">TESTING</div>
                                    </div>
                                    <div class="truncate">$98.99</div>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <NuxtLink
                    to="/shoppingcart"
                    class="flex items-center"    
                >
                    <button
                    class="relative md:block hidden"
                    @mouseover="isCartHover = true"
                    @mouseleave="isCartHover = false"
                    >
                        <span class="absolute flex items-center justify-center
                        -right-[3px] top-0 bg-[#FF4646] h-[17px] min-w-[17px]
                        text-xs text-white px-0.5 rounded-full
                        ">
                        0
                        </span>
                        <div class="min-w-[40px]">
                            <Icon 
                                name="ph:shopping-cart-simple-light"
                                size="33"
                                :color="isCartHover ? '#FF4646' : ''"
                            />
                        </div>
                    </button>
                </NuxtLink>

                <button 
                @click="userStore.isMenuOverlay = true"
                class="md:hidden block rounded-full p-1.5 -mt-[4px] hover:bg-gray-200">
                    <Icon name="radix-icons:hamburger-menu" size="33"/>
                </button>
                
            </div>
        </div>
    </div>

    <Loading v-if="userStore.isLoading" />

    <div class="lg:pt-[150px] md:pt-[120px] pt-[88px]"></div>
    <slot />
    <Footer v-if="!userStore.isLoading" />
</template>

<script setup>
import { useUserStore } from '~/stores/user'
const userStore = useUserStore()

let isAccountMenu   = ref(false)
let isSearching     = ref(true)
let isCartHover     = ref(true)
let searchItem      = ref('')
</script>
