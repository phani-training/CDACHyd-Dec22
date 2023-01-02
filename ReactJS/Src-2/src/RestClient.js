import React, { useState, useEffect} from 'react'

//Hooks are external components like Middleware that will help in enhancing the Application development. 

export default function RestClient() {
    const [books, setBooks] = useState([]);
    
    useEffect(()=>{
        fetch("http://localhost:1234/Books")
        .then(res => res.json()).then((data)=> setBooks(data))
    })
  return (
    <table className='table table-bordered table-striped table-hover'>
        <thead>
            <tr>
                <th>Book ID</th>
                <th>Book Title</th>
                <th>Book Author</th>
                <th>Book Price</th>
            </tr>
        </thead>
        {
            books.map((bk)=>(
                <tr>
                    <td>{bk.BookId}</td>
                    <td>{bk.Title}</td>
                    <td>{bk.Author}</td>
                    <td>{bk.Price}</td>
                </tr>
            ))
        }
    </table>
  )
}
