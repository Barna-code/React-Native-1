# 
[https://codepen.io/barna-code/pen/bGwqgmw](https://codepen.io/barna-code/pen/bGwqgmw).


why react?
>>
## **************

There are more reasons why we want to use React. React helps us with a problem we'll encounter with normal JavaScript; the UI state becomes difficult to manage. In bigger JavaScript applications, you have to manually target elements in your DOM and if you then change the structure of your HTML code, chances are you will need to change the way you targeted your elements because you used querySelector.

Even if you use jQuery, traversing the DOM is easier, but it's still always something you have to keep in mind.

If you've got more complex web apps where you dynamically add and remove elements, this quickly can become cumbersome. In our course project, we build an app which is highly dynamic where we are able to build a burger and dynamically add and remove ingredients.

>> If you write this with normal JavaScript code, it's going to be a nightmare.

So React helps us by making the whole UI state management a non-issue.>>

It allows us to focus on our business logic instead of keeping our application from exploding.

Additionally, React is maintained by a big community.

So chances are, the React code is written better than we could have ever written it.

So therefore, it's highly-efficient and fast.

The bigger your application gets, the more this matters too.

Finally, React features a huge ecosystem and an extremely-active community which means that there is a great chance that for a given problem you face, you'll find a solution or an extra package you can add to fix it.

### REACT ALTERNATIVES:
There is also Angular and Vue.js as well as others like Backbone and Ember, but Angular and Vue are the most popular alternatives.

All three of them are great at creating highly-scalable web applications that look and feel good to the user.

jQuery is really only about traversing the DOM and targeting elements in the DOM.

$$ React is about just declaring what you see and focusing on the logic instead of focusing on the 'how'. Therefore, React, Angular and Vue allow you to create more powerful
 applications because you can focus on the logic and your business model and not so much on the technical side of actually reaching an element you want to change.


## **********************

### 
When we talk about React, or also about Angular and Vue as a side note, we also have to keep in mind that we can essentially build two kinds of web applications with all these libraries and frameworks.

We can build a single page application or a multi-page application.

In a single page application,
we only get back one single HTML file from the server and we get back this file the first time the user visits the page; so the first time the user visits example.com. Thereafter, everything is managed with JavaScript; with React. The entire page consists of components which are rendered and handled by JavaScript.

On the other hand, in a multi-page application, we get back multiple HTML pages where each page has the content for a given route; a given URL we visited. For example.com and example.com/users, we get back two differenT pages.

That's important.

On multi-page applications, we might also use React, but only to create little widgets, so to say; individually-contained components we dump into that page but the 'entire page' is not managed by React.

We also see this on some pages, but the more popular approach these days is to use the single-page-application approach, because if you manage the entire page with JavaScript, you never have to go back to the server and reload the page.

This is an amazing user experience because everything happens instantly. Even if the user needs
to wait, you're showing a spinner or you're still presenting a reactive web app; you're not just showing a loading page where the user can't do anything.

So in single page applications, our page is built up with components and every component is a React component. The entire page is also managed by a root React component which is exclusively under React's control.

In a multi-page application, on the other hand, we also could split up our app into theoretical components, but actually a lot of the page is just going to be normal HTML and CSS code and some widgets we dump in, like an image gallery or something like that is managed by React.

So, the entire page is not under React's control. The individual widgets don't know of each other's existence.

Now, we only need one ReactDOM.render call because we only have one root app component which is mounted to the DOM and which hosts all other React components. In a multi-page application, we would typically call ReactDOM.render more often to render our different components in different places of the app.

ReactDOM.render allows you to pick a place in your HTML code where you want to render your app. Therefore, you have these widgets which don't know of each other's existence.
