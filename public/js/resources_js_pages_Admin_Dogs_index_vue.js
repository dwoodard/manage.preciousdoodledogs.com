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
/* harmony import */ var _components_dogs_DogTraitsDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/dogs/DogTraitsDialog */ "./resources/js/components/dogs/DogTraitsDialog.vue");
/* harmony import */ var _components_dogs_DogBreedingDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/dogs/DogBreedingDialog */ "./resources/js/components/dogs/DogBreedingDialog.vue");
/* harmony import */ var _components_dogs_DogHeatDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/dogs/DogHeatDialog */ "./resources/js/components/dogs/DogHeatDialog.vue");
/* harmony import */ var _components_dogs_DogLittersDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/dogs/DogLittersDialog */ "./resources/js/components/dogs/DogLittersDialog.vue");
/* harmony import */ var _components_dogs_DogFamilyDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/dogs/DogFamilyDialog */ "./resources/js/components/dogs/DogFamilyDialog.vue");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/helper */ "./resources/js/helper.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ouncesToLbs: _helper__WEBPACK_IMPORTED_MODULE_5__.ouncesToLbs,
    age: _helper__WEBPACK_IMPORTED_MODULE_5__.age,
    inchesToFeet: _helper__WEBPACK_IMPORTED_MODULE_5__.inchesToFeet,
    getImage: function getImage(dog) {
      return dog.media.length > 0 ? dog.media[0].original_url : '/images/defaults/no-dog.png';
    }
  },
  components: {
    DogBreedingDialog: _components_dogs_DogBreedingDialog__WEBPACK_IMPORTED_MODULE_1__["default"],
    DogHeatDialog: _components_dogs_DogHeatDialog__WEBPACK_IMPORTED_MODULE_2__["default"],
    DogLittersDialog: _components_dogs_DogLittersDialog__WEBPACK_IMPORTED_MODULE_3__["default"],
    DogTraitsDialog: _components_dogs_DogTraitsDialog__WEBPACK_IMPORTED_MODULE_0__["default"],
    DogFamilyDialog: _components_dogs_DogFamilyDialog__WEBPACK_IMPORTED_MODULE_4__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dogs/DogFamilyDialog.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dogs/DogFamilyDialog.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dogs/DogLittersDialog.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dogs/DogLittersDialog.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dogs/DogTraitsDialog.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dogs/DogTraitsDialog.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    dog: {}
  },
  data: function data() {
    return {
      showDialog: false,
      form: this.$inertia.form("EditDogTraits:".concat(this.dog.id), _objectSpread({}, this.dog.traits))
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.form.transform(function (data) {
        return _objectSpread(_objectSpread({}, data), {}, {
          dog_id: _this.dog.id
        });
      }).put(this.route('admin.traits.update', this.dog.id));
      this.showDialog = false;
    }
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
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fuse.js */ "./node_modules/fuse.js/dist/fuse.esm.js");
/* harmony import */ var _layouts_Admin_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/layouts/Admin/Layout */ "./resources/js/layouts/Admin/Layout.vue");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helper */ "./resources/js/helper.js");
/* harmony import */ var _components_dogs_DogCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/dogs/DogCard */ "./resources/js/components/dogs/DogCard.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    autocompleteItems: function autocompleteItems() {
      return this.dogs.map(function (item) {
        return "".concat(item.name);
      });
    },
    filterDogs: function filterDogs() {
      if (typeof this.search === 'string' && this.search.length) {
        // fuse options
        var options = {
          shouldSort: true,
          threshold: 0.4,
          location: 0,
          distance: 25,
          maxPatternLength: 32,
          minMatchCharLength: 1,
          useExtendedSearch: true,
          keys: ['id', 'name', 'gender', 'breed', 'size', 'generation', 'birthday', 'age.readable', 'traits.MC1R', 'traits.MC1R', 'traits.CBD103', 'traits.ASIP', 'traits.MLPH', 'traits.TYRP1', 'traits.MITF', 'traits.RSPO2', 'traits.MC5R', 'traits.KRT71', 'traits.FGF5']
        }; // fuse instance

        var fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.dogs, options);
        var results = fuse.search(this.search);
        return results.map(function (item) {
          return item.item;
        });
      }

      return this.dogs;
    }
  },
  methods: {
    ouncesToLbs: _helper__WEBPACK_IMPORTED_MODULE_2__.ouncesToLbs,
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
    DogCard: _components_dogs_DogCard__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  layout: _layouts_Admin_Layout__WEBPACK_IMPORTED_MODULE_1__["default"]
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

/***/ "./node_modules/fuse.js/dist/fuse.esm.js":
/*!***********************************************!*\
  !*** ./node_modules/fuse.js/dist/fuse.esm.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Fuse.js v6.4.6 - Lightweight fuzzy-search (http://fusejs.io)
 *
 * Copyright (c) 2021 Kiro Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

function isArray(value) {
  return !Array.isArray
    ? getTag(value) === '[object Array]'
    : Array.isArray(value)
}

// Adapted from: https://github.com/lodash/lodash/blob/master/.internal/baseToString.js
const INFINITY = 1 / 0;
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value
  }
  let result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result
}

function toString(value) {
  return value == null ? '' : baseToString(value)
}

function isString(value) {
  return typeof value === 'string'
}

function isNumber(value) {
  return typeof value === 'number'
}

// Adapted from: https://github.com/lodash/lodash/blob/master/isBoolean.js
function isBoolean(value) {
  return (
    value === true ||
    value === false ||
    (isObjectLike(value) && getTag(value) == '[object Boolean]')
  )
}

function isObject(value) {
  return typeof value === 'object'
}

// Checks if `value` is object-like.
function isObjectLike(value) {
  return isObject(value) && value !== null
}

function isDefined(value) {
  return value !== undefined && value !== null
}

function isBlank(value) {
  return !value.trim().length
}

// Gets the `toStringTag` of `value`.
// Adapted from: https://github.com/lodash/lodash/blob/master/.internal/getTag.js
function getTag(value) {
  return value == null
    ? value === undefined
      ? '[object Undefined]'
      : '[object Null]'
    : Object.prototype.toString.call(value)
}

const EXTENDED_SEARCH_UNAVAILABLE = 'Extended search is not available';

const INCORRECT_INDEX_TYPE = "Incorrect 'index' type";

const LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key) =>
  `Invalid value for key ${key}`;

const PATTERN_LENGTH_TOO_LARGE = (max) =>
  `Pattern length exceeds max of ${max}.`;

const MISSING_KEY_PROPERTY = (name) => `Missing ${name} property in key`;

const INVALID_KEY_WEIGHT_VALUE = (key) =>
  `Property 'weight' in key '${key}' must be a positive integer`;

const hasOwn = Object.prototype.hasOwnProperty;

class KeyStore {
  constructor(keys) {
    this._keys = [];
    this._keyMap = {};

    let totalWeight = 0;

    keys.forEach((key) => {
      let obj = createKey(key);

      totalWeight += obj.weight;

      this._keys.push(obj);
      this._keyMap[obj.id] = obj;

      totalWeight += obj.weight;
    });

    // Normalize weights so that their sum is equal to 1
    this._keys.forEach((key) => {
      key.weight /= totalWeight;
    });
  }
  get(keyId) {
    return this._keyMap[keyId]
  }
  keys() {
    return this._keys
  }
  toJSON() {
    return JSON.stringify(this._keys)
  }
}

function createKey(key) {
  let path = null;
  let id = null;
  let src = null;
  let weight = 1;

  if (isString(key) || isArray(key)) {
    src = key;
    path = createKeyPath(key);
    id = createKeyId(key);
  } else {
    if (!hasOwn.call(key, 'name')) {
      throw new Error(MISSING_KEY_PROPERTY('name'))
    }

    const name = key.name;
    src = name;

    if (hasOwn.call(key, 'weight')) {
      weight = key.weight;

      if (weight <= 0) {
        throw new Error(INVALID_KEY_WEIGHT_VALUE(name))
      }
    }

    path = createKeyPath(name);
    id = createKeyId(name);
  }

  return { path, id, weight, src }
}

function createKeyPath(key) {
  return isArray(key) ? key : key.split('.')
}

function createKeyId(key) {
  return isArray(key) ? key.join('.') : key
}

function get(obj, path) {
  let list = [];
  let arr = false;

  const deepGet = (obj, path, index) => {
    if (!isDefined(obj)) {
      return
    }
    if (!path[index]) {
      // If there's no path left, we've arrived at the object we care about.
      list.push(obj);
    } else {
      let key = path[index];

      const value = obj[key];

      if (!isDefined(value)) {
        return
      }

      // If we're at the last value in the path, and if it's a string/number/bool,
      // add it to the list
      if (
        index === path.length - 1 &&
        (isString(value) || isNumber(value) || isBoolean(value))
      ) {
        list.push(toString(value));
      } else if (isArray(value)) {
        arr = true;
        // Search each item in the array.
        for (let i = 0, len = value.length; i < len; i += 1) {
          deepGet(value[i], path, index + 1);
        }
      } else if (path.length) {
        // An object. Recurse further.
        deepGet(value, path, index + 1);
      }
    }
  };

  // Backwards compatibility (since path used to be a string)
  deepGet(obj, isString(path) ? path.split('.') : path, 0);

  return arr ? list : list[0]
}

const MatchOptions = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: false,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: false,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
};

const BasicOptions = {
  // When `true`, the algorithm continues searching to the end of the input even if a perfect
  // match is found before the end of the same input.
  isCaseSensitive: false,
  // When true, the matching function will continue to the end of a search pattern even if
  includeScore: false,
  // List of properties that will be searched. This also supports nested properties.
  keys: [],
  // Whether to sort the result list, by score
  shouldSort: true,
  // Default sort function: sort by ascending score, ascending index
  sortFn: (a, b) =>
    a.score === b.score ? (a.idx < b.idx ? -1 : 1) : a.score < b.score ? -1 : 1
};

const FuzzyOptions = {
  // Approximately where in the text is the pattern expected to be found?
  location: 0,
  // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
  // (of both letters and location), a threshold of '1.0' would match anything.
  threshold: 0.6,
  // Determines how close the match must be to the fuzzy location (specified above).
  // An exact letter match which is 'distance' characters away from the fuzzy location
  // would score as a complete mismatch. A distance of '0' requires the match be at
  // the exact location specified, a threshold of '1000' would require a perfect match
  // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
  distance: 100
};

const AdvancedOptions = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: false,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: get,
  // When `true`, search will ignore `location` and `distance`, so it won't matter
  // where in the string the pattern appears.
  // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
  ignoreLocation: false,
  // When `true`, the calculation for the relevance score (used for sorting) will
  // ignore the field-length norm.
  // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
  ignoreFieldNorm: false
};

var Config = {
  ...BasicOptions,
  ...MatchOptions,
  ...FuzzyOptions,
  ...AdvancedOptions
};

const SPACE = /[^ ]+/g;

// Field-length norm: the shorter the field, the higher the weight.
// Set to 3 decimals to reduce index size.
function norm(mantissa = 3) {
  const cache = new Map();
  const m = Math.pow(10, mantissa);

  return {
    get(value) {
      const numTokens = value.match(SPACE).length;

      if (cache.has(numTokens)) {
        return cache.get(numTokens)
      }

      const norm = 1 / Math.sqrt(numTokens);

      // In place of `toFixed(mantissa)`, for faster computation
      const n = parseFloat(Math.round(norm * m) / m);

      cache.set(numTokens, n);

      return n
    },
    clear() {
      cache.clear();
    }
  }
}

class FuseIndex {
  constructor({ getFn = Config.getFn } = {}) {
    this.norm = norm(3);
    this.getFn = getFn;
    this.isCreated = false;

    this.setIndexRecords();
  }
  setSources(docs = []) {
    this.docs = docs;
  }
  setIndexRecords(records = []) {
    this.records = records;
  }
  setKeys(keys = []) {
    this.keys = keys;
    this._keysMap = {};
    keys.forEach((key, idx) => {
      this._keysMap[key.id] = idx;
    });
  }
  create() {
    if (this.isCreated || !this.docs.length) {
      return
    }

    this.isCreated = true;

    // List is Array<String>
    if (isString(this.docs[0])) {
      this.docs.forEach((doc, docIndex) => {
        this._addString(doc, docIndex);
      });
    } else {
      // List is Array<Object>
      this.docs.forEach((doc, docIndex) => {
        this._addObject(doc, docIndex);
      });
    }

    this.norm.clear();
  }
  // Adds a doc to the end of the index
  add(doc) {
    const idx = this.size();

    if (isString(doc)) {
      this._addString(doc, idx);
    } else {
      this._addObject(doc, idx);
    }
  }
  // Removes the doc at the specified index of the index
  removeAt(idx) {
    this.records.splice(idx, 1);

    // Change ref index of every subsquent doc
    for (let i = idx, len = this.size(); i < len; i += 1) {
      this.records[i].i -= 1;
    }
  }
  getValueForItemAtKeyId(item, keyId) {
    return item[this._keysMap[keyId]]
  }
  size() {
    return this.records.length
  }
  _addString(doc, docIndex) {
    if (!isDefined(doc) || isBlank(doc)) {
      return
    }

    let record = {
      v: doc,
      i: docIndex,
      n: this.norm.get(doc)
    };

    this.records.push(record);
  }
  _addObject(doc, docIndex) {
    let record = { i: docIndex, $: {} };

    // Iterate over every key (i.e, path), and fetch the value at that key
    this.keys.forEach((key, keyIndex) => {
      // console.log(key)
      let value = this.getFn(doc, key.path);

      if (!isDefined(value)) {
        return
      }

      if (isArray(value)) {
        let subRecords = [];
        const stack = [{ nestedArrIndex: -1, value }];

        while (stack.length) {
          const { nestedArrIndex, value } = stack.pop();

          if (!isDefined(value)) {
            continue
          }

          if (isString(value) && !isBlank(value)) {
            let subRecord = {
              v: value,
              i: nestedArrIndex,
              n: this.norm.get(value)
            };

            subRecords.push(subRecord);
          } else if (isArray(value)) {
            value.forEach((item, k) => {
              stack.push({
                nestedArrIndex: k,
                value: item
              });
            });
          }
        }
        record.$[keyIndex] = subRecords;
      } else if (!isBlank(value)) {
        let subRecord = {
          v: value,
          n: this.norm.get(value)
        };

        record.$[keyIndex] = subRecord;
      }
    });

    this.records.push(record);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    }
  }
}

function createIndex(keys, docs, { getFn = Config.getFn } = {}) {
  const myIndex = new FuseIndex({ getFn });
  myIndex.setKeys(keys.map(createKey));
  myIndex.setSources(docs);
  myIndex.create();
  return myIndex
}

function parseIndex(data, { getFn = Config.getFn } = {}) {
  const { keys, records } = data;
  const myIndex = new FuseIndex({ getFn });
  myIndex.setKeys(keys);
  myIndex.setIndexRecords(records);
  return myIndex
}

function computeScore(
  pattern,
  {
    errors = 0,
    currentLocation = 0,
    expectedLocation = 0,
    distance = Config.distance,
    ignoreLocation = Config.ignoreLocation
  } = {}
) {
  const accuracy = errors / pattern.length;

  if (ignoreLocation) {
    return accuracy
  }

  const proximity = Math.abs(expectedLocation - currentLocation);

  if (!distance) {
    // Dodge divide by zero error.
    return proximity ? 1.0 : accuracy
  }

  return accuracy + proximity / distance
}

function convertMaskToIndices(
  matchmask = [],
  minMatchCharLength = Config.minMatchCharLength
) {
  let indices = [];
  let start = -1;
  let end = -1;
  let i = 0;

  for (let len = matchmask.length; i < len; i += 1) {
    let match = matchmask[i];
    if (match && start === -1) {
      start = i;
    } else if (!match && start !== -1) {
      end = i - 1;
      if (end - start + 1 >= minMatchCharLength) {
        indices.push([start, end]);
      }
      start = -1;
    }
  }

  // (i-1 - start) + 1 => i - start
  if (matchmask[i - 1] && i - start >= minMatchCharLength) {
    indices.push([start, i - 1]);
  }

  return indices
}

// Machine word size
const MAX_BITS = 32;

function search(
  text,
  pattern,
  patternAlphabet,
  {
    location = Config.location,
    distance = Config.distance,
    threshold = Config.threshold,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    includeMatches = Config.includeMatches,
    ignoreLocation = Config.ignoreLocation
  } = {}
) {
  if (pattern.length > MAX_BITS) {
    throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS))
  }

  const patternLen = pattern.length;
  // Set starting location at beginning text and initialize the alphabet.
  const textLen = text.length;
  // Handle the case when location > text.length
  const expectedLocation = Math.max(0, Math.min(location, textLen));
  // Highest score beyond which we give up.
  let currentThreshold = threshold;
  // Is there a nearby exact match? (speedup)
  let bestLocation = expectedLocation;

  // Performance: only computer matches when the minMatchCharLength > 1
  // OR if `includeMatches` is true.
  const computeMatches = minMatchCharLength > 1 || includeMatches;
  // A mask of the matches, used for building the indices
  const matchMask = computeMatches ? Array(textLen) : [];

  let index;

  // Get all exact matches, here for speed up
  while ((index = text.indexOf(pattern, bestLocation)) > -1) {
    let score = computeScore(pattern, {
      currentLocation: index,
      expectedLocation,
      distance,
      ignoreLocation
    });

    currentThreshold = Math.min(score, currentThreshold);
    bestLocation = index + patternLen;

    if (computeMatches) {
      let i = 0;
      while (i < patternLen) {
        matchMask[index + i] = 1;
        i += 1;
      }
    }
  }

  // Reset the best location
  bestLocation = -1;

  let lastBitArr = [];
  let finalScore = 1;
  let binMax = patternLen + textLen;

  const mask = 1 << (patternLen - 1);

  for (let i = 0; i < patternLen; i += 1) {
    // Scan for the best match; each iteration allows for one more error.
    // Run a binary search to determine how far from the match location we can stray
    // at this error level.
    let binMin = 0;
    let binMid = binMax;

    while (binMin < binMid) {
      const score = computeScore(pattern, {
        errors: i,
        currentLocation: expectedLocation + binMid,
        expectedLocation,
        distance,
        ignoreLocation
      });

      if (score <= currentThreshold) {
        binMin = binMid;
      } else {
        binMax = binMid;
      }

      binMid = Math.floor((binMax - binMin) / 2 + binMin);
    }

    // Use the result from this iteration as the maximum for the next.
    binMax = binMid;

    let start = Math.max(1, expectedLocation - binMid + 1);
    let finish = findAllMatches
      ? textLen
      : Math.min(expectedLocation + binMid, textLen) + patternLen;

    // Initialize the bit array
    let bitArr = Array(finish + 2);

    bitArr[finish + 1] = (1 << i) - 1;

    for (let j = finish; j >= start; j -= 1) {
      let currentLocation = j - 1;
      let charMatch = patternAlphabet[text.charAt(currentLocation)];

      if (computeMatches) {
        // Speed up: quick bool to int conversion (i.e, `charMatch ? 1 : 0`)
        matchMask[currentLocation] = +!!charMatch;
      }

      // First pass: exact match
      bitArr[j] = ((bitArr[j + 1] << 1) | 1) & charMatch;

      // Subsequent passes: fuzzy match
      if (i) {
        bitArr[j] |=
          ((lastBitArr[j + 1] | lastBitArr[j]) << 1) | 1 | lastBitArr[j + 1];
      }

      if (bitArr[j] & mask) {
        finalScore = computeScore(pattern, {
          errors: i,
          currentLocation,
          expectedLocation,
          distance,
          ignoreLocation
        });

        // This match will almost certainly be better than any existing match.
        // But check anyway.
        if (finalScore <= currentThreshold) {
          // Indeed it is
          currentThreshold = finalScore;
          bestLocation = currentLocation;

          // Already passed `loc`, downhill from here on in.
          if (bestLocation <= expectedLocation) {
            break
          }

          // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.
          start = Math.max(1, 2 * expectedLocation - bestLocation);
        }
      }
    }

    // No hope for a (better) match at greater error levels.
    const score = computeScore(pattern, {
      errors: i + 1,
      currentLocation: expectedLocation,
      expectedLocation,
      distance,
      ignoreLocation
    });

    if (score > currentThreshold) {
      break
    }

    lastBitArr = bitArr;
  }

  const result = {
    isMatch: bestLocation >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(0.001, finalScore)
  };

  if (computeMatches) {
    const indices = convertMaskToIndices(matchMask, minMatchCharLength);
    if (!indices.length) {
      result.isMatch = false;
    } else if (includeMatches) {
      result.indices = indices;
    }
  }

  return result
}

function createPatternAlphabet(pattern) {
  let mask = {};

  for (let i = 0, len = pattern.length; i < len; i += 1) {
    const char = pattern.charAt(i);
    mask[char] = (mask[char] || 0) | (1 << (len - i - 1));
  }

  return mask
}

class BitapSearch {
  constructor(
    pattern,
    {
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance,
      includeMatches = Config.includeMatches,
      findAllMatches = Config.findAllMatches,
      minMatchCharLength = Config.minMatchCharLength,
      isCaseSensitive = Config.isCaseSensitive,
      ignoreLocation = Config.ignoreLocation
    } = {}
  ) {
    this.options = {
      location,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreLocation
    };

    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();

    this.chunks = [];

    if (!this.pattern.length) {
      return
    }

    const addChunk = (pattern, startIndex) => {
      this.chunks.push({
        pattern,
        alphabet: createPatternAlphabet(pattern),
        startIndex
      });
    };

    const len = this.pattern.length;

    if (len > MAX_BITS) {
      let i = 0;
      const remainder = len % MAX_BITS;
      const end = len - remainder;

      while (i < end) {
        addChunk(this.pattern.substr(i, MAX_BITS), i);
        i += MAX_BITS;
      }

      if (remainder) {
        const startIndex = len - MAX_BITS;
        addChunk(this.pattern.substr(startIndex), startIndex);
      }
    } else {
      addChunk(this.pattern, 0);
    }
  }

  searchIn(text) {
    const { isCaseSensitive, includeMatches } = this.options;

    if (!isCaseSensitive) {
      text = text.toLowerCase();
    }

    // Exact match
    if (this.pattern === text) {
      let result = {
        isMatch: true,
        score: 0
      };

      if (includeMatches) {
        result.indices = [[0, text.length - 1]];
      }

      return result
    }

    // Otherwise, use Bitap algorithm
    const {
      location,
      distance,
      threshold,
      findAllMatches,
      minMatchCharLength,
      ignoreLocation
    } = this.options;

    let allIndices = [];
    let totalScore = 0;
    let hasMatches = false;

    this.chunks.forEach(({ pattern, alphabet, startIndex }) => {
      const { isMatch, score, indices } = search(text, pattern, alphabet, {
        location: location + startIndex,
        distance,
        threshold,
        findAllMatches,
        minMatchCharLength,
        includeMatches,
        ignoreLocation
      });

      if (isMatch) {
        hasMatches = true;
      }

      totalScore += score;

      if (isMatch && indices) {
        allIndices = [...allIndices, ...indices];
      }
    });

    let result = {
      isMatch: hasMatches,
      score: hasMatches ? totalScore / this.chunks.length : 1
    };

    if (hasMatches && includeMatches) {
      result.indices = allIndices;
    }

    return result
  }
}

class BaseMatch {
  constructor(pattern) {
    this.pattern = pattern;
  }
  static isMultiMatch(pattern) {
    return getMatch(pattern, this.multiRegex)
  }
  static isSingleMatch(pattern) {
    return getMatch(pattern, this.singleRegex)
  }
  search(/*text*/) {}
}

