const passRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/


async function Registration(){
    //await fetch('http://localhost:3000/users').then(res => res.json().then(data => console.log(data)))
    let passfield = document.getElementById('passField')
    let nameField = document.getElementById('nameField')
    let emailField = document.getElementById('emailField')
    let confirmpassField = document.getElementById('confirmpassField')
    let alertWrong = document.getElementById("alertWrong")
    let alertSuccess = document.getElementById('alertSuccess')

    
    if(!emailRegExp.test(emailField.value)){
        alertWrong.classList.remove("hide")
        alertWrong.innerText="A megadott email cím nem megfelelő formátumú"

        setTimeout(()=>{
            alertWrong.innerHTML= ''
            alertWrong.classList.add("hide")
        },3000)
        return
    }

    if(nameField.value == "" || passfield.value == "" || emailField.value == "" || confirmpassField.value == ""){
        alertWrong.classList.remove("hide")
        alertWrong.innerText="Nem adtál meg minden adatot!"

        setTimeout(()=>{
            alertWrong.innerHTML= ''
            alertWrong.classList.add("hide")
        },3000)
        return
    }
    if(passfield.value != confirmpassField.value){
        alertWrong.classList.remove("hide")
        alertWrong.innerText="A megadott jelszavak nem egyeznek!"

        setTimeout(()=>{
            alertWrong.innerHTML= ''
            alertWrong.classList.add("hide")
        },3000)
        return
    }
    if(!passRegExp.test(passfield.value)){
        alertWrong.classList.remove("hide")
        alertWrong.innerText="A megadott jelszó nem elég biztonságos!"

        setTimeout(()=>{
            alertWrong.innerHTML= ''
            alertWrong.classList.add("hide")
        },3000)
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
        if(String(data.msg) == "bademail"){
            alertWrong.classList.remove("hide")
            alertWrong.innerText="Ez az email cím már regisztrált!"

        setTimeout(()=>{
            alertWrong.innerHTML= ''
            alertWrong.classList.add("hide")
        },3000)
        }
        if (res.status == 200){
            nameField.value = ''
            emailField.value = ''
            passfield.value = ''
            confirmpassField.value = ''
            alertSuccess.classList.remove("hide")
            alertSuccess.innerText="Sikeres regisztráció!"

        setTimeout(()=>{
            alertSuccess.innerHTML= ''
            alertSuccess.classList.add("hide")
        },3000)
        }
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