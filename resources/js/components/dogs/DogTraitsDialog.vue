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
