"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Admin_Settings_index_vue"],{

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
//
//
//
//
//
//
//
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/Settings/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/Settings/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  layout: _layouts_Admin_Layout__WEBPACK_IMPORTED_MODULE_0__["default"],
  props: ['settings'],
  data: function data() {
    return {};
  }
});

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

/***/ "./resources/js/pages/Admin/Settings/index.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/Admin/Settings/index.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_1142fccf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1142fccf&scoped=true& */ "./resources/js/pages/Admin/Settings/index.vue?vue&type=template&id=1142fccf&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/Admin/Settings/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_1142fccf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_1142fccf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1142fccf",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Admin/Settings/index.vue"
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

/***/ "./resources/js/pages/Admin/Settings/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/Admin/Settings/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/Settings/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/pages/Admin/Settings/index.vue?vue&type=template&id=1142fccf&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/pages/Admin/Settings/index.vue?vue&type=template&id=1142fccf&scoped=true& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1142fccf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1142fccf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1142fccf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=1142fccf&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/Settings/index.vue?vue&type=template&id=1142fccf&scoped=true&");


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
                  [
                    _c("span", [_vm._v("Dogs")]),
                    _vm._v(" "),
                    _c("v-icon", [_vm._v("mdi-dog")]),
                  ],
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "inertia-link",
                {
                  directives: [{ name: "ripple", rawName: "v-ripple" }],
                  attrs: { href: "/admin/litters", as: "v-btn" },
                },
                [
                  [
                    _c("span", [_vm._v("Litters")]),
                    _vm._v(" "),
                    _c("v-icon", [_vm._v("mdi-family-tree")]),
                  ],
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "inertia-link",
                {
                  directives: [{ name: "ripple", rawName: "v-ripple" }],
                  attrs: { href: "/admin/todos", as: "v-btn" },
                },
                [
                  [
                    _c("span", [_vm._v("Todo")]),
                    _vm._v(" "),
                    _c("v-icon", [_vm._v("mdi-calendar-edit")]),
                  ],
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "inertia-link",
                {
                  directives: [{ name: "ripple", rawName: "v-ripple" }],
                  attrs: { href: "/admin/families", as: "v-btn" },
                },
                [
                  [
                    _c("span", [_vm._v("Families")]),
                    _vm._v(" "),
                    _c("v-icon", [_vm._v("mdi-account-group")]),
                  ],
                ],
                2
              ),
              _vm._v(" "),
              _c("inertia-link", {
                directives: [{ name: "ripple", rawName: "v-ripple" }],
                attrs: { href: "/admin/settings", as: "v-btn" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function () {
                      return [
                        _c("span", [_vm._v("Settings")]),
                        _vm._v(" "),
                        _c("v-icon", [_vm._v("mdi-cog")]),
                      ]
                    },
                    proxy: true,
                  },
                ]),
              }),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/Settings/index.vue?vue&type=template&id=1142fccf&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/Settings/index.vue?vue&type=template&id=1142fccf&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
  return _c("v-container", { attrs: { fluid: "" } }, [_vm._v("\n  Settings\n")])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);