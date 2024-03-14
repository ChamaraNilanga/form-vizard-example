import React from 'react';
import { useState } from 'react';
import CompanyDetails from '../CompanyDetails/CompanyDetails';
import PersonalDetails from '../PersonalDetails/PersonalDetails';
import SubmitForm from '../SubmitForm/SubmitForm';

function UserForm() {
  const [formStatus, setFormStatus] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    company: "",
    companyEmail: "",
  });

  const nextForm = () => {
    console.log("nextForm:",formData);
    setFormStatus(formStatus + 1);
  };

  const prevForm = () => {
    console.log("prevForm:",formData);
    setFormStatus(formStatus - 1);
  };

  return (
    <div>
        {formStatus === 1 && (
          <PersonalDetails
            nextForm={nextForm}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {formStatus === 2 && (
          <CompanyDetails
            prevForm={prevForm}
            formData={formData}
            setFormData={setFormData}
            nextForm={nextForm}
          />
        )}  
        {formStatus === 3 && (
          <SubmitForm formData={formData} setFormData={setFormData} prevForm={prevForm}/>
        )} 
    </div>
  )
}

export default UserForm;