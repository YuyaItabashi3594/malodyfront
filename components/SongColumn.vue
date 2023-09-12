<script setup>
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

const newSongCarousel = ref(0)

const testData = [{
  title: 'Dream',
  mode: 'key',
  diff: '7K BlackAnother Lv.35',
  mapper: 'DPkaiden',
  img: '/song/jailed.jpg'
},
{
  title: 'Mujinku',
  mode: 'key',
  diff: '7K BlackAnother Lv.35',
  mapper: 'DPkaiden',
  img: '/song/mario.jpg'
},
{
  title: '悲しみの向こうへ',
  mode: 'taiko',
  diff: '7K BlackAnother Lv.35',
  mapper: 'DPkaiden',
  img: '/song/MKTSN.jpg'
}]

function changeActiveSlide(index) {
  newSongCarousel.value = index
}

</script>

<template>
  <div class="mr-10 ml-4">
    <p class="text-slate-200 text-2xl">New Stable Charts</p>
    <div class="px-4 mt-4">
      <Carousel v-model="newSongCarousel" :autoplay="5000" :pauseAutoplayOnHover="true" :itemsToShow="1.95"
        :wrapAround="true" :transition="500">
        <Slide v-for="(slide, index) in testData" :key="slide">
          <div class="carousel__item relative">
            <CarouselContent :slide="slide" :isLinkActive="index === newSongCarousel"
              @clicked="changeActiveSlide(index)" />
          </div>
        </Slide>
        <template #addons>
          <Pagination />
          <Navigation />
        </template>
      </Carousel>
      <div class="text" v-for="(slide, index) in testData">
        <div class="mt-1 flex divide-x gap-1 transition duration-100"
        :class="[index === newSongCarousel ? '' : 'opacity-60']" >
          <img class="object-scale-down h-8 w-8" :src="`/${slide.mode}.png`">
          <p class="px-1 w-40 truncate">{{ slide.title }}</p>
          <p class="px-1 truncate">{{ slide.diff }}</p>
        </div>
      </div>
    </div>
  </div>
</template>