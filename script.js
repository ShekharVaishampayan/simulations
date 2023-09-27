var possibilitiesList = [];
function add(){
    entry = document.getElementById("input")
    if (Number(entry.value) == entry.value){
        // Get the value that the user has typed in the input box.
	    const posibility = entry.value;

        // check if posibility and the number form are the same(ignoring type).
        if (posibility == Number(posibility)){

            // Create a paragraph element with no text fo now.
            const element = document.createElement("p");

            // Use the posibility constant and make a text node for the paragraph.
            const output = document.createTextNode(posibility);

            // Add the text node that was created to the paragraph.
            element.appendChild(output);
            possibilitiesList.push(posibility);

            // Add the paragraph to the cards division.
            document.getElementById("cards").appendChild(element);
        } else {
            alert("kindly enter a number")
        }
    } else{
        alert("enter a number")
    }
}
function run(){
    let item = possibilitiesList[Math.floor(Math.random() * possibilitiesList.length)];
    document.getElementById("result").innerHTML = item;
}