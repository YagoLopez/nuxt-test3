<template>
  <div class="container mx-auto p-8">
    <div class="flex flex-row flex-wrap -mx-2">
      <div class="w-full md:w-1/2 h-64 md:h-auto mb-4 px-2">
        <a class="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover" href="#" title="Link"
           style="background-image: url(https://via.placeholder.com/800x600/EDF2F7/E2E8F0/&amp;text=Image);">
          <Card3></Card3>
        </a>
      </div>
      <div class="w-full md:w-1/2 mb-4 px-2">
        <div class="flex flex-col sm:flex-row md:flex-col -mx-2">
          <div class="w-full sm:w-1/2 md:w-full h-48 xl:h-64 mb-4 sm:mb-0 md:mb-4 px-2">
            <a class="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover" href="#" title="Link"
               style="background-image: url(https://via.placeholder.com/800x600/EDF2F7/E2E8F0/&amp;text=Image);">
              Link
            </a>
          </div>
          <div class="w-full sm:w-1/2 md:w-full h-48 xl:h-64 px-2">
            <a class="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover" href="#" title="Link"
               style="background-image: url(https://via.placeholder.com/800x600/EDF2F7/E2E8F0/&amp;text=Image);">
              Link
            </a>
          </div>
        </div>
      </div>
      <div class="w-full sm:w-1/3 h-32 md:h-48 mb-4 sm:mb-0 px-2">
        <a class="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover" href="#" title="Link"
           style="background-image: url(https://via.placeholder.com/800x600/EDF2F7/E2E8F0/&amp;text=Image);">
          Link
        </a>
      </div>
      <div class="w-full sm:w-1/3 h-32 md:h-48 mb-4 sm:mb-0 px-2">
        <a class="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover" href="#" title="Link"
           style="background-image: url(https://via.placeholder.com/800x600/EDF2F7/E2E8F0/&amp;text=Image);">
          Link
        </a>
      </div>
      <div class="w-full sm:w-1/3 h-32 md:h-48 px-2">
        <a class="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover" href="#" title="Link"
           style="background-image: url(https://via.placeholder.com/800x600/EDF2F7/E2E8F0/&amp;text=Image);">
          Link
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Component from 'vue-class-component';
  // import Card1 from '../components/Card1';
  // import Card2 from '../components/Card2';
  // import Card3 from '../components/Card3';

  // @Component({
  //   components: {Card1, Card2, Card3}
  // })
  @Component
  export default class Grid extends Vue {
    // Declared as component data
    message = 'Hello World!'
  }
</script>