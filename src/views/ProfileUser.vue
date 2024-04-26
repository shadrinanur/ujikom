<template>
    <!-- component -->
<div class="rounded-3xl overflow-hidden shadow-xl max-w-xs my-3 bg-blue-500">
  	<img src="https://i.imgur.com/dYcYQ7E.png" class="w-full" />
    <div class="flex justify-center -mt-8">
        <img src="https://i.imgur.com/8Km9tLL.jpg" class="rounded-full border-solid border-white border-2 -mt-3">		
    </div>
	<div class="text-center px-3 pb-6 pt-2">
		<h3 class="text-white text-sm bold font-sans">{{ users.username }}</h3>
		<p class="mt-2 font-sans font-light text-white">{{ users.email }}</p>
	</div>
  	
</div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters(["getUser"]),
      user() {
        return this.getUser;
      },
    },
    methods: {
      ...mapActions( ["getUser"]),
    },
    created() {
      this.getUser();
    },
  };
  </script>