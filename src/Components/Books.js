import React,{useState, useEffect} from 'react';
import axios from 'axios';

const Books = (param) => {
     const [displayBooks, setDisplayBooks] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `https://www.googleapis.com/books/v1/volumes?q=${param.searchInput}`;
                const response = await axios.get(url);
                console.log(response.data.items);
                console.log(response.data.items[0].volumeInfo);
                setDisplayBooks(response.data.item);
            } catch (error) {
                console.log('Error fetching books:', error);
            }
        };

        fetchData();
    }, [param.searchInput]);

return (
        <div>
            {displayBooks && displayBooks.map((value, index) => (
                <img key={index} src={value.volumeInfo.imageLinks.thumbnail} alt="image" />
            ))}
        </div>
);
}
export default Books;