// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  modules: [
    'nuxt-icon',
    'nuxt-lodash',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss',
    "@nuxtjs/supabase",
  ],
  runtimeConfig: {
    public: {
      stripePk: process.env.STRIPE_PK_KEY,
    }
  },
  // Need to have this so redirect is not forced to /login
  supabase: {
    redirect: false,
  },
  app: {
    head: {
      script: [
        { src: 'https://js.stripe.com/v3/', defer: true}
      ]
    },
  },
})
