import React from 'react'

function CompanyDetails(props) {
  const { prevForm, formData, setFormData , nextForm } = props;
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  return (
    <div className='container col-sm-6' style={{padding:'10px',border:'1px solid black' , borderRadius : '5px'}}>
        <h1>Company Details</h1>
       <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Company Email address</label>
                <input type="email" class="form-control" name='companyEmail' id="companyInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>onChange(e)} value={formData.companyEmail}/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Company Name</label>
                <input type="name" class="form-control" name='company' id="companyInputName" placeholder="Name" onChange={(e)=>onChange(e)} value={formData.company}/>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <div style={{display: 'flex' ,justifyContent:'space-between'}}>
            <button onClick={prevForm} class="btn btn-primary">Previous</button>
            <button onClick={nextForm} class="btn btn-primary">Next</button>
            </div>
        </form> 
    </div>
  )
}

export default CompanyDetails