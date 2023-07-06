const favoriteBooks = [
    "1984",
    "To Kill a Mockingbird",
    "The Great Gatsby",
    "Pride and Prejudice",
    "The Catcher in the Rye",
  ];
  
  // Function to display books in HTML
  function displayBooks(books) {
    const bookList = document.getElementById("book-list");
  
    // Clear existing content
    bookList.innerHTML = "";
  
    // Iterate over the books array and create list items for each book
    books.forEach((book) => {
      const listItem = document.createElement("li");
      listItem.textContent = book;
      bookList.appendChild(listItem);
    });
  }
  
  // Call the function with the favoriteBooks array
  displayBooks(favoriteBooks);
  