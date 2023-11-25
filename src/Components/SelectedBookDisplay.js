import React,{useEffect}from 'react'
import axios from 'axios';

const SelectedBookDisplay = (param) => {
    let selectedBook = param.selectedBook;
   
  return (
         selectedBook && <div  className='selectedBookItem'>
            <div>
                <img src={selectedBook.volumeInfo.imageLinks.thumbnail} alt="Book cover" />
            </div>
            <div>
                 <div>
                    <h3>{selectedBook.volumeInfo.title}</h3>
                    <p>Publish Date: {selectedBook.volumeInfo.publishedDate}</p>
                 </div>
                <p>{selectedBook.volumeInfo.description}</p>
                <div>
                     <p>Rating Count: {selectedBook.volumeInfo.ratingsCount}</p>
                     <p>Avg. Rating: {selectedBook.volumeInfo.averageRating}</p>
                     <p>Publisher: {selectedBook.volumeInfo.authors}</p>
                     <p>Language: {selectedBook.volumeInfo.language.toUpperCase()}</p>
                </div>
                <div>
                    <div className='bookInfoBtnContainer'>
                         <a href={selectedBook.volumeInfo.infoLink} target='_blank'><button  >Now Read!</button> </a>
                         <a href={selectedBook.volumeInfo.infoLink} target='_blank'> <button >More Info</button> </a>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default SelectedBookDisplay