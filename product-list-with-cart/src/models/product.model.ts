export interface Product {
    name: string
    category: string
    price: number
    image: {
        thumbnail: string
        mobile: string
        tablet: string
        desktop: string
    }
}

export type ProductName = Product['name'];
export type ProductCategory = Product['category'];
export type ProductPrice = Product['price'];
export type ProductImage = Product['image'];