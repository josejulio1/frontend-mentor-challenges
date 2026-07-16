import { motion } from "framer-motion";
import useCart from "../../stores/cart.store";
import useModal from "../../stores/modal.store";
import Button from "../button/Button";
import OrderItem from "../order-item/OrderItem";

function OrderConfirmedModal() {
    const { products, reset } = useCart();
    const { setIsOpen } = useModal();

    const handleNewOrder = () => {
        reset();
        setIsOpen(false);
    }

    return (
        <div
            className="fixed inset-0 bg-black/50 flex justify-center max-sm:items-end sm:items-center"
            onClick={() => setIsOpen(false)}
        >
            <motion.section
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: '100%' }}
                transition={{ duration: .2 }}
                className="flex flex-col gap-y-6 bg-white p-6 rounded-t-2xl sm:rounded-b-2xl max-sm:w-full xl:w-4/12"
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    className="w-12 h-12"
                    src="/images/icon-order-confirmed.svg"
                    alt="Order Confirmed Icon"
                />
                <article className="flex flex-col gap-y-2">
                    <h2 className="text-5xl font-bold">Order Confirmed</h2>
                    <p className="text-rose-500">We hope you enjoy your food!</p>
                </article>
                <section className="flex flex-col gap-y-4 bg-rose-50 rounded-xl px-6 pt-2 pb-6">
                    <section className="max-sm:max-h-70 sm:max-h-100 overflow-y-auto">
                        {
                            products.map(productCart => (
                                <OrderItem
                                    key={productCart.product.name}
                                    productCart={productCart}
                                />
                            ))
                        }
                    </section>
                    <article className="flex justify-between items-center gap-x-4">
                        <span className="text-rose-900 max-sm:text-sm">Order Total</span>
                        <span className="text-2xl font-bold">${products.reduce((accumulator, productCart) => accumulator + (productCart.product.price * productCart.quantity), 0).toFixed(2)}</span>
                    </article>
                </section>
                <Button
                    text="Start New Order"
                    onClick={handleNewOrder}
                />
            </motion.section>
        </div>
    );
}

export default OrderConfirmedModal;