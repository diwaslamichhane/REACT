# VIRTUAL DOM, FIBER & RECONCILIATION

### 1. Virtual DOM:

- Virtual DOM ia a copy of real DOM that React uses to update the UI efficiently.
- React compares the old DOM and new virtual DOM and updates only the necessary parts instead of re-rendering the whole DOM.
- This makes React applications faster and more efficient.

- Example:

    function App() {  
    const [count, setCount] = React.useState(0);  
    return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;  
    }  

- When count changes, React updates only the button text instead of re-rendering the whole DOM.


### 2. Reconciliation:

- The process of comparing the old Virtual DOM with the new one and updating only the changed parts is known as Reconciliation.

### 3. Fiber:

- React fiber is the reimplementation of React Reconciliation Algorithm. It breaks rendering work into chunks, prioritizing tasks (eg; animation over data updates) for a smooth experience

- Example: If a large list renders while an animation in running, Fiber pauses the rendering to complete the animation first, preventing UI lag.


Q. How they improve performance ?

- When we update state or props:

1. Virtual DOM: Identifies what changes,
2. Reconciliation: Updates only the necessary parts of the real DOM,
3. Fiber: Schedules and optimizes rendering tasks.