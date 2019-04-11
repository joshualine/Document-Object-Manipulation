var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e) {
	e.preventDefault();
	var newItem = document.getElementById('item').value;
	var li = document.createElement('li');
	li.className = 'list-group-item';
	li.appendChild(document.createTextNode(newItem));
	itemList.appendChild(li);

	var deleteBtn = document.createElement('button');
	deleteBtn.className = 'btn btn-danger btn-sn float-right delete';
	deleteBtn.appendChild(document.createTextNode('X'));
	li.appendChild(deleteBtn);

}

function removeItem(e) {
	if(e.target.classList.contains('btn-danger')) {
		if(confirm('Are You Sure?')) {
			var li = e.target.parentElement;
			itemList.removeChild(li);
		}
	}
}
function filterItems(e) {
	// conver text to lower case
	var text = e.target.value.toLowerCase();
	var items =itemList.getElementsByTagName('li');
	Array.from(items).forEach(function(item) {
		var itemName = item.firstChild.textContent;
		if(itemName.toLowerCase().indexOf(text) != -1) {
			item.style.display = 'block';

		} else {
			item.style.display = 'none';
		}

	});
}