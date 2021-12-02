"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Admin_Dogs_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dogs/DogBreedingDialog.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dogs/DogBreedingDialog.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'DogBreedingDialog',
  props: {
    dog: {}
  },
  data: function data() {
    return {
      showAddBreeding: false
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dogs/DogCard.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dogs/DogCard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_dogs_DogBreedingDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/dogs/DogBreedingDialog */ "./resources/js/components/dogs/DogBreedingDialog.vue");
/* harmony import */ var _components_dogs_DogHeatDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/dogs/DogHeatDialog */ "./resources/js/components/dogs/DogHeatDialog.vue");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helper */ "./resources/js/helper.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'DogCard',
  props: {
    dog: {}
  },
  data: function data() {
    return {
      selectedTab: '',
      showAddBreeding: false,
      showAddHeat: false
    };
  },
  methods: {
    ouncesToLbs: _helper__WEBPACK_IMPORTED_MODULE_2__.ouncesToLbs,
    age: _helper__WEBPACK_IMPORTED_MODULE_2__.age,
    inchesToFeet: _helper__WEBPACK_IMPORTED_MODULE_2__.inchesToFeet,
    getImage: function getImage(dog) {
      return dog.media.length > 0 ? dog.media[0].original_url : '/images/defaults/no-dog.png';
    }
  },
  components: {
    DogBreedingDialog: _components_dogs_DogBreedingDialog__WEBPACK_IMPORTED_MODULE_0__["default"],
    DogHeatDialog: _components_dogs_DogHeatDialog__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dogs/DogHeatDialog.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dogs/DogHeatDialog.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'DogBreedingDialog',
  props: {
    dog: {}
  },
  data: function data() {
    return {
      showAddHeat: false
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Admin/Layout.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Admin/Layout.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layouts_nav_ProfileMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layouts/nav/ProfileMenu */ "./resources/js/layouts/nav/ProfileMenu.vue");
/* harmony import */ var _layouts_nav_MainNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/layouts/nav/MainNav */ "./resources/js/layouts/nav/MainNav.vue");
/* harmony import */ var _layouts_Admin_nav_AdminNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/layouts/Admin/nav/AdminNav */ "./resources/js/layouts/Admin/nav/AdminNav.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      bottomDrawer: null,
      touching: false
    };
  },
  methods: {
    toggleBottomDrawer: function toggleBottomDrawer(drawer) {
      this.bottomDrawer = drawer;
    }
  },
  components: {
    AdminNav: _layouts_Admin_nav_AdminNav__WEBPACK_IMPORTED_MODULE_2__["default"],
    MainNav: _layouts_nav_MainNav__WEBPACK_IMPORTED_MODULE_1__["default"],
    ProfileMenu: _layouts_nav_ProfileMenu__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Admin/nav/AdminNav.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Admin/nav/AdminNav.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AdminNav',
  data: function data() {
    return {
      sidebarDrawer: true,
      toggleMini: false,
      items: [{
        title: 'Dashboard',
        // active: true,
        link: '/admin/dashboard',
        icon: 'mdi-view-dashboard'
      }, {
        title: 'Users',
        link: '/admin/users',
        icon: 'mdi-account'
      }, {
        title: 'Pages',
        link: '/admin/pages',
        icon: 'mdi-file-document-multiple-outline'
      }, {
        title: 'Settings',
        link: '/admin/settings',
        icon: 'mdi-card-bulleted-settings-outline'
      }]
    };
  },
  computed: {
    mini: {
      get: function get() {
        return (this.toggleMini || this.$vuetify.breakpoint.smAndDown) && this.toggleMini;
      },
      set: function set(value) {
        return value;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/Dogs/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/Dogs/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layouts_Admin_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layouts/Admin/Layout */ "./resources/js/layouts/Admin/Layout.vue");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helper */ "./resources/js/helper.js");
/* harmony import */ var _components_dogs_DogCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/dogs/DogCard */ "./resources/js/components/dogs/DogCard.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    dogs: {
      type: Array,
      required: true
    }
  },
  data: function data() {
    return {
      tab: 0,
      search: '',
      showAddDog: false,
      singleExpand: true,
      expanded: []
    };
  },
  computed: {
    filterDogs: function filterDogs() {
      var _this = this;

      if (this.search) {
        return this.dogs.filter(function (dog) {
          var _dog$name;

          return (_dog$name = dog.name) === null || _dog$name === void 0 ? void 0 : _dog$name.toLowerCase().includes(_this.search.toLowerCase());
        });
      }

      return this.dogs;
    }
  },
  methods: {
    ouncesToLbs: _helper__WEBPACK_IMPORTED_MODULE_1__.ouncesToLbs,
    traits: function traits(_traits) {
      // keep everything but the keys dog_id and id
      return Object.keys(_traits).reduce(function (acc, key) {
        if (key !== 'dog_id' && key !== 'id') {
          acc[key] = _traits[key];
        }

        return acc;
      }, {});
    },
    traitsCount: function traitsCount(traits) {
      // if traits is null, empty string, or undefined
      if (!traits) {
        return 0;
      }

      var i = 0; // loop through traits and if trait is not null, empty string, or undefined, increment i

      Object.keys(traits).forEach(function (trait) {
        // if key is id or dog_id, skip
        if (trait === 'id' || trait === 'dog_id') {
          return;
        }

        if (traits[trait]) {
          i++;
        }
      });
      return i;
    }
  },
  components: {
    DogCard: _components_dogs_DogCard__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  layout: _layouts_Admin_Layout__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./resources/js/helper.js":
/*!********************************!*\
  !*** ./resources/js/helper.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toTitleCase": () => (/* binding */ toTitleCase),
