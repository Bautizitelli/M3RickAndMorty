
export  default function validation(inputs, errors, setErrors){
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    
    
        if(!inputs.username){
        setErrors({...errors, username : "Se requiere un nombre"})
        }
        else if(!regexEmail.test(inputs.username)){
           setErrors({...errors, username: "Debe ser un correo electrónico"})
        }
        else if(inputs.username.length>35){
            setErrors({...errors, username : "El nombre de usuario no puede tener más de 35 caracteres."})
        }
        else {
            setErrors({...errors, username:""})
        }
        if(inputs.password.password<1){
           setErrors({...errors, password : "La contraseña tiene que tener al menos un número."})
        }
        else if(inputs.password.length <6 || inputs.password.length>10){
            setErrors({...errors,password : "La contraseña tiene que tener entre 6 y 10 caracteres."})
        }
        else {
            setErrors({...errors, password:""})
        }        
}