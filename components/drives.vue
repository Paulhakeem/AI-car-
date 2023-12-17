<template>
  <div
    class="features flex py-10 justify-center items-center w-auto px-10"
  >
    <div>
      <div class="flex gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="#ffbb00"
            d="M20 21v-3h3v-2h-3v-3h-2v3h-3v2h3v3zm-4.97.5H5.66c-.72 0-1.38-.38-1.73-1l-2.36-4.1c-.36-.62-.35-1.38.01-2L7.92 3.49c.36-.61 1.02-.99 1.73-.99h4.7c.71 0 1.37.38 1.73.99l4.48 7.71a6.176 6.176 0 0 0-2.4-.14L14.35 4.5h-4.7L3.31 15.41l2.35 4.09h7.89c.35.77.85 1.45 1.48 2M13.34 15c-.22.63-.34 1.3-.34 2H7.25l-.73-1.27l4.58-7.98h1.8l2.53 4.42c-.56.42-1.05.93-1.44 1.51l-2-3.49L9.25 15z"
          />
        </svg>
        <h1 class="feature-heading text-heading font-bold text-2xl">
          Turn drives into adventure
        </h1>
      </div>

      <div class="flex mt-4">
        <div class="bg-green w-3 h-3 rounded-full mt-1 mx-2"></div>
        <p class="text-green text-sm font-semibold">Intelligent Navigation</p>

        <div class="bg-green w-3 h-3 rounded-full ml-4 mt-1 mx-2"></div>
        <p class="text-green text-sm font-semibold">Efficiency Redefine</p>
      </div>

      <div class="feature-text w-2/3 pt-4">
        <p class="text-left text-[#67625f]">
          EVA optimizes your route, reduce energy consumption, and enhance
          overall driving Efficiency with real time traffic data, weather
          condition. Enjoy your journey with smart navigator by your side.
        </p>
      </div>
    </div>
    <div class="relative">
      <div
        class="absolute -inset-2 rounded-lg bg-gradient-to-br from-yellow via-gray to-green opacity-75 blur"
      ></div>
      <div
        class="relative flex h-96 w-96 items-center justify-center rounded-lg bg-heading text-slate-300"
      >
        <div>
          <div class="mx-4">
            <img src="~/assets/images/drives.jpg" alt="" class="rounded-md">
          </div>
          <div class="flex justify-between mx-4 pt-3 gap-10">
 <p class="text-gray text-xs font-semibold italic">
            Mombasa Express Way, Nyali,1003
          </p>
          <button class="text-sm text-yellow font-semibold hover:bg-yellow hover:text-white hover:p-1.5 hover:rounded-md">Save</button>
          </div>
         
          <div class="flex mt-4 mx-2">
        <div class="bg-green w-3 h-3 rounded-full mt-1 mx-2"></div>
        <p class="text-green text-sm font-semibold">Open</p>
        <p class="text-gray ml-4 text-sm">From 8:00AM to 9:00PM</p>
      </div>

      <div class="flex mx-4 mt-4 justify-between">
        <p>Reviews <span class="pl-2 text-yellow text-sm">4.0
          x
        </span>
        </p>
        <button class="bg-yellow p-1.5 rounded-md float-right w-20">Call</button>
      </div>
      
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