/* harmony export */   "toKebabCase": () => (/* binding */ toKebabCase),
/* harmony export */   "score": () => (/* binding */ score),
/* harmony export */   "toPascalCase": () => (/* binding */ toPascalCase),
/* harmony export */   "pascalToTitleCase": () => (/* binding */ pascalToTitleCase),
/* harmony export */   "ouncesToLbs": () => (/* binding */ ouncesToLbs),
/* harmony export */   "inchesToFeet": () => (/* binding */ inchesToFeet),
/* harmony export */   "age": () => (/* binding */ age)
/* harmony export */ });
var toTitleCase = function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
var toKebabCase = function toKebabCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase();
};
var score = function score(a, b) {
  if (this === a) return 1;
  if (a === '') return 0;
  var c = 0;
  var d = a.length;
  var e = this;
  var f = e.length;
  var g;
  var h;
  var i = 1;
  var j;

  for (var k = 0, l, m, n, o, p, q; k < d; ++k) {
    n = a.charAt(k), o = e.indexOf(n.toLowerCase()), p = e.indexOf(n.toUpperCase()), q = Math.min(o, p), m = q > -1 ? q : Math.max(o, p);

    if (m === -1) {
      if (b) {
        i += 1 - b;
        continue;
      }

      return 0;
    }

    l = 0.1, e[m] === n && (l += 0.1), m === 0 ? (l += 0.6, k === 0 && (g = 1)) : e.charAt(m - 1) === ' ' && (l += 0.8), e = e.substring(m + 1, f), c += l;
  }

  h = c / d, j = (h * (d / f) + h) / 2, j /= i, g && j + 0.15 < 1 && (j += 0.15);
  return j;
};
var toPascalCase = function toPascalCase(str) {
  return str.replace(/[-_\s]+/g, ' ').split(' ').map(function (word) {
    return word[0].toUpperCase() + word.slice(1);
  }).join('');
};
var pascalToTitleCase = function pascalToTitleCase(str) {
  return str.replace(/([A-Z])/g, ' $1').replace(/^\s/, '');
}; // convert ounces to lbs

var ouncesToLbs = function ouncesToLbs(ounces) {
  // if no ounces, return 0
  if (!ounces) {
    return null;
  } // remove any text 'ounces' or 'g' or 'oz' and whitespace


  var _ounces = ounces.replace(/[^0-9.]/g, ''); // if ounces is null return null


  if (_ounces === '') {
    return null;
  } // force to 2 decimal places


  _ounces = Math.round(_ounces * 0.0625 * 100) / 100;
  return parseFloat(_ounces).toFixed(2);
};
var inchesToFeet = function inchesToFeet(inches) {
  // if no inches, return 0
  if (!inches) {
    return null;
  } // remove any text 'inches' or 'g' or 'in' and whitespace


  var _inches = inches.replace(/[^0-9.]/g, ''); // if inches is null return null


  if (_inches === '') {
    return null;
  } // force to 2 decimal places


  _inches = Math.round(_inches * 0.0833 * 100) / 100;
  return parseFloat(_inches).toFixed(2);
}; // convert birthdate to age

var age = function age(birthdate) {
  if (!birthdate || birthdate === '') {
    return null;
  } // given the date of birth, calculate the age


  var today = new Date();
  var birthDate = new Date(birthdate); // age is the number of full years

  var age = today.getFullYear() - birthDate.getFullYear(); // age is in years, so if the current month is before the birth month, then we're not full years yet

  var years = today.getMonth() < birthDate.getMonth() ? age - 1 : age; // singular or plural year

  var year = years === 1 ? 'year' : 'years';
  return "".concat(years, " ").concat(year);
};

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dogs/DogCard.vue?vue&type=style&index=0&id=42575cbf&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dogs/DogCard.vue?vue&type=style&index=0&id=42575cbf&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.header[data-v-42575cbf]{\n  padding: 10px;\n}\n.header--female[data-v-42575cbf]{\n  background: hotpink;\n}\n.header--male[data-v-42575cbf]{\n  background: rgba(14, 130, 213);\n}\n.card-male[data-v-42575cbf] {\n  border: 2px solid rgba(14, 130, 213);\n}\n.card-female[data-v-42575cbf] {\n  border: 2px solid hotpink;\n}\n\n/*\n.container{\n  outline: 2px solid green;\n}\n.row{\n  outline: 2px solid red;\n}\n.col{\n  outline: 2px solid blue;\n}*/\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dogs/DogCard.vue?vue&type=style&index=0&id=42575cbf&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dogs/DogCard.vue?vue&type=style&index=0&id=42575cbf&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DogCard_vue_vue_type_style_index_0_id_42575cbf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DogCard.vue?vue&type=style&index=0&id=42575cbf&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dogs/DogCard.vue?vue&type=style&index=0&id=42575cbf&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DogCard_vue_vue_type_style_index_0_id_42575cbf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DogCard_vue_vue_type_style_index_0_id_42575cbf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/dogs/DogBreedingDialog.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/dogs/DogBreedingDialog.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DogBreedingDialog_vue_vue_type_template_id_363f1276___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DogBreedingDialog.vue?vue&type=template&id=363f1276& */ "./resources/js/components/dogs/DogBreedingDialog.vue?vue&type=template&id=363f1276&");
/* harmony import */ var _DogBreedingDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DogBreedingDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/dogs/DogBreedingDialog.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DogBreedingDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DogBreedingDialog_vue_vue_type_template_id_363f1276___WEBPACK_IMPORTED_MODULE_0__.render,
  _DogBreedingDialog_vue_vue_type_template_id_363f1276___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dogs/DogBreedingDialog.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dogs/DogCard.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/dogs/DogCard.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DogCard_vue_vue_type_template_id_42575cbf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DogCard.vue?vue&type=template&id=42575cbf&scoped=true& */ "./resources/js/components/dogs/DogCard.vue?vue&type=template&id=42575cbf&scoped=true&");
