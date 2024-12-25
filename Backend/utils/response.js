

export const sendMessage = (message,data)=>{
return res.status(200).json({
    message:message || 'success',
    data:data
})
}