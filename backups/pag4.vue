<template>
  <div>
    hola: {{test}}<br>
    <!--<client-only>-->
      <vue-json-pretty :data="mydata"/>
    <!--</client-only>-->
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';
  // import VueJsonPretty from 'vue-json-pretty';

  // @Component({
  //   components: {'vue-json-pretty': () => import('vue-json-pretty')}
  // })
  export default class Pag4 extends Vue {
    test = 'test';
    mydata = [1, 2, 3];
  }
</script>