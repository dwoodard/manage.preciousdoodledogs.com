<template>
  <div>
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600">
      <v-card-title>
        {{ title }}
      </v-card-title>

      <v-card-text>
        <v-sparkline
          :value="value"
          :smooth="radius || false"
          :padding="padding"
          :line-width="width"
          :stroke-linecap="lineCap"
          :gradient-direction="gradientDirection"
          :fill="fill"
          :type="type"
          :auto-line-width="autoLineWidth"
          auto-draw>
          <template #label="item">
            {{ item.value }}
          </template>
        </v-sparkline>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>


  export default {
    props: {
      value: {
        type: Array,
        default: () => []
      },
      title: {
        type: String,
        default: 'Weight (oz)'
      }
    },
    data: () => ({
      width: 4,
      radius: 10,
      padding: 8,
      lineCap: 'round',
      gradientDirection: 'top',
      fill: false,
      type: 'trend',
      autoLineWidth: true
    })
  };
</script>
