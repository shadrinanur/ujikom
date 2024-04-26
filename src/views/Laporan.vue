<template>   
<div style="margin-top: 600px;">
      <form class="max-w-xl m-4 p-10 bg-white rounded shadow-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 mt-12">
        <p class="text-gray-800 font-medium">Rekapitulasi</p>
        <div class="">
          <label class="block text-sm text-gray-600" for="cus_name">Judul laporan</label>
          <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" placeholder="Masukkan judul kegiatan anda" aria-label="Name" style="width: 400px;">
        </div>

        <div class="mt-2">
          <label class="block text-sm text-gray-600" for="">Tanggal Laporan</label>
          <input class="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded" id="cus_email" name="tanggal_lahir" type="date">
        </div>
        <div class="mt-2">
        <label class="block text-sm text-gray-600" for="jumlah_kegiatan">Jumlah Kegiatan</label>
        <select class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="jumlah_kegiatan" name="jumlah_kegiatan">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <!-- Tambahkan opsi sesuai kebutuhan -->
        </select>
      </div>
        <div class="mt-2">
          <label class=" block text-sm text-gray-600" for="cus_email">Deskripsi Kegiatan</label>
          <input class="w-full px-6 py-6 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" placeholder="" aria-label="Email">
        </div>
<br>
<button
          id="submitBtn"
          type="button"
          class="w-full py-4 bg-green-600 rounded-lg text-green-100">
          <div class="flex flex-row items-center justify-center">
            <div class="mr-2">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                ></path>
              </svg>
            </div>
            <div class="font-bold">Masuk</div>
          </div>
        </button>
        <!-- <div class="inline-block mt-2 w-1/2 pr-1">
          <label class="hidden block text-sm text-gray-600" for="cus_email">Country</label>
          <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" placeholder="Country" aria-label="Email">
        </div>
        <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
          <label class="hidden block text-sm text-gray-600" for="cus_email">Zip</label>
          <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email"  name="cus_email" type="text" placeholder="Zip" aria-label="Email">
        </div> -->
       
      </form>
    </div>
  </template>
  
  <script>
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submitBtn").addEventListener("click", function() {
      alert("Laporan Terkirim ke Admin!");
    });
  });
</script>
