import React,{useState} from 'react'
import group_logo from "../Images/group_logo.svg";
import book_name_logo from "../Images/KeazoNBOOKS.svg";
import like_logo from "../Images/like_logo.svg";
import notification_logo from "../Images/notification_logo.svg";
import store_logo from "../Images/store_logo.svg";
import user_profile_photo from "../Images/user_profile_photo.svg";
import search_logo from "../Images/search_logo.svg";


const Navbar = (param) => {
    const [input, setInput] = useState("");
    function updateSearchInput(){
        param.setSearchInput(input);
    }
  return (
    <div className='navbarContainer'>
        <div className='storeDetailContainer'>
              <img src={store_logo}/>
              <img  src={book_name_logo}/>
        </div>
        <div className='searchContainer'>
             <img src={search_logo}/>
             <input placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..." type='text' value={input} onChange={(event)=>setInput(event.target.value)} />
             <button  onClick={()=>updateSearchInput()}>Search</button>
        </div>
        <div className='profileContainer'>
              <img src={like_logo}/>
              <img src={notification_logo}/>
              <img src={group_logo}/>
              <img src={user_profile_photo}/>
        </div>
    </div>
  )
}

export default Navbar