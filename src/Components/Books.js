import React,{useState, useEffect} from 'react';
import axios from 'axios';

const Books = (param) => {
     const [displayBooks, setDisplayBooks] = useState([]);
     function updateSelectedBook(data){
         param.setSelectedBook(data);
     }
      useEffect(()=>{
        const fetchData = async () => {
            try {
                const url = `https://www.googleapis.com/books/v1/volumes?q=${param.searchInput}&maxResults=40`;
                const response = await axios.get(url); 
                setDisplayBooks(response.data.items);
                param.setSelectedBook("");
            } catch (error) {
                console.log('Error fetching books:', error);
            }
        };
        fetchData();},
        [param.searchInput]);

return (
    <div className='booksContainer'>
    {displayBooks.length > 0 && displayBooks.map((value, index) => (
            value.volumeInfo && value.volumeInfo.imageLinks && value.volumeInfo.imageLinks.thumbnail &&
            value.volumeInfo.averageRating && value.volumeInfo.ratingsCount &&
              <div key={index} className='bookCoverContainer'>
                      <button onClick={()=>updateSelectedBook(value)}> <img  src={value.volumeInfo.imageLinks.thumbnail} alt="image" /></button>             
              </div>
            
    ))}
</div>
);
}
export default Books;