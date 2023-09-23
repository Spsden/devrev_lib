import React from 'react'
import { useParams } from 'react-router-dom';
import Feed from '../../component/feed/feed';
import Body from '../../component/homePage/body';

const SearchResults = () => {
    const { searchTerm } = useParams();
    console.log(searchTerm)
    
  return (
    <div className='bg-yellow pt-8'>

        <Body/>
    </div>
  )
}

export default SearchResults