// /* eslint-disable no-unreachable */
const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            //mahsulot allaqachon mavjudligini korzinkadan tekshirish tekshirish
            const exist = state.find((x) =>
                x.id === product.id
            );
            if (exist) {
                // cartdagi mavjud product id bilan tanlangandagi product id teng bo'lsa bitta qo'shamiz yoki yuq bo'lsa bitta yaratib qo'yamiz
                return state.map((x) =>
                    x.id === product.id ? {
                        ...x,
                        quantity: x.quantity + 1
                    } :
                    x);
            } else {
                const product = action.protuct;
                return [
                    ...state,
                    {
                        ...product,
                        quantity: 1,
                    }
                ]
            }
        
          
        case "DELITEM":
            const exist1 = state.find((x) =>
                x.id === product.id
            );
            if (exist1.quantity === 1) {
                return state.filter((x) =>
                    x.id !== exist1.id
                );
            } else {
                return state.map((x) =>
                    x.id === product.id ? {
                        ...x,
                        quantity: x.quantity - 1
                    } :
                    x
                );
            }
          
        default:
             return state;
          
    }
}

export default handleCart;