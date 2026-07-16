import { useEffect } from "react";
import Cart from "./components/cart/Cart";
import OrderConfirmedModal from "./components/order-confirmed-modal/OrderConfirmedModal";
import useModal from "./stores/modal.store";
import { AnimatePresence } from "framer-motion";
import ProductsGrid from "./components/products-grid/ProductsGrid";

function App() {
    const { isOpen } = useModal();

    useEffect(() => {
        document.body.classList.toggle('overflow-y-hidden');
    }, [isOpen]);

    return (
        <>
            <main className="bg-rose-50 max-md:px-8 md:px-8 lg:px-10 xl:px-32 max-lg:py-8 lg:py-16 grid max-md:grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr] gap-8 font-[Red_Hat]">
                <section className="flex flex-col gap-y-10">
                    <h1 className="text-5xl font-bold text-rose-900">Desserts</h1>
                    <ProductsGrid />
                </section>
                <Cart />
            </main>
            <AnimatePresence>
                {
                    isOpen && <OrderConfirmedModal />
                }
            </AnimatePresence>
        </>
    );
}

export default App;