import { create } from "zustand"
import { persist } from "zustand/middleware";
import type { ProductImage, ProductName, ProductPrice } from "../models/product.model";

type ProductWithoutQuantity = Omit<ProductCart, 'quantity'>;

export interface ProductCart {
    name: ProductName
    price: ProductPrice
    image: ProductImage
    quantity: number
}

interface CartState {
    products: ProductCart[]
    reset: () => void
    getProduct: (productName: ProductName) => ProductCart | null
    addProduct: (product: ProductWithoutQuantity) => void
    removeProduct: (productName: ProductName) => void
}

const useCart = create<CartState>()(
    persist(
        (set, get) => ({
            products: [],
            reset: () => {
                set(state => ({
                    ...state,
                    products: []
                }));
            },
            getProduct: (productName) => {
                return get().products.find(productCart => productCart.name === productName) || null;
            },
            addProduct: (product) => {
                set(state => ({
                    ...state,
                    products: state.products.find(productCart => productCart.name === product.name)
                        ? state.products.map(productCart => productCart.name === product.name ? { ...productCart, quantity: productCart.quantity+ 1 } : productCart)
                        : [ ...state.products, { ...product, quantity: 1 } ]
                }));
            },
            removeProduct: (productName) => {
                set(state => ({
                    ...state,
                    products: state.products.find(productCart => productCart.name === productName && productCart.quantity > 1)
                        ? state.products.map(productCart => productCart.name === productName ? { ...productCart, quantity: productCart.quantity - 1 } : productCart)
                        : state.products.filter(productCart => productCart.name !== productName)
                }));
            }
        }),
        {
            name: 'Cart'
        }
    )
);

export default useCart;