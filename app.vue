<script setup lang="ts">
import { useHead } from '#imports'

useHead({
  title: 'A.Z. Sunrise Resort | Elegance and serenity in every moment',
  meta: [
    {
      name: 'description',
      content:
        'A.Z. Sunrise Resort — Elegance and serenity in every moment. Experience luxury, comfort, and tranquility near Layan Beach, Phuket.'
    },
    {
      name: 'google-site-verification',
      content: 'bKg2lt8Ng2i5XQZjfewQmU42y7L5GP4yw_W4cKqzcdY'
    },
    { property: 'og:title', content: 'A.Z. Sunrise Resort | Elegance and serenity in every moment' },
    { property: 'og:description', content: 'Experience luxury, comfort, and tranquility near Layan Beach, Phuket.' },
    { property: 'og:image', content: 'https://azsunriseresort.com/img/cover.jpg' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://azsunriseresort.com/' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'A.Z. Sunrise Resort | Elegance and serenity in every moment' },
    { name: 'twitter:description', content: 'Luxury and tranquility in Phuket — only at A.Z. Sunrise Resort.' },
    { name: 'twitter:image', content: 'https://azsunriseresort.com/img/cover.jpg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://azsunriseresort.com/' },
    { rel: 'icon', type: 'image/png', href: '/favicon.png' }
  ],
  script: [
    {
      type: 'text/javascript',
      children: `
        !function(e,n){
          var t="bookingengine",o="integration",i=e[t]=e[t]||{},a=i[o]=i[o]||{},r="__cq",c="__loader",d="getElementsByTagName";
          if(n=n||[],a[r]=a[r]?a[r].concat(n):n,!a[c]){
            a[c]=!0;var l=e.document,g=l[d]("head")[0]||l[d]("body")[0];
            !function n(i){
              if(0!==i.length){
                var a=l.createElement("script");
                a.type="text/javascript",a.async=!0,a.src="https://"+i[0]+"/integration/loader.js",
                a.onerror=a.onload=function(n,i){
                  return function(){
                    e[t]&&e[t][o]&&e[t][o].loaded||(g.removeChild(n),i())
                  }
                }(a,(function(){
                  n(i.slice(1,i.length))
                })),g.appendChild(a)
              }
            }(["th-ibe.hopenapi.com","ibe.hopenapi.com","ibe.behopenapi.com"])
          }
        }(window, [
          ["setContext","BE-INT-azsunriseresort-com_2025-09-30","en"],
          ["embed","booking-form",{container:"be-booking-form"}],
          ["embed","search-form",{container:"be-search-form"}]
        ]);
      `
    }
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
