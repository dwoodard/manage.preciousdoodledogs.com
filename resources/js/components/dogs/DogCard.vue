<template>
  <v-card
    :class="{'card-male': dog.gender === 'male', 'card-female': dog.gender === 'female'}"
    :elevation="0"
    outlined
    class="mx-auto"
    max-width="600"
    height="100%">
    <template slot="progress">
      <v-progress-linear
        height="10"
        indeterminate/>
    </template>

    <v-row no-gutters>
      <v-col>
        <v-sheet class="header" :class="`header--${dog.gender}`">
          <div class="d-flex justify-space-between">
            <v-icon>mdi-graph-outline</v-icon>

            <div>
              <b>{{ dog.name }}</b>
              <small>
                <span style="display: block">{{ dog.generation }} {{ dog.size }} {{ dog.breed }}</span>
              </small>
            </div>

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
                  <inertia-link v-ripple :href="route('admin.dogs.edit', {dog:dog.id})" as="v-list-item">
                    <v-icon>mdi-circle-edit-outline</v-icon>
                    Edit
                  </inertia-link>
                </v-list-item>


                <v-list-item v-if="dog.gender === 'female'">
                  <DogBreedingDialog :dog="dog"/>
                </v-list-item>

                <v-list-item v-if="dog.gender === 'female'">
                  <DogHeatDialog :dog="dog"/>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </v-sheet>
      </v-col>
    </v-row>


    <v-row no-gutters p-0 justify="space-between">
      <v-col cols="6">
        <v-img
          :src="getImage(dog)"
          aspect-ratio="1.61"
          contain/>
      </v-col>

      <v-col cols="6">
        <v-card elevation="0">
          <div>
            <span v-if="dog.weight">{{ ouncesToLbs(dog.weight) }} lbs</span>
            <span v-else><inertia-link :href="`/admin/dogs/${dog.id}/edit`">Add Weight</inertia-link></span>
          </div>

          <div>
            <span v-if="dog.height">{{ dog.height }}</span>
            <span v-else><inertia-link href="#">Add Height</inertia-link></span>
          </div>

          <div>
            <span v-if="dog.birthday">{{ age(dog.birthday) }}</span>
            <span v-else><inertia-link href="#">Add Birthday</inertia-link></span>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-tabs v-model="selectedTab" show-arrows grow>
        <!--DogCard Tabs-->
        <v-tab>Traits</v-tab>
        <v-tab v-show="dog.gender === 'female'">Heats</v-tab>
        <v-tab v-show="dog.gender === 'male'">Studding</v-tab>
        <v-tab v-show="dog.gender === 'female'">Litters</v-tab>
        <v-tab>More</v-tab>

        <!--Dog Tab Items-->
        <v-tab-item name="traits">
          <v-row no-gutters>
            <v-col cols="1" offset="11">
              <v-menu offset-y>
                <template #activator="{ on, attrs }">
                  <v-icon fab
                          v-bind="attrs"
                          v-on="on">
                    mdi-dots-vertical
                  </v-icon>
                </template>
                <v-list>
                  <!-- add heat-->
                  <v-list-item>
                    <DogTraitsDialog :dog="dog"/>
                  </v-list-item>
                  <!-- add progesterone-->
                </v-list>
              </v-menu>
            </v-col>
          </v-row>
          <v-row no-gutters class="pa-3">
            <v-col cols="6">
              <abbr title="E Locus (MC1R)">E</abbr>: {{ dog.traits.MC1R }} <br/>
              <abbr title="K Locus (CBD103)">K</abbr>: {{ dog.traits.CBD103 }} <br/>
              <abbr title="A Locus (ASIP)">A</abbr>: {{ dog.traits.ASIP }} <br/>
              <abbr title="D Locus (MLPH)">D</abbr>: {{ dog.traits.MLPH }} <br/>
              <abbr title="B Locus (TYRP1)">B</abbr>: {{ dog.traits.TYRP1 }} <br/>
              <abbr title="S Locus (MITF)">S</abbr>: {{ dog.traits.MITF }} <br/>
            </v-col>
            <v-col cols="6">
              <abbr title="Furnishings (RSPO2)">Furnishings</abbr>: {{ dog.traits.RSPO2 }} <br/>
              <abbr title="Shedding (MC5R)">Shedding</abbr>: {{ dog.traits.MC5R }} <br/>
              <abbr title="Coat Texture (KRT71)">Coat Curl</abbr>: {{ dog.traits.KRT71 }} <br/>
              <abbr title="Coat Length (FGF5)">Coat Length</abbr>: {{ dog.traits.FGF5 }} <br/>
            </v-col>
          </v-row>
        </v-tab-item>
        <v-tab-item v-show="dog.gender === 'female'" name="heats">
          <v-container fluid>
            <v-row no-gutters>
              <v-col cols="1" offset="11">
                <!-- btn mdi vertical -->
                <v-menu offset-y>
                  <template #activator="{ on, attrs }">
                    <v-icon fab
                            v-bind="attrs"
                            v-on="on">
                      mdi-dots-vertical
                    </v-icon>
                  </template>
                  <v-list>
                    <!-- add heat-->
                    <v-list-item>
                      <DogHeatDialog :dog="dog"/>
                    </v-list-item>
                    <!-- add progesterone-->
                  </v-list>
                </v-menu>
              </v-col>
            </v-row>

            <v-row no-gutters>
              <v-col>
                <pre>{{ dog.heats }}</pre>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
        <v-tab-item v-show="dog.gender === 'male'" name="studding">
          <v-container fluid>
            Studding
          </v-container>
        </v-tab-item>
        <v-tab-item v-show="dog.gender === 'female'" name="litters">
          <v-container fluid>
            <v-row no-gutters>
              <v-col cols="1" offset="11">
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
                      <DogLittersDialog :dog="dog"/>
                    </v-list-item>
                    <!-- add progesterone-->
                  </v-list>
                </v-menu>
              </v-col>
            </v-row>

            <v-row no-gutters>
              <v-col>
                <pre>{{ dog.litters }}</pre>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
        <v-tab-item name="more">
          <v-container fluid>
            <!--Menu-->
            <v-row no-gutters>
              <v-col cols="1" offset="11">
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
                      <DogFamilyDialog :dog="dog"/>
                    </v-list-item>
                    <!-- add progesterone-->
                  </v-list>
                </v-menu>
              </v-col>
            </v-row>


            <!--Notes-->
            <v-row no-gutters>
              <v-col cols="6">
                <v-textarea label="Notes">
                  {{ dog.notes }}
                </v-textarea>
              </v-col>
              <v-col cols="6">
                <div>AKC: {{ dog.akc }}</div>
                <div>CKC: {{ dog.ckc }}</div>
                <div>EMBARK: {{ dog.embark }}</div>
              </v-col>
            </v-row>

            <v-row no-gutters>
              <v-col>
                <v-card outlined>
                  <v-card-title>
                    <span class="headline">
                      <v-icon>mdi-account-circle</v-icon>
                      Family
                    </span>
                  </v-card-title>
                  <v-card-text>
                    <v-text-field/>
                    <v-textarea/>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs>
    </v-row>
  </v-card>
