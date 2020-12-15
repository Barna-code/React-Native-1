//LETS CREATE A REACT COMPONENT SO THAT WE HAVE A REUSEABLE CUSTOM HTML ELEMENT instead of repeating the HTML code
// a react component is just a function


//So here what I'll do is I'll actually add an argument to this person function which I'll name props,React automatically gives me an argument in that function I turned into a component with this syntax down here with person JSX code and prop simply contains all the attributes I add to my own component so I could add name and age

function Person(props) {
  return (
    //looks strange
    //html in js
    React.createElement("div", { className: "person" },
    React.createElement("h1", null, props.name),
    React.createElement("p", null, "The age: ", props.age)));




}

var app =
React.createElement("div", null,
React.createElement(Person, { name: "Mani", age: "34" }),
React.createElement(Person, { name: "Ashu", age: "36" }));


//has a render method,this method allows us to render a Javascript function as a component to the real DOM and that treat it as a component part is exactly what React takes care about.

//We can then render this function but not by referencing it like this but by actually turning it into a HTML element, again behind the scenes using this JSX syntax which is understood by React.

//So I write this as my custom self-closing HTML element and render then takes another argument where I specify where to render this and there I reach out to the document and I can use the query selector,so normal Javascript code to select any element with the ID P1 and that again is normal Javascript code,the normal query selector. With that, I'm telling React that I want to render this function, the person component in this place here on the left and it does. Now the styling is lost because class actually is a keyword in Javascript, so React turns this into class name and that's the best proof that this looks like HTML but isn't.

//reuse again n again

//I got the two elements now next to each other because now they're rendered in the same hook, in the same element so to say, in the same div and this method of only having one hook, one React DOM render call and then creating app there with nested components is the far more popular way of creating React apps.
ReactDOM.render(app, document.querySelector('#app'));