function getMatch(pattern, exp) {
  const matches = pattern.match(exp);
  return matches ? matches[1] : null
}

// Token: 'file

class ExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'exact'
  }
  static get multiRegex() {
    return /^="(.*)"$/
  }
  static get singleRegex() {
    return /^=(.*)$/
  }
  search(text) {
    const isMatch = text === this.pattern;

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    }
  }
}

// Token: !fire

class InverseExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'inverse-exact'
  }
  static get multiRegex() {
    return /^!"(.*)"$/
  }
  static get singleRegex() {
    return /^!(.*)$/
  }
  search(text) {
    const index = text.indexOf(this.pattern);
    const isMatch = index === -1;

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    }
  }
}

// Token: ^file

class PrefixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'prefix-exact'
  }
  static get multiRegex() {
    return /^\^"(.*)"$/
  }
  static get singleRegex() {
    return /^\^(.*)$/
  }
  search(text) {
    const isMatch = text.startsWith(this.pattern);

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    }
  }
}

// Token: !^fire

class InversePrefixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'inverse-prefix-exact'
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/
  }
  static get singleRegex() {
    return /^!\^(.*)$/
  }
  search(text) {
    const isMatch = !text.startsWith(this.pattern);

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    }
  }
}

// Token: .file$

class SuffixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'suffix-exact'
  }
  static get multiRegex() {
    return /^"(.*)"\$$/
  }
  static get singleRegex() {
    return /^(.*)\$$/
  }
  search(text) {
    const isMatch = text.endsWith(this.pattern);

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [text.length - this.pattern.length, text.length - 1]
    }
  }
}

