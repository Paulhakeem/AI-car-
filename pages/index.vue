<template>
  <div class="text-center pt-16">
    <h1 class="heading text-6xl font-bold text-heading">
      Your Car,
      <span class="bg-yellow w-full text-white px-2 pb-2 tracking-wide"
        >Now with A.I.</span
      >
    </h1>
    <p class=" heading-p p-10 text-[#67625f]">
      Introducing Paper Route Empire launches Electronic Vehicle Assistant E.V.A
      <br />which is an artificial intelligence that enables you to control and
      <br />
      use your car without touching it.
    </p>

    <div class="flex gap-6 justify-center">
      <button class="bg-heading p-2 rounded-md w-44">
        <div class="text-start flex gap-2 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28.95"
            height="32"
            viewBox="0 0 256 283"
          >
            <path
              fill="#EA4335"
              d="M119.553 134.916L1.06 259.061a32.14 32.14 0 0 0 47.062 19.071l133.327-75.934z"
            />
            <path
              fill="#FBBC04"
              d="M239.37 113.814L181.715 80.79l-64.898 56.95l65.162 64.28l57.216-32.67a31.345 31.345 0 0 0 0-55.537z"
            />
            <path
              fill="#4285F4"
              d="M1.06 23.487A30.565 30.565 0 0 0 0 31.61v219.327a32.333 32.333 0 0 0 1.06 8.124l122.555-120.966z"
            />
            <path
              fill="#34A853"
              d="m120.436 141.274l61.278-60.483L48.564 4.503A32.847 32.847 0 0 0 32.051 0C17.644-.028 4.978 9.534 1.06 23.399z"
            />
          </svg>
          <div>
            <p class="font-normal text-sm text-gray">GET IT ON</p>
            <p class="font-semibold tracking-wider text-gray">Google Play</p>
          </div>
        </div>
      </button>

      <button class="bg-heading p-2 rounded-md w-44">
        <div class="text-start justify-center flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26.01"
            height="32"
            viewBox="0 0 256 315"
            fill="#fff"
          >
            <path
              d="M213.803 167.03c.442 47.58 41.74 63.413 42.197 63.615c-.35 1.116-6.599 22.563-21.757 44.716c-13.104 19.153-26.705 38.235-48.13 38.63c-21.05.388-27.82-12.483-51.888-12.483c-24.061 0-31.582 12.088-51.51 12.871c-20.68.783-36.428-20.71-49.64-39.793c-27-39.033-47.633-110.3-19.928-158.406c13.763-23.89 38.36-39.017 65.056-39.405c20.307-.387 39.475 13.662 51.889 13.662c12.406 0 35.699-16.895 60.186-14.414c10.25.427 39.026 4.14 57.503 31.186c-1.49.923-34.335 20.044-33.978 59.822M174.24 50.199c10.98-13.29 18.369-31.79 16.353-50.199c-15.826.636-34.962 10.546-46.314 23.828c-10.173 11.763-19.082 30.589-16.678 48.633c17.64 1.365 35.66-8.964 46.64-22.262"
            />
          </svg>
          <div>
            <p class="font-normal text-sm text-gray">Download on the</p>
            <p class="font-semibold tracking-wider text-gray">App Store</p>
          </div>
        </div>
      </button>
    </div>

    <div class="py-10">
      <!-- <img src="~/assets/images/bmw.jpg" alt="larmboghin" class="w-full"/> -->

      <div class="car-logo flex justify-between px-6">
        <img src="~/assets/images/bmw.png" alt="BMW logo" class="w-20" />
        <img
          src="~/assets/images/lamborghini.png"
          alt="larmboghin logo"
          class="w-20"
        />
        <img src="~/assets/images/tesla.jpg" alt="tesla logo" class="w-20" />
        <img
          src="~/assets/images/bugatti.jpg"
          alt="bugatti logo"
          class="w-20"
        />
      </div>
    </div>

  <EVA/>
  </div>
</template>

<script setup></script>
