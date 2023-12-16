<template>
  <div
    class="justify-center items-center text-center select-none mt-10 space-y-10"
  >
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
            <div class="flex justify-center items-center pt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 21 21"
              >
                <path
                  fill="none"
                  stroke="#ffbb00"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.5 14.5a8 8 0 0 0-8-8m5 8a5 5 0 0 0-5-5m2 5a2 2 0 0 0-2-2"
                />
              </svg>
            </div>
            <p class="text-gray text-sm font-semibold italic">
              Listening..........
            </p>
            <p class="text-gray text-md pt-4 font-semibold">
              Eva, show me directiton to the fastest charging station under 5
              miles.
            </p>
            <div class="flex justify-center items-center pt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path
                    d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                  />
                  <path
                    fill="#ffbb00"
                    d="M12 2.5a1.5 1.5 0 0 1 1.493 1.356L13.5 4v16a1.5 1.5 0 0 1-2.993.144L10.5 20V4A1.5 1.5 0 0 1 12 2.5m-4 3A1.5 1.5 0 0 1 9.5 7v10a1.5 1.5 0 0 1-3 0V7A1.5 1.5 0 0 1 8 5.5m8 0A1.5 1.5 0 0 1 17.5 7v10a1.5 1.5 0 0 1-3 0V7A1.5 1.5 0 0 1 16 5.5m-12 3A1.5 1.5 0 0 1 5.5 10v4a1.5 1.5 0 0 1-3 0v-4A1.5 1.5 0 0 1 4 8.5m16 0a1.5 1.5 0 0 1 1.493 1.356L21.5 10v4a1.5 1.5 0 0 1-2.993.144L18.5 14v-4A1.5 1.5 0 0 1 20 8.5"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <drives />
    <security />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
