<template>
  <div>
    <div id="app" class="">
      <div class="">
        <div class="">
          <nav class="flex container mx-auto px-5 py-5">
            <ul class="flex flex-grow space-x-4">
              <li>
                <a
                  href="/"
                  class="flex items-center space-x-3 text-gray-700 md:mr-5"
                >
                  <h2 class="text-yellow text-4xl font-black">P.R.E</h2>
                </a>
              </li>
            </ul>
            <ul
              class="flex items-center space-x-5 text-[#869094] font-semibold"
            >
              <li class="hidden sm:flex cursor-pointer">PRE</li>

              <nuxt-link to="/features">
                <li class="hidden sm:flex cursor-pointer">Features</li>
              </nuxt-link>

              <nuxt-link to="/reviews">
                <li class="hidden sm:flex cursor-pointer">Reviews</li>
              </nuxt-link>

              <nuxt-link to="/FAQ">
                <li class="hidden sm:flex cursor-pointer">FAQ</li>
              </nuxt-link>

              <li
                class="hidden sm:flex bg-yellow text-white rounded-md p-2 w-28 text-center font-medium cursor-pointer"
              >
                Get The App
              </li>
            </ul>
            <ul class="flex sm:hidden" @click="showMenu = !showMenu">
              <li>
                <a href="#" class="flex-none absolute right-0 px-5 z-30">
                  <p
                    class="text-gray-200 font-semibold tracking-wide hover:bg-gray-900 hover:bg-opacity-30 rounded px-2 py-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                      ></path>
                    </svg>
                  </p>
                </a>
                <div
                  class="absolute top-0 right-0 z-10 h-screen w-full bg-black transition"
                  :class="{
                    'invisible opacity-0': !showMenu,
                    'visible opacity-40': showMenu,
                  }"
                ></div>
                <div
                  class="absolute right-0 z-20 w-64 px-5 mt-16 transition bg-yellow m-2"
                  :class="{
                    'invisible opacity-0': !showMenu,
                    'visible opacity-100': showMenu,
                  }"
                >
                  <ul
                    class="flex flex-col bg-gray-100 w-full rounded shadow-md overflow-hidden text-gray font-semibold"
                  >
                    <li class="flex">
                      <h3
                        class="flex flex-1 py-4 text-gray text-4xl font-black"
                      >
                        P.R.E
                      </h3>
                    </li>
                    <li
                      class="flex border-t cursor-pointer hover:text-yellow hover:bg-white hover:p-2 hover:rounded-md"
                    >
                      PRE
                    </li>
                    <nuxt-link to="/features">
                    <li
                      class="flex cursor-pointer hover:text-yellow hover:bg-white hover:p-2 hover:rounded-md"
                    >
                      Features
                    </li>
                    </nuxt-link>
                    
                    <nuxt-link to="/reviews">
                     <li
                      class="flex cursor-pointer hover:text-yellow hover:bg-white hover:p-2 hover:rounded-md"
                    >
                      Reviews
                    </li>
                    </nuxt-link>
                   
                    <nuxt-link to="/FAQ">
                    <li
                      class="flex cursor-pointer hover:text-yellow hover:bg-white hover:p-2 hover:rounded-md"
                    >
                      FAQ
                    </li>
                    </nuxt-link>
                    
                    <li
                      class="flex bg-white text-yellow my-4 rounded-md p-2 w-28 text-center font-medium cursor-pointer"
                    >
                      Get The App
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <slot />

    <!-- footer  -->

    <div class="text-center leading-3 tracking-wider pt-16">
      <h1 class="text-yellow text-4xl font-bold">Your Car, In Your Phone</h1>
      <p class="pt-5 text-heading font-semibold first-letter:uppercase">
        make possible with our mobile app
      </p>

      <div class="flex gap-6 justify-center pt-6">
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

        <button class="bg-heading p-2 rounded-md w-44 ">
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
    </div>

    <!-- footer -->

    <div class="bg-black w-full h-auto mt-24 pb-10 footer">
      <div
        class="footer flex flex-wrap flex-row-3 justify-between gap-14 text-gray pt-8 px-10"
      >
        <div>
          <h3 class="flex text-yellow text-6xl font-black tracking-wider">
            P.R.E
          </h3>
          <span
            class="text-gray tracking-widest text-sm text-center italic font-light"
          >
            Paper Route Empire
          </span>
        </div>

        <div class="footer-p flex px-6 flex-wrap gap-14 pt-6">
          <p class="font-light">Navigation</p>

          <div class="font-light">
            <p>Home</p>
          </div>

          <div class="font-light">
            <p>Features</p>
          </div>

          <div class="font-light">
            <p>Events</p>
          </div>

          <div class="font-light">
            <p>About</p>
          </div>
        </div>

        <div class="footer-b flex flex-wrap gap-6 pt-6">
          <div class="font-light">
            <p>Terms</p>
          </div>

          <div class="font-light">
            <p>Privacy</p>
          </div>

          <div class="font-light">
            <p>Cookies</p>
          </div>

          <div class="font-light">
            <p>Licenses</p>
          </div>
        </div>
      </div>
      <div class="text-center text-gray font-light">
        <p>
          P.R.E<span class="">&copy;</span>Copyright 2023
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const showMenu = ref(false);
</script>
