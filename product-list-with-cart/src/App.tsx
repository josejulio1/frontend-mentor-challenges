import Cart from "./components/cart/Cart";
import OrderConfirmedModal from "./components/order-confirmed-modal/OrderConfirmedModal";
import ProductCard from "./components/product-card/ProductCard";
import products from "./data/data.json";
import useModal from "./stores/modal.store";

function App() {
    const { isOpen } = useModal();

    return (
        <>
            <main className="bg-rose-50 max-md:px-8 md:px-8 lg:px-10 xl:px-32 max-lg:py-8 lg:py-16 grid max-md:grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr] gap-8 font-[Red_Hat]">
                <section className="flex flex-col gap-y-10">
                    <h1 className="text-5xl font-bold text-rose-900">Desserts</h1>
                    <section className="grid max-md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {
                            products.map(product => (
                                <ProductCard
                                    key={product.name}
                                    product={product}
                                />
                            ))
                        }
                    </section>
                </section>
                <Cart />
            </main>
            {
                isOpen && <OrderConfirmedModal />
            }
        </>
    );
}

export default App;