<template>
  <!-- component -->
<!--
  Welcome to Tailwind Play, the official Tailwind CSS playground!

  Everything here works just like it does when you're running Tailwind locally
  with a real build pipeline. You can customize your config file, use features
  like `@apply`, or even add third-party plugins.

  Feel free to play with this example if you're just learning, or trash it and
  start from scratch if you know enough to be dangerous. Have fun!
-->
<div class="w-screen h-screen overflow-hidden relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:opacity-30">
  <img src="../assets/bghome.png" class="absolute top-0 left-0 min-h-full ob" alt="">
  <div class="relative z-20 max-w-screen-lg mx-auto grid grid-cols-12 h-full items-center">
    <div class="col-span-6">
      <span class="uppercase text-white text-xs font-bold mb-2 block">WE ARE EXPERTS</span>
      <h1 class="text-white font-extrabold text-5xl mb-8">Finpoint provides Financial Consulting in different ways</h1>
      <p class="text-stone-100 text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <button class="mt-8 text-white uppercase py-4 text-base font-light px-10 border border-white hover:bg-white hover:bg-opacity-10">Get started</button>
    </div>
  </div>
</div>
<div class="bg-[#f7d0b6] py-20">
  <div class="max-w-screen-lg mx-auto flex justify-between items-center">
    <div class="max-w-xl">
      <h2 class="font-black text-sky-950 text-3xl mb-4">As the leading experts in this field, we're in over 90 countries</h2>
      <p class="text-base text-sky-950">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <button class="text-sky-950 uppercase py-3 text-base px-10 border border-sky-950 hover:bg-sky-950 hover:bg-opacity-10">Get started</button>
  </div>
</div>
<div class="py-12 relative overflow-hidden bg-white">
  <div class="grid grid-cols-2 max-w-screen-lg mx-auto">
    <div class="w-full flex flex-col items-end pr-16">
      <h2 class="text-[#64618C] font-bold text-2xl max-w-xs text-right mb-12 mt-10">Whether you need Assistance</h2>
      <div class="h-full mt-auto overflow-hidden relative">
        <img src="https://picsum.photos/800/600" class="h-full w-full object-contain" alt="">
      </div>
    </div>

    <div class="py-20 bg-slate-100 relative before:absolute before:h-full before:w-screen before:bg-sky-950 before:top-0 before:left-0">
      <div class="relative z-20 pl-12">
        <h2 class="text-[#f7d0b6] font-black text-5xl leading-snug mb-10">Finpoint is here <br>to help you</h2>
        <p class="text-white text-sm">
          Purus in massa tempor nec. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Faucibus ornare suspendisse sed nisi lacus sed viverra. Diam in arcu cursus euismod quis viverra nibh cras pulvinar.
        </p>
        <button class="mt-8 text-white uppercase py-3 text-sm px-10 border border-white hover:bg-white hover:bg-opacity-10">Talk with expert</button>
      </div>
    </div>
  </div>
</div>

<div class="py-4 relative overflow-hidden bg-white">
  <div class="grid grid-cols-2 max-w-screen-lg mx-auto">
    

    <div class="py-20 bg-slate-100 relative before:absolute before:h-full before:w-screen before:bg-[#f7d0b6] before:top-0 before:right-0">
      <div class="relative z-20 pl-12">
        <h2 class="text-sky-950 font-black text-5xl leading-snug mb-10">Finpoint is here <br>to help you</h2>
        <p class="text-sky-950 text-sm">
          Purus in massa tempor nec. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Faucibus ornare suspendisse sed nisi lacus sed viverra. Diam in arcu cursus euismod quis viverra nibh cras pulvinar.
        </p>
        <button class="mt-8 text-sky-950 uppercase py-3 text-sm px-10 border border-sky-950 hover:bg-white hover:bg-opacity-10">Talk with expert</button>
      </div>
    </div>
    <div class="w-full flex flex-col pl-16">
      <h2 class="text-[#64618C] font-bold text-2xl max-w-xs text-left mb-12 mt-10">Whether you need Assistance</h2>
      <div class="h-full mt-auto overflow-hidden relative">
        <img src="https://picsum.photos/800/600" class="h-full w-full object-contain" alt="">
      </div>
    </div>

  </div>
</div>

<div class="py-12 relative overflow-hidden bg-white">
  <div class="grid grid-cols-2 max-w-screen-lg mx-auto">
    <div class="w-full flex flex-col items-end pr-16">
      <h2 class="text-[#64618C] font-bold text-2xl max-w-xs text-right mb-12 mt-10">Whether you need Assistance</h2>
      <div class="h-full mt-auto overflow-hidden relative">
        <img src="https://picsum.photos/800/600" class="h-full w-full object-contain" alt="">
      </div>
    </div>

    <div class="py-20 bg-slate-100 relative before:absolute before:h-full before:w-screen before:bg-sky-950 before:top-0 before:left-0">
      <div class="relative z-20 pl-12">
        <h2 class="text-[#f7d0b6] font-black text-5xl leading-snug mb-10">Finpoint is here <br>to help you</h2>
        <p class="text-white text-sm">
          Purus in massa tempor nec. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Faucibus ornare suspendisse sed nisi lacus sed viverra. Diam in arcu cursus euismod quis viverra nibh cras pulvinar.
        </p>
        <button class="mt-8 text-white uppercase py-3 text-sm px-10 border border-white hover:bg-white hover:bg-opacity-10">Talk with expert</button>
      </div>
    </div>
  </div>
