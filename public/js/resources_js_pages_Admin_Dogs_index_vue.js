"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Admin_Dogs_index_vue"],{

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  layout: _layouts_Admin_Layout__WEBPACK_IMPORTED_MODULE_0__["default"],
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
      dialog: false,
      showAddDog: false
    };
  },
  methods: {
    getImage: function getImage(dog) {
      return dog.media.length > 0 ? dog.media[0].original_url : null;
    },
    toggleAll: function toggleAll() {
      var _this = this;

      Object.keys(this.$refs).forEach(function (k) {
        console.log(_this.$refs[k]);

        _this.$refs[k].$el.click();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/Dogs/index.vue?vue&type=style&index=0&id=4bbaea3a&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/Dogs/index.vue?vue&type=style&index=0&id=4bbaea3a&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*\n.container{\n  outline: 2px solid green;\n}\n.row{\n  outline: 2px solid red;\n}\n.col{\n  outline: 2px solid blue;\n}*/\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/Dogs/index.vue?vue&type=style&index=0&id=4bbaea3a&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/Dogs/index.vue?vue&type=style&index=0&id=4bbaea3a&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4bbaea3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=4bbaea3a&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/Dogs/index.vue?vue&type=style&index=0&id=4bbaea3a&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4bbaea3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4bbaea3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
/* harmony import */ var _index_vue_vue_type_template_id_4bbaea3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4bbaea3a&scoped=true& */ "./resources/js/pages/Admin/Dogs/index.vue?vue&type=template&id=4bbaea3a&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/Admin/Dogs/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_4bbaea3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=4bbaea3a&scoped=true&lang=css& */ "./resources/js/pages/Admin/Dogs/index.vue?vue&type=style&index=0&id=4bbaea3a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_4bbaea3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_4bbaea3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4bbaea3a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Admin/Dogs/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

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

/***/ "./resources/js/pages/Admin/Dogs/index.vue?vue&type=style&index=0&id=4bbaea3a&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/pages/Admin/Dogs/index.vue?vue&type=style&index=0&id=4bbaea3a&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4bbaea3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=4bbaea3a&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/Dogs/index.vue?vue&type=style&index=0&id=4bbaea3a&scoped=true&lang=css&");


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

/***/ "./resources/js/pages/Admin/Dogs/index.vue?vue&type=template&id=4bbaea3a&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/pages/Admin/Dogs/index.vue?vue&type=template&id=4bbaea3a&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4bbaea3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4bbaea3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4bbaea3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=4bbaea3a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/Dogs/index.vue?vue&type=template&id=4bbaea3a&scoped=true&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/Dogs/index.vue?vue&type=template&id=4bbaea3a&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/Dogs/index.vue?vue&type=template&id=4bbaea3a&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
              _vm._v(" cards\n    "),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-tab",
            [_c("v-icon", [_vm._v("mdi-view-list")]), _vm._v(" table\n    ")],
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
                            { attrs: { fab: "" } },
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
                              _vm._v(" Add New Dog\n            "),
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
        [_c("v-col", [_c("h1", [_vm._v("My Dogs")])])],
        1
      ),
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
                    _vm._l(_vm.dogs, function (dog, index) {
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
                        [
                          _c("v-hover", {
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "default",
                                  fn: function (ref) {
                                    var hover = ref.hover
                                    return [
                                      _c(
                                        "v-card",
                                        {
                                          staticClass: "mx-auto",
                                          attrs: {
                                            elevation: hover ? 12 : 0,
                                            outlined: "",
                                            "max-width": "350",
                                          },
                                        },
                                        [
                                          _c(
                                            "template",
                                            { slot: "progress" },
                                            [
                                              _c("v-progress-linear", {
                                                attrs: {
                                                  height: "10",
                                                  indeterminate: "",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c("v-img", {
                                            attrs: {
                                              src: _vm.getImage(dog),
                                              "aspect-ratio": "1.1",
                                              contain: "",
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "v-row",
                                            { attrs: { "no-gutters": "" } },
                                            [
                                              _c(
                                                "v-col",
                                                { attrs: { cols: "11" } },
                                                [
                                                  _c(
                                                    "v-card-title",
                                                    {
                                                      staticClass: "text-lg-h6",
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                      " +
                                                          _vm._s(dog.name) +
                                                          "\n                    "
                                                      ),
                                                    ]
                                                  ),
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c("v-spacer"),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: {
                                                    cols: "1",
                                                    "align-self": "center",
                                                  },
                                                },
                                                [
                                                  _c(
                                                    "v-menu",
                                                    {
                                                      attrs: { "offset-y": "" },
                                                      scopedSlots: _vm._u(
                                                        [
                                                          {
                                                            key: "activator",
                                                            fn: function (ref) {
                                                              var on = ref.on
                                                              var attrs =
                                                                ref.attrs
                                                              return [
                                                                _c(
                                                                  "v-icon",
                                                                  _vm._g(
                                                                    _vm._b(
                                                                      {
                                                                        attrs: {
                                                                          fab: "",
                                                                        },
                                                                      },
                                                                      "v-icon",
                                                                      attrs,
                                                                      false
                                                                    ),
                                                                    on
                                                                  ),
                                                                  [
                                                                    _vm._v(
                                                                      "\n                          mdi-dots-vertical\n                        "
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            },
                                                          },
                                                        ],
                                                        null,
                                                        true
                                                      ),
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
                                                                    {
                                                                      name: "ripple",
                                                                      rawName:
                                                                        "v-ripple",
                                                                    },
                                                                  ],
                                                                  attrs: {
                                                                    href: _vm.route(
                                                                      "admin.dogs.edit",
                                                                      {
                                                                        dog: dog.id,
                                                                      }
                                                                    ),
                                                                    as: "v-list-item",
                                                                  },
                                                                },
                                                                [
                                                                  _c("v-icon", [
                                                                    _vm._v(
                                                                      "mdi-circle-edit-outline"
                                                                    ),
                                                                  ]),
                                                                  _vm._v(
                                                                    " Edit\n                          "
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
                                                "v-expansion-panels",
                                                [
                                                  _c(
                                                    "v-expansion-panel",
                                                    [
                                                      _c(
                                                        "v-expansion-panel-header",
                                                        [
                                                          _vm._v(
                                                            "\n                        Genetics\n                      "
                                                          ),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-expansion-panel-content",
                                                        [
                                                          _vm._v(
                                                            "\n                        " +
                                                              _vm._s(dog) +
                                                              "\n                      "
                                                          ),
                                                        ]
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
                                      ),
                                    ]
                                  },
                                },
                              ],
                              null,
                              true
                            ),
                          }),
                        ],
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
              _vm._v(" "),
              _c("v-data-table", {
                staticClass: "elevation-1",
                attrs: {
                  search: _vm.search,
                  "multi-sort": "",
                  headers: [
                    { text: "Name", value: "name" },
                    { text: "Gender", value: "gender" },
                    { text: "Breed", value: "breed" },
                    { text: "Generation", value: "generation" },
                    { text: "Size", value: "size" },
                    { text: "Age (months)", value: "age.months" },
                    { text: "Weight (ounces)", value: "weight.ounces" },
                    { text: "Outside stud", value: "outside_stud" },
                  ],
                  items: _vm.dogs,
                  "items-per-page": 100,
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);