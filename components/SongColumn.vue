<script setup>
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

const newSongCarousel = ref(0)
const popularChartCarousel = ref(0)

const testData = [{
  title: 'Dream',
  mode: 'key',
  diff: '7K BlackAnother Lv.35',
  mapper: 'DPkaiden',
  img: '/song/jailed.jpg',
  stableDate: '2023-09-13T07:14:22'
},
{
  title: 'Mujinku',
  mode: 'key',
  diff: '7K BlackAnother Lv.35',
  mapper: 'DPkaiden',
  img: '/song/mario.jpg',
  stableDate: '2023-09-09T07:14:22'
},
{
  title: '悲しみの向こうへ',
  mode: 'taiko',
  diff: '7K BlackAnother Lv.35',
  mapper: 'DPkaiden',
  img: '/song/MKTSN.jpg',
  stableDate: '2023-09-08T07:14:22'
},{
  title: '悲しみの向こうへ',
  mode: 'taiko',
  diff: '7K BlackAnother Lv.35',
  mapper: 'DPkaiden',
  img: '/song/MKTSN.jpg',
  stableDate: '2023-09-08T07:14:22'
},{
  title: '悲しみの向こうへ',
  mode: 'taiko',
  diff: '7K BlackAnother Lv.35',
  mapper: 'DPkaiden',
  img: '/song/MKTSN.jpg',
  stableDate: '2023-09-08T07:14:22'
}]

const popularChartTestData = [{
  title: 'Dream',
  mode: 'key',
  diff: '7K BlackAnother Lv.35',
  mapper: 'DPkaiden',
  img: '/song/jailed.jpg',
  stableDate: '2023-09-13T07:14:22',
  playcount: 114514
},
{
  title: 'Mujinku',
  mode: 'key',
  diff: '7K BlackAnother Lv.35',
  mapper: 'DPkaiden',
  img: '/song/mario.jpg',
  stableDate: '2023-09-09T07:14:22',
  playcount: 1919
},
{
  title: '悲しみの向こうへ',
  mode: 'taiko',
  diff: '7K BlackAnother Lv.35',
  mapper: 'DPkaiden',
  img: '/song/MKTSN.jpg',
  stableDate: '2023-09-08T07:14:22',
  playcount: 810
},
{
  title: '悲しみの向こうへ',
  mode: 'taiko',
  diff: '7K BlackAnother Lv.35',
  mapper: 'DPkaiden',
  img: '/song/MKTSN.jpg',
  stableDate: '2023-09-08T07:14:22',
  playcount: 810
},
{
  title: '悲しみの向こうへ',
  mode: 'taiko',
  diff: '7K BlackAnother Lv.35',
  mapper: 'DPkaiden',
  img: '/song/MKTSN.jpg',
  stableDate: '2023-09-08T07:14:22',
  playcount: 810
}]

function changeNewSongActiveSlide(index) {
  newSongCarousel.value = index
}

function changePopularChartActiveSlide(index) {
  popularChartCarousel.value = index
}

function checkNewChart(stableDate){
  const date3DaysAgo = new Date() - 3 * 24 * 60 * 60 * 1000
  const date = new Date(stableDate)
  return date > date3DaysAgo
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
              @clicked="changeNewSongActiveSlide(index)" />
          </div>
        </Slide>
        <template #addons>
          <Pagination />
          <Navigation />
        </template>
      </Carousel>
      <div class="text" v-for="(slide, index) in testData">
        <div class="mt-1 relative flex items-center justify-center transition duration-100"
          :class="[index === newSongCarousel ? '' : 'opacity-60']">
          <p v-if="checkNewChart(slide.stableDate)" class="absolute -left-6 top-1 text-sm">New!</p>
          <div class="divide-x flex gap-1 w-full ml-4">
            <img class="object-scale-down h-8 w-8" :src="`/${slide.mode}.png`">
            <p class="px-1 w-40 truncate py-0.5">{{ slide.title }}</p>
            <p class="px-1 truncate py-0.5">{{ slide.diff }}</p>
          </div>
        </div>
      </div>
    </div>
    
    <p class="text-slate-200 text-2xl mt-6">Popular Charts</p>
    <div class="px-4 mt-4">
      <Carousel v-model="popularChartCarousel" :autoplay="5000" :pauseAutoplayOnHover="true" :itemsToShow="1.95"
        :wrapAround="true" :transition="500">
        <Slide v-for="(slide, index) in popularChartTestData" :key="slide">
          <div class="carousel__item relative">
            <CarouselContent :slide="slide" :isLinkActive="index === popularChartCarousel"
              @clicked="changePopularChartActiveSlide(index)" />
          </div>
        </Slide>
        <template #addons>
          <Pagination />
          <Navigation />
        </template>
      </Carousel>
      <div class="text" v-for="(slide, index) in popularChartTestData">
        <div class="mt-1 relative flex items-center justify-center transition duration-100"
          :class="[index === popularChartCarousel ? '' : 'opacity-60']">
          <p class="absolute -left-3 top-1 text-sm">{{ slide.playcount }}</p>
          <div class="divide-x flex gap-1 w-full ml-10">
            <img class="object-scale-down h-8 w-8" :src="`/${slide.mode}.png`">
            <p class="px-1 w-32 truncate py-0.5">{{ slide.title }}</p>
            <p class="px-1 truncate py-0.5">{{ slide.diff }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>