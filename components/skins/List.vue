<script setup>
const testData = {
  "code": 0,
  "data": {
    "total": 242,
    "skins": [
      {
        "mav": true,
        "price": 200,
        "sales": "20",
        "author_name": "hakuhatsu_white",
        "platforms": [
          0,
          1,
          2,
          3,
          4
        ],
        "id": 6025,
        "modes": [
          7
        ],
        "name": "Slide Black Style",
        "cover": "/skin/cover_6025%3Ft%3D1697832770",
        "avatar": "<img src=\"http://cni.mugzone.net/avatar/175773!avatar64?time=1686662442\" alt=\"hakuhatsu_white\" style=\"max-width:36px;max-height:36px;background:url('');\" class=\"avatar\" id=\"True\" />",
        "author_id": 175773
      },
      {
        "mav": false,
        "price": 200,
        "sales": "24",
        "author_name": "qwws",
        "platforms": [
          0
        ],
        "id": 6027,
        "modes": [
          0
        ],
        "name": "Eplison",
        "cover": "/skin/cover_6027%3Ft%3D1697953062",
        "avatar": "<img src=\"http://cni.mugzone.net/avatar/427373!avatar64?time=1629954792\" alt=\"qwws\" style=\"max-width:36px;max-height:36px;background:url('');\" class=\"avatar\" id=\"True\" />",
        "author_id": 427373
      },
      {
        "mav": true,
        "price": 200,
        "sales": "180",
        "author_name": "hakuhatsu_white",
        "platforms": [
          0,
          1,
          2,
          3,
          4
        ],
        "id": 6011,
        "modes": [
          0
        ],
        "name": "4K Black Style",
        "cover": "/skin/cover_6011%3Ft%3D1694625153",
        "avatar": "<img src=\"http://cni.mugzone.net/avatar/175773!avatar64?time=1686662442\" alt=\"hakuhatsu_white\" style=\"max-width:36px;max-height:36px;background:url('');\" class=\"avatar\" id=\"True\" />",
        "author_id": 175773
      },
      {
        "mav": true,
        "price": 300,
        "sales": "626",
        "author_name": "dreamcat",
        "platforms": [
          1,
          3
        ],
        "id": 5984,
        "modes": [
          0
        ],
        "name": "Phigros V",
        "cover": "/skin/cover_5984%3Ft%3D1697098388",
        "avatar": "<img src=\"http://cni.mugzone.net/avatar/1153!avatar64?time=1696347473\" alt=\"dreamcat\" style=\"max-width:36px;max-height:36px;background:url('');\" class=\"avatar\" id=\"True\" />",
        "author_id": 1153
      },
      {
        "mav": true,
        "price": 233,
        "sales": "772",
        "author_name": "dreamcat",
        "platforms": [
          1,
          3
        ],
        "id": 5913,
        "modes": [
          0
        ],
        "name": "Rhythm Master RE V",
        "cover": "/skin/cover_5913%3Ft%3D1697086574",
        "avatar": "<img src=\"http://cni.mugzone.net/avatar/1153!avatar64?time=1696347473\" alt=\"dreamcat\" style=\"max-width:36px;max-height:36px;background:url('');\" class=\"avatar\" id=\"True\" />",
        "author_id": 1153
      },
      {
        "mav": false,
        "price": 150,
        "sales": "507",
        "author_name": "Lowwy",
        "platforms": [
          0
        ],
        "id": 6024,
        "modes": [
          0
        ],
        "name": "Yuxen",
        "cover": "/skin/cover_6024%3Ft%3D1696587108",
        "avatar": "<img src=\"http://cni.mugzone.net/avatar/988828!avatar64?time=1691885138\" alt=\"Lowwy\" style=\"max-width:36px;max-height:36px;background:url('');\" class=\"avatar\" id=\"True\" />",
        "author_id": 988828
      },
      {
        "mav": false,
        "price": 150,
        "sales": "175",
        "author_name": "qwws",
        "platforms": [
          1,
          3
        ],
        "id": 6022,
        "modes": [
          7
        ],
        "name": "mu 2d",
        "cover": "/skin/cover_6022%3Ft%3D1696505352",
        "avatar": "<img src=\"http://cni.mugzone.net/avatar/427373!avatar64?time=1629954792\" alt=\"qwws\" style=\"max-width:36px;max-height:36px;background:url('');\" class=\"avatar\" id=\"True\" />",
        "author_id": 427373
      },
      {
        "mav": false,
        "price": 150,
        "sales": "190",
        "author_name": "qwws",
        "platforms": [
          1,
          3
        ],
        "id": 6023,
        "modes": [
          7
        ],
        "name": "mu 3d",
        "cover": "/skin/cover_6023%3Ft%3D1696505601",
        "avatar": "<img src=\"http://cni.mugzone.net/avatar/427373!avatar64?time=1629954792\" alt=\"qwws\" style=\"max-width:36px;max-height:36px;background:url('');\" class=\"avatar\" id=\"True\" />",
        "author_id": 427373
      },
      {
        "mav": false,
        "price": 233,
        "sales": "999+",
        "author_name": "qqxqqx",
        "platforms": [
          1,
          3
        ],
        "id": 6020,
        "modes": [
          7
        ],
        "name": "Codename-Aspen",
        "cover": "/skin/cover_6020%3Ft%3D1695309834",
        "avatar": "<img src=\"http://cni.mugzone.net/avatar/428172!avatar64?time=1643776561\" alt=\"qqxqqx\" style=\"max-width:36px;max-height:36px;background:url('');\" class=\"avatar\" id=\"True\" />",
        "author_id": 428172
      },
      {
        "mav": true,
        "price": 300,
        "sales": "139",
        "author_name": "hakuhatsu_white",
        "platforms": [
          0,
          1,
          2,
          3,
          4
        ],
        "id": 6013,
        "modes": [
          0
        ],
        "name": "4K BeatTube Style",
        "cover": "/skin/cover_6013%3Ft%3D1694967080",
        "avatar": "<img src=\"http://cni.mugzone.net/avatar/175773!avatar64?time=1686662442\" alt=\"hakuhatsu_white\" style=\"max-width:36px;max-height:36px;background:url('');\" class=\"avatar\" id=\"True\" />",
        "author_id": 175773
      },
      {
        "mav": true,
        "price": 300,
        "sales": "58",
        "author_name": "dreamcat",
        "platforms": [
          1,
          3
        ],
        "id": 6017,
        "modes": [
          9
        ],
        "name": "Kalpa Phigros V2 Cube",
        "cover": "/skin/cover_6017%3Ft%3D1695123315",
        "avatar": "<img src=\"http://cni.mugzone.net/avatar/1153!avatar64?time=1696347473\" alt=\"dreamcat\" style=\"max-width:36px;max-height:36px;background:url('');\" class=\"avatar\" id=\"True\" />",
        "author_id": 1153
      },
      {
        "mav": true,
        "price": 300,
        "sales": "125",
        "author_name": "dreamcat",
        "platforms": [
          1,
          3
        ],
        "id": 6006,
        "modes": [
          7
        ],
        "name": "Kalpa Phigros V2 Slide",
        "cover": "/skin/cover_6006%3Ft%3D1694337717",
        "avatar": "<img src=\"http://cni.mugzone.net/avatar/1153!avatar64?time=1696347473\" alt=\"dreamcat\" style=\"max-width:36px;max-height:36px;background:url('');\" class=\"avatar\" id=\"True\" />",
        "author_id": 1153
      },
      {
        "mav": true,
        "price": 300,
        "sales": "336",
        "author_name": "dreamcat",
        "platforms": [
          0,
          1,
          3
        ],
        "id": 5717,
        "modes": [
          0
        ],
        "name": "Kalpa Phigros V2",
        "cover": "/skin/cover_5717%3Ft%3D1694094055",
        "avatar": "<img src=\"http://cni.mugzone.net/avatar/1153!avatar64?time=1696347473\" alt=\"dreamcat\" style=\"max-width:36px;max-height:36px;background:url('');\" class=\"avatar\" id=\"True\" />",
        "author_id": 1153
      },
      {
        "mav": true,
        "price": 100,
        "sales": "117",
        "author_name": "MoMoEven",
        "platforms": [
          0
        ],
        "id": 6014,
        "modes": [
          0
        ],
        "name": "AFOTHER 4K",
        "cover": "/skin/cover_6014%3Ft%3D1694999317",
        "avatar": "<img src=\"http://cni.mugzone.net/avatar/70911!avatar64?time=1645647589\" alt=\"MoMoEven\" style=\"max-width:36px;max-height:36px;background:url('');\" class=\"avatar\" id=\"True\" />",
        "author_id": 70911
      },
      {
        "mav": true,
        "price": 200,
        "sales": "65",
        "author_name": "hakuhatsu_white",
        "platforms": [
          0,
          1,
          3
        ],
        "id": 6010,
        "modes": [
          0
        ],
        "name": "4K Taiko PTB Style",
        "cover": "/skin/cover_6010%3Ft%3D1694545900",
        "avatar": "<img src=\"http://cni.mugzone.net/avatar/175773!avatar64?time=1686662442\" alt=\"hakuhatsu_white\" style=\"max-width:36px;max-height:36px;background:url('');\" class=\"avatar\" id=\"True\" />",
        "author_id": 175773
      },
      {
        "mav": true,
        "price": 100,
        "sales": "94",
        "author_name": "YukiMucha",
        "platforms": [
          0,
          1,
          3
        ],
        "id": 6008,
        "modes": [
          9
        ],
        "name": "Cube 3.0 For V",
        "cover": "/skin/cover_6008%3Ft%3D1694338580",
        "avatar": "<img src=\"http://cni.mugzone.net/avatar/322918!avatar64?time=1590197426\" alt=\"YukiMucha\" style=\"max-width:36px;max-height:36px;background:url('');\" class=\"avatar\" id=\"True\" />",
        "author_id": 322918
      },
      {
        "mav": true,
        "price": 199,
        "sales": "136",
        "author_name": "myhome",
        "platforms": [
          0,
          1,
          3
        ],
        "id": 6005,
        "modes": [
          7
        ],
        "name": "Phigros Slide",
        "cover": "/skin/cover_6005%3Ft%3D1694098106",
        "avatar": "<img src=\"http://cni.mugzone.net/avatar/111787!avatar64?time=1690493395\" alt=\"myhome\" style=\"max-width:36px;max-height:36px;background:url('');\" class=\"avatar\" id=\"True\" />",
        "author_id": 111787
      },
      {
        "mav": false,
        "price": 248,
        "sales": "999+",
        "author_name": "myhome",
        "platforms": [
          0,
          1,
          3
        ],
        "id": 6004,
        "modes": [
          0
        ],
        "name": "Cecilia skin 3DV2 4K",
        "cover": "/skin/cover_6004%3Ft%3D1694012875",
        "avatar": "<img src=\"http://cni.mugzone.net/avatar/111787!avatar64?time=1690493395\" alt=\"myhome\" style=\"max-width:36px;max-height:36px;background:url('');\" class=\"avatar\" id=\"True\" />",
        "author_id": 111787
      },
      {
        "mav": true,
        "price": 248,
        "sales": "157",
        "author_name": "myhome",
        "platforms": [
          0,
          1,
          3
        ],
        "id": 6003,
        "modes": [
          0
        ],
        "name": "Cecilia skin 3D4K",
        "cover": "/skin/cover_6003%3Ft%3D1693923726",
        "avatar": "<img src=\"http://cni.mugzone.net/avatar/111787!avatar64?time=1690493395\" alt=\"myhome\" style=\"max-width:36px;max-height:36px;background:url('');\" class=\"avatar\" id=\"True\" />",
        "author_id": 111787
      },
      {
        "mav": false,
        "price": 100,
        "sales": "999+",
        "author_name": "dreamcat",
        "platforms": [
          0,
          1,
          3
        ],
        "id": 3104,
        "modes": [
          0
        ],
        "name": "KALPA Phigros V1.1",
        "cover": "/skin/cover_3104%3Ft%3D1648314200",
        "avatar": "<img src=\"http://cni.mugzone.net/avatar/1153!avatar64?time=1696347473\" alt=\"dreamcat\" style=\"max-width:36px;max-height:36px;background:url('');\" class=\"avatar\" id=\"True\" />",
        "author_id": 1153
      }
    ]
  }
}
const testImages = [
  "http://cni.mugzone.net//skin/preview_6024_1696587554",
  "http://cni.mugzone.net//skin/preview_6024_1696587577",
  "http://cni.mugzone.net//skin/preview_6024_1696587591",
  "http://cni.mugzone.net//skin/preview_6024_1696587605"
]


