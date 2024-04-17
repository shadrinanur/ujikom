<template>
    <!-- component -->
<nav class=" bg-white w-full flex relative justify-between items-center mx-auto px-8 h-20">
    <div class="inline-flex">
        
    </div>


    <!-- search bar --> 
    <div class="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
        <div class="inline-block">
            <div class="inline-flex items-center max-w-full">
                <button class="flex items-center flex-grow-0 flex-shrink pl-2 relative w-60 border rounded-full px-1  py-1" type="button">
                    <div class="block flex-grow flex-shrink overflow-hidden">Start your search</div>
                    <div class="flex items-center justify-center relative  h-8 w-8 rounded-full">
                        <svg
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                            style="
                                display: block;
                                fill: none;
                                height: 12px;
                                width: 12px;
                                stroke: currentcolor;
                                stroke-width: 5.33333;
                                overflow: visible;
                            "
                        >
                            <g fill="none">
                                <path
                                    d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"
                                ></path>
                            </g>
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    </div>
    <!-- end search bar -->

    <!-- login -->
    <div class="flex-initial">
      <div class="flex justify-end items-center relative">
       
        <div class="flex mr-4 items-center">
          <a class="inline-block py-2 px-3 hover:bg-gray-200 rounded-full" href="#">
            <div class="flex items-center relative cursor-pointer whitespace-nowrap">Become a host</div>
          </a>
          <div class="block relative">
            <button type="button" class="inline-block py-2 px-3 hover:bg-gray-200 rounded-full relative ">
              <div class="flex items-center h-5">
                <div class="_xpkakx">
                  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 16px; width: 16px; fill: currentcolor;"><path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path></svg>
                </div>
              </div>
            </button>
          </div>
        </div>

        <div class="block">
            <div class="inline relative">
                <button type="button" class="inline-flex items-center relative px-2 border rounded-full hover:shadow-lg">
                    <div class="pl-1">
                        <svg
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                            style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;"
                        >
                            <g fill="none" fill-rule="nonzero">
                                <path d="m2 16h28"></path>
                                <path d="m2 24h28"></path>
                                <path d="m2 8h28"></path>
                            </g>
                        </svg>
                    </div>

                    <div class="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5">
                        <svg
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                            style="display: block; height: 100%; width: 100%; fill: currentcolor;"
                        >
                            <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
                        </svg>
                    </div>
                </button>
            </div>
        </div>
      </div>
    </div>
    <!-- end login -->
</nav>
    <!-- <div class="min-h-[600px] flex flex-row">
      <div class="mt-1">
        <div class="p-4 xl:ml-80">
            <div class="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-6 h-6 text-white">
              <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <div class="p-4 text-right">
            <div class="mx-5">
             <h4 class="text-2xl font-semibold text-gray-700">8,282</h4>
             <div class="text-gray-500">New Users</div>
             </div>
          </div> 
        </div>
       
        <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-6 h-6 text-white">
              <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"></path>
            </svg>
          </div>
          <div class="p-4 text-right">
            <div class="mx-5">
             <h4 class="text-2xl font-semibold text-gray-700">8,282</h4>
             <div class="text-gray-500">New Users</div>
             </div>
          </div>
        </div>
    </div>
        </div>
      </div>
      <div class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg mt-4">
<table class="w-3/4 mt-4">
    <thead>
  <tr>
      <th
          class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
          Name</th>
      <th
          class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
          Title</th>
      <th
          class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
          Status</th>
      <th
          class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
          Role</th>
      <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
  </tr>
   </thead>
   <tbody class="bg-white">
  <tr>
  </tr>
  <tr>
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div class="flex items-center">
              <div class="flex-shrink-0 w-10 h-10">
                  <img class="w-10 h-10 rounded-full"
   src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
   alt="">
              </div>
    
              <div class="ml-4">
                  <div class="text-sm font-medium leading-5 text-gray-900">John Doe
                  </div>
                  <div class="text-sm leading-5 text-gray-500">john@example.com</div>
              </div>
          </div>
      </td>
    
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div class="text-sm leading-5 text-gray-900">Software Engineer</div>
          <div class="text-sm leading-5 text-gray-500">Web dev</div>
      </td>
    
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <span
              class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">Active</span>
      </td>
    
      <td
          class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
          Owner</td>
    
      <td
          class="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200">
          <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
      </td>
  </tr>
  <tr>
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div class="flex items-center">
              <div class="flex-shrink-0 w-10 h-10">
                  <img class="w-10 h-10 rounded-full"
   src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
   alt="">
              </div>
    
              <div class="ml-4">
                  <div class="text-sm font-medium leading-5 text-gray-900">John Doe
                  </div>
                  <div class="text-sm leading-5 text-gray-500">john@example.com</div>
              </div>
          </div>
      </td>
    
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div class="text-sm leading-5 text-gray-900">Software Engineer</div>
          <div class="text-sm leading-5 text-gray-500">Web dev</div>
      </td>
    
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <span
              class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">Active</span>
      </td>
    
      <td
          class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
          Owner</td>
    
      <td
          class="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200">
          <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
      </td>
  </tr>
  <tr>
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div class="flex items-center">
              <div class="flex-shrink-0 w-10 h-10">
                  <img class="w-10 h-10 rounded-full"
   src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
   alt="">
              </div>
    
              <div class="ml-4">
                  <div class="text-sm font-medium leading-5 text-gray-900">John Doe
                  </div>
                  <div class="text-sm leading-5 text-gray-500">john@example.com</div>
              </div>
          </div>
      </td>
    
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div class="text-sm leading-5 text-gray-900">Software Engineer</div>
          <div class="text-sm leading-5 text-gray-500">Web dev</div>
      </td>
    
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <span
              class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">Active</span>
      </td>
    
      <td
           class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
           Owner</td>
    
       <td
           class="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200">
           <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
       </td>
   </tr>
       </tbody>
   </table>
         </div>
    </div> -->
                   
  </template>
  