<template>
  <div
    class="flex border borer-1 border-gray rounded-md p-10 justify-center items-center w-auto mx-10"
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
            d="M12 19.9q2.425-.75 4.05-2.962T17.95 12H12V4.125l-6 2.25v5.175q0 .175.05.45H12zm0 2q-.175 0-.325-.025t-.3-.075Q8 20.675 6 17.638T4 11.1V6.375q0-.625.363-1.125t.937-.725l6-2.25q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725T20 6.375V11.1q0 3.5-2 6.538T12.625 21.8q-.15.05-.3.075T12 21.9"
          />
        </svg>
        <h1 class="text-heading font-bold text-2xl">
          24/7 smart security for your car
        </h1>
      </div>

      <div class="flex mt-4">
        <div class="bg-green w-3 h-3 rounded-full mt-1 mx-2"></div>
        <p class="text-green text-sm font-semibold">Smart Security</p>

        <div class="bg-green w-3 h-3 rounded-full ml-4 mt-1 mx-2"></div>
        <p class="text-green text-sm font-semibold">Predictive Maintainance</p>
      </div>

      <div class="w-2/3 pt-4">
        <p class="text-left text-[#67625f]">
          Whether its parking lot incident or attempted break-in, EVA's AI acts
          as an intelligent guardian, providing keeping your vehicle in peak
          condition providing you with peace of mind.
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
        <div class="bg-yellow w-96 h-44 mx-2">
          <div class="flex justify-between mx-4 items-center">
            <div class="pt-3 text-left">
              <p class="text-md font-semibold text-heading">Lamborghini</p>
              <p class="text-md text-heading pt-3">
                Status:
                <span class="text-md text-heading font-semibold">Parked</span>
              </p>
              <p class="text-md text-heading">
                Battery:
                <span class="text-md text-heading font-semibold">50%</span>
              </p>
            </div>
            <div>
              <img src="~/assets/images/ghini.png" alt="" class="w-72" />
            </div>
          </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
