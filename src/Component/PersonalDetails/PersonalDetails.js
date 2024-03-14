import React from 'react'

function PersonalDetails(props) {
  const { nextForm, formData, setFormData } = props;
  const onChange = (e) => {
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className='container col-sm-6' style={{padding:'10px',border:'1px solid black' , borderRadius : '5px'}}>
        <h1>Personal Details</h1>
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>onChange(e)} value={formData.email}/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputName">Name</label>
                <input type="name" name='name' class="form-control" id="exampleInputName" placeholder="Name" onChange={(e)=>onChange(e)} value={formData.name}/>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" name='password' class="form-control" id="exampleInputPassword" placeholder="Password" onChange={(e)=>onChange(e)} value={formData.password}/>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <div style={{display: 'flex' ,justifyContent:'flex-end'}}>
            <button onClick={nextForm} class="btn btn-primary" >Next</button>
            </div>
        </form>
    </div>
  )
}

export default PersonalDetails