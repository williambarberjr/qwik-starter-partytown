import { b as qComponent, c as qHook, d as qEvent } from './q-88a1bc53.js';

const expensiveComputationDone = qEvent('document:expensiveComputationDone');
const MyApp = /*#__PURE__*/ qComponent({
    tagName: 'my-app',
    onMount: qHook(()=>import('./q-c06f6d13.js')
    , "MyApp_onMount"),
    onRender: qHook(()=>import('./q-3ed4c3a8.js')
    , "MyApp_onRender")
});

export { MyApp, expensiveComputationDone };
