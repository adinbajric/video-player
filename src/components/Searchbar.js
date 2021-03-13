import React,{useState} from 'react';
import './Searchbar.css';

const Searchbar = ({getVideo}) => {
    const[term,setTerm] = useState('');

    const handleChange = e => {
        setTerm(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();        
        getVideo(term);
    }

    return(
        <div >
            <form className='searchbar_container' onSubmit={handleSubmit}>
              <input className='searchbar'
                type='text' 
                onChange={handleChange} 
                value={term} 
                placeholder='Search...'>
              </input> 
              <button onclick={handleSubmit}><i class="search icon"></i></button> 
            </form>
        </div>
    )
}

export default Searchbar;