// Token: !.file$

class InverseSuffixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'inverse-suffix-exact'
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/
  }
  static get singleRegex() {
    return /^!(.*)\$$/
  }
  search(text) {
    const isMatch = !text.endsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    }
  }
}

class FuzzyMatch extends BaseMatch {
  constructor(
    pattern,
    {
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance,
      includeMatches = Config.includeMatches,
      findAllMatches = Config.findAllMatches,
      minMatchCharLength = Config.minMatchCharLength,
      isCaseSensitive = Config.isCaseSensitive,
      ignoreLocation = Config.ignoreLocation
    } = {}
  ) {
    super(pattern);
    this._bitapSearch = new BitapSearch(pattern, {
      location,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreLocation
    });
  }
  static get type() {
    return 'fuzzy'
  }
  static get multiRegex() {
    return /^"(.*)"$/
  }
  static get singleRegex() {
    return /^(.*)$/
  }
  search(text) {
    return this._bitapSearch.searchIn(text)
  }
}

// Token: 'file

class IncludeMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'include'
  }
  static get multiRegex() {
    return /^'"(.*)"$/
  }
  static get singleRegex() {
    return /^'(.*)$/
  }
  search(text) {
    let location = 0;
    let index;

    const indices = [];
    const patternLen = this.pattern.length;

    // Get all exact matches
    while ((index = text.indexOf(this.pattern, location)) > -1) {
      location = index + patternLen;
      indices.push([index, location - 1]);
    }

    const isMatch = !!indices.length;

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices
    }
  }
}

