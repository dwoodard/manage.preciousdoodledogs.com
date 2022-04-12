"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Admin_Puppies_edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/InputDate.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/InputDate.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
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
// <InputDate :value.sync="SomeValue"/>
// <InputDate v-model="form.someValue" :value.sync="form.someValue" label="Date" @input="update(arg)"/>
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    clear: {
      type: Boolean,
      "default": null
    },
    value: {},
    type: {
      type: String,
      "default": 'date'
    },
    label: {
      type: String,
      "default": ''
    }
  },
  computed: {
    inputValue: {
      get: function get() {
        return this.value;
      },
      set: function set(val) {
        this.$emit('input', val);
      }
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      touching: false,
      showSnackbar: false,
      snackbarText: ''
    };
  },
  methods: {
    updateSnackbar: function updateSnackbar(data) {
      debugger;
      console.log(data);
    },
    toggleBottomDrawer: function toggleBottomDrawer(drawer) {
      this.bottomDrawer = drawer;
    }
  },
  components: {
    MainNav: _layouts_nav_MainNav__WEBPACK_IMPORTED_MODULE_1__["default"],
    ProfileMenu: _layouts_nav_ProfileMenu__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/Puppies/edit.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/Puppies/edit.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_InputDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/InputDate */ "./resources/js/components/InputDate.vue");
/* harmony import */ var _layouts_Admin_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/layouts/Admin/Layout */ "./resources/js/layouts/Admin/Layout.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    puppy: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      showDialog: false,
      collarColors: ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'blue-grey', 'grey'],
      snackbar: false,
      snackbarText: '',
      form: this.$inertia.form({
        litter_id: this.puppy.litter.id,
        name: this.puppy.name,
        gender: this.puppy.gender,
        adult_name: this.puppy.adult_name,
        collar_color: this.puppy.collar_color,
        birthday: this.puppy.birthday,
        price: this.puppy.price,
        paid: this.puppy.paid
      })
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().put("/admin/puppies/".concat(this.puppy.id), this.form.data()) // eslint-disable-next-line promise/always-return
      .then(function () {
        _this.showDialog = false;
        _this.snackbar = true;
        _this.snackbarText = 'Puppy Saved';

        _this.$inertia.reload();
      })["catch"](function (result) {
        console.log(result);
        _this.snackbar = true;
        _this.snackbarText = 'There was an error saving the puppy.';
      });
    }
  },
  components: {
    InputDate: _components_InputDate__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  layout: _layouts_Admin_Layout__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./resources/js/components/InputDate.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/InputDate.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InputDate_vue_vue_type_template_id_91b73686_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputDate.vue?vue&type=template&id=91b73686&scoped=true& */ "./resources/js/components/InputDate.vue?vue&type=template&id=91b73686&scoped=true&");
/* harmony import */ var _InputDate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputDate.vue?vue&type=script&lang=js& */ "./resources/js/components/InputDate.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InputDate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InputDate_vue_vue_type_template_id_91b73686_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _InputDate_vue_vue_type_template_id_91b73686_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "91b73686",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/InputDate.vue"
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

/***/ "./resources/js/pages/Admin/Puppies/edit.vue":
/*!***************************************************!*\
  !*** ./resources/js/pages/Admin/Puppies/edit.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _edit_vue_vue_type_template_id_6f4f50b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=6f4f50b0&scoped=true& */ "./resources/js/pages/Admin/Puppies/edit.vue?vue&type=template&id=6f4f50b0&scoped=true&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/js/pages/Admin/Puppies/edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_6f4f50b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _edit_vue_vue_type_template_id_6f4f50b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6f4f50b0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Admin/Puppies/edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/InputDate.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/InputDate.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputDate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InputDate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/InputDate.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputDate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/pages/Admin/Puppies/edit.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/Admin/Puppies/edit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/Puppies/edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/InputDate.vue?vue&type=template&id=91b73686&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/InputDate.vue?vue&type=template&id=91b73686&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputDate_vue_vue_type_template_id_91b73686_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputDate_vue_vue_type_template_id_91b73686_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputDate_vue_vue_type_template_id_91b73686_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InputDate.vue?vue&type=template&id=91b73686&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/InputDate.vue?vue&type=template&id=91b73686&scoped=true&");


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

