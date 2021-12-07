<template>
  <v-container fluid class="px-2">
    <inertia-link href="/admin/dogs" as="span">
      <v-icon>mdi-arrow-left</v-icon>
    </inertia-link>

    <h1 style="display: inline">Add Dog</h1>
    <progress v-if="form.imageProgress" :value="form.imageProgress" max="100">
      {{ form.imageProgress }}%
    </progress>

    <form @submit.prevent="store">
      <div v-if="form.isDirty">
        <!--      submit-->
        <v-btn type="submit"
               color="primary"
               :loading="form.loading">
          Save
        </v-btn>
      </div>

      <v-container fluid>
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
          <v-col cols="12" md="4">
            <v-menu
              v-model="fromDateMenu"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px">
              <template #activator="{ on}">
                <v-text-field
                  label="Birthdate"
                  prepend-icon="mdi-calendar"
                  readonly
                  :value="form.birthday"
                  v-on="on">
                  <template #message>
                    <span v-if="age(form.birthdate)"> age: {{ age(form.birthdate) }}</span>
                  </template>

                  <template #prepend="{ on }">
                    <v-btn icon v-on="on">
                      <v-icon>mdi-calendar</v-icon>
                    </v-btn>
                  </template>
                </v-text-field>
              </template>
              <v-date-picker
                v-model="form.birthday"
                scrollable
                no-title
                @input="fromDateMenu = false"/>
            </v-menu>
          </v-col>
        </v-row>

        <v-row>
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
        <!--                      :error-messages="form.errors.weight"to-lower-case-->
        <!--                      label="Weight (oz)"/>-->

        <!--        <v-text-field v-model="form.height"-->
        <!--                      type="number"-->
        <!--                      :error-messages="form.errors.height"-->
        <!--                      label="Height (inches)"/>-->
      </v-container>
    </form>
  </v-container>
</template>

<script>
  import Layout from '@/layouts/Admin/Layout';
  import {inchesToFeet, ouncesToLbs, age} from '@/helper';

  export default {
    data() {
      return {

        fromDateMenu: false,
        imageProgress: 0,
        form: this.$inertia.form({
          name: '',
          gender: '',
          birthday: '',
          breed: '',
          size: '',
          generation: '',
          outside_stud: '',
          can_stud: '',
          // weight: '',
          // height: '',
          image: ''
        })
      };
    },
    computed: {
      fromDateDisp: {
        get() {
          return this.form.birthday ? this.form.birthday.format('MMMM Do, YYYY') : '';
        },
        set(value) {
          this.form.birthday = value;
        }
      }
    },
    methods: {
      age,
      selectFile(file) {
        this.imageProgress = 0;
        this.form.image = file;
      },
      store() {
        this.form
          .post(this.route('admin.dogs.store'), {
            onSuccess: () => {
              this.form.reset();
              this.form.image = null;
            },
            onFailure: () => { console.log('fail'); },
            onProgress: (event) => {
              this.imageProgress = Math.round(event.loaded / event.total * 100);
              console.log(this.imageProgress);
            }
          });
      }
    },
    layout: Layout,
    remember: 'form'
  };
</script>
