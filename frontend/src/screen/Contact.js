import React, { useEffect , useState } from 'react'
import Footer from '../components/Footer'

function Contact() {
    
const changeInput=(e)=>{
    var num = /[^0-9]/gi
    e.target.value = e.target.value.replace(num,"")
}

const [formData,setFormData] = useState({
    name:"",
    email:"",
    age:""
})



const changeData = async (e)=>{
    setFormData({
        ...formData,
        [e.target.name]:e.target.value
    })
}
const submitData = async (btn)=>{
    btn.preventDefault()
    alert("Submitted!")
    try{
        const response = await fetch("https://amrita-kala-sangam.onrender.com/api/register",{
            method : "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify(formData)
        })
        if(!response.ok){
            throw new Error("Error")
    }
    setFormData("")
    const data = await response.json()
    console.log(data)
    }

    catch(err){
        console.log("Error : ",err)
    }
    finally{
        setFormData({
            name:"",
            email:"",
            age:"",
        })
 
    }
}
    useEffect(()=>{
        document.title = "Contact | Building a Sustainable Tommorow : Emphasizing Eco Friendly Innovations"
      },[])
  return (
    <>
    <div class="contact comp2">
        
        <div class="contact-body ">
           
            <div class="contact-left">
                <div class="comp-title">
                    <h1>Join Us - Make a difference! </h1>
                    <hr class="title-hr"/>
                    
                    
                </div>
                <div class="contact-left-content">
                    <p>Hey there! Are you ready to make a real impact and be part of something amazing? By sharing your contact details with us, you're joining a vibrant community dedicated to creating a greener and more sustainable future. We're passionate about harnessing technology and creativity to drive eco-friendly innovations, and we want you to be a part of this exciting journey!
When you provide your contact information, you'll be first in line to receive updates on our latest projects, exciting events, and workshops that focus on sustainability and green tech. Plus, you'll get exclusive tips and insights on how to live a more eco-conscious life. 

                   </p>

                    <h2>TARGET : <span>A Greener and Bright Future</span></h2>
                </div>
            </div>
            <div class="contact-right">
                <form action="/submit-form" method="post"  onSubmit={submitData}>
                    <div class="enquiry-form">
                    <div class="enquiry-left">
                        <div class="enquiry-component">
        
                            <label for="name">Name:</label>
                            <input value = {formData.name}  type="text" id="name" onChange={changeData} name="name" required/>
                        </div>
                        <div class="enquiry-component">
                            
                            <label for="email">Email:</label>
                            <input value = {formData.email} type="email" id="email" onChange={changeData} name="email" required/>
                        </div>
                
                        
                        <div class="enquiry-component">
                            
                            <label for="age">Age (in yrs):</label>
                            <input value = {formData.age} type="text" maxLength={3} onChange={changeData}   id="age" name="age" onInput={changeInput}/>
                        </div>
                        <div class="btn-submit">
        
                            <button type="submit">Submit</button>
                        </div>
                        
                    </div>
                    
                    </div>
                    
                  </form>
                
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact