<template>
  <div class="justify-center items-center text-center select-none mt-10 space-y-10">
    <div
      class="flex border borer-1 border-gray rounded-md p-10 justify-center items-center w-auto mx-10"
    >
      <div>
        <div class="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="#ffbb00"
              d="M224 768v96.064a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V768zm0-64h576V160a64 64 0 0 0-64-64H288a64 64 0 0 0-64 64zm32 288a96 96 0 0 1-96-96V128a96 96 0 0 1 96-96h512a96 96 0 0 1 96 96v768a96 96 0 0 1-96 96zm304-144a48 48 0 1 1-96 0a48 48 0 0 1 96 0"
            />
          </svg>
          <h1 class="text-heading font-bold text-2xl">
            Manage your car from your phone
          </h1>
        </div>

        <div class="flex mt-4">
          <div class="bg-green w-3 h-3 rounded-full mt-1 mx-2"></div>
          <p class="text-green text-sm font-semibold">Semless Intergration</p>

          <div class="bg-green w-3 h-3 rounded-full ml-4 mt-1 mx-2"></div>
          <p class="text-green text-sm font-semibold">
            Voice-Activate Contoller
          </p>
        </div>

        <div class="w-2/3 pt-4">
          <p class="text-left text-[#67625f]">
            EVA Semless Intergrates with your smart device . Whether you need to
            adjust the temprature, find a near by charging station, or simply
            play your favourite song, EVA A.I understand your command
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
            <p class="text-gray text-sm font-semibold italic">Listening..........</p>
            <p class="text-gray text-md pt-4 font-semibold">
              Eva, show me directiton to the fastest charging station under 5
              miles.
            </p>
          </div>
        </div>
      </div>
    </div>
    <drives/>
    <security/>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
