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
                    <li
                      class="flex cursor-pointer hover:text-yellow hover:bg-white hover:p-2 hover:rounded-md"
                    >
                      Features
                    </li>
                    <li
                      class="flex cursor-pointer hover:text-yellow hover:bg-white hover:p-2 hover:rounded-md"
                    >
                      Reviews
                    </li>
                    <li
                      class="flex cursor-pointer hover:text-yellow hover:bg-white hover:p-2 hover:rounded-md"
                    >
                      FAQ
                    </li>
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
  </div>
</template>

<script setup>
const showMenu = ref(false);
</script>
