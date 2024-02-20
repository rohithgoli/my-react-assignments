### What is a Microservice ?
##### Modern applications are built on Microservice architecture where each service accounts for single responsibility there by providing scope for ease of developing, management, recovery if need arises
Entire application functionality is delivered through multiple services

### What is Monolith architecture ?
##### Entire application functionality is delivered through single service and is termed as Monolith architecture

### What is the difference between Monolith and Microservice ?
##### Microservice adapts Separation of concerns through Single Responsible Principle unlike Monolith

### Why do we need a useEffect Hook ?
##### useEffect Hook is invoked after initial rendering of Component. If we desired to perform any action after initial rendering of component such as making an API call etc.., we can apply useEffect hook

### What is Optional Chaining ?
##### Value of Object properties can be nested. While accessing a property which is nested inside, there might be situations where certain entities can be empty without value. Trying to access in such situations through dot notation may result in error
By using Optional Chaining (person?.address?.pincode), if property does not exists, it returns null

### What is Shimmer UI ?
##### When component is initially rendered, API call is made to fetch the data, In mean time, UI which represents the interface which is shown once data is fetched is displayed instead of displaying a loader

### What is the difference between JS expression and JS statement ?
##### Multiple JS expressions result in formation of JS statement

### What is Conditional Rendering, explain with a code example
##### If a condition is satisfied i.e evaluated to be true, then we would like to render a Component otherwise we would like to render different Component, This type of rendering the Component based on evaluating a condition is Conditional Rendering
eg: number % 2 === 0 ? "Even" : "Odd"

There might be situations where we would like to render a Component only if condition evaluates to true otherwise not
eg: score === 100 && 'Century'

### What is CORS ?
##### CORS is acronymn for Cross Origin Resource Sharing
In general, web servers interacts each other through HTTP Requests for Resources, in such scenarios, Browser checks the origin of Request & based on CORS policy, it can process the request ahead or can reject

### What is async and await ?
##### Code can be executed in asynchronous manner using async keyword. await keyword can be used in function declared with async keyword ONLY & it helps to transfer the control back and return once the promise is resolved or rejected

### What is the use of *const json = await data.json();*
##### It is used to resolve a Promise for a JavaScript object i.e result of taking JSON as input and parsing it to produce a JavaScript object