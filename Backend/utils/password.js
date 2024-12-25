import bcrypt from 'bcrypt'

export const hashPassword = async(password)=>{
    return await bcrypt.hash(password,10)
}

export const compareHashpassoword = async (password,hashPassword) =>{
    return await bcrypt.compare(password,hashPassword)
}