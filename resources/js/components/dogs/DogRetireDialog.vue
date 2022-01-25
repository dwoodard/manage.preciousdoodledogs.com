<template>
  <v-dialog v-model="showDialog" max-width="600px">
    <template #activator="{ on, attrs }">
      <v-btn v-bind="attrs" elevation="0" width="100%" v-on="on">
        Retire Dog...
      </v-btn>
    </template>

    <form @submit.prevent="submit">
      <v-card>
        <v-card-title class="d-flex col justify-space-between "
                      style="top: 0; position: sticky; background: white; z-index: 1; margin-bottom: 20px;">
          <span>Retire Dog</span>
          <span v-if="form.isDirty">
            <v-btn color="red white--text" type="submit">
              <v-icon>mdi-submit</v-icon> Retire
            </v-btn>
          </span>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col>
              <v-row class="justify-center">
                {{ dog.name }}
              </v-row>
              <v-row>
                <v-img

                  v-if="dog.media[0]"
                  :src="dog.media[0].original_url"
                  aspect-ratio="1"
                  contain
                  class="mx-auto rounded-xl"
                  max-width="200px"
                  max-height="200px"
                  style="margin-bottom: 20px;"/>
              </v-row>
            </v-col>
            <v-col>
              <InputDate v-model="form.retired_at" label="Retired Date" clear/>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </form>
  </v-dialog>
</template>

<script>
  import axios from 'axios';
  import InputDate from '@/components/InputDate';

  export default {
    props: {
      dog: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        showDialog: false,
        form: this.$inertia.form(`EditDogRetire:${this.dog.id}`, {
          dog_id: this.dog.id,
          retired_at: this.dog.retired_at
        })
      };
    },
    computed: { },
    methods: {

      submit() {
        this.form
          .transform((data) => ({
              ...data,
              dog_id: this.dog.id
          }))
          .put(this.route('admin.dogs.update', this.dog.id));

        this.showDialog = false;
      }


    },
    components: {
      InputDate
    }
  };
</script>

<style scoped>

</style>