</template>
<script>
  import DogTraitsDialog from '@/components/dogs/DogTraitsDialog';
  import DogBreedingDialog from '@/components/dogs/DogBreedingDialog';
  import DogHeatDialog from '@/components/dogs/DogHeatDialog';
  import DogLittersDialog from '@/components/dogs/DogLittersDialog';
  import DogFamilyDialog from '@/components/dogs/DogFamilyDialog';
  import {age, inchesToFeet, ouncesToLbs} from '@/helper';

  export default {
    name: 'DogCard',
    props: {
      dog: {}
    },
    data() {
      return {
        selectedTab: '',
        showAddBreeding: false,
        showAddHeat: false
      };
    },
    methods: {
      ouncesToLbs,
      age,
      inchesToFeet,
      getImage(dog) {
        return dog.media.length > 0 ? dog.media[0].original_url : '/images/defaults/no-dog.png';
      }
    },
    components: {
      DogBreedingDialog,
      DogHeatDialog,
      DogLittersDialog,
      DogTraitsDialog,
      DogFamilyDialog
    }
  };
</script>
<style scoped>
.header{
  padding: 10px;
}

.header--female{
  background: hotpink;

}
.header--male{
  background: rgba(14, 130, 213);
}

.card-male {
  border: 2px solid rgba(14, 130, 213);
}


.card-female {
  border: 2px solid hotpink;
}

/*
.container{
  outline: 2px solid green;
}
.row{
  outline: 2px solid red;
}
.col{
  outline: 2px solid blue;
}*/
</style>
