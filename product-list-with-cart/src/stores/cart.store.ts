import { create } from "zustand"
import { persist } from "zustand/middleware";
import type { Product, ProductName } from "../models/product.model";

type ProductWithoutCategory = Omit<Product, 'category'>;

export interface ProductCart {
    product: ProductWithoutCategory
    quantity: number
}

interface CartState {
    products: ProductCart[]
    reset: () => void
    getProduct: (productName: ProductName) => ProductCart | null
    addProduct: (product: Product) => void
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
                return get().products.find(productCart => productCart.product.name === productName) || null;
            },
            addProduct: (product) => {
                set(state => ({
                    ...state,
                    products: state.products.find(productCart => productCart.product.name === product.name)
                        ? state.products.map(productCart => productCart.product.name === product.name ? { ...productCart, quantity: productCart.quantity + 1 } : productCart)
                        : [ ...state.products, { product, quantity: 1 } ]
                }));
            },
            removeProduct: (productName) => {
                set(state => ({
                    ...state,
                    products: state.products.find(productCart => productCart.product.name === productName && productCart.quantity > 1)
                        ? state.products.map(productCart => productCart.product.name === productName ? { ...productCart, quantity: productCart.quantity - 1 } : productCart)
                        : state.products.filter(productCart => productCart.product.name !== productName)
                }));
            }
        }),
        {
            name: 'Cart'
        }
    )
);

export default useCart;