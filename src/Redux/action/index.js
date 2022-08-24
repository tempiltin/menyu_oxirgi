// for add item to card  || buyumni savatga qo'shish uchun

export const addCart = (product) =>{
    return{
        type:"ADDITEM",
        payload :product,
    }
}


// for Delete item from card  || buyumni savatdan  o'chirish  uchun

export const delCart = (product) =>{
    return{
        type:"DELITEM",
        payload :product,
    }
}