// ❗Order is important. DO NOT CHANGE.
const searchers = [
  ExactMatch,
  IncludeMatch,
  PrefixExactMatch,
  InversePrefixExactMatch,
  InverseSuffixExactMatch,
  SuffixExactMatch,
  InverseExactMatch,
  FuzzyMatch
];

const searchersLen = searchers.length;

// Regex to split by spaces, but keep anything in quotes together
const SPACE_RE = / +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/;
const OR_TOKEN = '|';

// Return a 2D array representation of the query, for simpler parsing.
// Example:
// "^core go$ | rb$ | py$ xy$" => [["^core", "go$"], ["rb$"], ["py$", "xy$"]]
function parseQuery(pattern, options = {}) {
  return pattern.split(OR_TOKEN).map((item) => {
    let query = item
      .trim()
      .split(SPACE_RE)
      .filter((item) => item && !!item.trim());

    let results = [];
    for (let i = 0, len = query.length; i < len; i += 1) {
      const queryItem = query[i];

      // 1. Handle multiple query match (i.e, once that are quoted, like `"hello world"`)
      let found = false;
      let idx = -1;
      while (!found && ++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isMultiMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          found = true;
        }
      }

      if (found) {
        continue
      }

      // 2. Handle single query matches (i.e, once that are *not* quoted)
      idx = -1;
      while (++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isSingleMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          break
        }
      }
    }

    return results
  })
}

// These extended matchers can return an array of matches, as opposed
// to a singl match
const MultiMatchSet = new Set([FuzzyMatch.type, IncludeMatch.type]);

