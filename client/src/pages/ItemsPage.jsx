import React from 'react'
import ItemCard from '../components/ItemCard'
import FooterBar from '../components/layouts/FooterBar';
import { useState } from 'react';
import { Button } from '@material-tailwind/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fetching from '../../fetchURL';

export default function ItemsPage() {
  const [Items,setItems] = useState([]);
  const [catagory,setcatagory] = useState('');
    const handleChangecata = (event) => {
        setcatagory(event.target.value)
      }
  React.useEffect(() => {
    fetch(`${fetching}/client/post`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(items => {
        console.log('Fetched Items:', items);
        setItems(items);
      })
      .catch(error => {
        console.error('Fetch error:', error);
        toast.error("Fetching error");
      });
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      searched();
    }
  };

  const [search,setsearch] = useState();

  async function searched() {
    console.log("started");
    try {
        const response = await fetch(`${fetching}/client/search`,{
          method:'POST',
          body: JSON.stringify({search,catagory}),
          headers: {'Content-Type':'application/json'},
        });
        if (response.ok) {
            const items = await response.json();
            console.log('Searched Items:', items);
            setItems(items);
        } else {
            toast.error('Search failed');
        }
    } catch (error) {
        console.error('Fetch error:', error);
        toast.error("Fetching error");
    }
}
  return (
    <>
    <div className='container flex justify-center max-w-45 mx-auto my-12'>
        <span>
      <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
        </span>
        <input onKeyDown={handleKeyDown} onChange={event =>setsearch(event.target.value)} className="placeholder:italic placeholder:text-slate-400 block bg-white w-[30rem] border-2 border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
        </label>
        </span>
        <div className='mx-3'>
    <select name="catagory" value={catagory} onChange={handleChangecata} onClick={searched}
                 className="peer h-full w-full rounded-[9px] border border-blue-gray-200 shadow bg-black px-3 py-2.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-red-500 focus:border-2 focus:border-gray-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                    <option value="">Filter</option>
                    <option value="elctronic">Electronic</option>
                    <option value="notebook">Notebook</option>
                    <option value="bottle">Bottle</option>
                    <option value="document">Document</option>
                </select>
    </div>
        </div>
    <div className='container justify-center px-auto flex flex-wrap gap-6 mx-auto my-4'>
    {Items.length > 0 && Items.map(item => (
      <div >
        <ItemCard {...item} />
      </div>
        
      ))}
      </div>
    <FooterBar/>
    <ToastContainer/>
    </>
  )
}
