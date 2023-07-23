import React from 'react';
import { useState } from 'react';
import { Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';

const SearchBar = () => {

  return (
     <form onSubmit={()=>{}}>
        <input type="search" className="rounded-full w-[300px] p-2" placeholder="Searching......" onChange={()=>{}}/>
        <IconButton type='submit' sx={{color:"lightblue"}}>
            <Search/>
        </IconButton>
     </form>
  )
}

export default SearchBar