/**
 * Command-like searching
 * ======================
 *
 * Given multiple search terms delimited by spaces.e.g. `^jscript .python$ ruby !java`,
 * search in a given text.
 *
 * Search syntax:
 *
 * | Token       | Match type                 | Description                            |
 * | ----------- | -------------------------- | -------------------------------------- |
 * | `jscript`   | fuzzy-match                | Items that fuzzy match `jscript`       |
 * | `=scheme`   | exact-match                | Items that are `scheme`                |
 * | `'python`   | include-match              | Items that include `python`            |
 * | `!ruby`     | inverse-exact-match        | Items that do not include `ruby`       |
 * | `^java`     | prefix-exact-match         | Items that start with `java`           |
 * | `!^earlang` | inverse-prefix-exact-match | Items that do not start with `earlang` |
 * | `.js$`      | suffix-exact-match         | Items that end with `.js`              |
 * | `!.go$`     | inverse-suffix-exact-match | Items that do not end with `.go`       |
 *
 * A single pipe character acts as an OR operator. For example, the following
 * query matches entries that start with `core` and end with either`go`, `rb`,
 * or`py`.
 *
 * ```
 * ^core go$ | rb$ | py$
 * ```
 */
class ExtendedSearch {
  constructor(
    pattern,
    {
      isCaseSensitive = Config.isCaseSensitive,
      includeMatches = Config.includeMatches,
      minMatchCharLength = Config.minMatchCharLength,
      ignoreLocation = Config.ignoreLocation,
      findAllMatches = Config.findAllMatches,
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance
    } = {}
  ) {
    this.query = null;
    this.options = {
      isCaseSensitive,
      includeMatches,
      minMatchCharLength,
      findAllMatches,
      ignoreLocation,
      location,
      threshold,
      distance
    };

    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
    this.query = parseQuery(this.pattern, this.options);
  }

  static condition(_, options) {
    return options.useExtendedSearch
  }

  searchIn(text) {
    const query = this.query;

    if (!query) {
      return {
        isMatch: false,
        score: 1
      }
    }

    const { includeMatches, isCaseSensitive } = this.options;

    text = isCaseSensitive ? text : text.toLowerCase();

    let numMatches = 0;
    let allIndices = [];
    let totalScore = 0;

    // ORs
    for (let i = 0, qLen = query.length; i < qLen; i += 1) {
      const searchers = query[i];

      // Reset indices
      allIndices.length = 0;
      numMatches = 0;

      // ANDs
      for (let j = 0, pLen = searchers.length; j < pLen; j += 1) {
        const searcher = searchers[j];
        const { isMatch, indices, score } = searcher.search(text);

        if (isMatch) {
          numMatches += 1;
          totalScore += score;
          if (includeMatches) {
            const type = searcher.constructor.type;
            if (MultiMatchSet.has(type)) {
              allIndices = [...allIndices, ...indices];
            } else {
              allIndices.push(indices);
            }
          }
        } else {
          totalScore = 0;
          numMatches = 0;
          allIndices.length = 0;
          break
        }
      }

      // OR condition, so if TRUE, return
      if (numMatches) {
        let result = {
          isMatch: true,
          score: totalScore / numMatches
        };

        if (includeMatches) {
          result.indices = allIndices;
        }

        return result
      }
    }

    // Nothing was matched
    return {
      isMatch: false,
      score: 1
    }
  }
}

const registeredSearchers = [];

function register(...args) {
  registeredSearchers.push(...args);
}

function createSearcher(pattern, options) {
  for (let i = 0, len = registeredSearchers.length; i < len; i += 1) {
    let searcherClass = registeredSearchers[i];
    if (searcherClass.condition(pattern, options)) {
      return new searcherClass(pattern, options)
    }
  }

  return new BitapSearch(pattern, options)
}

const LogicalOperator = {
  AND: '$and',
  OR: '$or'
};

const KeyType = {
  PATH: '$path',
  PATTERN: '$val'
};

const isExpression = (query) =>
  !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);

const isPath = (query) => !!query[KeyType.PATH];

const isLeaf = (query) =>
  !isArray(query) && isObject(query) && !isExpression(query);

const convertToExplicit = (query) => ({
  [LogicalOperator.AND]: Object.keys(query).map((key) => ({
    [key]: query[key]
  }))
});

// When `auto` is `true`, the parse function will infer and initialize and add
// the appropriate `Searcher` instance
function parse(query, options, { auto = true } = {}) {
  const next = (query) => {
    let keys = Object.keys(query);

    const isQueryPath = isPath(query);

    if (!isQueryPath && keys.length > 1 && !isExpression(query)) {
      return next(convertToExplicit(query))
    }

    if (isLeaf(query)) {
      const key = isQueryPath ? query[KeyType.PATH] : keys[0];

      const pattern = isQueryPath ? query[KeyType.PATTERN] : query[key];

      if (!isString(pattern)) {
        throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key))
      }

      const obj = {
        keyId: createKeyId(key),
        pattern
      };

      if (auto) {
        obj.searcher = createSearcher(pattern, options);
      }

      return obj
    }

    let node = {
      children: [],
      operator: keys[0]
    };

    keys.forEach((key) => {
      const value = query[key];

      if (isArray(value)) {
        value.forEach((item) => {
          node.children.push(next(item));
        });
      }
    });

    return node
  };

  if (!isExpression(query)) {
    query = convertToExplicit(query);
  }

  return next(query)
}

// Practical scoring function
function computeScore$1(
  results,
  { ignoreFieldNorm = Config.ignoreFieldNorm }
) {
  results.forEach((result) => {
    let totalScore = 1;

    result.matches.forEach(({ key, norm, score }) => {
      const weight = key ? key.weight : null;

      totalScore *= Math.pow(
        score === 0 && weight ? Number.EPSILON : score,
        (weight || 1) * (ignoreFieldNorm ? 1 : norm)
      );
    });

    result.score = totalScore;
  });
}

function transformMatches(result, data) {
  const matches = result.matches;
  data.matches = [];

  if (!isDefined(matches)) {
    return
  }

  matches.forEach((match) => {
    if (!isDefined(match.indices) || !match.indices.length) {
      return
    }

    const { indices, value } = match;

    let obj = {
      indices,
      value
    };

    if (match.key) {
      obj.key = match.key.src;
    }

    if (match.idx > -1) {
      obj.refIndex = match.idx;
    }

    data.matches.push(obj);
  });
}

function transformScore(result, data) {
  data.score = result.score;
}

function format(
  results,
  docs,
  {
    includeMatches = Config.includeMatches,
    includeScore = Config.includeScore
  } = {}
) {
  const transformers = [];

  if (includeMatches) transformers.push(transformMatches);
  if (includeScore) transformers.push(transformScore);

  return results.map((result) => {
    const { idx } = result;

    const data = {
      item: docs[idx],
      refIndex: idx
    };

    if (transformers.length) {
      transformers.forEach((transformer) => {
        transformer(result, data);
      });
    }

    return data
  })
}

class Fuse {
  constructor(docs, options = {}, index) {
    this.options = { ...Config, ...options };

    if (
      this.options.useExtendedSearch &&
      !true
    ) {}

    this._keyStore = new KeyStore(this.options.keys);

    this.setCollection(docs, index);
  }

  setCollection(docs, index) {
    this._docs = docs;

    if (index && !(index instanceof FuseIndex)) {
      throw new Error(INCORRECT_INDEX_TYPE)
    }

    this._myIndex =
      index ||
      createIndex(this.options.keys, this._docs, {
        getFn: this.options.getFn
      });
  }

