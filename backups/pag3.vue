<template>
  <div>
    hola: {{test}}
    <!--<MyTsComponent :user="{firstName: 'pepe', lastName: 'perez'}"></MyTsComponent>-->
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';
  // import MyTsComponent from '../components/MyTsComponent';

  @Component
  export default class Pag3 extends Vue {
    test = 'test';
  }
</script>