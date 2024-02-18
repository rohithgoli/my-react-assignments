### Is JSX mandatory for React ?
##### No JSX is not mandatory for React as we can create elements using createElement
but to make our code readable and maintainable, we prefer JSX

### Is ES6 mandatory for React ?
##### we can still use React without ES6

### How can I write comments in JSX ?
##### we can write JavaScript in JSX inside {}, so, we will use the same feature to write comments ==> {/* Hello */}

### What is <React.Fragment></React.Fragment> and <></> ?
##### While returning JSX from Function Component, there must be ONLY one parent, which might not be possible across all UI scenarios
We can use either of them as parent and return the JSX

### What is Virtual DOM ?
##### React creates Virtual DOM, which is a JavaScript Object, and is representation of Actual DOM

### What is Reconciliation in React ?
##### 
* Updating the entire DOM tree is very costlier operation
* React creates a virtual DOM & whenever change occur, a updated virtual DOM is created
* React diffs these virtual DOM's to find optimal way to update actual DOM and this process is termed as Reconciliation

### What is React Fiber ?
##### An architecture behind React core algorithm whose main feature is incremental rendering 
split rendering work into chunks and spread it out over multiple frames

### Why we need keys in React ? When do we need keys in React ?
##### Keys allow react to identify the elements which need change rather than tearing down entire DOM tree and re-rendering everything which is major pain-point if elements to be rendered are many
keys are generally attached when repeatable elements exists such as list of elements

### Can we use index as keys in React ?
##### No, using index as key is an anti-pattern

### What is props in React ?
##### props(properties) are the arguments being passed to React Component which helps to transfer data among Components

### What is a Config Driven UI ?
##### Data for UI is provided by backend layer, and depending on its configuration, UI changes such as Application may adapt multiple UI configuration based on Location etc...
This is called Config Driven UI