  add(doc) {
    if (!isDefined(doc)) {
      return
    }

    this._docs.push(doc);
    this._myIndex.add(doc);
  }

  remove(predicate = (/* doc, idx */) => false) {
    const results = [];

    for (let i = 0, len = this._docs.length; i < len; i += 1) {
      const doc = this._docs[i];
      if (predicate(doc, i)) {
        this.removeAt(i);
        i -= 1;
        len -= 1;

        results.push(doc);
      }
    }

    return results
  }

  removeAt(idx) {
    this._docs.splice(idx, 1);
    this._myIndex.removeAt(idx);
  }

  getIndex() {
    return this._myIndex
  }

  search(query, { limit = -1 } = {}) {
    const {
      includeMatches,
      includeScore,
      shouldSort,
      sortFn,
      ignoreFieldNorm
    } = this.options;

    let results = isString(query)
      ? isString(this._docs[0])
        ? this._searchStringList(query)
        : this._searchObjectList(query)
      : this._searchLogical(query);

    computeScore$1(results, { ignoreFieldNorm });

    if (shouldSort) {
      results.sort(sortFn);
    }

    if (isNumber(limit) && limit > -1) {
      results = results.slice(0, limit);
    }

    return format(results, this._docs, {
      includeMatches,
      includeScore
    })
  }

  _searchStringList(query) {
    const searcher = createSearcher(query, this.options);
    const { records } = this._myIndex;
    const results = [];

    // Iterate over every string in the index
    records.forEach(({ v: text, i: idx, n: norm }) => {
      if (!isDefined(text)) {
        return
      }

      const { isMatch, score, indices } = searcher.searchIn(text);

      if (isMatch) {
        results.push({
          item: text,
          idx,
          matches: [{ score, value: text, norm, indices }]
        });
      }
    });

    return results
  }

  _searchLogical(query) {

    const expression = parse(query, this.options);

    const evaluate = (node, item, idx) => {
      if (!node.children) {
        const { keyId, searcher } = node;

        const matches = this._findMatches({
          key: this._keyStore.get(keyId),
          value: this._myIndex.getValueForItemAtKeyId(item, keyId),
          searcher
        });

        if (matches && matches.length) {
          return [
            {
              idx,
              item,
              matches
            }
          ]
        }

        return []
      }

      /*eslint indent: [2, 2, {"SwitchCase": 1}]*/
      switch (node.operator) {
        case LogicalOperator.AND: {
          const res = [];
          for (let i = 0, len = node.children.length; i < len; i += 1) {
            const child = node.children[i];
            const result = evaluate(child, item, idx);
            if (result.length) {
              res.push(...result);
            } else {
              return []
            }
          }
          return res
        }
        case LogicalOperator.OR: {
          const res = [];
          for (let i = 0, len = node.children.length; i < len; i += 1) {
            const child = node.children[i];
            const result = evaluate(child, item, idx);
            if (result.length) {
              res.push(...result);
              break
            }
          }
          return res
        }
      }
    };

    const records = this._myIndex.records;
    const resultMap = {};
    const results = [];

    records.forEach(({ $: item, i: idx }) => {
      if (isDefined(item)) {
        let expResults = evaluate(expression, item, idx);

        if (expResults.length) {
          // Dedupe when adding
          if (!resultMap[idx]) {
            resultMap[idx] = { idx, item, matches: [] };
            results.push(resultMap[idx]);
          }
          expResults.forEach(({ matches }) => {
            resultMap[idx].matches.push(...matches);
          });
        }
      }
    });

    return results
  }

  _searchObjectList(query) {
    const searcher = createSearcher(query, this.options);
    const { keys, records } = this._myIndex;
    const results = [];

    // List is Array<Object>
    records.forEach(({ $: item, i: idx }) => {
      if (!isDefined(item)) {
        return
      }

      let matches = [];

      // Iterate over every key (i.e, path), and fetch the value at that key
      keys.forEach((key, keyIndex) => {
        matches.push(
          ...this._findMatches({
            key,
            value: item[keyIndex],
            searcher
          })
        );
      });

      if (matches.length) {
        results.push({
          idx,
          item,
          matches
        });
      }
    });

    return results
  }
  _findMatches({ key, value, searcher }) {
    if (!isDefined(value)) {
      return []
    }

    let matches = [];

    if (isArray(value)) {
      value.forEach(({ v: text, i: idx, n: norm }) => {
        if (!isDefined(text)) {
          return
        }

        const { isMatch, score, indices } = searcher.searchIn(text);

        if (isMatch) {
          matches.push({
            score,
            key,
            value: text,
            idx,
            norm,
            indices
          });
        }
      });
    } else {
      const { v: text, n: norm } = value;

      const { isMatch, score, indices } = searcher.searchIn(text);

      if (isMatch) {
        matches.push({ score, key, value: text, norm, indices });
      }
    }

    return matches
  }
}

Fuse.version = '6.4.6';
Fuse.createIndex = createIndex;
Fuse.parseIndex = parseIndex;
Fuse.config = Config;

{
  Fuse.parseQuery = parse;
}

{
  register(ExtendedSearch);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fuse);


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

/***/ "./resources/js/components/dogs/DogFamilyDialog.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/dogs/DogFamilyDialog.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DogFamilyDialog_vue_vue_type_template_id_9cdf730a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DogFamilyDialog.vue?vue&type=template&id=9cdf730a& */ "./resources/js/components/dogs/DogFamilyDialog.vue?vue&type=template&id=9cdf730a&");
/* harmony import */ var _DogFamilyDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DogFamilyDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/dogs/DogFamilyDialog.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DogFamilyDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DogFamilyDialog_vue_vue_type_template_id_9cdf730a___WEBPACK_IMPORTED_MODULE_0__.render,
  _DogFamilyDialog_vue_vue_type_template_id_9cdf730a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dogs/DogFamilyDialog.vue"
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

/***/ "./resources/js/components/dogs/DogLittersDialog.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/dogs/DogLittersDialog.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DogLittersDialog_vue_vue_type_template_id_f833b1dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DogLittersDialog.vue?vue&type=template&id=f833b1dc& */ "./resources/js/components/dogs/DogLittersDialog.vue?vue&type=template&id=f833b1dc&");
/* harmony import */ var _DogLittersDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DogLittersDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/dogs/DogLittersDialog.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DogLittersDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DogLittersDialog_vue_vue_type_template_id_f833b1dc___WEBPACK_IMPORTED_MODULE_0__.render,
  _DogLittersDialog_vue_vue_type_template_id_f833b1dc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dogs/DogLittersDialog.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dogs/DogTraitsDialog.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/dogs/DogTraitsDialog.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DogTraitsDialog_vue_vue_type_template_id_28e7fdfc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DogTraitsDialog.vue?vue&type=template&id=28e7fdfc& */ "./resources/js/components/dogs/DogTraitsDialog.vue?vue&type=template&id=28e7fdfc&");
/* harmony import */ var _DogTraitsDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DogTraitsDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/dogs/DogTraitsDialog.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DogTraitsDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DogTraitsDialog_vue_vue_type_template_id_28e7fdfc___WEBPACK_IMPORTED_MODULE_0__.render,
  _DogTraitsDialog_vue_vue_type_template_id_28e7fdfc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dogs/DogTraitsDialog.vue"
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

