### What are various ways to add images into our App? Explain with code examples
##### We can add images to App through
* <img/> tag with src attribute, where value is either relative path or link to specific resource on web

### What would happen if we do console.log(useState()) ?
##### useState hook is utility to manage state variables of a Component and returns an array which consists of two values
* current value of state variable
* function to set the value of state variable

### How will useEffect behave if we don't add a dependency array ?
##### useEffect is hook, a utility function provided by React which is invoked after Component render
* useEffect hook takes two arguments
    * a callback function
    * Dependency array(not mandatory to be provided)
* If Dependency Array is not added, callback function is invoked on every rendering of component
* If Empty Dependency Array is added, callback function is invoked only on initial render of component
* If Dependency Array is provided, callback function is invoked on initial render of the component & everytime any of the items value in dependency array got modified

### What is SPA ?
##### Unlike regular applications which make request to fetch resources(html, css, js) for specific path as and when it changes, Single Page Applications fetches entire resources on initial fetch & display UI according to user actions without reloading the entire webpage

### What is the difference between Client Side Routing and Server Side Routing ?
##### In Server Side Routing, whenever user interacts with a Link, Request is made to Server to fetch the resources appropriate to that Link and display the UI by routing to specific webpage through refreshing
whereas, In Client Side Routing, based on user Interactions with Link, Javascript handles the routing of the UI without entire webpage refresh