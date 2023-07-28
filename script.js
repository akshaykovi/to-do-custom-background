const h1 = document.querySelector("h1");
h1.className = "coolTitle";
const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul")

button.addEventListener("click", addToListAfterClick); // mouse click
input.addEventListener("keypress", addToListAfterKeypress);



// to return the length of the input so empty value not supported
function inputlength() {
    return input.value.length;
}

/* so here we create a new list in html whenever input is given,
so
1. create a new li element and store it in variable
2. inside li we create text node to store the data 
3.li is a child of ul and we need to add li element in ul
so we get access to ul element in line 3
4. then add/append the newly created li element into the ul element
5. empty value after entering to clear textbox */
function createList() {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    // delete/remove button
    var deleteButton = document.createElement("button");
    //style del button using setattribute
    // how?
    deleteButton.style.backgroundColor = "#212529";
    deleteButton.style.color = "#fff";
    deleteButton.style.float = "right";

    deleteButton.appendChild(document.createTextNode("remove"));
    li.appendChild(deleteButton).addEventListener("click", removeListItem);
    // here we add togle function
    ul.appendChild(li).addEventListener("click", itemDone);
    //to empty input box
    input.value = "";
}
// for function toggle
function itemDone(event) {
    event.target.classList.toggle("done");
}
//function to delete/remove list
function removeListItem(event) {
    event.target.parentNode.remove();
}
// here we check input length and invoke create list to add it onto list
function addToListAfterClick() {
    if (inputlength() > 0) {
        createList();
        console.log("click working,List created");

    }
}

// every keyboard key  has a event num and stuff in events  mdn doc
function addToListAfterKeypress(event) {
    if (inputlength() > 0 && event.keyCode === 13) {
        createList();
    }
}

const css = document.querySelector("p");
const colorLeft = document.querySelector(".colorLeft");
const colorRight = document.querySelector(".colorRight");
const body = document.getElementById("gradient");
// console.log(colorLeft);
// console.log(colorRight);
// console.log(css)

function colorSet() {
    body.style.background =
        "linear-gradient(to right, "
        + colorLeft.value
        + ", "
        + colorRight.value
        + ")";
    css.textContent = body.style.background + ";";

}
//makes input color match the backround
window.onload = colorSet();
colorLeft.addEventListener("input", colorSet);
colorRight.addEventListener("input", colorSet);
// colorLeft.addEventListener("input", function(){
//     console.log(colorLeft.value);
// })
// colorRight.addEventListener("input", function(){
//     console.log(colorRight.value);
// })