import React from 'react'

function SubmitForm(props) {
  const { formData, setFormData , prevForm } = props;
  return (
    <div className='container col-sm-6' style={{padding:'10px',border:'1px solid black' , borderRadius : '5px'}}>
        <h1>Review Your Answers</h1>
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  value={formData.email} disabled/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputName">Name</label>
                <input type="name" name='name' class="form-control" id="exampleInputName" placeholder="Name"  value={formData.name} disabled/>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" name='password' class="form-control" id="exampleInputPassword" placeholder="Password"  value={formData.password} disabled/>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Company Email address</label>
                <input type="email" class="form-control" name='companyEmail' id="companyInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  value={formData.companyEmail} disabled/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Company Name</label>
                <input type="name" class="form-control" name='company' id="companyInputName" placeholder="Name"  value={formData.company} disabled/>
            </div>
            <div style={{display: 'flex' ,justifyContent:'space-between' , paddingTop:'10px'}}>
            <button onClick={prevForm} class="btn btn-primary">Previous</button>
            <button type='submit' class="btn btn-primary" >Submit</button>
            </div>
        </form>
    </div>
  )
}

export default SubmitForm