VIRTUAL DOM, FIBER & RECONCILIATION

1. Virtual DOM:

- Virtual DOM ia a copy of real DOM that React uses to update the UI efficiently.
- React compares the old DOM and new virtual DOM and updates only the necessary parts instead of re-rendering the whole DOM.
- This makes React applications faster and more efficient.

- Example:

    function App() {
    const [count, setCount] = React.useState(0);
    return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
    }

- When count changes, React updates only the button text instead of re-rendering the whole DOM.