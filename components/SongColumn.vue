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
  <div class="mt-4 px-2">
    <p class="text-2xl ml-2">{{ $t('newArrival') }}</p>
    <div class="p-4 mt-4 surfacehighest rounded-lg">
      <Carousel v-model="newSongCarousel" :autoplay="5000" :pauseAutoplayOnHover="true" :itemsToShow="1.95"
        :wrapAround="true" :transition="500">
        <Slide v-for="(slide, index) in testData" :key="slide">
          <div class="carousel__item relative">
            <CarouselContent :slide="slide" :isLinkActive="index === newSongCarousel"
            :isNewChart="checkNewChart(slide.stableDate)"
              @clicked="changeNewSongActiveSlide(index)" />
          </div>
        </Slide>
        <template #addons>
          <Pagination />
          <Navigation />
        </template>
      </Carousel>
      <div class="" v-for="(slide, index) in testData">
        <div class="mt-1 relative flex items-center justify-center transition duration-100"
          :class="[index === newSongCarousel ? '' : 'opacity-60']">
          <div class="divide-x flex gap-1 w-full ml-4">
            <img class="object-scale-down h-8 w-8" :src="`/${slide.mode}.png`">
            <p class="px-1 w-40 truncate py-0.5">{{ slide.title }}</p>
            <p class="px-1 truncate py-0.5">{{ slide.diff }}</p>
          </div>
        </div>
      </div>
    </div>
    
    <p class="text-2xl mt-6">{{ $t('weeklyShow') }}</p>
    <div class="p-4 mt-4 surfacehighest rounded-lg">
      <Carousel v-model="popularChartCarousel" :autoplay="5000" :pauseAutoplayOnHover="true" :itemsToShow="1.95"
        :wrapAround="true" :transition="500">
        <Slide v-for="(slide, index) in popularChartTestData" :key="slide">
          <div class="carousel__item relative">
            <CarouselContent :slide="slide" :isLinkActive="index === popularChartCarousel"
            :playcount="slide.playcount"
              @clicked="changePopularChartActiveSlide(index)" />
          </div>
        </Slide>
        <template #addons>
          <Pagination />
          <Navigation />
        </template>
      </Carousel>
      <div class="" v-for="(slide, index) in popularChartTestData">
        <div class="mt-1 relative flex items-center justify-center transition duration-100"
          :class="[index === popularChartCarousel ? '' : 'opacity-60']">
          <div class="divide-x flex gap-1 w-full ml-4">
            <img class="object-scale-down h-8 w-8" :src="`/${slide.mode}.png`">
            <p class="px-1 w-40 truncate py-0.5">{{ slide.title }}</p>
            <p class="px-1 truncate py-0.5">{{ slide.diff }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>