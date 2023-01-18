'use strict';

var myApp = require('./my-app-84606e05.js');
var core = require('./core-3aa532cf.js');

const MyApp_onRender = /*#__PURE__*/ core.qHook((props, state)=>{
    console.log('Qwik: MyApp component is rendering...');
    return core.h("div", {
        id: "my-app",
        ...myApp.expensiveComputationDone(core.qHook(()=>Promise.resolve().then(function () { return require('./h_my-app-d8155436.js'); })
        , "MyApp_onRender2"))
    }, core.h("p", {
        style: {
            'text-align': 'center'
        }
    }, core.h("a", {
        href: "https://github.com/builderio/qwik"
    }, core.h("img", {
        alt: "Qwik Logo",
        width: 400,
        src: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F667ab6c2283d4c4d878fb9083aacc10f"
    }))), core.h("p", null, "Congratulations ", core.h("a", {
        href: "https://github.com/builderio/qwik"
    }, "Qwik"), " with", ' ', core.h("a", {
        href: "https://github.com/BuilderIO/partytown"
    }, "Partytown"), " is working!"), core.h("p", null, "Expensive script running in ", core.h("a", {
        href: "https://github.com/BuilderIO/partytown"
    }, "Partytown"), ' ', "is", ' ', state.running ? core.h("span", {
        style: {
            'background-color': 'red',
            color: 'white',
            padding: '.1em'
        }
    }, "running") : core.h("span", {
        style: {
            'background-color': 'green',
            color: 'white',
            padding: '.1em'
        }
    }, "finished"), "."), core.h("p", null, "Next steps:"), core.h("ol", null, core.h("li", null, "Open dev-tools network tab and notice that no JavaScript was downloaded by the main thread to render this page. (", core.h("code", null, "partytown.js"), " is used to execute things of main thread and not for rendering the application.)"), core.h("li", null, "Partytown executes ", core.h("code", null, "<script>"), " tag that contains a simulation of expensive script. The expensive script simplation keeps the web-worker thread busy for 2.5 seconds, leaving main-thread free for user interactions. (Without Partytown the script would block the main thread resulting in poor user experience.)"), core.h("li", null, "Once the expensive operation is finished it dispatches custom event (", core.h("code", null, "expensivecomputationdone"), ") that this component listens on. It is only at that time that Qwik lazy-loads the component render function and updates the UI. (See network tab.)"), core.h("li", null, "Try interacting with this component by changing", ' ', core.h("input", {
        value: state.name,
        "on:keyup": core.qHook(()=>Promise.resolve().then(function () { return require('./h_my-app-78217772.js'); })
        , "MyApp_onRender_on_keyup")
    }), "."), core.h("li", null, "Observe that the binding changes: ", core.h("code", null, "Hello ", state.name, "!")), core.h("li", null, "Notice that Qwik automatically lazily-loaded and hydrated the component upon interaction without the developer having to code that behavior. (Lazy hydration is what gives even large apps instant on behavior.)"), core.h("li", null, "Read the docs ", core.h("a", {
        href: "https://github.com/builderio/qwik"
    }, "here"), "."), core.h("li", null, "Replace the content of this component with your code."), core.h("li", null, "Build amazing web-sites with unbeatable startup performance.")), core.h("hr", null), core.h("p", {
        style: {
            'text-align': 'center'
        }
    }, "Made with ❤️ by", ' ', core.h("a", {
        target: "_blank",
        href: "https://www.builder.io/"
    }, "Builder.io")));
});

exports.MyApp_onRender = MyApp_onRender;