</script>

<template>
  <div class="mt-8 pr-4 grid grid-cols-4 gap-x-2 gap-y-4">
    <v-card v-for="skin in testData.data.skins" variant="elevated" class="hover:bg-slate-700">
      <v-dialog 
      scrollable
      width="auto">
        <template v-slot:activator="{ props }">
          <div v-bind="props">
            <v-img :src="'http://cni.mugzone.net/' + skin.cover" height="200px" cover></v-img>
            <v-card-title>{{ skin.name }}</v-card-title>
            <v-card-subtitle>by {{ skin.author_name }}</v-card-subtitle>
            <v-card-subtitle class="-ml-1">
              <v-icon>mdi-download</v-icon><v-text>{{ skin.sales }}</v-text>
              <v-icon class="ml-4">mdi-sack</v-icon><v-text>{{ skin.price }}</v-text>
            </v-card-subtitle>
          </div>
        </template>
        <template v-slot:default="{ isActive }">
          <v-card :title="skin.name" :subtitle="'by '+skin.author_name">
            <v-carousel hide-delimiters>
              <v-carousel-item v-for="image in testImages" :src="image" width="800"></v-carousel-item>
            </v-carousel>
            <v-card-text style="height: 200px;">
              • Touch support <br>
              • 4k, 5k, 6k, 7k <br>
              • Optimized for 16:9, 18:9 and 4:3 <br>
              • Configurable hit position <br>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn height="60" variant='flat'>
                <v-icon size="30">mdi-download</v-icon><v-text class="capitalize text-lg">{{ $t('download') }} ({{ $t('price') }}:{{ skin.price }})</v-text>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn height="60" @click="isActive.value = false">
                <v-text class="capitalize">{{ $t('close') }}</v-text>
              </v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-card>
  </div>
</template>