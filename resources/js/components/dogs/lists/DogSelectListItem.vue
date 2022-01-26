<template>
  <v-row class="justify-space-between">
    <v-col>
      <v-img width="50px" :src="getImage(dog)"/>
    </v-col>
    <v-col class="text-end">
      {{ dog.name }}
    </v-col>
  </v-row>
</template>

<script>
  export default {
    props: {
      dog: {}
    },
    data() {
      return {

      };
    },
    computed: { },
    methods: {
      getImage(dog) {
        return dog.media.length > 0 ? dog.media[0].original_url : '/images/defaults/no-dog.png';
      }
    },
    components: {}
  };
</script>

<style scoped>

</style>
