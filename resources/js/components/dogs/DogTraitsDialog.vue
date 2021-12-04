<template>
  <v-dialog v-model="showDialog" max-width="600px">
    <template #activator="{ on, attrs }">
      <v-btn v-bind="attrs" elevation="0" width="100%" align="left"
             v-on="on">
        <v-icon>mdi-dna</v-icon>
        Add Traits
      </v-btn>
    </template>


    <form @submit.prevent="submit">
      <v-card>
        <v-card-title class="d-flex col justify-space-between "
                      style="top: 0; position: sticky; background: white; z-index: 1; margin-bottom: 20px;">
          <span>Add Traits</span>
          <span v-if="form.isDirty">
            <v-btn color="green white--text" type="submit">
              <v-icon>mdi-submit</v-icon> Update
            </v-btn>
          </span>
        </v-card-title>
        <v-card-text>
          <!-- Traits -->

          <v-container>
            <v-card v-for="(group, index) in traitOptionsByCategory" :key="index" elevation="0">
              <v-card-title>
                {{ group.category }}
              </v-card-title>

              <v-card-text>
                <v-select
                  v-for="(trait, j) in group.traits" :key="j"

                  v-model="form[trait.code]"
                  :items="allelesList(trait)"
                  :clearable="true"
                  :label="trait.trait"
                  item-text="name"
                  item-value="id"
                  class="mt-0">
                  <template #prepend-inner>
                    <v-dialog>
                      <template #activator="{ on, attrs }">
                        <v-icon v-bind="attrs" v-on="on">mdi-information-outline</v-icon>
                      </template>

                      <v-card>
                        <v-card-title>
                          {{ trait.trait }}
                        </v-card-title>

                        <v-card-text>
                          {{ trait.description }}
                        </v-card-text>
                      </v-card>
                    </v-dialog>
                  </template>
                </v-select>
              </v-card-text>
            </v-card>
          </v-container>
        </v-card-text>
      </v-card>
    </form>
  </v-dialog>
</template>
                </v-select>
              </v-card-text>
            </v-card>
          </v-container>


          <!--          <v-text-field v-model="form.MC1R" dense label="E Locus (MC1R)"/>-->
          <!--          <v-text-field v-model="form.CBD103" dense label="K Locus (CBD103)"/>-->
          <!--          <v-text-field v-model="form.ASIP" dense label="A Locus (ASIP)"/>-->
          <!--          <v-text-field v-model="form.MLPH" dense label="D Locus (MLPH)"/>-->
          <!--          <v-text-field v-model="form.TYRP1" dense label="B Locus (TYRP1)"/>-->
          <!--          <v-text-field v-model="form.MITF" dense label="S Locus (MITF)"/>-->
          <!--          <v-text-field v-model="form.Harlequin" dense label="H Locus (Harlequin)"/>-->
          <!--          <v-text-field v-model="form.RSPO2" dense label="Furnishings (RSPO2)"/>-->
          <!--          <v-text-field v-model="form.FGF5" dense label="Coat Length (FGF5)"/>-->
          <!--          <v-text-field v-model="form.MC5R" dense label="Shedding (MC5R)"/>-->
          <!--          <v-text-field v-model="form.FOXI3" dense label="Hairlessness (FOXI3)"/>-->
          <!--          <v-text-field v-model="form.SLC45A2" dense label="Oculocutaneous Albinism Type 2 (SLC45A2)"/>-->
          <!--          <v-text-field v-model="form.KRT71" dense label="Coat Texture (KRT71)"/>-->
          <!--          <v-text-field v-model="form.BMP3" dense label="Muzzle Length (BMP3)"/>-->
          <!--          <v-text-field v-model="form.T" dense label="Tail Length (T)"/>-->
          <!--          <v-text-field v-model="form.LMBR1" dense label="Hind Dewclaws (LMBR1)"/>-->
          <!--          <v-text-field v-model="form.ALX4" dense label="Blue Eye Color (ALX4)"/>-->
          <!--          <v-text-field v-model="form.IGF1" dense label="Body Size (IGF1)"/>-->
          <!--          <v-text-field v-model="form.IGFR1" dense label="Body Size (IGFR1)"/>-->
          <!--          <v-text-field v-model="form.STC2" dense label="Body Size (STC2)"/>-->
          <!--          <v-text-field v-model="form.E191K" dense label="Body Size (GHR - E191K)"/>-->
          <!--          <v-text-field v-model="form.P177L" dense label="Body Size (GHR - P177L)"/>-->
          <!--          <v-text-field v-model="form.EPAS1" dense label="Altitude Adaptation (EPAS1)"/>-->
          <!--          <v-text-field v-model="form.POMC" dense label="Appetite (POMC)"/>-->
          </v-form>
        </v-card-text>
      </v-card>
    </form>
  </v-dialog>
</template>
<script>
  import axios from 'axios';

  export default {
    props: {
      dog: {}
    },
    data() {
      return {
        showDialog: false,
        trait_options: [],
        form: this.$inertia.form(`EditDogTraits:${this.dog.id}`, {...this.dog.traits})
      };
    },
    computed: {
      traitOptionsByCategory() {
        const traitOptionsByCategory = [];

        this.trait_options.forEach((trait) => {
          const category = trait.category;
          const traitOptions = traitOptionsByCategory.find((traitOptions) => traitOptions.category === category);

          if (traitOptions) {
            traitOptions.traits.push(trait);
          } else {
            traitOptionsByCategory.push({
              category,
              traits: [trait]
            });
          }
        });
        return traitOptionsByCategory;
      }
    },

    methods: {
      submit() {
        this.form
          .transform((data) => ({
              ...data,
              dog_id: this.dog.id
          }))
          .put(this.route('admin.traits.update', this.dog.id));

        this.showDialog = false;
      },


      allelesList(traitOption) {
        if (!traitOption.alleles) {
          return [];
        }

        return traitOption.alleles.split(',');
      }
    },
    mounted() {
      // axios get all traits options
      // eslint-disable-next-line promise/always-return
      axios.get('/admin/trait-options').then((response) => {
        this.trait_options = response.data;
      });
    }
  };
</script>
