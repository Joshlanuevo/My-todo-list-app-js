let form = document.getElementById('addForm');
let listOfItems = document.getElementById('items');
let addBtn = document.querySelector('#addForm button');

// Form submit event
form.addEventListener('submit', addItem);
// Delete Event
listOfItems.addEventListener('click', removeItem);


// Add item
function addItem(e){
    e.preventDefault();

    // Get input value
    let newItem = document.getElementById('item').value;
    if(newItem === ""){
        alert("Please fill in the blank");
        return false;
    } else {
        document.getElementById('item').value = '';
    }
    // Creat e new list element
    let li = document.createElement('li');
    // Add Classes
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    // Create Delete Button Element
    let deleteBtn = document.createElement('button');
    // Add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // Append text node 
    deleteBtn.appendChild(document.createTextNode('X'));
    // Append button to li
    li.appendChild(deleteBtn);
    // Append li element to list
    listOfItems.appendChild(li);
}

// Remove Item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let li = e.target.parentElement;
            listOfItems.removeChild(li);
        }
    }
}






