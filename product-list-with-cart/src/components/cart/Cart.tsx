import useCart from "../../stores/cart.store";
import useModal from "../../stores/modal.store";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";

function Cart() {
    const { products } = useCart();
    const { setIsOpen } = useModal();

    return (
        <aside>
            <section className="flex flex-col gap-y-2 bg-white p-8 sticky top-10 rounded-xl">
                <h2 className="text-2xl text-red font-bold">Your Cart ({products.length})</h2>
                {
                    products.length === 0
                        ? (
                            <article className="flex flex-col items-center gap-y-6">
                                <img src="/images/illustration-empty-cart.svg" alt="Empty Cart" />
                                <p className="font-semibold text-rose-500">Your added items will appear here</p>
                            </article>
                        )
                        : (
                            <section className="flex flex-col gap-y-6">
                                <section className="max-h-140 overflow-y-auto">
                                    {
                                        products.map(productCart => (
                                            <CartItem
                                                key={productCart.product.name}
                                                productCart={productCart}
                                            />
                                        ))
                                    }
                                </section>
                                <article className="flex justify-between items-center">
                                    <span>Total</span>
                                    <span className="text-3xl font-bold">${products.reduce((accumulator, productCart) => accumulator + (productCart.product.price * productCart.quantity), 0).toFixed(2)}</span>
                                </article>
                                <article className="flex justify-center items-center gap-x-4 bg-rose-50 p-4 rounded-xl">
                                    <img
                                        className="w-6 h-6"
                                        src="/images/icon-carbon-neutral.svg"
                                        alt="Carbon-neutral"
                                    />
                                    <span>This is <strong>carbon-neutral</strong> delivery</span>
                                </article>
                                <Button
                                    text="Confirm Order"
                                    onClick={() => setIsOpen(true)}
                                />
                            </section>
                        )
                }
            </section>
        </aside>
    );
}

export default Cart;