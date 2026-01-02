import React from 'react'

const Movie = () => {
   /* return(
        <div>
            const BookInfo = ( { books, addToCart, cart } ) => {
    
 const {id} = useParams();
 const book = books.find(book =>  +book.id === +id);
 console.log(books)
 console.log(book)

 function addBookToCart(book) {
   addToCart(book)
 }
 

 function bookExistOnCart() {
    return cart.find((book) => book.id === +id)
 }

 return (
    <div id="books__body">
        <main id="books__main">
            <div className="books__container">
                <div className="row">
                    <div className="book__selected--top">
                        <Link to="/books" className="book__link">
                            <FontAwesomeIcon icon="arrow-left" />
                        </Link>
                        <Link to="/books" className="book__link">
                            <h2 className="book__selected--title--top">Books</h2>
                        </Link>
                    </div>
                    <div className="book__selected">
                        <figure className="book__selected--figure">
                            <img src={book.url} alt="" className="book__selected--img" />
                        </figure>
                        <div className="book__selected--description">
                            <h2 className="book__selected--title">
                                {book.title}
                            </h2>
                            <Rating rating="4.5" />
                            <div className="book__selected--price">
                                <Price originalPrice={book.originalPrice} salePrice={book.salePrice}  />
                            </div>
                            <div className="book__summary">
                                <div className="book__summary--title">Summary</div>
                                <p className="book__summary--para">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Provident,tempora magni aliquam iusto modi earum sunt iure blanditiis
                                    dolore nobis adipisci in voluptatum soluta dolorum nisi aut? Rerum, obcaecati illum?
                                </p>
                                <p className="book__summary--para">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Provident,tempora magni aliquam iusto modi earum sunt iure blanditiis
                                    dolore nobis adipisci in voluptatum soluta dolorum nisi aut? Rerum, obcaecati illum?
                                </p>

                            </div>
                            {bookExistOnCart() ? (
                              <Link to={`/cart`} className="book__link">
                                    <button className="btn">Checkout</button>
                                </Link>
                            ) : (
                                <button className="btn" onClick={ () => addBookToCart(book)}>
                                Add to Cart
                                </button> 
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="books__container">
                <div className="row">
                    <div className="book__selected--top">
                        <h2 className="book__selected--title--top">
                            Recommended Books
                        </h2>
                    <div />
                    <div className="books">
                         {books
                         .filter((book) => book.rating === 5 && +book.id !== +id)
                         .slice(0, 4)
                         .map((book) => <Book book={book} key={book.id} />)
                         }
                           
                    </div>
                </div>
                </div>
            </div>
        </main>
    </div>
 )
};

export default BookInfo;
        </div>
    )*/
} 

export default Movie;