/* harmony import */ var _DogCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DogCard.vue?vue&type=script&lang=js& */ "./resources/js/components/dogs/DogCard.vue?vue&type=script&lang=js&");
/* harmony import */ var _DogCard_vue_vue_type_style_index_0_id_42575cbf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DogCard.vue?vue&type=style&index=0&id=42575cbf&scoped=true&lang=css& */ "./resources/js/components/dogs/DogCard.vue?vue&type=style&index=0&id=42575cbf&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DogCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DogCard_vue_vue_type_template_id_42575cbf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _DogCard_vue_vue_type_template_id_42575cbf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "42575cbf",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dogs/DogCard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dogs/DogHeatDialog.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/dogs/DogHeatDialog.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DogHeatDialog_vue_vue_type_template_id_d081d872___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DogHeatDialog.vue?vue&type=template&id=d081d872& */ "./resources/js/components/dogs/DogHeatDialog.vue?vue&type=template&id=d081d872&");
/* harmony import */ var _DogHeatDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DogHeatDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/dogs/DogHeatDialog.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DogHeatDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DogHeatDialog_vue_vue_type_template_id_d081d872___WEBPACK_IMPORTED_MODULE_0__.render,
  _DogHeatDialog_vue_vue_type_template_id_d081d872___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dogs/DogHeatDialog.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/Admin/Layout.vue":
/*!***********************************************!*\
  !*** ./resources/js/layouts/Admin/Layout.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layout_vue_vue_type_template_id_93bfcd24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=93bfcd24& */ "./resources/js/layouts/Admin/Layout.vue?vue&type=template&id=93bfcd24&");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js& */ "./resources/js/layouts/Admin/Layout.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Layout_vue_vue_type_template_id_93bfcd24___WEBPACK_IMPORTED_MODULE_0__.render,
  _Layout_vue_vue_type_template_id_93bfcd24___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/Admin/Layout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/Admin/nav/AdminNav.vue":
/*!*****************************************************!*\
  !*** ./resources/js/layouts/Admin/nav/AdminNav.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminNav_vue_vue_type_template_id_5057c904___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminNav.vue?vue&type=template&id=5057c904& */ "./resources/js/layouts/Admin/nav/AdminNav.vue?vue&type=template&id=5057c904&");
/* harmony import */ var _AdminNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminNav.vue?vue&type=script&lang=js& */ "./resources/js/layouts/Admin/nav/AdminNav.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminNav_vue_vue_type_template_id_5057c904___WEBPACK_IMPORTED_MODULE_0__.render,
  _AdminNav_vue_vue_type_template_id_5057c904___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/Admin/nav/AdminNav.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Admin/Dogs/index.vue":
/*!*************************************************!*\
  !*** ./resources/js/pages/Admin/Dogs/index.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_4bbaea3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4bbaea3a& */ "./resources/js/pages/Admin/Dogs/index.vue?vue&type=template&id=4bbaea3a&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/Admin/Dogs/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_4bbaea3a___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_4bbaea3a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Admin/Dogs/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dogs/DogBreedingDialog.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/dogs/DogBreedingDialog.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DogBreedingDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DogBreedingDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dogs/DogBreedingDialog.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DogBreedingDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dogs/DogCard.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/dogs/DogCard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DogCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DogCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dogs/DogCard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DogCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dogs/DogHeatDialog.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/dogs/DogHeatDialog.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DogHeatDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DogHeatDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dogs/DogHeatDialog.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DogHeatDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/Admin/Layout.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/layouts/Admin/Layout.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Layout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Admin/Layout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/Admin/nav/AdminNav.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/layouts/Admin/nav/AdminNav.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminNav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Admin/nav/AdminNav.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Admin/Dogs/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/Admin/Dogs/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/Dogs/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dogs/DogCard.vue?vue&type=style&index=0&id=42575cbf&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/dogs/DogCard.vue?vue&type=style&index=0&id=42575cbf&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DogCard_vue_vue_type_style_index_0_id_42575cbf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DogCard.vue?vue&type=style&index=0&id=42575cbf&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dogs/DogCard.vue?vue&type=style&index=0&id=42575cbf&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/dogs/DogBreedingDialog.vue?vue&type=template&id=363f1276&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/dogs/DogBreedingDialog.vue?vue&type=template&id=363f1276& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DogBreedingDialog_vue_vue_type_template_id_363f1276___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DogBreedingDialog_vue_vue_type_template_id_363f1276___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DogBreedingDialog_vue_vue_type_template_id_363f1276___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DogBreedingDialog.vue?vue&type=template&id=363f1276& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dogs/DogBreedingDialog.vue?vue&type=template&id=363f1276&");


/***/ }),

/***/ "./resources/js/components/dogs/DogCard.vue?vue&type=template&id=42575cbf&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/dogs/DogCard.vue?vue&type=template&id=42575cbf&scoped=true& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DogCard_vue_vue_type_template_id_42575cbf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DogCard_vue_vue_type_template_id_42575cbf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DogCard_vue_vue_type_template_id_42575cbf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DogCard.vue?vue&type=template&id=42575cbf&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dogs/DogCard.vue?vue&type=template&id=42575cbf&scoped=true&");


/***/ }),

/***/ "./resources/js/components/dogs/DogHeatDialog.vue?vue&type=template&id=d081d872&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/dogs/DogHeatDialog.vue?vue&type=template&id=d081d872& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DogHeatDialog_vue_vue_type_template_id_d081d872___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DogHeatDialog_vue_vue_type_template_id_d081d872___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DogHeatDialog_vue_vue_type_template_id_d081d872___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DogHeatDialog.vue?vue&type=template&id=d081d872& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dogs/DogHeatDialog.vue?vue&type=template&id=d081d872&");


/***/ }),

