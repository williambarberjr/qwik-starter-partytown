import { e as expensiveComputationDone } from './q-6cef451f.js';
import { c as qHook, h } from './q-88a1bc53.js';

const MyApp_onRender = /*#__PURE__*/ qHook((props, state)=>{
    console.log('Qwik: MyApp component is rendering...');
    return h("div", {
        id: "my-app",
        ...expensiveComputationDone(qHook(()=>import('./q-d70acbd9.js')
        , "MyApp_onRender2"))
    }, h("p", {
        style: {
            'text-align': 'center'
        }
    }, h("a", {
        href: "https://github.com/builderio/qwik"
    }, h("img", {
        alt: "Qwik Logo",
        width: 400,
        src: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F667ab6c2283d4c4d878fb9083aacc10f"
    }))), h("p", null, "Congratulations ", h("a", {
        href: "https://github.com/builderio/qwik"
    }, "Qwik"), " with", ' ', h("a", {
        href: "https://github.com/BuilderIO/partytown"
    }, "Partytown"), " is working!"), h("p", null, "Expensive script running in ", h("a", {
        href: "https://github.com/BuilderIO/partytown"
    }, "Partytown"), ' ', "is", ' ', state.running ? h("span", {
        style: {
            'background-color': 'red',
            color: 'white',
            padding: '.1em'
        }
    }, "running") : h("span", {
        style: {
            'background-color': 'green',
            color: 'white',
            padding: '.1em'
        }
    }, "finished"), "."), h("p", null, "Next steps:"), h("ol", null, h("li", null, "Open dev-tools network tab and notice that no JavaScript was downloaded by the main thread to render this page. (", h("code", null, "partytown.js"), " is used to execute things of main thread and not for rendering the application.)"), h("li", null, "Partytown executes ", h("code", null, "<script>"), " tag that contains a simulation of expensive script. The expensive script simplation keeps the web-worker thread busy for 2.5 seconds, leaving main-thread free for user interactions. (Without Partytown the script would block the main thread resulting in poor user experience.)"), h("li", null, "Once the expensive operation is finished it dispatches custom event (", h("code", null, "expensivecomputationdone"), ") that this component listens on. It is only at that time that Qwik lazy-loads the component render function and updates the UI. (See network tab.)"), h("li", null, "Try interacting with this component by changing", ' ', h("input", {
        value: state.name,
        "on:keyup": qHook(()=>import('./q-8a4fd352.js')
        , "MyApp_onRender_on_keyup")
    }), "."), h("li", null, "Observe that the binding changes: ", h("code", null, "Hello ", state.name, "!")), h("li", null, "Notice that Qwik automatically lazily-loaded and hydrated the component upon interaction without the developer having to code that behavior. (Lazy hydration is what gives even large apps instant on behavior.)"), h("li", null, "Read the docs ", h("a", {
        href: "https://github.com/builderio/qwik"
    }, "here"), "."), h("li", null, "Replace the content of this component with your code."), h("li", null, "Build amazing web-sites with unbeatable startup performance.")), h("hr", null), h("p", {
        style: {
            'text-align': 'center'
        }
    }, "Made with ❤️ by", ' ', h("a", {
        target: "_blank",
        href: "https://www.builder.io/"
    }, "Builder.io")));
});

export { MyApp_onRender };
