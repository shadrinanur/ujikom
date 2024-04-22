<template>
    
    <div class="flex justify-center items-center">
      <form class="max-w-xl m-4 p-10 bg-white rounded shadow-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 mt-12">
        <p class="text-gray-800 font-medium">Rekapitulasi</p>
        <div class="">
          <label class="block text-sm text-gray-600" for="cus_name">Judul laporan</label>
          <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" placeholder="Masukkan nama anda" aria-label="Name">
        </div>

        <div class="mt-2">
          <label class="block text-sm text-gray-600" for="">Tanggal Laporan</label>
          <input class="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded" id="cus_email" name="tanggal_lahir" type="date">
        </div>
        <div class="mt-2">
          <label class=" block text-sm text-gray-600" for="cus_email">Jumlah Kegiatan</label>
          <input class="w-full px-6 py-6 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" placeholder="Street" aria-label="Email">
        </div>
        <div class="mt-2">
          <label class=" block text-sm text-gray-600" for="cus_email">Deskripsi Kegiatan</label>
          <input class="w-full px-6 py-6 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" placeholder="Street" aria-label="Email">
        </div>
        <div class="inline-block mt-2 w-1/2 pr-1">
          <label class="hidden block text-sm text-gray-600" for="cus_email">Country</label>
          <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" placeholder="Country" aria-label="Email">
        </div>
        <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
          <label class="hidden block text-sm text-gray-600" for="cus_email">Zip</label>
          <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email"  name="cus_email" type="text" placeholder="Zip" aria-label="Email">
        </div>
       
      </form>
    </div>
  </template>
  
  