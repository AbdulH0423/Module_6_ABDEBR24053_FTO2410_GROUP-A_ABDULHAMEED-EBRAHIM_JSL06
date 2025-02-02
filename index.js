// Sample menu data (Consider fetching this data from a server in a real-world scenario)

//Changed from an array to an object with prices.
const menu = {
    Starters: { "Garlic Bread": 50.00, "Bruschetta": 62.00, "Caprese Salad": 65.00, "Focaccia": 41.50 },
    MainCourses: { "Margherita Pizza": 109.99, "Spaghetti Carbonara": 132.00, "Chicken Parmesan": 192.00, "Paella": 210.50},
    Desserts: { "Tiramisu": 69.79, "Cheesecake": 99.00, "Chocolate Mousse": 68.00, "Gelato Roma": 49.50}
};


const currencySymbol = "R";


//Set total price to zero intially
let totalPrice = 0;


// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainer = document.getElementById("menu");

    // Loop through each category and its items in the menu object

    for (const category in menu){

        // Create an element to represent the category
        const categoryElement = document.createElement("h3");

        // Set the text content of the category element to the category name
        categoryElement.textContent = category;

        // Append the category element to the menu container
        menuContainer.appendChild(categoryElement);



        // Create an element to represent a list of items
        const itemList = document.createElement("ul");


        // Loop through the items in the category and create list items
        for (const item in menu[category]){

             // Create a list item element
            const listItem = document.createElement("li");

            // Set the text content of the list item element to the item name
            listItem.textContent = item;



            // Attach a click event listener to the list item to add it to the order
            listItem.addEventListener("click", ()=> addToOrder(item,menu[category][item]));


             // Append the list item to the list of items
            itemList.appendChild(listItem);
        }


        // Append a list of items element to the menu container
        menuContainer.appendChild(itemList);
    }            
}

// Callback function for adding an item to the order
function addToOrder(itemName, price) {
    // Get the order items list and the order total element from the HTML


    const orderItemsList = document.getElementById("order-items");
    

    const orderTotalElement = document.getElementById("order-total");



    // Create a list item for the order
    const orderItem = document.createElement("li");

    orderItem.textContent = `${itemName} - ${currencySymbol} ${price.toFixed(2)}`;


    //Added an event listner to remove items
    orderItem.addEventListener("click", () => removeFromOrder(orderItem, price));


// Append the list item to the order items list
    orderItemsList.appendChild(orderItem);

    
    // Calculate and update the total price
    totalPrice += price;

    // Set the text content of the list item to the item name
    orderTotalElement.textContent = totalPrice.toFixed(2);
 // Update the text content of the order total element with the new total
}


//Function to remove

function removeFromOrder(orderItem, price){

    const orderItemsList = document.getElementById("order-items");
    const orderTotalElement = document.getElementById("order-total");


    //Removing the order item

    orderItemsList.removeChild(orderItem);

    //Update the price

    totalPrice -= price;
    orderTotalElement.textContent = `${totalPrice.toFixed(2)}`;
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
}

// Start the menu system by calling the init function
initMenuSystem(menu);
