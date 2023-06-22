function deleteBtn(event) {
  var groceryItem = event.target.parentElement;
  var groceryList = groceryItem.parentElement;
  groceryList.removeChild(groceryItem);
}



function AddGroceryThings(event){
  event.preventDefault();
    var value=document.getElementById("AddGrocery").value
    if(value.length>=1){

    var groceryList = document.getElementById("list");
    var value=document.getElementById("AddGrocery").value
    var newGrocery = document.createElement("div");
    newGrocery.textContent = value;
    newGrocery.setAttribute("id", "contentDesign");
    groceryList.style.width="90%"
  
    var deleteButton = document.createElement("i");
    deleteButton.classList.add("fa", "fa-trash-o"); 
    deleteButton.setAttribute('aria-hidden', 'true');
    deleteButton.onclick = deleteBtn;
    deleteButton.style.padding="4px";
    deleteButton.style.margin = "2px";
    deleteButton.style.border="1px solid #fff";
    deleteButton.style.fontSize="18px";
    deleteButton.style.borderRadius="3px";
    deleteButton.style.display="flex";
    deleteButton.style.alignItems="center";
    deleteButton.style.justifyContent="center";
  
  
    var editIcon = document.createElement("i");
    editIcon.classList.add("fa", "fa-pencil-square-o"); 
    editIcon.setAttribute('aria-hidden', 'true');
    editIcon.style.margin = "2px";
    editIcon.style.fontSize="18px";
    editIcon.style.border="1px solid #fff";
    editIcon.style.padding="4px";
    editIcon.style.borderRadius="3px";
    editIcon.style.display="flex";
    editIcon.style.alignItems="center";
    editIcon.style.justifyContent="center";
    editIcon.onclick = editBtn;

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = checkBtn;
    checkbox.setAttribute("for", "contentDesign");
    // document.getElementsByTagName("del").add.classList("check")
 
    var groceryItem = document.createElement("div");
    groceryItem.classList.add("DesignBottom")
    groceryItem.appendChild(checkbox);
    groceryItem.appendChild(newGrocery);
    groceryItem.appendChild(editIcon)
    groceryItem.appendChild(deleteButton);
    groceryList.appendChild(groceryItem);
    document.getElementsByClassName('error')[0].innerText = "";

    var value=document.getElementById("AddGrocery").value=""
    return newGrocery
  }
  else{
    // debugger
    document.querySelector('#AddGrocery').value
    if(value==0){
      document.getElementsByClassName('error')[0].innerText = "Please enter a valid number";
    }}
  }

function DeleteListData() {
  var groceryList = document.getElementById("list");
  groceryList.innerHTML = "";
}

function editBtn(event) {
  // debugger
  var groceryItem = event.target.parentElement;
  var newGrocery = groceryItem.querySelector(".DesignBottom > div");
  var value = newGrocery.textContent;
  console.log(value);
  document.getElementById("AddGrocery").value= value;
  var groceryItem = event.target.parentElement;
  var groceryList = groceryItem.parentElement;
   groceryList.removeChild(groceryItem);
}

function checkBtn(event) {
  var checkAllData = event.target.nextElementSibling;
  checkAllData.classList.toggle("checkRight");
  if (checkAllData.classList.contains("checkRight")) {
    checkAllData.innerHTML = `<del>${checkAllData.innerHTML}</del>`;
  } else {
    var delTag = checkAllData.querySelector("del");
    checkAllData.innerHTML = delTag.innerHTML;
    delTag.remove();
  }
}

  function completeFilterData() {
    var groceryList = document.getElementById("list");
    var groceryItems = Array.from(groceryList.getElementsByClassName("DesignBottom")); 
    // Filter the groceryItems array to get the pending items
    var pendingItems = groceryItems.filter(function(item) {
      var checkbox = item.querySelector("input[type='checkbox']");
      return checkbox.checked;
    });
    groceryList.innerHTML = "";
    // Append the pendingItems back to the groceryList
    pendingItems.forEach(function(item) {
      groceryList.appendChild(item);
    });
  }


 
function allData() {
  var groceryList = document.getElementById("list");
  var filteredList = groceryList.querySelector(".DesignBottom");
  groceryList.innerHTML = "";
  if (filteredList) {
    groceryList.appendChild(filteredList);
  }
}


function pendingData() {
  var groceryList = document.getElementById("list");
  var groceryItems = Array.from(groceryList.getElementsByClassName("DesignBottom"));
  var filteredItems = groceryItems.filter(function(item) {
    var checkbox = item.querySelector("input[type='checkbox']");
    return !checkbox.checked;
  });
  groceryList.innerHTML = "";
  filteredItems.forEach(function(item) {
    groceryList.appendChild(item);
  });
}