/***/ "./resources/js/pages/Admin/Puppies/edit.vue?vue&type=template&id=6f4f50b0&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/pages/Admin/Puppies/edit.vue?vue&type=template&id=6f4f50b0&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_6f4f50b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_6f4f50b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_6f4f50b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=template&id=6f4f50b0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/Puppies/edit.vue?vue&type=template&id=6f4f50b0&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/InputDate.vue?vue&type=template&id=91b73686&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/InputDate.vue?vue&type=template&id=91b73686&scoped=true& ***!
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
    "div",
    {
      staticClass:
        "v-input v-input--is-label-active v-input--is-dirty theme--light v-text-field v-text-field--is-booted",
    },
    [
      _c("div", { staticClass: "v-input__control" }, [
        _c("div", { staticClass: "v-input__slot" }, [
          _c(
            "div",
            { staticClass: "v-text-field__slot" },
            [
              _c(
                "label",
                {
                  staticClass: "v-label v-label--active theme--light",
                  staticStyle: {
                    left: "0px",
                    right: "auto",
                    position: "absolute",
                  },
                },
                [
                  _vm._t("label", function () {
                    return [_vm._v(_vm._s(_vm.label))]
                  }),
                ],
                2
              ),
              _vm._v(" "),
              _vm.inputValue && _vm.clear
                ? _c(
                    "v-btn",
                    {
                      attrs: { icon: "", elevation: "0", small: "" },
                      on: {
                        click: function ($event) {
                          _vm.inputValue = null
                        },
                      },
                    },
                    [_c("v-icon", [_vm._v("mdi-close-circle")])],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.type === "checkbox"
                ? _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.inputValue,
                        expression: "inputValue",
                      },
                    ],
                    staticStyle: { "font-size": "1rem" },
                    attrs: { required: "", type: "checkbox" },
                    domProps: {
                      checked: Array.isArray(_vm.inputValue)
                        ? _vm._i(_vm.inputValue, null) > -1
                        : _vm.inputValue,
                    },
                    on: {
                      change: function ($event) {
                        var $$a = _vm.inputValue,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = null,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 && (_vm.inputValue = $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              (_vm.inputValue = $$a
                                .slice(0, $$i)
                                .concat($$a.slice($$i + 1)))
                          }
                        } else {
                          _vm.inputValue = $$c
                        }
                      },
                    },
                  })
                : _vm.type === "radio"
                ? _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.inputValue,
                        expression: "inputValue",
                      },
                    ],
                    staticStyle: { "font-size": "1rem" },
                    attrs: { required: "", type: "radio" },
                    domProps: { checked: _vm._q(_vm.inputValue, null) },
                    on: {
                      change: function ($event) {
                        _vm.inputValue = null
                      },
                    },
                  })
                : _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.inputValue,
                        expression: "inputValue",
                      },
                    ],
                    staticStyle: { "font-size": "1rem" },
                    attrs: { required: "", type: _vm.type },
                    domProps: { value: _vm.inputValue },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.inputValue = $event.target.value
                      },
                    },
                  }),
            ],
            1
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "v-text-field__details" }, [
          _c("div", { staticClass: "v-messages theme--light" }, [
            _c(
              "div",
              { staticClass: "v-messages__wrapper" },
              [_vm._t("message")],
              2
            ),
          ]),
        ]),
      ]),
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
            [_c("v-spacer"), _vm._v(" "), _c("ProfileMenu")],
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/Puppies/edit.vue?vue&type=template&id=6f4f50b0&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/Puppies/edit.vue?vue&type=template&id=6f4f50b0&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "pa-8", attrs: { fluid: "" } },
    [
      _c(
        "v-card",
        { attrs: { outlined: "" } },
        [
          _c(
            "v-card-title",
            [
              _c(
                "v-row",
                { staticClass: "justify-space-between" },
                [
                  _c(
                    "v-col",
                    [
                      _c(
                        "inertia-link",
                        {
                          attrs: {
                            href:
                              "/admin/litters/" + _vm.puppy.litter.id + "/edit",
                            as: "span",
                          },
                        },
                        [_c("v-icon", [_vm._v("mdi-arrow-left")])],
                        1
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "headline" }, [
                        _vm._v("Edit Puppy"),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { staticClass: "text-end" },
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
                              _c("v-list-item", [
                                _c("div", [_vm._v("do puppy actinos here")]),
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
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-container",
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", sm: "6", md: "4" } },
                    [
                      _c("v-text-field", {
                        attrs: { label: "Puppy Name" },
                        model: {
                          value: _vm.form.name,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "name", $$v)
                          },
                          expression: "form.name",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", sm: "6", md: "4" } },
                    [
                      _c("v-select", {
                        attrs: { label: "Gender", items: ["male", "female"] },
                        model: {
                          value: _vm.form.gender,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "gender", $$v)
                          },
                          expression: "form.gender",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    [
                      _c("InputDate", {
                        attrs: { type: "datetime-local", label: "Birthday" },
                        model: {
                          value: _vm.form.birthday,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "birthday", $$v)
                          },
                          expression: "form.birthday",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    [
                      _c("v-select", {
                        attrs: {
                          label: "Collar Color",
                          items: _vm.collarColors,
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "item",
                            fn: function (ref) {
                              var item = ref.item
                              return [
                                _c(
                                  "v-chip",
                                  {
                                    attrs: {
                                      color: item,
                                      "text-color": "black",
                                      label: "",
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(item) +
                                        "\n              "
                                    ),
                                  ]
                                ),
                              ]
                            },
                          },
                          {
                            key: "selection",
                            fn: function (ref) {
                              var item = ref.item
                              return [
                                _c(
                                  "v-chip",
                                  {
                                    attrs: {
                                      color: item,
                                      "text-color": "black",
                                      label: "",
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(item) +
                                        "\n              "
                                    ),
                                  ]
                                ),
                              ]
                            },
                          },
                        ]),
                        model: {
                          value: _vm.form.collar_color,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "collar_color", $$v)
                          },
                          expression: "form.collar_color",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    [
                      _c("v-text-field", {
                        attrs: { label: "Price", prefix: "$", type: "currecy" },
                        model: {
                          value: _vm.form.price,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "price", $$v)
                          },
                          expression: "form.price",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    [
                      _c("v-checkbox", {
                        attrs: { label: "Paid" },
                        model: {
                          value: _vm.form.paid,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "paid", $$v)
                          },
                          expression: "form.paid",
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
          _vm._v(" "),
          _c("v-card-text"),
          _vm._v(" "),
          _c(
            "v-card-actions",
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "inertia-link",
                {
                  staticClass:
                    "v-btn v-btn--text theme--light v-size--default ",
                  attrs: {
                    href: "/admin/litters/" + _vm.puppy.litter.id + "/edit",
                  },
                },
                [_vm._v("Cancel")]
              ),
              _vm._v(" "),
              _c("v-btn", { attrs: { text: "" }, on: { click: _vm.submit } }, [
                _vm._v("Save"),
              ]),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: { right: "", color: "green", timeout: 4000 },
          model: {
            value: _vm.snackbar,
            callback: function ($$v) {
              _vm.snackbar = $$v
            },
            expression: "snackbar",
          },
        },
        [_vm._v("\n    " + _vm._s(_vm.snackbarText) + "\n  ")]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);