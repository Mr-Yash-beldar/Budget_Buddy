import React, { useState } from 'react'
import '../components/css/loginstyle.css' 
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {

    const [inpval, setInpval] = useState({
        fname: "",
        email: "",
        password: "",
        cpassword: ""
    });


    const setVal = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    };

    const addUserdata = async (e) => {
        e.preventDefault();

        const { fname, email, password, cpassword } = inpval;

        if (fname === "") {
            toast.warning("fname is required!", {
                position: "top-center"
            });
        } else if (email === "") {
            toast.error("email is required!", {
                position: "top-center"
            });
        } else if (!email.includes("@")) {
            toast.warning("includes @ in your email!", {
                position: "top-center"
            });
        } else if (password === "") {
            toast.error("password is required!", {
                position: "top-center"
            });
        } else if (password.length < 6) {
            toast.error("password must be 6 char!", {
                position: "top-center"
            });
        } else if (cpassword === "") {
            toast.error("cpassword is required!", {
                position: "top-center"
            });
        }
        else if (cpassword.length < 6) {
            toast.error("confirm password must be 6 char!", {
                position: "top-center"
            });
        } else if (password !== cpassword) {
            toast.error("pass and Cpass are not matching!", {
                position: "top-center"
            });
        } else {
            console.log("user registration succesfully done");


            const data = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fname, email, password, cpassword
                })
            });

            const res = await data.json();
            console.log(res.status);

            if (res.status === 201) {
                toast.success("Registration Successfully done 😃!", {
                    position: "top-center"
                });
                setInpval({ ...inpval, fname: "", email: "", password: "", cpassword: "" });
            }
        }
    }


  return (
    <div>
        <body>
    <div class="bg-img">
      <div class="content">
        <header>Signup Form</header>
        <form >
          <div class="field">
            <span class="fa fa-user"></span>
            <input type="text" onChange={setVal} value={inpval.fname} name="fname" required placeholder="Username"/>
          </div>
          <div class="field space">
            <span class="fa fa-user"></span>
            <input type="text" onChange={setVal} value={inpval.email} name="email" required placeholder="Email"/>
          </div>
          <div class="field space">
            <span class="fa fa-lock"></span>
            <input type="password" class="pass-key" value={inpval.password} onChange={setVal}  name='password'required placeholder=" New Password"/>
            <span class="show">SHOW</span>
          </div>
          <div class="field space">
            <span class="fa fa-lock"></span>
            <input type="password" class="pass-key" value={inpval.cpassword} onChange={setVal} name='cpassword' required placeholder="Confirm New Password"/>
            <span class="show">SHOW</span>
          </div>
          
          <div class="field space">
            <input type="submit" onClick={addUserdata} value="SUBMIT"/>
          </div>
        </form>
        <ToastContainer />
        <div class="login">Login Here !
            <a> <Link to="/dashboard">click here</Link></a>
        </div>
        
      </div>
      
    </div>

    


  </body>
      
    </div>
  )
}

export default Register
