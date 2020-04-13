<template>
  <div>
    <Card1/>
    <Card2/>
    <Card3/>

  </div>
</template>

<script>
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import Card1 from '../components/Card1';
  import Card2 from '../components/Card2';
  import Card3 from '../components/Card3';

  @Component({components: {Card1, Card2, Card3}})
  export default class Test extends Vue {
    // Declared as component data
    message = 'Hello World!'
  }
</script>