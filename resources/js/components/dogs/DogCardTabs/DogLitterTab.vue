<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col>
        <v-expansion-panels>
          <v-expansion-panel v-for="(litter, index) in dog.litters" :key="index" class="mb-2">
            <v-expansion-panel-header>
              <div>
                <div>
                  <v-img max-width="50px" :src="getImage(stud(litter))"/>
                </div>
                <div v-if="stud(litter)">
                  {{ stud(litter).name }}
                </div>
                <div>
                  Breed Date: {{ formatDate(moment(mated_at(litter))) }}
                </div>
              </div>
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
                            Edit Breeding/Litter
                          </inertia-link>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-col>
              </v-row>


              <div v-if="litter.notes">
                <p>Notes:</p>
                <p>{{ litter.notes }}</p>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import moment from 'moment';
  import DogLittersDialog from '@/components/dogs/DogLittersDialog.vue';
  import {formatDate} from '@/helper';

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
      moment,
      formatDate,
      getImage(dog) {
        if (!dog || dog.media.length === 0) {
          return '/images/defaults/no-dog.png';
        }

        return dog.media[0].original_url;
      },


      mated_at(litter) {
        return litter.dates_mated_at?.[0];
      },
      stud(litter) {
        if (litter.stud_id == null) {
          return null;
        }

        return this.$page.props.dogs.filter((dog) => dog.id === litter.stud_id)[0];
      },

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
