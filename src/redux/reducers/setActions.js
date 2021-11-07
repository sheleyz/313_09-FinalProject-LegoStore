export const add_product = (product) => {
    return {
        type: "add_product",
        product: product
    }
}

export const add_to_cart = (product) => {
    return {
        type: "add_to_cart",
        product: product
    }
}

export const remove_from_cart = (product) => {
    return {
        type: "remove_from_cart",
        product: product
    }
}