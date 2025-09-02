export default function generatePass() {
    let password: string = ''
    let characters: string = 'Aa@$#123456789bcdefghijFGHIJKLMNOP!'
    let passWordlenght: number = 8

    for(let index = 0; index < passWordlenght; index++){
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        )
    }

    return password
}