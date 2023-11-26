import React,{useEffect}from 'react'
import axios from 'axios';

const SelectedBookDisplay = (param) => {
    let selectedBook = param.selectedBook;
    if(!selectedBook.volumeInfo.averageRating){
        selectedBook.volumeInfo.averageRating= Math.ceil(Math.random()*9);
    }
    if(!selectedBook.volumeInfo.ratingsCount){
        selectedBook.volumeInfo.ratingsCount = Math.ceil(Math.random()*39);
    }
   
  return (
         selectedBook && <div  className='selectedBookItem'>
            <div>
                <img src={selectedBook.volumeInfo.imageLinks.thumbnail} alt="Book cover" />
            </div>
            <div className='rightHalfBookDetailsContainer'>
                 <div className='bookHeadingDiv'>
                    <h2>{selectedBook.volumeInfo.title}</h2>
                    <p>Publish Date: {selectedBook.volumeInfo.publishedDate}</p>
                 </div>
                 <div className='descriptionContainer'>
                         <p><b>Description: </b>{selectedBook.volumeInfo.description}</p>
                 </div>
                <div className='selectedBookDetailsDiv'>
                     <p>Rating Count: {selectedBook.volumeInfo.ratingsCount}</p>
                     <p>Avg. Rating: {selectedBook.volumeInfo.averageRating}</p>
                     <p>Publisher: {selectedBook.volumeInfo.authors.join(", ")}</p>
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