/***/ "./resources/js/components/dogs/DogFamilyDialog.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/dogs/DogFamilyDialog.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DogFamilyDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DogFamilyDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dogs/DogFamilyDialog.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DogFamilyDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/dogs/DogLittersDialog.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/dogs/DogLittersDialog.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DogLittersDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DogLittersDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dogs/DogLittersDialog.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DogLittersDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dogs/DogTraitsDialog.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/dogs/DogTraitsDialog.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DogTraitsDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DogTraitsDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dogs/DogTraitsDialog.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DogTraitsDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/dogs/DogFamilyDialog.vue?vue&type=template&id=9cdf730a&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/dogs/DogFamilyDialog.vue?vue&type=template&id=9cdf730a& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DogFamilyDialog_vue_vue_type_template_id_9cdf730a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DogFamilyDialog_vue_vue_type_template_id_9cdf730a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DogFamilyDialog_vue_vue_type_template_id_9cdf730a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DogFamilyDialog.vue?vue&type=template&id=9cdf730a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dogs/DogFamilyDialog.vue?vue&type=template&id=9cdf730a&");


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

/***/ "./resources/js/components/dogs/DogLittersDialog.vue?vue&type=template&id=f833b1dc&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/dogs/DogLittersDialog.vue?vue&type=template&id=f833b1dc& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DogLittersDialog_vue_vue_type_template_id_f833b1dc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DogLittersDialog_vue_vue_type_template_id_f833b1dc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DogLittersDialog_vue_vue_type_template_id_f833b1dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DogLittersDialog.vue?vue&type=template&id=f833b1dc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dogs/DogLittersDialog.vue?vue&type=template&id=f833b1dc&");


/***/ }),

