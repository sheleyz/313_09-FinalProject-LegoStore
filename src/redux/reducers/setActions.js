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