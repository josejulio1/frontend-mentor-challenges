import ProductCard from "../product-card/ProductCard";
import products from "./../../data/data.json";

function ProductsGrid() {
    return (
        <section className="grid max-md:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-8">
            {
                products.map(product => (
                    <ProductCard
                        key={product.name}
                        product={product}
                    />
                ))
            }
        </section>
    );
}

export default ProductsGrid;