/***/ "./resources/js/components/dogs/DogTraitsDialog.vue?vue&type=template&id=28e7fdfc&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/dogs/DogTraitsDialog.vue?vue&type=template&id=28e7fdfc& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DogTraitsDialog_vue_vue_type_template_id_28e7fdfc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DogTraitsDialog_vue_vue_type_template_id_28e7fdfc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DogTraitsDialog_vue_vue_type_template_id_28e7fdfc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DogTraitsDialog.vue?vue&type=template&id=28e7fdfc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dogs/DogTraitsDialog.vue?vue&type=template&id=28e7fdfc&");


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
      attrs: { elevation: 0, outlined: "", "max-width": "600", height: "100%" },
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
                        _c("b", [_vm._v(_vm._s(_vm.dog.name))]),
                        _vm._v(" "),
                        _c("small", [
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
                                        attrs: { dog: _vm.dog },
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
                                        attrs: { dog: _vm.dog },
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
                  _vm.dog.weight
                    ? _c("span", [
                        _vm._v(
                          _vm._s(_vm.ouncesToLbs(_vm.dog.weight)) + " lbs"
                        ),
                      ])
                    : _c(
                        "span",
                        [
                          _c(
                            "inertia-link",
                            {
                              attrs: {
                                href: "/admin/dogs/" + _vm.dog.id + "/edit",
                              },
                            },
                            [_vm._v("Add Weight")]
                          ),
                        ],
                        1
                      ),
                ]),
                _vm._v(" "),
                _c("div", [
                  _vm.dog.height
                    ? _c("span", [_vm._v(_vm._s(_vm.dog.height))])
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
                    ? _c("span", [
                        _vm._v(" " + _vm._s(_vm.age(_vm.dog.birthday)) + " "),
                      ])
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
                _vm._v(" "),
                _c("div", [
                  _vm._v(
                    "\n          " + _vm._s(_vm.dog.birthday) + "\n        "
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
              attrs: { "show-arrows": "", grow: "" },
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
                      expression: "dog.gender === 'female'",
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
                      expression: "dog.gender === 'male'",
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
                      expression: "dog.gender === 'female'",
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
                { attrs: { name: "traits" } },
                [
                  _c(
                    "v-row",
                    { attrs: { "no-gutters": "" } },
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "1", offset: "11" } },
                        [
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
                                            "\n                  mdi-dots-vertical\n                "
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
                                      _c("DogTraitsDialog", {
                                        attrs: { dog: _vm.dog },
                                      }),
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
                      expression: "dog.gender === 'female'",
                    },
                  ],
                  attrs: { name: "heats" },
                },
                [
                  _c(
                    "v-container",
                    { attrs: { fluid: "" } },
                    [
                      _c(
                        "v-row",
                        { attrs: { "no-gutters": "" } },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "1", offset: "11" } },
                            [
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
                                                "\n                    mdi-dots-vertical\n                  "
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
                                          _c("DogHeatDialog", {
                                            attrs: { dog: _vm.dog },
                                          }),
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
                        { attrs: { "no-gutters": "" } },
                        [
                          _c("v-col", [
                            _c("pre", [_vm._v(_vm._s(_vm.dog.heats))]),
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
                      expression: "dog.gender === 'male'",
                    },
                  ],
                  attrs: { name: "studding" },
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
                      expression: "dog.gender === 'female'",
                    },
                  ],
                  attrs: { name: "litters" },
                },
                [
                  _c(
                    "v-container",
                    { attrs: { fluid: "" } },
                    [
                      _c(
                        "v-row",
                        { attrs: { "no-gutters": "" } },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "1", offset: "11" } },
                            [
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
                                                "\n                    mdi-dots-vertical\n                  "
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
                                          _c("DogLittersDialog", {
                                            attrs: { dog: _vm.dog },
                                          }),
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
                        { attrs: { "no-gutters": "" } },
                        [
                          _c("v-col", [
                            _c("pre", [_vm._v(_vm._s(_vm.dog.litters))]),
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
                { attrs: { name: "more" } },
                [
                  _c(
                    "v-container",
                    { attrs: { fluid: "" } },
                    [
                      _c(
                        "v-row",
                        { attrs: { "no-gutters": "" } },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "1", offset: "11" } },
                            [
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
                                                "\n                    mdi-dots-vertical\n                  "
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
                                          _c("DogFamilyDialog", {
                                            attrs: { dog: _vm.dog },
                                          }),
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
                        { attrs: { "no-gutters": "" } },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "6" } },
                            [
                              _c("v-textarea", { attrs: { label: "Notes" } }, [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(_vm.dog.notes) +
                                    "\n              "
                                ),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-col", { attrs: { cols: "6" } }, [
                            _c("div", [_vm._v("AKC: " + _vm._s(_vm.dog.akc))]),
                            _vm._v(" "),
                            _c("div", [_vm._v("CKC: " + _vm._s(_vm.dog.ckc))]),
                            _vm._v(" "),
                            _c("div", [
                              _vm._v("EMBARK: " + _vm._s(_vm.dog.embark)),
                            ]),
                          ]),
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
                                "v-card",
                                { attrs: { outlined: "" } },
                                [
                                  _c("v-card-title", [
                                    _c(
                                      "span",
                                      { staticClass: "headline" },
                                      [
                                        _c("v-icon", [
                                          _vm._v("mdi-account-circle"),
                                        ]),
                                        _vm._v(
                                          "\n                    Family\n                  "
                                        ),
                                      ],
                                      1
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-text",
                                    [
                                      _c("v-text-field"),
                                      _vm._v(" "),
                                      _c("v-textarea"),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dogs/DogFamilyDialog.vue?vue&type=template&id=9cdf730a&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dogs/DogFamilyDialog.vue?vue&type=template&id=9cdf730a& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
                  _c("v-icon", [_vm._v("mdi-account-group")]),
                  _vm._v("\n      Add Family\n    "),
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
          _c("v-card-title", [_vm._v("Add Family")]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dogs/DogLittersDialog.vue?vue&type=template&id=f833b1dc&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dogs/DogLittersDialog.vue?vue&type=template&id=f833b1dc& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
                  _c("v-icon", [_vm._v("mdi-dna")]),
                  _vm._v("\n      Add Litters\n    "),
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
          _c("v-card-title", [_vm._v("Add Litter")]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dogs/DogTraitsDialog.vue?vue&type=template&id=28e7fdfc&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dogs/DogTraitsDialog.vue?vue&type=template&id=28e7fdfc& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
                  _c("v-icon", [_vm._v("mdi-dna")]),
                  _vm._v("\n      Add Traits\n    "),
                ],
                1
              ),
            ]
          },
        },
      ]),
      model: {
        value: _vm.showDialog,
        callback: function ($$v) {
          _vm.showDialog = $$v
        },
        expression: "showDialog",
      },
    },
    [
      _vm._v(" "),
      _c(
        "form",
        {
          on: {
            submit: function ($event) {
              $event.preventDefault()
              return _vm.submit.apply(null, arguments)
            },
          },
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-title",
                {
                  staticClass: "d-flex col justify-space-between ",
                  staticStyle: {
                    top: "0",
                    position: "sticky",
                    background: "white",
                    "z-index": "1",
                    "margin-bottom": "20px",
                  },
                },
                [
                  _c("span", [_vm._v("Add Traits")]),
                  _vm._v(" "),
                  _vm.form.isDirty
                    ? _c(
                        "span",
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                color: "green white--text",
                                type: "submit",
                              },
                            },
                            [
                              _c("v-icon", [_vm._v("mdi-submit")]),
                              _vm._v(" Update\n          "),
                            ],
                            1
                          ),
                        ],
                        1
                      )
                    : _vm._e(),
                ]
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-text-field", {
                    attrs: { dense: "", label: "E Locus (MC1R)" },
                    model: {
                      value: _vm.form.MC1R,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "MC1R", $$v)
                      },
                      expression: "form.MC1R",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: { dense: "", label: "K Locus (CBD103)" },
                    model: {
                      value: _vm.form.CBD103,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "CBD103", $$v)
                      },
                      expression: "form.CBD103",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: { dense: "", label: "A Locus (ASIP)" },
                    model: {
                      value: _vm.form.ASIP,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "ASIP", $$v)
                      },
                      expression: "form.ASIP",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: { dense: "", label: "D Locus (MLPH)" },
                    model: {
                      value: _vm.form.MLPH,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "MLPH", $$v)
                      },
                      expression: "form.MLPH",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: { dense: "", label: "B Locus (TYRP1)" },
                    model: {
                      value: _vm.form.TYRP1,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "TYRP1", $$v)
                      },
                      expression: "form.TYRP1",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: { dense: "", label: "S Locus (MITF)" },
                    model: {
                      value: _vm.form.MITF,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "MITF", $$v)
                      },
                      expression: "form.MITF",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: { dense: "", label: "H Locus (Harlequin)" },
                    model: {
                      value: _vm.form.Harlequin,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "Harlequin", $$v)
                      },
                      expression: "form.Harlequin",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: { dense: "", label: "Furnishings (RSPO2)" },
                    model: {
                      value: _vm.form.RSPO2,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "RSPO2", $$v)
                      },
                      expression: "form.RSPO2",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: { dense: "", label: "Coat Length (FGF5)" },
                    model: {
                      value: _vm.form.FGF5,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "FGF5", $$v)
                      },
                      expression: "form.FGF5",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: { dense: "", label: "Shedding (MC5R)" },
                    model: {
                      value: _vm.form.MC5R,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "MC5R", $$v)
                      },
                      expression: "form.MC5R",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: { dense: "", label: "Hairlessness (FOXI3)" },
                    model: {
                      value: _vm.form.FOXI3,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "FOXI3", $$v)
                      },
                      expression: "form.FOXI3",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      dense: "",
                      label: "Oculocutaneous Albinism Type 2 (SLC45A2)",
                    },
                    model: {
                      value: _vm.form.SLC45A2,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "SLC45A2", $$v)
                      },
                      expression: "form.SLC45A2",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: { dense: "", label: "Coat Texture (KRT71)" },
                    model: {
                      value: _vm.form.KRT71,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "KRT71", $$v)
                      },
                      expression: "form.KRT71",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: { dense: "", label: "Muzzle Length (BMP3)" },
                    model: {
                      value: _vm.form.BMP3,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "BMP3", $$v)
                      },
                      expression: "form.BMP3",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: { dense: "", label: "Tail Length (T)" },
                    model: {
                      value: _vm.form.T,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "T", $$v)
                      },
                      expression: "form.T",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: { dense: "", label: "Hind Dewclaws (LMBR1)" },
                    model: {
                      value: _vm.form.LMBR1,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "LMBR1", $$v)
                      },
                      expression: "form.LMBR1",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: { dense: "", label: "Blue Eye Color (ALX4)" },
                    model: {
                      value: _vm.form.ALX4,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "ALX4", $$v)
                      },
                      expression: "form.ALX4",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: { dense: "", label: "Body Size (IGF1)" },
                    model: {
                      value: _vm.form.IGF1,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "IGF1", $$v)
                      },
                      expression: "form.IGF1",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: { dense: "", label: "Body Size (IGFR1)" },
                    model: {
                      value: _vm.form.IGFR1,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "IGFR1", $$v)
                      },
                      expression: "form.IGFR1",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: { dense: "", label: "Body Size (STC2)" },
                    model: {
                      value: _vm.form.STC2,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "STC2", $$v)
                      },
                      expression: "form.STC2",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: { dense: "", label: "Body Size (GHR - E191K)" },
                    model: {
                      value: _vm.form.E191K,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "E191K", $$v)
                      },
                      expression: "form.E191K",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: { dense: "", label: "Body Size (GHR - P177L)" },
                    model: {
                      value: _vm.form.P177L,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "P177L", $$v)
                      },
                      expression: "form.P177L",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: { dense: "", label: "Altitude Adaptation (EPAS1)" },
                    model: {
                      value: _vm.form.EPAS1,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "EPAS1", $$v)
                      },
                      expression: "form.EPAS1",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: { dense: "", label: "Appetite (POMC)" },
                    model: {
                      value: _vm.form.POMC,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "POMC", $$v)
                      },
                      expression: "form.POMC",
                    },
                  }),
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
              _c("v-autocomplete", {
                staticClass: "ma-0 pa-0",
                attrs: {
                  chips: "",
                  "deletable-chips": "",
                  "append-icon": "mdi-magnify",
                  label: "Search",
                  items: _vm.autocompleteItems,
                  clearable: "",
                  "auto-select-first": "",
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