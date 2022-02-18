<template>
  <div class="flex px-2 flex-col py-4 justify-center w-full">

    <div class="flex flex-col">
      <div class="overflow-x-auto">
        <div class="inline-block px-2">
          <div class="overflow-hidden">
            <table class="text-left">
              <tbody>
                <tr>
                  <td class="text-sm py-2 pr-4 font-semibold whitespace-nowrap">
                    e-mail
                  </td>
                  <td class="text-sm py-2 whitespace-nowrap">
                    baris@barissonmez.com.tr
                  </td>
                </tr>
                <tr>
                  <td class="text-sm py-2 pr-4 font-semibold whitespace-nowrap">
                    gsm
                  </td>
                  <td class="text-sm py-2 whitespace-nowrap">
                    +90 500 000 00 00
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <hr class="dark:border-gray-600">
    <h4 class="font-semibold border-b-1 border-gray-300 dark:border-gray-600 my-4">iletişim formu</h4>
    <form>
      <div class="form-group mb-6">
        <input type="text" class="form-control w-full px-3 py-1.5 text-base font-normal dark:text-white bg-clip-padding border border-solid border-gray-300 dark:border-gray-700 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white bg-gray-100 dark:bg-gray-800 focus:outline-none" placeholder="Ad ve soyadınızı yazınız.">
      </div>
      <div class="form-group mb-6">
        <input type="email" class="form-control w-full px-3 py-1.5 text-base font-normal dark:text-white bg-clip-padding border border-solid border-gray-300 dark:border-gray-700 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white bg-gray-100 dark:bg-gray-800 focus:outline-none" placeholder="Email adresinizi yazınız." required>
      </div>
      <div class="form-group mb-6">
        <textarea class="form-control block w-full px-3 py-1.5 text-base font-normal dark:text-white bg-clip-padding border border-solid border-gray-300 dark:border-gray-700 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white bg-gray-100 dark:bg-gray-800 focus:outline-none" rows="5" placeholder="Mesajınızı giriniz."></textarea>
      </div>
      <button type="submit" class="w-full px-6 py-2.5 bg-gray-700 text-white font-medium rounded shadow-md hover:bg-dark-700 hover:shadow-lg focus:outline-none dark:hover:bg-gray-600 transition duration-150 ease-in-out">gönder</button>
    </form>
  </div>
</template>
