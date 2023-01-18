'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('./core-3aa532cf.js');

const expensiveComputationDone = core.qEvent('document:expensiveComputationDone');
const MyApp = /*#__PURE__*/ core.qComponent({
    tagName: 'my-app',
    onMount: core.qHook(()=>Promise.resolve().then(function () { return require('./h_my-app-8e8c388f.js'); })
    , "MyApp_onMount"),
    onRender: core.qHook(()=>Promise.resolve().then(function () { return require('./h_my-app-6b3af5d4.js'); })
    , "MyApp_onRender")
});

exports.MyApp = MyApp;
exports.expensiveComputationDone = expensiveComputationDone;