</div>
    <!-- <div class="">
  <header class="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 text-blue-900 md:mx-auto md:flex-row md:items-center">
    <a href="#" class="flex items-center whitespace-nowrap text-2xl font-black">
      <span class="mr-2 text-4xl text-blue-500">
        <svg xmlns="" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M6.925 16.875Q5.2 16.225 4.1 14.713Q3 13.2 3 11.25q0-1.975.938-3.513Q4.875 6.2 6 5.15q1.125-1.05 2.062-1.6L9 3v2.475q0 .625.45 1.062q.45.438 1.075.438q.35 0 .65-.15q.3-.15.5-.425L12 6q.95.55 1.625 1.35t1.025 1.8l-1.675 1.675q-.05-.6-.287-1.175q-.238-.575-.638-1.05q-.35.2-.738.287q-.387.088-.787.088q-1.1 0-1.987-.612Q7.65 7.75 7.25 6.725q-.95.925-1.6 2.062Q5 9.925 5 11.25q0 .775.275 1.462q.275.688.75 1.213q.05-.5.287-.938q.238-.437.588-.787L9 10.1l2.15 2.1q.05.05.1.125t.1.125l-1.425 1.425q-.05-.075-.087-.125q-.038-.05-.088-.1L9 12.925l-.7.7q-.125.125-.212.287q-.088.163-.088.363q0 .3.175.537q.175.238.45.363ZM9 10.1Zm0 0ZM7.4 22L6 20.6L19.6 7L21 8.4L17.4 12H21v2h-5.6l-.5.5l1.5 1.5H21v2h-2.6l2.1 2.1l-1.4 1.4l-2.1-2.1V22h-2v-4.6l-1.5-1.5l-.5.5V22h-2v-3.6Z" /></svg>
      </span>
      volunteerhub
    </a>
    <input type="checkbox" class="peer hidden" id="navbar-open" />
    <label class="absolute top-5 right-7 cursor-pointer md:hidden" for="navbar-open">
      <span class="sr-only">Toggle Navigation</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </label>
    <nav aria-label="Header Navigation" class="flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all peer-checked:mt-8 peer-checked:max-h-56 md:ml-24 md:max-h-full md:flex-row md:items-start">
      <ul class="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
        <li class="md:mr-12">
          <a href="/login" class="rounded-full border-2 border-blue-900 px-6 py-1 text-blue-900 transition-colors hover:bg-blue-900 hover:text-white">Login</a>
        </li>
        <li class="md:mr-12">
          <a a href="/register" class="rounded-full border-2 border-blue-900 px-6 py-1 text-blue-900 transition-colors hover:bg-blue-900 hover:text-white">Register</a>
        </li>
      </ul>
    </nav>
  </header>
  
  <section class="mx-auto my-10 flex max-w-xl flex-col rounded-3xl border p-4 sm:px-16 sm:py-16 lg:max-w-screen-lg lg:flex-row">
  <div class="lg:w-1/2 lg:pr-8">
    <div class="">
      <button class="mr-4 mb-2 rounded-full bg-blue-600 px-2 py-1 font-medium text-white transition">Code</button>
      <button class="mr-4 mb-2 rounded-full px-2 py-1 font-medium text-gray-600 transition focus:text-blue-600 focus:outline-none focus:ring focus:ring-blue-600 hover:text-blue-600 hover:ring hover:ring-blue-600">Atom</button>
      <button class="mr-4 mb-2 rounded-full px-2 py-1 font-medium text-gray-600 transition focus:text-blue-600 focus:outline-none focus:ring focus:ring-blue-600 hover:text-blue-600 hover:ring hover:ring-blue-600">Visual Studio</button>
      <button class="mr-4 mb-2 rounded-full px-2 py-1 font-medium text-gray-600 transition focus:text-blue-600 focus:outline-none focus:ring focus:ring-blue-600 hover:text-blue-600 hover:ring hover:ring-blue-600">Sublime</button>
    </div>
    <div class="mt-4">
      <h2 class="text-3xl font-medium text-gray-700">Transformasi Digital dalam Manajemen Sukarelawan.</h2>
      <p class="mt-6 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequatur fuga odio laudantium dolor, dolorum magnam. Ducimus quasi, odio harum eum repellendus, minus placeat fugit natus omnis neque ea maiores, reiciendis culpa!</p>
    </div>
  </div>
  <div class="-order-1 mb-8 lg:order-1 lg:mb-0 lg:w-1/2">
    <img class="border-blue-600/10 rounded-3xl border shadow-md" src="../assets/icon1.png" alt="" />
  </div>
</section>
</div> -->
</template>