"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Admin_Pages_create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/Pages/create.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/Pages/create.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helper */ "./resources/js/helper.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    value: Boolean
  },
  data: function data() {
    return {
      form: this.$inertia.form({
        title: '',
        slug: ''
      })
    };
  },
  computed: {
    show: {
      get: function get() {
        return this.value;
      },
      set: function set(value) {
        this.$emit('input', value);
      }
    },
    title: function title() {
      return this.form.title;
    }
  },
  methods: {
    toKebabCase: _helper__WEBPACK_IMPORTED_MODULE_0__.toKebabCase,
    submit: function submit() {
      var _this = this;

      this.form.post(route('admin.page.create'), {
        onSuccess: function onSuccess(data) {
          _this.form.reset();

          _this.show = false;
        },
        onFinish: function onFinish() {}
      });
    }
  },
  watch: {
    title: function title() {
      this.form.slug = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.toKebabCase)(this.form.title).replace('.', '');
    }
  }
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
  var onlyNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (!birthdate || birthdate === '') {
    return null;
  } // given the date of birth, calculate the age


  var today = new Date();
  var birthDate = new Date(birthdate); // age is the number of full years

  var age = today.getFullYear() - birthDate.getFullYear();

  if (onlyNumber) {
    return age;
  } // age is in years, so if the current month is before the birth month, then we're not full years yet


  var years = today.getMonth() < birthDate.getMonth() ? age - 1 : age; // singular or plural year

  var year = years === 1 ? 'year' : 'years';
  return "".concat(years, " ").concat(year);
};

/***/ }),

/***/ "./resources/js/pages/Admin/Pages/create.vue":
/*!***************************************************!*\
  !*** ./resources/js/pages/Admin/Pages/create.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_vue_vue_type_template_id_1b019e50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=1b019e50& */ "./resources/js/pages/Admin/Pages/create.vue?vue&type=template&id=1b019e50&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/pages/Admin/Pages/create.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_1b019e50___WEBPACK_IMPORTED_MODULE_0__.render,
  _create_vue_vue_type_template_id_1b019e50___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Admin/Pages/create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Admin/Pages/create.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/Admin/Pages/create.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/Pages/create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Admin/Pages/create.vue?vue&type=template&id=1b019e50&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/Admin/Pages/create.vue?vue&type=template&id=1b019e50& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_1b019e50___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_1b019e50___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_1b019e50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=template&id=1b019e50& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/Pages/create.vue?vue&type=template&id=1b019e50&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/Pages/create.vue?vue&type=template&id=1b019e50&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Admin/Pages/create.vue?vue&type=template&id=1b019e50& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
      staticClass: "pa-3",
      attrs: { "max-width": "500px" },
      model: {
        value: _vm.show,
        callback: function ($$v) {
          _vm.show = $$v
        },
        expression: "show",
      },
    },
    [
      _c("v-card", [
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
              "v-card-text",
              [
                _c("v-text-field", {
                  attrs: {
                    "error-messages": _vm.form.errors.title,
                    label: "Title",
                    required: "",
                  },
                  model: {
                    value: _vm.form.title,
                    callback: function ($$v) {
                      _vm.$set(_vm.form, "title", $$v)
                    },
                    expression: "form.title",
                  },
                }),
                _vm._v(" "),
                _c("v-text-field", {
                  attrs: {
                    "error-messages": _vm.form.errors.slug,
                    label: "Slug",
                    required: "",
                  },
                  model: {
                    value: _vm.form.slug,
                    callback: function ($$v) {
                      _vm.$set(_vm.form, "slug", $$v)
                    },
                    expression: "form.slug",
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "v-card-actions",
              [
                _c(
                  "v-btn",
                  {
                    attrs: { color: "primary", text: "" },
                    on: {
                      click: function ($event) {
                        $event.stopPropagation()
                        _vm.show = false
                      },
                    },
                  },
                  [_vm._v("Close")]
                ),
                _vm._v(" "),
                _c("v-spacer"),
                _vm._v(" "),
                _c("v-btn", { attrs: { type: "submit", color: "primary" } }, [
                  _vm._v("Create"),
                ]),
              ],
              1
            ),
          ],
          1
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);