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
            <div class="d-flex flex-column">
              <v-select v-model="form.gender"
                        :error-messages="form.errors.gender"
                        label="Gender"
                        hide-details
                        :items="['male', 'female']"
                        item-text="name"
                        item-value="id"/>
              <v-checkbox v-if="form.gender === 'male'" v-model="form.outside_stud"
                          hide-details
                          :error-messages="form.errors.outside_stud"
                          label="Outside Stud"/>

              <v-checkbox v-if="form.gender === 'male'" v-model="form.can_stud"
                          hide-details
                          :error-messages="form.errors.can_stud"
                          label="Can Stud"/>
            </div>
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
                  :label="`Birthday (age ${age(form.birthday)})`"
                  prepend-icon="mdi-calendar"
                  readonly
                  :value="form.birthday"
                  v-on="on"/>
              </template>
              <v-date-picker
                v-model="form.birthday"
                locale="en-in"
                show-adjacent-months
                scrollable
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

        <!--        <v-text-field v-model="form.weight"-->
        <!--                      type="number"-->
        <!--                      :error-messages="form.errors.weight"-->
        <!--                      :label="`Weight (${form.weight} oz)  (${ouncesToLbs(form.weight)} lbs) `"/>-->

        <!--        <v-text-field v-model="form.height"-->
        <!--                      type="number"-->
        <!--                      :error-messages="form.errors.height"-->
        <!--                      :label="`Height (inches) ${inchesToFeet(form.height)}  (feet)`"/>-->
      </v-container>

      <progress v-if="form.imageProgress" :value="form.imageProgress" max="100">
        {{ form.imageProgress }}%
      </progress>
    </form>


    <v-row>
      <v-col cols="12" sm="6" md="4">
        <DogWeightChart
          :value="dog.measurements"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Layout from '@/layouts/Admin/Layout';
  import {age, inchesToFeet, ouncesToLbs} from '@/helper';
  import DogWeightChart from '@/components/dogs/DogWeightChart';

  export default {
    props: {
      dog: Object
    },
    data() {
      console.log(this.dog);

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
          can_stud: this.dog.can_stud,
          // weight: this.dog.weight,
          // height: this.dog.height,
          media: this.dog.media,
          image: null
        })
      };
    },
    methods: {
      age,
      ouncesToLbs,
      inchesToFeet,
      selectFile(file) {
        this.imageProgress = 0;
        this.form.image = file;
        // this.form.forceFormData = true;
      },
      update() {
        this.form.post(this.route('admin.dogs.update', {
          dog: this.form.id
        }), {
          onSuccess: (result) => {
            // console.log('onSuccess', result);
          },
          onError: (result) => {
            // console.log('onError', result);
          },
          onFailure: (result) => {
            // console.log(result);
          },
          onProgress: (event) => {
            this.imageProgress = Math.round(event.loaded / event.total * 100);
          }
        });
      }

    },
    components: {DogWeightChart},
    layout: Layout,
    remember: 'form'
  };
</script>
