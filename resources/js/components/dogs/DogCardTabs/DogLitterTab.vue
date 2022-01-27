<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col>
        <div v-for="(litter, index) in dog.litters" :key="index">
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header>
                litter {{ litter.id }}
                {{ index + 1 }}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-row class="text-end">
                  <v-col>
                    <v-menu offset-y>
                      <template #activator="{ on, attrs }">
                        <v-icon fab
                                v-bind="attrs"
                                v-on="on">
                          mdi-dots-vertical
                        </v-icon>
                      </template>
                      <v-list>
                        <v-list-item>
                          <v-list-item-icon>
                            <v-icon>mdi-pencil</v-icon>
                          </v-list-item-icon>
                          <v-list-item-content>
                            <inertia-link :href="route('admin.litters.edit', [litter.id])">
                              Edit
                            </inertia-link>
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <DogLittersDialog :dog="dog"/>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </v-col>
                </v-row>


                Content for is panel
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
        <pre>{{ dog.litters }}</pre>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import DogLittersDialog from '@/components/dogs/DogLittersDialog.vue';

  export default {
    props: {
      dog: {
        type: Object,
        required: true
      }
    },
    data() {
      return {

      };
    },
    computed: {


    },
    methods: {
      editLitter() {
        // go to litter edit page
      },
      isLitterActive(litter) {
        return litter.archived_at === null;
      }
    },
    components: {
      DogLittersDialog
    }
  };
</script>

<style scoped>
</style>