/***/ "./resources/js/layouts/Admin/Layout.vue?vue&type=template&id=93bfcd24&":
/*!******************************************************************************!*\
  !*** ./resources/js/layouts/Admin/Layout.vue?vue&type=template&id=93bfcd24& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_93bfcd24___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_93bfcd24___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_93bfcd24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Layout.vue?vue&type=template&id=93bfcd24& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Admin/Layout.vue?vue&type=template&id=93bfcd24&");


/***/ }),

/***/ "./resources/js/layouts/Admin/nav/AdminNav.vue?vue&type=template&id=5057c904&":
/*!************************************************************************************!*\
  !*** ./resources/js/layouts/Admin/nav/AdminNav.vue?vue&type=template&id=5057c904& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminNav_vue_vue_type_template_id_5057c904___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminNav_vue_vue_type_template_id_5057c904___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminNav_vue_vue_type_template_id_5057c904___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminNav.vue?vue&type=template&id=5057c904& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Admin/nav/AdminNav.vue?vue&type=template&id=5057c904&");


/***/ }),

/***/ "./resources/js/pages/Admin/Dogs/index.vue?vue&type=template&id=4bbaea3a&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/Admin/Dogs/index.vue?vue&type=template&id=4bbaea3a& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4bbaea3a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4bbaea3a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4bbaea3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=4bbaea3a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/Dogs/index.vue?vue&type=template&id=4bbaea3a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dogs/DogBreedingDialog.vue?vue&type=template&id=363f1276&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dogs/DogBreedingDialog.vue?vue&type=template&id=363f1276& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-dialog",
    {
      attrs: { "max-width": "600px" },
      scopedSlots: _vm._u([
        {
          key: "activator",
          fn: function (ref) {
            var on = ref.on
            var attrs = ref.attrs
            return [
              _c(
                "v-btn",
                _vm._g(
                  _vm._b(
                    { attrs: { elevation: "0", width: "100%" } },
                    "v-btn",
                    attrs,
                    false
                  ),
                  on
                ),
                [
                  _c("v-icon", [_vm._v("mdi-dna")]),
                  _vm._v("\n      Add Breeding\n    "),
                ],
                1
              ),
            ]
          },
        },
      ]),
      model: {
        value: _vm.showAddBreeding,
        callback: function ($$v) {
          _vm.showAddBreeding = $$v
        },
        expression: "showAddBreeding",
      },
    },
    [
      _vm._v(" "),
      _c(
        "v-card",
        [
          _c("v-card-title", [_vm._v("Add Breeding")]),
          _vm._v(" "),
          _c("v-card-text", [_c("pre", [_vm._v(_vm._s(_vm.dog))])]),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dogs/DogCard.vue?vue&type=template&id=42575cbf&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dogs/DogCard.vue?vue&type=template&id=42575cbf&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    {
      staticClass: "mx-auto",
      class: {
        "card-male": _vm.dog.gender === "male",
        "card-female": _vm.dog.gender === "female",
      },
      attrs: { elevation: 0, outlined: "", "max-width": "350", height: "100%" },
    },
    [
      _c(
        "template",
        { slot: "progress" },
        [
          _c("v-progress-linear", {
            attrs: { height: "10", indeterminate: "" },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { attrs: { "no-gutters": "" } },
        [
          _c(
            "v-col",
            [
              _c(
                "v-sheet",
                { staticClass: "header", class: "header--" + _vm.dog.gender },
                [
                  _c(
                    "div",
                    { staticClass: "d-flex justify-space-between" },
                    [
                      _c("v-icon", [_vm._v("mdi-graph-outline")]),
                      _vm._v(" "),
                      _c("div", [
                        _c("small", [
                          _c("b", [_vm._v(_vm._s(_vm.dog.name))]),
                          _vm._v(" "),
                          _c("span", { staticStyle: { display: "block" } }, [
                            _vm._v(
                              _vm._s(_vm.dog.generation) +
                                " " +
                                _vm._s(_vm.dog.size) +
                                " " +
                                _vm._s(_vm.dog.breed)
                            ),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-menu",
                        {
                          attrs: { "offset-y": "" },
                          scopedSlots: _vm._u([
                            {
                              key: "activator",
                              fn: function (ref) {
                                var on = ref.on
                                var attrs = ref.attrs
                                return [
                                  _c(
                                    "v-icon",
                                    _vm._g(
                                      _vm._b(
                                        { attrs: { fab: "" } },
                                        "v-icon",
                                        attrs,
                                        false
                                      ),
                                      on
                                    ),
                                    [
                                      _vm._v(
                                        "\n                mdi-dots-vertical\n              "
                                      ),
                                    ]
                                  ),
                                ]
                              },
                            },
                          ]),
                        },
                        [
                          _vm._v(" "),
                          _c(
                            "v-list",
                            [
                              _c(
                                "v-list-item",
                                [
                                  _c(
                                    "inertia-link",
                                    {
                                      directives: [
                                        { name: "ripple", rawName: "v-ripple" },
                                      ],
                                      attrs: {
                                        href: _vm.route("admin.dogs.edit", {
                                          dog: _vm.dog.id,
                                        }),
                                        as: "v-list-item",
                                      },
                                    },
                                    [
                                      _c("v-icon", [
                                        _vm._v("mdi-circle-edit-outline"),
                                      ]),
                                      _vm._v(
                                        "\n                  Edit\n                "
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm.dog.gender === "female"
                                ? _c(
                                    "v-list-item",
                                    [
                                      _c("DogBreedingDialog", {
                                        attrs: {
                                          dog: _vm.dog,
                                          "show-add-breeding":
                                            _vm.showAddBreeding,
                                        },
                                      }),
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.dog.gender === "female"
                                ? _c(
                                    "v-list-item",
                                    [
                                      _c("DogHeatDialog", {
                                        attrs: {
                                          dog: _vm.dog,
                                          "show-add-heat": _vm.showAddHeat,
                                        },
                                      }),
                                    ],
                                    1
                                  )
                                : _vm._e(),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ]
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { attrs: { "no-gutters": "", "p-0": "", justify: "space-between" } },
        [
          _c(
            "v-col",
            { attrs: { cols: "6" } },
            [
              _c("v-img", {
                attrs: {
                  src: _vm.getImage(_vm.dog),
                  "aspect-ratio": "1.61",
                  contain: "",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "6" } },
            [
              _c("v-card", { attrs: { elevation: "0" } }, [
                _c("div", [
                  _vm.dog.size
                    ? _c("span", [_vm._v(_vm._s(_vm.dog.size))])
                    : _c(
                        "span",
                        [
                          _c("inertia-link", { attrs: { href: "#" } }, [
                            _vm._v("Add Size"),
                          ]),
                        ],
                        1
                      ),
                ]),
                _vm._v(" "),
                _c("div", [
                  _vm.dog.weight
                    ? _c("span", [
                        _vm._v(
                          _vm._s(_vm.ouncesToLbs(_vm.dog.weight)) + " lbs"
                        ),
                      ])
                    : _c(
                        "span",
                        [
                          _c("inertia-link", { attrs: { href: "#" } }, [
                            _vm._v("Add Weight"),
                          ]),
                        ],
                        1
                      ),
                ]),
                _vm._v(" "),
                _c("div", [
                  _vm.dog.height
                    ? _c("span", [
                        _vm._v(
                          _vm._s(_vm.inchesToFeet(_vm.dog.height)) + " ft"
                        ),
                      ])
                    : _c(
                        "span",
                        [
                          _c("inertia-link", { attrs: { href: "#" } }, [
                            _vm._v("Add Height"),
                          ]),
                        ],
                        1
                      ),
                ]),
                _vm._v(" "),
                _c("div", [
                  _vm.dog.birthday
                    ? _c("span", [_vm._v(_vm._s(_vm.age(_vm.dog.birthday)))])
                    : _c(
                        "span",
                        [
                          _c("inertia-link", { attrs: { href: "#" } }, [
                            _vm._v("Add Birthday"),
                          ]),
                        ],
                        1
                      ),
                ]),
              ]),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { attrs: { "no-gutters": "" } },
        [
          _c(
            "v-tabs",
            {
              attrs: { "show-arrows": "" },
              model: {
                value: _vm.selectedTab,
                callback: function ($$v) {
                  _vm.selectedTab = $$v
                },
                expression: "selectedTab",
              },
            },
            [
              _c("v-tab", [_vm._v("Traits")]),
              _vm._v(" "),
              _c(
                "v-tab",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.dog.gender === "female",
                      expression: "dog.gender==='female'",
                    },
                  ],
                },
                [_vm._v("Heats")]
              ),
              _vm._v(" "),
              _c(
                "v-tab",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.dog.gender === "male",
                      expression: "dog.gender==='male'",
                    },
                  ],
                },
                [_vm._v("Studding")]
              ),
              _vm._v(" "),
              _c(
                "v-tab",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.dog.gender === "female",
                      expression: "dog.gender==='female'",
                    },
                  ],
                },
                [_vm._v("Litters")]
              ),
              _vm._v(" "),
              _c("v-tab", [_vm._v("More")]),
              _vm._v(" "),
              _c(
                "v-tab-item",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.dog.gender === "female",
                      expression: "dog.gender==='female'",
                    },
                  ],
                },
                [
                  _c(
                    "v-row",
                    { staticClass: "pa-3", attrs: { "no-gutters": "" } },
                    [
                      _c("v-col", { attrs: { cols: "6" } }, [
                        _c("abbr", { attrs: { title: "E Locus (MC1R)" } }, [
                          _vm._v("E"),
                        ]),
                        _vm._v(": " + _vm._s(_vm.dog.traits.MC1R) + " "),
                        _c("br"),
                        _vm._v(" "),
                        _c("abbr", { attrs: { title: "K Locus (CBD103)" } }, [
                          _vm._v("K"),
                        ]),
                        _vm._v(": " + _vm._s(_vm.dog.traits.CBD103) + " "),
                        _c("br"),
                        _vm._v(" "),
                        _c("abbr", { attrs: { title: "A Locus (ASIP)" } }, [
                          _vm._v("A"),
                        ]),
                        _vm._v(": " + _vm._s(_vm.dog.traits.ASIP) + " "),
                        _c("br"),
                        _vm._v(" "),
                        _c("abbr", { attrs: { title: "D Locus (MLPH)" } }, [
                          _vm._v("D"),
                        ]),
                        _vm._v(": " + _vm._s(_vm.dog.traits.MLPH) + " "),
                        _c("br"),
                        _vm._v(" "),
                        _c("abbr", { attrs: { title: "B Locus (TYRP1)" } }, [
                          _vm._v("B"),
                        ]),
                        _vm._v(": " + _vm._s(_vm.dog.traits.TYRP1) + " "),
                        _c("br"),
                        _vm._v(" "),
                        _c("abbr", { attrs: { title: "S Locus (MITF)" } }, [
                          _vm._v("S"),
                        ]),
                        _vm._v(": " + _vm._s(_vm.dog.traits.MITF) + " "),
                        _c("br"),
                      ]),
                      _vm._v(" "),
                      _c("v-col", { attrs: { cols: "6" } }, [
                        _c(
                          "abbr",
                          { attrs: { title: "Furnishings (RSPO2)" } },
                          [_vm._v("Furnishings")]
                        ),
                        _vm._v(": " + _vm._s(_vm.dog.traits.RSPO2) + " "),
                        _c("br"),
                        _vm._v(" "),
                        _c("abbr", { attrs: { title: "Shedding (MC5R)" } }, [
                          _vm._v("Shedding"),
                        ]),
                        _vm._v(": " + _vm._s(_vm.dog.traits.MC5R) + " "),
                        _c("br"),
                        _vm._v(" "),
                        _c(
                          "abbr",
                          { attrs: { title: "Coat Texture (KRT71)" } },
                          [_vm._v("Coat Curl")]
                        ),
                        _vm._v(": " + _vm._s(_vm.dog.traits.KRT71) + " "),
                        _c("br"),
                        _vm._v(" "),
                        _c("abbr", { attrs: { title: "Coat Length (FGF5)" } }, [
                          _vm._v("Coat Length"),
                        ]),
                        _vm._v(": " + _vm._s(_vm.dog.traits.FGF5) + " "),
                        _c("br"),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-tab-item",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.dog.gender === "female",
                      expression: "dog.gender==='female'",
                    },
                  ],
                },
                [
                  _c(
                    "v-container",
                    { attrs: { fluid: "" } },
                    [
                      _c(
                        "v-row",
                        [
                          _c("v-col", [
                            _vm._v(
                              "\n              " +
                                _vm._s(_vm.dog.heats) +
                                "\n            "
                            ),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-tab-item",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.dog.gender === "male",
                      expression: "dog.gender==='male'",
                    },
                  ],
                },
                [
                  _c("v-container", { attrs: { fluid: "" } }, [
                    _vm._v("\n          Studding\n        "),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-tab-item",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.dog.gender === "female",
                      expression: "dog.gender==='female'",
                    },
                  ],
                },
                [
                  _c("v-container", { attrs: { fluid: "" } }, [
                    _vm._v(
                      "\n          " + _vm._s(_vm.dog.litters) + "\n        "
                    ),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-tab-item",
                [
                  _c("v-container", { attrs: { fluid: "" } }, [
                    _vm._v("\n          More\n        "),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dogs/DogHeatDialog.vue?vue&type=template&id=d081d872&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dogs/DogHeatDialog.vue?vue&type=template&id=d081d872& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-dialog",
    {
      attrs: { "max-width": "600px" },
      scopedSlots: _vm._u([
        {
          key: "activator",
          fn: function (ref) {
            var on = ref.on
            var attrs = ref.attrs
            return [
              _c(
                "v-btn",
                _vm._g(
                  _vm._b(
                    { attrs: { elevation: "0", width: "100%", align: "left" } },
                    "v-btn",
                    attrs,
                    false
                  ),
                  on
                ),
                [
                  _c("v-icon", [_vm._v("mdi-calendar")]),
                  _vm._v("\n      Add Heat\n    "),
                ],
                1
              ),
            ]
          },
        },
      ]),
      model: {
        value: _vm.showAddHeat,
        callback: function ($$v) {
          _vm.showAddHeat = $$v
        },
        expression: "showAddHeat",
      },
    },
    [
      _vm._v(" "),
      _c(
        "v-card",
        [
          _c("v-card-title", [_vm._v("Add Heat")]),
          _vm._v(" "),
          _c("v-card-text", [_c("pre", [_vm._v(_vm._s(_vm.dog))])]),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Admin/Layout.vue?vue&type=template&id=93bfcd24&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Admin/Layout.vue?vue&type=template&id=93bfcd24& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-app",
        [
          _c(
            "v-app-bar",
            { attrs: { "clipped-left": "", app: "" } },
            [
              _c("MainNav"),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("ProfileMenu"),
            ],
            1
          ),
          _vm._v(" "),
          _c("v-main", [_vm._t("default")], 2),
          _vm._v(" "),
          _c(
            "v-bottom-navigation",
            {
              attrs: { app: "" },
              model: {
                value: _vm.bottomDrawer,
                callback: function ($$v) {
                  _vm.bottomDrawer = $$v
                },
                expression: "bottomDrawer",
              },
            },
            [
              _c(
                "inertia-link",
                {
                  directives: [{ name: "ripple", rawName: "v-ripple" }],
                  attrs: { href: "/admin/dogs", as: "v-btn" },
                },
                [
                  _c("span", [_vm._v("Dogs")]),
                  _vm._v(" "),
                  _c("v-icon", [_vm._v("mdi-dog")]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "inertia-link",
                {
                  directives: [{ name: "ripple", rawName: "v-ripple" }],
                  attrs: { href: "/admin/litters", as: "v-btn" },
                },
                [
                  _c("span", [_vm._v("Litters")]),
                  _vm._v(" "),
                  _c("v-icon", [_vm._v("mdi-family-tree")]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "inertia-link",
                {
                  directives: [{ name: "ripple", rawName: "v-ripple" }],
                  attrs: { href: "/admin/todos", as: "v-btn" },
                },
                [
                  _c("span", [_vm._v("Todo")]),
                  _vm._v(" "),
                  _c("v-icon", [_vm._v("mdi-calendar-edit")]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "inertia-link",
                {
                  directives: [{ name: "ripple", rawName: "v-ripple" }],
                  attrs: { href: "/admin/families", as: "v-btn" },
                },
                [
                  _c("span", [_vm._v("Families")]),
                  _vm._v(" "),
                  _c("v-icon", [_vm._v("mdi-account-group")]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "inertia-link",
                {
                  directives: [{ name: "ripple", rawName: "v-ripple" }],
                  attrs: { href: "/admin/settings", as: "v-btn" },
                },
                [
                  _c("span", [_vm._v("Settings")]),
                  _vm._v(" "),
                  _c("v-icon", [_vm._v("mdi-cog")]),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("portal-target", { attrs: { name: "modals", multiple: "" } }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Admin/nav/AdminNav.vue?vue&type=template&id=5057c904&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Admin/nav/AdminNav.vue?vue&type=template&id=5057c904& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-navigation-drawer",
    {
      attrs: {
        "mini-variant": _vm.mini,
        app: "",
        dark: "",
        permanent: "",
        stateless: "",
        clipped: "",
      },
      on: {
        "update:miniVariant": function ($event) {
          _vm.mini = $event
        },
        "update:mini-variant": function ($event) {
          _vm.mini = $event
        },
      },
      model: {
        value: _vm.sidebarDrawer,
        callback: function ($$v) {
          _vm.sidebarDrawer = $$v
        },
        expression: "sidebarDrawer",
      },
    },
    [
      _c(
        "v-list",
        { attrs: { dense: "", flat: "", outlined: "" } },
        [
          _c(
            "v-list-item",
            {
              staticClass: "pointer",
              on: {
                click: function ($event) {
                  _vm.toggleMini = !_vm.toggleMini
                },
              },
            },
            [
              !_vm.mini
                ? _c("v-icon", [_vm._v("mdi-menu-open")])
                : _c("v-icon", [_vm._v("mdi-menu-open mdi-rotate-180")]),
            ],
            1
          ),
          _vm._v(" "),
          _vm._l(_vm.items, function (item) {
            return _c(
              "div",
              { key: item.title, staticClass: "pointer" },
              [
                item.items
                  ? _c("v-list-group", {
                      attrs: { "prepend-icon": item.icon },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "activator",
                            fn: function () {
                              return [
                                _c(
                                  "v-list-item-content",
                                  [
                                    _c(
                                      "v-list-item-title",
                                      [
                                        _c(
                                          "inertia-link",
                                          {
                                            attrs: {
                                              href: item.link || "",
                                              as: "span",
                                            },
                                          },
                                          [_vm._v(_vm._s(item.title))]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ]
                            },
                            proxy: true,
                          },
                          {
                            key: "default",
                            fn: function () {
                              return _vm._l(item.items, function (child) {
                                return _c(
                                  "v-list-item",
                                  {
                                    key: child.title,
                                    staticClass: "grey darken-1 ",
                                  },
                                  [
                                    child.link
                                      ? _c(
                                          "inertia-link",
                                          {
                                            attrs: {
                                              as: "div",
                                              href: child.link,
                                            },
                                          },
                                          [
                                            _c("span", [
                                              _vm._v(_vm._s(child.title)),
                                            ]),
                                          ]
                                        )
                                      : _c(
                                          "v-list-item-content",
                                          [
                                            _c("v-list-item-title", {
                                              domProps: {
                                                textContent: _vm._s(
                                                  child.title
                                                ),
                                              },
                                            }),
                                          ],
                                          1
                                        ),
                                  ],
                                  1
                                )
                              })
                            },
                            proxy: true,
                          },
                        ],
                        null,
                        true
                      ),
                      model: {
                        value: item.active,
                        callback: function ($$v) {
                          _vm.$set(item, "active", $$v)
                        },
                        expression: "item.active",
                      },
                    })
                  : _c(
                      "inertia-link",
                      {
                        staticClass: "pointer",
                        attrs: { href: item.link || "", as: "span" },
                      },
                      [
                        _c(
                          "v-list-item",
                          [
                            _c(
                              "v-list-item-icon",
                              [
                                _c("v-icon", {
                                  domProps: { textContent: _vm._s(item.icon) },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-list-item-content",
                              [
                                _c("v-list-item-title", [
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(item.title) +
                                      "\n            "
                                  ),
                                ]),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
              ],
              1
            )
          }),
        ],
        2
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/Dogs/index.vue?vue&type=template&id=4bbaea3a&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/Dogs/index.vue?vue&type=template&id=4bbaea3a& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { attrs: { "px-5": "", fluid: "" } },
    [
      _c(
        "v-tabs",
        {
          attrs: { sl: "" },
          model: {
            value: _vm.tab,
            callback: function ($$v) {
              _vm.tab = $$v
            },
            expression: "tab",
          },
        },
        [
          _c("v-tabs-slider", { attrs: { color: "primary" } }),
          _vm._v(" "),
          _c(
            "v-tab",
            [
              _c("v-icon", [_vm._v("mdi-view-dashboard")]),
              _vm._v("\n      cards\n    "),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-tab",
            [
              _c("v-icon", [_vm._v("mdi-view-list")]),
              _vm._v("\n      table\n    "),
            ],
            1
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-menu",
            {
              attrs: { "offset-y": "" },
              scopedSlots: _vm._u([
                {
                  key: "activator",
                  fn: function (ref) {
                    var on = ref.on
                    var attrs = ref.attrs
                    return [
                      _c(
                        "v-icon",
                        _vm._g(
                          _vm._b(
                            { attrs: { icon: "" } },
                            "v-icon",
                            attrs,
                            false
                          ),
                          on
                        ),
                        [_vm._v("\n          mdi-dots-vertical\n        ")]
                      ),
                    ]
                  },
                },
              ]),
            },
            [
              _vm._v(" "),
              _c(
                "v-list",
                { attrs: { "min-width": "250", "max-width": "300" } },
                [
                  _c(
                    "v-list-item",
                    { attrs: { ripple: "" } },
                    [
                      _c(
                        "v-list-item-title",
                        [
                          _c(
                            "inertia-link",
                            {
                              directives: [
                                { name: "ripple", rawName: "v-ripple" },
                              ],
                              attrs: {
                                href: "/admin/dogs/create",
                                as: "v-list-item",
                              },
                            },
                            [
                              _c("v-icon", [_vm._v("mdi-plus")]),
                              _vm._v(
                                "\n              Add New Dog\n            "
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { attrs: { justify: "space-around", "no-gutters": "" } },
        [
          _c("v-col", [_c("h1", [_vm._v("My Dogs")])]),
          _vm._v(" "),
          _c(
            "v-col",
            [
              _c("v-text-field", {
                attrs: {
                  "append-icon": "mdi-magnify",
                  label: "Search",
                  clearable: "",
                  "single-line": "",
                  "hide-details": "",
                },
                model: {
                  value: _vm.search,
                  callback: function ($$v) {
                    _vm.search = $$v
                  },
                  expression: "search",
                },
              }),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _vm.search
        ? _c(
            "v-row",
            { attrs: { "no-gutters": "" } },
            [
              _c(
                "v-col",
                [
                  _c(
                    "v-alert",
                    { staticClass: "mt-2 pa-0", attrs: { dense: "" } },
                    [
                      _c("span", [
                        _vm._v(
                          "\n          Showing " +
                            _vm._s(_vm.filterDogs.length) +
                            " of " +
                            _vm._s(_vm.dogs.length) +
                            " results\n        "
                        ),
                      ]),
                    ]
                  ),
                ],
                1
              ),
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-tabs-items",
        {
          model: {
            value: _vm.tab,
            callback: function ($$v) {
              _vm.tab = $$v
            },
            expression: "tab",
          },
        },
        [
          _c(
            "v-tab-item",
            [
              _c(
                "v-container",
                { attrs: { "pa-0": "", fluid: "" } },
                [
                  _c(
                    "v-row",
                    _vm._l(_vm.filterDogs, function (dog, index) {
                      return _c(
                        "v-col",
                        {
                          key: index,
                          attrs: {
                            cols: "12",
                            sm: "6",
                            md: "4",
                            lg: "3",
                            xl: "2",
                          },
                        },
                        [_c("DogCard", { attrs: { dog: dog } })],
                        1
                      )
                    }),
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-tab-item",
            [
              _c("v-data-table", {
                staticClass: "elevation-1",
                attrs: {
                  search: _vm.search,
                  "multi-sort": "",
                  "single-expand": _vm.singleExpand,
                  "show-expand": "",
                  expanded: _vm.expanded,
                  headers: [
                    { text: "id", value: "id" },
                    { text: "Name", value: "name" },
                    { text: "Gender", value: "gender" },
                    { text: "Outside stud", value: "outside_stud" },
                    { text: "Breed", value: "breed" },
                    { text: "Generation", value: "generation" },
                    { text: "Size", value: "size" },
                    { text: "Age (months)", value: "age.months" },
                    { text: "Weight (lbs)", value: "weight" },
                    {
                      text: "Next Est Xray",
                      value: "calculations.xray_est_at",
                    },
                    { text: "Traits", value: "traits" },
                    { text: "Actions", value: "actions" },
                  ],
                  items: _vm.dogs,
                },
                on: {
                  "update:expanded": function ($event) {
                    _vm.expanded = $event
                  },
                },
                scopedSlots: _vm._u([
                  {
                    key: "item.gender",
                    fn: function (ref) {
                      var item = ref.item
                      return [
                        item.gender === "female"
                          ? _c("span", { staticStyle: { color: "deeppink" } }, [
                              _vm._v(
                                "\n            " +
                                  _vm._s(item.gender) +
                                  "\n          "
                              ),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        item.gender === "male"
                          ? _c("span", { staticStyle: { color: "blue" } }, [
                              _vm._v(
                                "\n            " +
                                  _vm._s(item.gender) +
                                  "\n          "
                              ),
                            ])
                          : _vm._e(),
                      ]
                    },
                  },
                  {
                    key: "item.weight",
                    fn: function (ref) {
                      var item = ref.item
                      return [
                        _c("span", [
                          _vm._v(
                            "\n            " +
                              _vm._s(_vm.ouncesToLbs(item.weight)) +
                              "\n          "
                          ),
                        ]),
                      ]
                    },
                  },
                  {
                    key: "item.traits",
                    fn: function (ref) {
                      var item = ref.item
                      return [
                        _c("span", [
                          _vm._v(
                            "\n            " +
                              _vm._s(_vm.traitsCount(item.traits)) +
                              "\n          "
                          ),
                        ]),
                      ]
                    },
                  },
                  {
                    key: "item.actions",
                    fn: function (ref) {
                      var item = ref.item
                      return [
                        _c(
                          "div",
                          { staticClass: "d-flex col" },
                          [
                            _c(
                              "inertia-link",
                              {
                                attrs: {
                                  href: _vm.route("admin.dogs.edit", {
                                    dog: item.id,
                                  }),
                                  as: "v-list-item",
                                },
                              },
                              [
                                _c("v-icon", [
                                  _vm._v("mdi-circle-edit-outline"),
                                ]),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "inertia-link",
                              {
                                attrs: {
                                  href: _vm.route("admin.dogs.destroy", {
                                    dog: item.id,
                                  }),
                                  as: "v-list-item",
                                },
                              },
                              [_c("v-icon", [_vm._v("mdi-delete")])],
                              1
                            ),
                          ],
                          1
                        ),
                      ]
                    },
                  },
                  {
                    key: "expanded-item",
                    fn: function (ref) {
                      var headers = ref.headers
                      var item = ref.item
                      return [
                        _c(
                          "td",
                          {
                            staticClass: "pa-0 rounded-0",
                            attrs: { colspan: headers.length },
                          },
                          [
                            _c(
                              "v-expansion-panels",
                              [
                                _c(
                                  "v-expansion-panel",
                                  [
                                    _c("v-expansion-panel-header", [
                                      _vm._v(
                                        "\n                  Traits\n                "
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("v-expansion-panel-content", [
                                      _c("pre", [_vm._v(_vm._s(item.traits))]),
                                    ]),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-expansion-panel",
                                  [
                                    _c("v-expansion-panel-header", [
                                      _vm._v(
                                        "\n                  Heats\n                "
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("v-expansion-panel-content", [
                                      _c("pre", [_vm._v(_vm._s(item.heats))]),
                                    ]),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ]
                    },
                  },
                ]),
              }),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);