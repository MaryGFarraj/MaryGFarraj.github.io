(() => {
    const toDoListArray = []; //storing everything in my to-do list
    const container = document.getElementById("toDoContainer");
    const input = document.getElementById("customItem");
    const addButton = document.getElementById("addItemBtn");
    const toDoList = document.querySelector(".toDoList");

    addButton.addEventListener('click', () => { //when i click add button it adds the item
        const toDoItem = input.value.trim();
        if (toDoItem !== "") {
            addItemToDOM(toDoItem);
            addItemToArray(toDoItem);
            input.value = '';
        }
    });

    toDoList.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        if (!id) return;
        removeItemFromDOM(id);
        removeItemFromArray(id);
    });

    function addItemToDOM(toDoItem) { //is a step to adding 
        const itemId = String(Date.now());
        const li = document.createElement('li');
        li.setAttribute("data-id", itemId);
        li.innerHTML = `
            <div class="custom-checkbox gg-check-r">
                <input type="checkbox" id="${itemId}">
                <label for="${itemId}">${toDoItem}</label>
            </div>
        `;
        toDoList.appendChild(li);
    }

    function addItemToArray(toDoItem) { //add item to list (array is to-do list that stores items)
        toDoListArray.push({ toDoItem });
        console.log(toDoListArray);
    }

    function removeItemFromDOM(id) {
        const li = document.querySelector(`[data-id="${id}"]`);
        toDoList.removeChild(li);
    }

    function removeItemFromArray(id) {
        toDoListArray = toDoListArray.filter(item => item.toDoItem !== id);
        console.log(toDoListArray);
    }

})();





