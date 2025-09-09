const passRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

async function Registration(){
    //await fetch('http://localhost:3000/users').then(res => res.json().then(data => console.log(data)))
    let passfield = document.getElementById('passField')
    let nameField = document.getElementById('nameField')
    let emailField = document.getElementById('emailField')
    let confirmpassField = document.getElementById('confirmpassField')

    
    if(!emailRegExp.test(emailField.value)){
        alert("A megadott email cím nem megfelelő formátumú")
        return
    }

    if(nameField.value == "" || passfield.value == "" || emailField.value == "" || confirmpassField.value == ""){
        alert('Nem adtál meg minden adatot!')
        return
    }
    if(passfield.value != confirmpassField.value){
        alert("A megadott jelszavak nem egyeznek!")
        return
    }
    if(!passRegExp.test(passfield.value)){
        alert("A megadott jelszó nem elég biztonságos!")
        return
    }

    try{



        const res = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
    
            },
            body: JSON.stringify({
                id: 0,
                name: nameField.value,
                email: emailField.value,
                password: passfield.value
            })
        })

        const data = await res.json()
        //console.log(data)
        alert(data.msg)
    }
    catch(err){
        console.log('Hiba történt: ', err)
    }

    
}

function Login(){}

function Logout(){}

function getProfile(){}

function UpdateProfile(){}

function ChangePass(){}