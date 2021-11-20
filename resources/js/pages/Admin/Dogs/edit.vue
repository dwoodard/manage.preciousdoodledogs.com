<template>
  <v-container fluid class="pa-8">
    <inertia-link href="/admin/dogs" as="span">
      <v-icon>mdi-arrow-left</v-icon>
    </inertia-link>

    <h1 style="display: inline-block">Edit Dog</h1>


    <form @submit.prevent="update">
      <div v-if="form.isDirty">
        <!--      submit-->
        <v-btn type="submit"
               color="primary"
               :loading="form.loading">
          Update
        </v-btn>
      </div>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="form.name"
              counter
              :error-messages="form.errors.name"
              label="Name"
              required/>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-select v-model="form.gender"
                      :error-messages="form.errors.gender"
                      label="Gender"
                      :items="['male', 'female']"
                      item-text="name"
                      item-value="id"/>
          </v-col>
          <v-col md="4">
            <v-menu
              v-model="fromDateMenu"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px">
              <template #activator="{ on }">
                <v-text-field
                  label="Birthday"
                  prepend-icon="mdi-calendar"
                  readonly
                  :value="form.birthday"
                  v-on="on"/>
              </template>
              <v-date-picker
                v-model="form.birthday"
                locale="en-in"
                scrollable
                no-title
                @input="fromDateMenu = false"/>
            </v-menu>
          </v-col>
        </v-row>

        <v-row>
          <v-img
            v-if="form.media[0]"
            :src="form.media[0].original_url"
            aspect-ratio="1"
            contain
            class="mx-auto"
            max-width="200px"
            max-height="200px"
            style="margin-bottom: 20px;"/>
          <v-file-input
            show-size
            accept="image/*"
            label="Dog Image"
            prepend-icon="mdi-camera"
            @change="selectFile"/>
        </v-row>


        <v-select v-model="form.breed"
                  :error-messages="form.errors.breed"
                  label="Breed"
                  :items="[
                    'poodle',
                    'goldendoodles',
                    'labradoodle',
                    'cavapoo'
                  ]"
                  item-text="name"
                  item-value="id"/>

        <v-select v-model="form.size"
                  :error-messages="form.errors.size"
                  label="Size"
                  :items="[
                    'toy',
                    'teacup',
                    'micro',
                    'mini',
                    'medium',
                    'pocket',
                    'standard'
                  ]"
                  item-text="name"
                  item-value="id"/>

        <v-select v-model="form.generation"
                  :error-messages="form.errors.generation"
                  label="Generation"
                  :items="[ 'f1b', 'f1', 'f2b', 'f2bb', 'multigen' ]"
                  item-text="name"
                  item-value="id"/>


        <v-checkbox v-model="form.outside_stud"
                    :error-messages="form.errors.outside_stud"
                    label="Outside Stud"/>

        <v-text-field v-model="form.weight"
                      type="number"
                      :error-messages="form.errors.weight"
                      :label="`Weight (oz)  ${lbs(form.weight)}`"/>

        <v-text-field v-model="form.height"
                      type="number"
                      :error-messages="form.errors.height"
                      label="Height (inches)"/>
      </v-container>

      <progress v-if="form.imageProgress" :value="form.imageProgress" max="100">
        {{ form.imageProgress }}%
      </progress>
    </form>
  </v-container>
</template>

<script>
  import Layout from '@/layouts/Admin/Layout';

  export default {
    props: {
      dog: Object
    },
    data() {
      return {
        imageProgress: 0,
        fromDateMenu: false,
        form: this.$inertia.form(`EditDog${this.dog.id}`, {
          _method: 'put',
          id: this.dog.id,
          name: this.dog.name,
          gender: this.dog.gender,
          birthday: this.dog.birthday,
          breed: this.dog.breed,
          size: this.dog.size,
          generation: this.dog.generation,
          outside_stud: this.dog.outside_stud,
          weight: this.dog.weight,
          height: this.dog.height,
          media: this.dog.media,
          image: null
        })
      };
    },
    methods: {
      selectFile(file) {
        this.imageProgress = 0;
        this.form.image = file;
        // this.form.forceFormData = true;
      },
      lbs(weight) {
        if (typeof weight === 'object' || !weight || isNaN(weight)) {
          return '';
        }

        return `(${(weight / 16).toFixed(1)} lbs)`;
      },
      update() {
        this.form.post(this.route('admin.dogs.update', {
          dog: this.form.id
        }), {
          onSuccess: (result) => {
            console.log('onSuccess', result);
          },
          onError: (result) => {
            console.log('onError', result);
          },
          onFailure: (result) => { console.log(result); },
          onProgress: (event) => {
            this.imageProgress = Math.round(event.loaded / event.total * 100);
          }
        });
      }

    },
    components: {
    },
    layout: Layout,
    remember: 'form'
  };
</script>
