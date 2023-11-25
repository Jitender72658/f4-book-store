import React,{useState, useEffect} from 'react';
import axios from 'axios';

const Books = (param) => {
     const [displayBooks, setDisplayBooks] = useState([]);
     function updateSelectedBook(data){
         console.log("btn clicked", data);
         console.log(data.volumeInfo.title);
         param.setSelectedBook(data);
     }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `https://www.googleapis.com/books/v1/volumes?q=${param.searchInput}`;
                const response = await axios.get(url); 
                console.log(response.data.items);
                setDisplayBooks(response.data.items);
            } catch (error) {
                console.log('Error fetching books:', error);
            }
        };
        fetchData();
    }, [param.searchInput]);

return (
    <div className='booksContainer'>
    {displayBooks.length > 0 && displayBooks.map((value, index) => (
            value.volumeInfo && value.volumeInfo.imageLinks && value.volumeInfo.imageLinks.thumbnail &&
              <div className='bookCoverContainer'>
                      <button key={index} onClick={()=>updateSelectedBook(value)}> <img  src={value.volumeInfo.imageLinks.thumbnail} alt="image" /></button>             
              </div>
            
    ))}
</div>
);
}
export default Books;