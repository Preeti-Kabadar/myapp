import "./home.css";

function Home() {
 
    const books = [
  { id: 1, title: "Data Structures", author: "Mark Allen Weiss", category: "CS", image: "https://storage.googleapis.com/nova-vijaynicole-unsecured-files/unsecured/contents-1647011792591-88cc5347-cde2-46dc-a420-c61c7215dca2/cover.png" },
  { id: 2, title: "Web Development", author: "Jon Duckett", category: "Web", image: "https://shizzy.blr1.digitaloceanspaces.com/iipstore/wp-content/uploads/2024/05/24180506/1906-front-cover-page_11zon-scaled.jpg" },
  { id: 3, title: "Artificial Intelligence", author: "Stuart Russell", category: "AI", image: "https://images-na.ssl-images-amazon.com/images/I/71k1N0G7oKL.jpg" },

  { id: 4, title: "DBMS", author: "Ramakrishnan", category: "Database", image: "https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL.jpg" },
  { id: 5, title: "Operating Systems", author: "Silberschatz", category: "OS", image: "https://images-na.ssl-images-amazon.com/images/I/81dQwQlmAXL.jpg" },
  { id: 6, title: "Computer Networks", author: "Tanenbaum", category: "Network", image: "https://images-na.ssl-images-amazon.com/images/I/71pF5qz3oWL.jpg" },

  { id: 7, title: "Java Programming", author: "Herbert Schildt", category: "Java", image: "https://images-na.ssl-images-amazon.com/images/I/81p3E9Z2XQL.jpg" },
  { id: 8, title: "Python Crash Course", author: "Eric Matthes", category: "Python", image: "https://images-na.ssl-images-amazon.com/images/I/71NUZ+rHN2L.jpg" },
  { id: 9, title: "Software Engineering", author: "Ian Sommerville", category: "SE", image: "https://images-na.ssl-images-amazon.com/images/I/81dZK8R2qVL.jpg" },
];

  return (
    <div className="home-container">
      <h1 className="page-title">📚 Library Books</h1>

      <div className="book-grid">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p className="author">By {book.author}</p>
            <span className="category">{book.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;