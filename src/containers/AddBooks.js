import React, { useState } from 'react'; 
import { connect } from 'react-redux';
import { addBook, deleteBook, deleteAllBooks } from '../redux/actions/actionAddBooks'; 
import FlipMove from 'react-flip-move';
const AddBooks = ({ libraryData, addBook, deleteBook, deleteAll }) => { 

  const initialState = { 
    title: '',
    author: ''
  }

  const [newData, setNewData] = useState(initialState)
  

  const handleSubmit = e => { 
    e.preventDefault();
   addBook(newData) 
    setNewData(initialState)  
  }


  const displayData = libraryData.length > 0 ?  
    <FlipMove>  
    {
      libraryData.map(data => {  
        return (
          <li key={data.id} className='list-group-item list-group-item-light d-flex justify-content-between'>  
            <span><strong>Titre: </strong>{data.title}</span>  
            <span><strong>Auteur: </strong>{data.author}</span>   
            <span className='btn btn-danger'
            onClick={() => deleteBook(data.id)}
            >x</span>
          </li>
        )
  }) 
    }
   </FlipMove>
   :  <p className='text-center'>Aucune data à afficher</p>  
 const deleteAllBooksBtn = libraryData.length > 0 && 
 <button 
  className='btn btn-danger mt-4 mb-5'
  onClick={()=> deleteAll()}>Effacer tous les livres</button>
 





  return (
    <main role='main' >
      <div className='jumbotron jumbotron-fluid bg-light'>
        <div className='container text-center '>
          <h1 className='display-4'>BOOKS</h1>
          <p>Ajouter un livre à votre bibliothèque</p>

          <div className="p-4">
            <form className="d-flex justify-content-center align-items-center" onSubmit={handleSubmit}>
              <div className="d-flex">
                <div className='form-group mr-2  p-1'>
                  <input
                  value={newData.title}
                    type="text"
                    className='form-control'
                    placeholder='Titre'
                    required
                    onChange={e => setNewData({...newData, title:  e.target.value})}
                  />
                </div>
                <div className='form-group mr-2  p-1'>
                  <input
                   value={newData.author}
                    type="text"
                    className='form-control'
                    placeholder='Auteur'
                    required
                    onChange={e => setNewData({...newData, author:  e.target.value})}
                  />
                </div>
                  <div className='form-group ml-4  p-1'> 
                   <button className='btn btn-outline-secondary'>Ajouter un livre</button>
                  </div>
              </div>
             
            </form>
          </div>
        </div>
      </div>
      <div className='container' style={{minHeight: '200px', padding: '15px'}}>
        <div className='row'>
            <div className='col-md-12'>
                <ul className='list-group'>
                 {displayData}
                </ul>
                <div className='d-flex justify-content-center'>
                { deleteAllBooksBtn }  
            </div>
            </div>

        </div>
      </div>
    </main>
  );
};

 
 
const addStateToProps = state => {
  return {
    libraryData: state.library
  }
}

 
const addDispatchToProps = (dispatch) => {
  return {
    addBook: param => dispatch(addBook(param)),
    deleteBook: id =>  dispatch(deleteBook(id)),
    deleteAll: () => dispatch(deleteAllBooks())
  }
}

export default connect(addStateToProps, addDispatchToProps)(AddBooks)  


 