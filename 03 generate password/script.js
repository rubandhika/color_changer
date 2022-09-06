function genpassword(){
    const chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const passwordLength = 8
    let password = ''
    // let randomNumber = Math.floor(Math.random() * chars.length)
    // console.log(randomNumber)
    // let cekSubstring = chars.substring(0,5)
    // console.log(cekSubstring)
    for(let i = 0; i < passwordLength; i++){
        let randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber , randomNumber+1)
    }
    document.getElementById('password').value = password
}

function copypassword(){
    const copytext = document.getElementById('password')
    copytext.select()
    copytext.setSelectionRange(0, 999)
    document.execCommand('copy')
    alert('password berhasil di salin')
}