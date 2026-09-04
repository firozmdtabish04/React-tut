import React from "react";
import UseStateDemo from "./UseStateDemo";
import UseEffectDemo from "./UseEffectDemo";
import UseContextDemo from "./UseContextDemo";
import UseRefDemo from "./UseRefDemo";
import UseMemoDemo from "./UseMemoDemo";
import UseCallbackDemo from "./UseCallbackDemo";
import UseReducerDemo from "./UseReducerDemo";
import UseIdDemo from "./UseIdDemo";
import UseTransitionDemo from "./UseTransitionDemo";
import UseDeferredDemo from "./UseDeferredDemo";
import UseImperativeDemo from "./UseImperativeDemo";
import UseLayoutDemo from "./UseLayoutDemo";
import CustomHookDemo from "./CustomHookDemo";
import EventHandlingDemo from "../EventHandling";

const hooks = [
  {
    title: "1. useState",
    theory:
      "useState is used to create and update state in functional components.",
    syntax: "const [state, setState] = useState(initialValue);",
    points: [
      "Stores component data.",
      "Updates trigger re-render.",
      "Can store numbers, strings, arrays, and objects.",
    ],
    demo: <UseStateDemo />,
  },
  {
    title: "2. useEffect",
    theory:
      "useEffect performs side effects after rendering, such as API calls or timers.",
    syntax: "useEffect(() => { /* code */ }, [dependencies]);",
    points: [
      "Runs after rendering.",
      "Empty dependency array runs only once.",
      "Can return a cleanup function.",
    ],
    demo: <UseEffectDemo />,
  },
  {
    title: "3. useContext",
    theory:
      "useContext accesses shared data from Context without prop drilling.",
    syntax: "const value = useContext(MyContext);",
    points: [
      "Avoids passing props through many components.",
      "Works with Context Provider.",
      "Useful for themes and authentication.",
    ],
    demo: <UseContextDemo />,
  },
  {
    title: "4. useRef",
    theory:
      "useRef stores mutable values and accesses DOM elements without re-rendering.",
    syntax: "const ref = useRef(initialValue);",
    points: [
      "Focus input fields.",
      "Store previous values.",
      "Does not trigger re-render.",
    ],
    demo: <UseRefDemo />,
  },
  {
    title: "Event Handling",
    theory:
      "React provides synthetic events to handle user interactions like clicks and form submissions.",
    syntax: "function handleClick() { /* code */ }",
    points: [
      "Use camelCase for event names.",
      "Pass functions, not strings.",
      "Can handle keyboard and mouse events.",
    ],
    demo: <EventHandlingDemo />,
  },

  {
    title: "5. useMemo",
    theory: "useMemo caches expensive calculations for better performance.",
    syntax: "const value = useMemo(() => calculate(), [deps]);",
    points: [
      "Prevents unnecessary calculations.",
      "Runs only when dependencies change.",
      "Useful for large data.",
    ],
    demo: <UseMemoDemo />,
  },
  {
    title: "6. useCallback",
    theory:
      "useCallback returns a memoized function to reduce unnecessary re-renders.",
    syntax: "const fn = useCallback(() => {}, [deps]);",
    points: [
      "Returns a function.",
      "Useful with React.memo.",
      "Improves performance.",
    ],
    demo: <UseCallbackDemo />,
  },
  {
    title: "7. useReducer",
    theory:
      "useReducer manages complex state using actions and a reducer function.",
    syntax: "const [state, dispatch] = useReducer(reducer, initialState);",
    points: [
      "Good for complex logic.",
      "Uses dispatch actions.",
      "Similar to Redux.",
    ],
    demo: <UseReducerDemo />,
  },
  {
    title: "8. useId",
    theory: "useId generates unique IDs for accessibility and forms.",
    syntax: "const id = useId();",
    points: ["Unique IDs.", "Useful for labels.", "Prevents ID conflicts."],
    demo: <UseIdDemo />,
  },
  {
    title: "9. useTransition",
    theory:
      "useTransition marks updates as low priority to keep the UI responsive.",
    syntax: "const [isPending, startTransition] = useTransition();",
    points: [
      "Improves user experience.",
      "Handles heavy rendering.",
      "Shows pending state.",
    ],
    demo: <UseTransitionDemo />,
  },
  {
    title: "10. useDeferredValue",
    theory: "useDeferredValue delays rendering of a changing value.",
    syntax: "const deferred = useDeferredValue(value);",
    points: ["Useful for search.", "Reduces lag.", "Improves responsiveness."],
    demo: <UseDeferredDemo />,
  },
  {
    title: "11. useImperativeHandle",
    theory:
      "useImperativeHandle customizes what a parent can access through a ref.",
    syntax: "useImperativeHandle(ref, () => ({ method() {} }));",
    points: [
      "Works with forwardRef.",
      "Exposes selected methods.",
      "Keeps child encapsulated.",
    ],
    demo: <UseImperativeDemo />,
  },
  {
    title: "12. useLayoutEffect",
    theory: "useLayoutEffect runs before the browser paints the screen.",
    syntax: "useLayoutEffect(() => {}, []);",
    points: [
      "Runs synchronously.",
      "Useful for measurements.",
      "Avoids visual flicker.",
    ],
    demo: <UseLayoutDemo />,
  },
  {
    title: "13. Custom Hook",
    theory:
      "A Custom Hook is a reusable function that contains shared hook logic.",
    syntax: "function useCustomHook() { return value; }",
    points: ["Starts with 'use'.", "Reuses logic.", "Makes code cleaner."],
    demo: <CustomHookDemo />,
  },
];

function HooksComp() {
  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="mb-8 text-center text-4xl font-bold text-blue-600">
        React Hooks Complete Guide
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {hooks.map((hook) => (
          <div key={hook.title} className="p-5 bg-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-blue-700">{hook.title}</h2>

            <p className="mt-3 text-gray-700">
              <span className="font-semibold">Theory:</span> {hook.theory}
            </p>

            <div className="mt-3">
              <h3 className="font-semibold text-gray-800">Syntax</h3>
              <pre className="p-3 mt-1 bg-gray-900 text-green-300 rounded-lg text-sm overflow-x-auto">
                {hook.syntax}
              </pre>
            </div>

            <div className="mt-3">
              <h3 className="font-semibold text-gray-800">Key Points</h3>
              <ul className="mt-1 list-disc list-inside text-gray-700">
                {hook.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="mt-5 pt-4 border-t">
              <h3 className="mb-2 font-semibold text-gray-800">
                Working Example
              </h3>
              {hook.demo}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HooksComp;
