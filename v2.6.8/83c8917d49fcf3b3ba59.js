(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{2786:function(n,e,r){var content=r(2972);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,r(20).default)("c966ba2a",content,!0,{sourceMap:!0})},2971:function(n,e,r){"use strict";r(2786)},2972:function(n,e,r){var t=r(19)(!0);t.push([n.i,'.clearfix[data-v-8c69df68]:after,.clearfix[data-v-8c69df68]:before{content:" ";display:table}.clearfix[data-v-8c69df68]:after{clear:both}.list-unstyled[data-v-8c69df68]{margin:0;padding:0;list-style-type:none}.no-select[data-v-8c69df68]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.no-resize[data-v-8c69df68]{resize:none}.hand[data-v-8c69df68]{cursor:pointer;cursor:hand}.fixed[data-v-8c69df68]{table-layout:fixed}.clip[data-v-8c69df68]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.clip[data-v-8c69df68],.force-wrap[data-v-8c69df68]{word-wrap:break-word}.force-wrap[data-v-8c69df68]{white-space:normal}.bordered-section[data-v-8c69df68]{border-bottom:1px solid var(--border);margin-bottom:20px;padding-bottom:20px}.section-divider[data-v-8c69df68]{margin-bottom:20px;margin-top:20px}#air-gap[data-v-8c69df68]  .image-group .radio-group{display:flex}#air-gap[data-v-8c69df68]  .image-group .radio-group .radio-container{margin-right:30px}#air-gap .chooseFile[data-v-8c69df68]{display:flex;align-items:center}',"",{version:3,sources:["webpack://shell/pages/c/_cluster/harvester/airgapupgrade/index.vue"],names:[],mappings:"AAyME,mEAEE,WAAA,CACA,aAAA,CAEF,iCACE,UAAA,CAsDJ,gCAjDE,QAAA,CACA,SAAA,CACA,oBAAA,CAgDF,4BA5CE,wBAAA,CACA,qBAAA,CACA,oBAAA,CACA,gBAAA,CA0CF,4BAtCE,WAAA,CAuCF,uBAnCE,cAAA,CACA,WAAA,CAmCF,wBA/BE,kBAAA,CAgCF,uBA5BE,sBAAA,CACA,eAAA,CACA,kBACA,CA0BF,oDA1BE,oBAKA,CAqBF,6BArBE,kBAAA,CAsBF,mCAlBE,qCAAA,CACA,kBAAA,CACA,mBAAA,CAiBF,kCAbE,kBAAA,CACA,eAAA,CAgZA,qDACE,YAAA,CACA,sEACE,iBAAA,CAGJ,sCACE,YAAA,CACA,kBAAA",sourcesContent:["$header-font: 'Poppins', sans-serif;\n$body-font: 'Lato', arial, helvetica, sans-serif;\n$mono-font: 'Roboto Mono', monospace;\n\n$max-width: 1440px !default;\n$min-width: 75% !default;\n$input-height: 61px;\n$unlabeled-input-height: 40px;\n\n$input-padding-lg: 18px;\n$input-padding-sm: 10px;\n$input-line-height: 18px;\n\n$column-gutter: 1.75%;\n\n$sideways-tabs-width: 200px;\n\n$array-list-remove-margin: 75px;\n\n$z-indexes: (\n  zero: 0,\n  default: 1,\n  overContent: 2,\n  hoverOverContent: 3,\n\n  mainHeader: 12,\n\n  tableGroup: 10,\n  fixedTableHeader: 11,\n\n  modalOverlay: 20,\n  modalContent: 21,\n\n  tooltip: 30,\n\n  dropdownOverlay: 40,\n  dropdownContent: 41,\n\n  loadingOverlay: 50,\n  loadingContent: 51\n);\n\n// Usage Example:\n// @media only screen and (min-width: map-get($breakpoints, '--viewport-*')) {\n// }\n$breakpoints: (\n  '--viewport-4':  480px, // Phone\n  '--viewport-7':  768px, // Tablet\n  '--viewport-9':  992px, // Laptop/Desktop\n  '--viewport-12': 1281px, // Desktop\n);\n\n$font-size-h2: 21px;\n\n/*\n * Global spacing variables\n */\n$space-s: 10px;\n$space-m: 20px;\n$space-l: 40px;\n///Computes the \"brightness\" of a color\n@use \"sass:math\";\n\n@function brightness($color) {\n  @if type-of($color) == color {\n    @return math.div(red($color) * 0.299 + green($color) * 0.587 + blue($color) * 0.114, 255) * 100%;\n  }\n  @else {\n    @return unquote(\"brightness(#{$color})\");\n  }\n}\n\n\n///Select the more readable foreground color for a given background color.\n@function contrast-color($color, $dark: $contrasted-dark, $light: $contrasted-light) {\n  @if $color == null {\n    @return null;\n  }\n  @else {\n    $color-brightness: brightness($color);\n    $dark-text-brightness: brightness($dark);\n    $light-text-brightness: brightness($light);\n    @return if(abs($color-brightness - $light-text-brightness) > abs($color-brightness - $dark-text-brightness), $light, $dark);\n  }\n}\n\n@function add-z-index($key, $value) {\n  @return map-merge($z-indexes, ($key: $value));\n}\n\n@function z-index($key) {\n  @if map-has-key($z-indexes, $key) {\n    @return map-get($z-indexes, $key);\n  }\n\n  @warn \"Unknown key `#{$key}` in $z-indexes\";\n  @return null;\n}\n\n// _decimal.scss | MIT License | gist.github.com/terkel/4373420\n\n// Round a number to specified digits.\n//\n// @param  {Number} $number A number to round\n// @param  {Number} [$digits:0] Digits to output\n// @param  {String} [$mode:round] (round|ceil|floor) How to round a number\n// @return {Number} A rounded number\n// @example\n//     decimal-round(0.333)    => 0\n//     decimal-round(0.333, 1) => 0.3\n//     decimal-round(0.333, 2) => 0.33\n//     decimal-round(0.666)    => 1\n//     decimal-round(0.666, 1) => 0.7\n//     decimal-round(0.666, 2) => 0.67\n//\n@function decimal-round ($number, $digits: 0, $mode: round) {\n  $n: 1;\n  // $number must be a number\n  @if type-of($number) != number {\n      @warn '#{ $number } is not a number.';\n      @return $number;\n  }\n  // $digits must be a unitless number\n  @if type-of($digits) != number {\n      @warn '#{ $digits } is not a number.';\n      @return $number;\n  } @else if not unitless($digits) {\n      @warn '#{ $digits } has a unit.';\n      @return $number;\n  }\n  @for $i from 1 through $digits {\n      $n: $n * 10;\n  }\n  @if $mode == round {\n      @return math.div(round($number * $n), $n);\n  } @else if $mode == ceil {\n      @return math.div(ceil($number * $n), $n);\n  } @else if $mode == floor {\n      @return math.div(floor($number * $n), $n);\n  } @else {\n      @warn '#{ $mode } is undefined keyword.';\n      @return $number;\n  }\n}\n\n// Ceil a number to specified digits.\n//\n// @param  {Number} $number A number to round\n// @param  {Number} [$digits:0] Digits to output\n// @return {Number} A ceiled number\n// @example\n//     decimal-ceil(0.333)    => 1\n//     decimal-ceil(0.333, 1) => 0.4\n//     decimal-ceil(0.333, 2) => 0.34\n//     decimal-ceil(0.666)    => 1\n//     decimal-ceil(0.666, 1) => 0.7\n//     decimal-ceil(0.666, 2) => 0.67\n//\n@function decimal-ceil ($number, $digits: 0) {\n  @return decimal-round($number, $digits, ceil);\n}\n\n// Floor a number to specified digits.\n//\n// @param  {Number} $number A number to round\n// @param  {Number} [$digits:0] Digits to output\n// @return {Number} A floored number\n// @example\n//     decimal-floor(0.333)    => 0\n//     decimal-floor(0.333, 1) => 0.3\n//     decimal-floor(0.333, 2) => 0.33\n//     decimal-floor(0.666)    => 0\n//     decimal-floor(0.666, 1) => 0.6\n//     decimal-floor(0.666, 2) => 0.66\n//\n@function decimal-floor ($number, $digits: 0) {\n  @return decimal-round($number, $digits, floor);\n}\n\n@function sizzle-gradient($color) {\n  $angle: 135deg;\n  $startPos: 0%;\n  $start: 0.3;\n  $middlePos: 110px;\n  $middle: 0.1;\n  $endPos: 100%;\n  $end: 0;\n\n  @return transparent linear-gradient(#{$angle},\n      #{rgba($color, $start)} #{$startPos},\n      #{rgba($color, $middle)} #{$middlePos},\n      #{rgba($color, $end)} #{$endPos}\n  ) 0% 0% no-repeat padding-box;\n}\n\n// -----------------------------------------------------------------------------\n// This file contains all application-wide Sass mixins.\n// -----------------------------------------------------------------------------\n\n/// Clear inner floats\n@mixin clearfix() {\n  &:before,\n  &:after {\n    content: \" \"; // 1\n    display: table; // 2\n  }\n  &:after {\n    clear: both;\n  }\n}\n\n@mixin list-unstyled {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\n@mixin no-select {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n@mixin no-resize {\n  resize : none;\n}\n\n@mixin hand {\n  cursor : pointer;\n  cursor : hand;\n}\n\n@mixin fixed {\n  table-layout : fixed;\n}\n\n@mixin clip {\n  text-overflow : ellipsis;\n  overflow      : hidden;\n  white-space   : nowrap;\n  word-wrap     : break-word;\n}\n\n@mixin force-wrap {\n  word-wrap : break-word;\n  white-space: normal;\n}\n\n@mixin bordered-section {\n  border-bottom: 1px solid var(--border);\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n}\n\n@mixin section-divider {\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n\n.clearfix         { @include clearfix; }\n.list-unstyled    { @include list-unstyled }\n.no-select        { @include no-select }\n.no-resize        { @include no-resize }\n.hand             { @include hand }\n.fixed            { @include fixed }\n.clip             { @include clip }\n.force-wrap       { @include force-wrap }\n.bordered-section { @include bordered-section }\n.section-divider  { @include section-divider }\n\n/// Sets the specified background color and calculates a dark or light contrasted text color.\n@mixin contrasted($background-color, $dark: $contrasted-dark, $light: $contrasted-light) {\n  color: contrast-color($background-color, $dark, $light);\n\n  &:hover {\n    text-decoration: underline;\n    color: var(--body-text);\n  }\n}\n\n/// Sets base color and darkens bg on hover\n@mixin bg-lighten($bg) {\n  background: $bg;\n  * {\n    background:lighten($bg,20%);\n  }\n}\n\n@mixin link-color($color, $hover) {\n  @if not($hover) {\n    $hover: $color;\n  }\n\n  color: $color;\n\n  &:hover\n   {\n    text-decoration: underline;\n    color: $hover;\n  }\n}\n\n@mixin icon-rotate($degrees, $rotation) {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=#{$rotation});\n  -webkit-transform: rotate($degrees);\n      -ms-transform: rotate($degrees);\n          transform: rotate($degrees);\n}\n\n@mixin icon-flip($horiz, $vert, $rotation) {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=#{$rotation});\n  -webkit-transform: scale($horiz, $vert);\n      -ms-transform: scale($horiz, $vert);\n          transform: scale($horiz, $vert);\n}\n\n@mixin input-status-color {\n  &, &.focused {\n    &.success {\n      border: solid 1px var(--success);\n      input, .selected {\n        color: var(--success);\n      }\n\n      .vs__actions:after {\n        color: var(--success);\n      }\n    }\n\n    &.warning {\n      border: solid 1px var(--warning);\n      input, .selected {\n        color: var(--warning);\n      }\n\n      .vs__actions:after {\n        color: var(--warning);\n      }\n    }\n\n    &.error {\n      border: solid 1px var(--error);\n\n      > label {\n        color: var(--error);\n      }\n\n      .vs__actions:after {\n        color: var(--error);\n      }\n    }\n  }\n}\n\n@mixin form-focus {\n  // Focus for form like elements (not to be confused with basic :focus style)\n  outline: none;\n  border-color: var(--outline);\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n#air-gap {\n  ::v-deep .image-group .radio-group {\n    display: flex;\n    .radio-container {\n      margin-right: 30px;\n    }\n  }\n  .chooseFile {\n    display: flex;\n    align-items: center;\n  }\n}\n"],sourceRoot:""}]),n.exports=t},3200:function(n,e,r){"use strict";r.r(e);var t=r(7),o=(r(2),r(3),r(4),r(5),r(33),r(16),r(10),r(17),r(28),r(72),r(26),r(54)),l=r(47),c=r(14),d=r(27),m=r(418),f=r(0),$=r(74),A=r(15),v={NEW:"new",EXIST:"exist"},h="download",x="upload",k={name:"HarvesterAirgapUpgrade",components:{CruResource:o.a,LabeledSelect:d.a,LabeledInput:c.a,RadioGroup:l.b,UpgradeInfo:m.default},fetch:function(){var n=this;return Object(t.a)(regeneratorRuntime.mark((function e(){var r,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.$store.dispatch("harvester/findAll",{type:f.o.IMAGE});case 2:return e.next=4,n.$store.dispatch("harvester/create",{type:f.o.UPGRADE,metadata:{generateName:"hvst-upgrade-",namespace:"harvester-system"},spec:{image:""}});case 4:return r=e.sent,e.next=7,n.$store.dispatch("harvester/create",{type:f.o.IMAGE,metadata:{name:"",namespace:"harvester-system",generateName:"image-",annotations:{}},spec:{sourceType:x,displayName:"",checksum:""}});case 7:t=e.sent,n.value=r,n.imageValue=t;case 10:case"end":return e.stop()}}),e)})))()},data:function(){return{value:null,file:{},imageId:"",imageSource:v.NEW,sourceType:x,imageValue:null,errors:[],IMAGE_METHOD:v}},computed:{doneRoute:function(){return"c-cluster-product-resource"},osImageOptions:function(){return this.$store.getters["harvester/all"](f.o.IMAGE).filter((function(n){return n.isOSImage})).map((function(n){return{label:n.spec.displayName,value:n.id,disabled:!n.isReady}}))},uploadImage:function(){return this.imageSource===v.NEW},fileName:function(){var n;return(null===(n=this.file)||void 0===n?void 0:n.name)||""}},methods:{done:function(){this.$router.push({name:this.doneRoute,params:{resource:f.o.SETTING,product:"harvester"}})},save:function(n){var e=this;return Object(t.a)(regeneratorRuntime.mark((function r(){var t,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t=null,e.errors=[],e.imageValue.spec.displayName||!e.uploadImage){r.next=6;break}return e.errors.push(e.$store.getters["i18n/t"]("validation.required",{key:e.t("generic.name")})),n(!1),r.abrupt("return");case 6:if(r.prev=6,e.imageSource!==v.NEW){r.next=36;break}if(e.imageValue.metadata.annotations[A.n.OS_UPGRADE_IMAGE]="True",e.sourceType!==x){r.next=24;break}if(e.imageValue.spec.sourceType=x,(o=e.file).name){r.next=16;break}return e.errors.push(e.$store.getters["i18n/t"]("harvester.setting.upgrade.selectExitImage")),n(!1),r.abrupt("return");case 16:return e.imageValue.spec.url="",e.imageValue.metadata.annotations[A.n.IMAGE_NAME]=o.name,r.next=20,e.imageValue.save();case 20:(t=r.sent).uploadImage(o),r.next=33;break;case 24:if(e.sourceType!==h){r.next=33;break}if(e.imageValue.spec.sourceType=h,e.imageValue.spec.url){r.next=30;break}return e.errors.push(e.$store.getters["i18n/t"]("harvester.setting.upgrade.imageUrl")),n(!1),r.abrupt("return");case 30:return r.next=32,e.imageValue.save();case 32:t=r.sent;case 33:e.value.spec.image=t.id,r.next=41;break;case 36:if(e.imageSource!==v.EXIST){r.next=41;break}if(e.imageId){r.next=40;break}return e.errors.push(e.$store.getters["i18n/t"]("harvester.setting.upgrade.chooseFile")),r.abrupt("return");case 40:e.value.spec.image=e.imageId;case 41:return r.next=43,e.value.save();case 43:e.done(),n(!0),r.next=51;break;case 47:r.prev=47,r.t0=r.catch(6),e.errors=Object($.c)(r.t0),n(!1);case 51:case"end":return r.stop()}}),r,null,[[6,47]])})))()},handleFileUpload:function(){this.file=this.$refs.file.files[0]},selectFile:function(){this.$refs.file.value=null,this.$refs.file.click()}},watch:{"imageValue.spec.url":{handler:function(n){var e,r,t=null==n||null===(e=n.split("/"))||void 0===e?void 0:e.pop(),o=(null==t?void 0:t.split("."))||[],l=null==o||null===(r=o.pop())||void 0===r?void 0:r.toLowerCase();o.length>1&&"iso"===l&&!this.imageValue.spec.displayName&&(this.imageValue.spec.displayName=t)},deep:!0},file:function(n){!this.imageValue.spec.displayName&&n.name&&(this.imageValue.spec.displayName=n.name)}}},C=(r(2971),r(1)),component=Object(C.a)(k,(function(){var n=this,e=n.$createElement,r=n._self._c||e;return n.value?r("div",{attrs:{id:"air-gap"}},[r("h3",{staticClass:"mb-20"},[n._v("\n    "+n._s(n.t("harvester.upgradePage.osUpgrade"))+"\n  ")]),n._v(" "),r("CruResource",{attrs:{"done-route":n.doneRoute,resource:n.value,mode:"create",errors:n.errors,"can-yaml":!1,"finish-button-mode":"upgrade","cancel-event":!0},on:{finish:n.save,cancel:n.done}},[r("RadioGroup",{staticClass:"image-group",attrs:{name:"image",options:[n.IMAGE_METHOD.NEW,n.IMAGE_METHOD.EXIST],labels:[n.t("harvester.upgradePage.uploadNew"),n.t("harvester.upgradePage.selectExisting")]},model:{value:n.imageSource,callback:function(e){n.imageSource=e},expression:"imageSource"}}),n._v(" "),r("UpgradeInfo"),n._v(" "),n.uploadImage?r("div",[r("LabeledInput",{staticClass:"mb-20",attrs:{"label-key":"harvester.fields.name",required:""},model:{value:n.imageValue.spec.displayName,callback:function(e){n.$set(n.imageValue.spec,"displayName","string"==typeof e?e.trim():e)},expression:"imageValue.spec.displayName"}}),n._v(" "),r("LabeledInput",{staticClass:"mb-20",attrs:{"label-key":"harvester.setting.upgrade.checksum"},model:{value:n.imageValue.spec.checksum,callback:function(e){n.$set(n.imageValue.spec,"checksum",e)},expression:"imageValue.spec.checksum"}}),n._v(" "),r("RadioGroup",{staticClass:"mb-20 image-group",attrs:{name:"sourceType",options:["upload","download"],labels:[n.t("harvester.image.sourceType.upload"),n.t("harvester.image.sourceType.download")]},model:{value:n.sourceType,callback:function(e){n.sourceType=e},expression:"sourceType"}}),n._v(" "),"download"===n.sourceType?r("LabeledInput",{staticClass:"labeled-input--tooltip",attrs:{required:"","label-key":"harvester.image.url"},model:{value:n.imageValue.spec.url,callback:function(e){n.$set(n.imageValue.spec,"url","string"==typeof e?e.trim():e)},expression:"imageValue.spec.url"}}):r("div",{staticClass:"chooseFile"},[r("button",{staticClass:"btn role-primary",attrs:{type:"button"},on:{click:n.selectFile}},[n._v("\n          "+n._s(n.t("harvester.image.uploadFile"))+"\n          "),r("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"file",attrs:{id:"file",type:"file",accept:".iso"},on:{change:function(e){return n.handleFileUpload()}}})]),n._v(" "),r("span",{staticClass:"ml-20",class:{"text-muted":!n.fileName}},[n._v("\n          "+n._s(n.fileName?n.fileName:n.t("harvester.generic.noFileChosen"))+"\n        ")])])],1):r("LabeledSelect",{staticClass:"mb-20",attrs:{options:n.osImageOptions,required:"","label-key":"harvester.fields.image"},model:{value:n.imageId,callback:function(e){n.imageId=e},expression:"imageId"}})],1)],1):n._e()}),[],!1,null,"8c69df68",null);e.default=component.exports}}]);
//# sourceMappingURL=83c8917d49fcf3b3ba59.js.map