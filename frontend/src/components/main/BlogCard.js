// import React from 'react'

// const BlogCard = () => {
//   return (
//     <div>

//           <div className='row p-5'>


//               <div className='col-md-3 card m-2 '>
//                   <div className='row-md-6'>
//                       <img src="/logo.png" alt="" />
//                   </div>

//                   <div className='row-md-6'>
//                       <p>Category</p>
//                       <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, facere!</h4>
//                       <p>Date</p>
//                       <button type="button" className="btn" style={{backgroundColor:"#9c3353", color:"white"}}>
//          Read more
//        </button>
//                   </div>
//               </div>

//               <div className='col-md-3 card m-2 '>
//                   <div className='row-md-6'>
//                       <img src="/logo.png" alt="" />
//                   </div>

//                   <div className='row-md-6'>
//                   <p>Category</p>
//                       <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, facere!</h4>
//                       <p>Date</p>
//                       <button type="button" className="btn" style={{backgroundColor:"#9c3353", color:"white"}}>
//          Read more
//        </button>
//                   </div>
//               </div>

//               <div className='col-md-3 card m-2 '>
//                   <div className='row-md-6'>
//                       <img src="/logo.png" alt="" />
//                   </div>

//                   <div className='row-md-6'>
//                   <p>Category</p>
//                       <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, facere!</h4>
//                       <p>Date</p>
//                       <button type="button" className="btn" style={{backgroundColor:"#9c3353", color:"white"}}>
//          Read more
//        </button>
//                   </div>
//               </div>
//          </div>

//     </div>
//   )
// }

// export default BlogCard



import React from 'react'

const BlogCard = (props) => {
  const { category, title, date, image } = props;

  return (
    <div>
      

   
<div className='row d-flex justify-content-center align-items-center'>
      <div className="col-4 input-group m-5" style={{width:"40%"}}>
        <div className="form-outline bg-white">
          <input type="search" id="form1" className="form-control" />
          <label className="form-label" htmlFor="form1" >
            Search
          </label>
        </div>
        <button type="button" className="btn btn-primary">
          <i className="fas fa-search" />
        </button>
      </div>

     <div className='col-4 d-flex '>
      <label  className="form-label m-2" htmlFor="category">Sort</label>&nbsp;
      <select className="form-control"  name="category" id="category"  style={{width:"200px"}} >

        <option value="all" selected>All</option>
        <option value="technology">Technology</option>
        <option value="entertainmnet">Entertainment</option>
        <option value="sports">Sports</option>
        <option value="food">Food</option>
      </select>
      </div>
    </div>


      <div className='row p-5'>
        <div className='col-md-3 card m-2'>
          <div className='row-md-6'>
            <img src={image} alt='' />
          </div>

          <div className='row-md-6'>
            <p>{category}</p>
            <h4>{title}</h4>
            <p>{date}</p>
            <button
              type='button'
              className='btn'
              style={{ backgroundColor: '#9c3353', color: 'white' }}
            >
              Read more
            </button >
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard

  