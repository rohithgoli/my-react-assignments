### What is Emmet ?
##### VS Code, a code editor uses Emmet, It basically generates some code for us
eg: html:5 --> Basic skeleton of HTML

### Difference between a Library and Framework ?
##### In the Context of Application Development, 
Library target a specific functionality whereas Framework provides everything required to develop a complete application

### What is CDN ? Why do we use it ?
##### CDN, acronymn for Content Delivery Network, 
is a group of servers spread out over a region or across the world which work together to speed up content delivery on the web

These servers temporarily store webpage content like images, HTML, js & video and send cached content to users who load the page

##### As a developer, we use CDN because:
* Faster Performance
    * Decreasing the distance between where content is stored and where it needs to go
    * Reducing file sizes to increase load speed
    * Optimizing server infrastructure to respond to user requests more quickly
* Reliability
* Cost Savings
* Resilience against attack

### Why is React known as React ?
##### Unlike in earlier approach which are explicit to make desired changes in DOM, 
React provides implicit approach where React library reacts to the User actions with UI to get the desired changes

### What is crossorigin in script tag ?
##### It is an attribute which sets the mode of request to an HTTP CORS Request

### Difference between React and ReactDOM ?
##### React, a library to build SPA across devices. It is the core
ReactDOM is needed to modify the DOM

### What is difference between react.development.js and react.production.js files via CDN ?
##### Based on application environment, respective files should be used

### What is async and defer ?
##### These are boolean attributes which are used in script tags to load the external scripts efficiently into web page

Neither async nor defer --> HTML parsing continues, & when script tag is encoutered ==> pause Parsing -->-- fetch scripts --> execute scripts -->-- resume Parsing

with async --> HTML parsing continues & when script tag with async is encountered ==> continue Parsing & perform fetching scripts --> once scripts are fetched, resume Parsing & execute scripts -->-- once script execution is completed, resume Parsing

with defer --> HTML parsing continues & when script tag with defer is encoutered ==> continue Parsing & perform fetching scripts --> after Parsing is completed --> execute fetched scripts

#### while executing scripts, async does not guarantee the order whereas defer maintains the order