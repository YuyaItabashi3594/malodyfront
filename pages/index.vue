<template>
  <div class="surfacelow mx-auto mt-10 min-h-screen p-2">
    <div class="px-4 py-3 rounded surfacehigh">
      <p class="text text-2xl">Welcome to the Malody community!</p>
      <p class="text mt-4">Malody is a cross-platform music game which is developed by a group of dedicated volunteers.
        The charts here are created by players from all around the world. Join us now to start a new journey.</p>
    </div>
    <div class="flex mt-10 pt-4 pb-4 gap-2">
      <div class="w-1/2 surface">
        <NewsColumn />
      </div>
      <div class="w-1/2 surface">
        <SongColumn />
      </div>
    </div>
  </div>
</template>
