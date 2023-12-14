//Retrieving elements from document. Declaring them at top in global scope so we can use them throughout.
const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

//the "e" is an object containing information about the event that has just occured.
//different event types possess different information in the event object.

function addItem(e){
    e.preventDefault();
    //create newItem variable because we will be using this again later in the code.
   

    const newItem = itemInput.value

    //validate Input
    if (newItem === ''){
        alert('Please add an item');
        return;
    }
    //Create list item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));

    const button = createButton("remove-item btn-link text-red");
    li.appendChild(button);
    itemList.appendChild(li);
    itemInput.value = '';
    
}

function createButton(classes){
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon("fa-solid fa-xmark");
    button.appendChild(icon);
    return button;
}

function createIcon(classes){
    const icon = document.createElement('i');
    icon.className = classes;
    return icon
}
//event Listeners

//when using a submit even we can use preventDefault().
//preventDefault() prevents the form from submitting to the file.
itemForm.addEventListener('submit', addItem)