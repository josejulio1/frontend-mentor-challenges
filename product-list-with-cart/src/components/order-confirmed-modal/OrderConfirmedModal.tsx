import useCart from "../../stores/cart.store";
import useModal from "../../stores/modal.store";
import Button from "../button/Button";

function OrderConfirmedModal() {
    const { reset } = useCart();
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
            <section
                className="flex flex-col gap-y-6 bg-white p-8 rounded-t-2xl sm:rounded-b-2xl max-sm:w-full lg:w-4/12"
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    className="w-12 h-12"
                    src="/images/icon-order-confirmed.svg"
                    alt="Order Confirmed Icon"
                />
                <article className="flex flex-col gap-y-2">
                    <h2 className="text-4xl font-bold">Order Confirmed</h2>
                    <p className="text-rose-500">We hope you enjoy your food!</p>
                </article>
                <section className="bg-rose-100 rounded-xl p-8">

                </section>
                <Button
                    text="Start New Order"
                    onClick={handleNewOrder}
                />
            </section>
        </div>
    );
}

export default OrderConfirmedModal;