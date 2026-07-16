import useCart, { type ProductCart } from "../../stores/cart.store";

interface Props {
    productCart: ProductCart
}

function CartItem({ productCart }: Props) {
    const { product, quantity } = productCart;

    const { removeProduct } = useCart();

    return (
        <article className="flex justify-between items-center gap-x-4 border-b border-rose-100 py-4">
            <section className="flex flex-col gap-y-2">
                <h5 className="font-semibold">{product.name}</h5>
                <article className="flex gap-x-4">
                    <span className="text-red font-bold">{quantity}x</span>
                    <article className="flex gap-x-2">
                        <span className="text-rose-500">@</span>
                        <span className="text-rose-500">${product.price.toFixed(2)}</span>
                        <span className="text-rose-500 font-bold">${(product.price * quantity).toFixed(2)}</span>
                    </article>
                </article>
            </section>
            <button
                className="cursor-pointer w-5 h-5 p-0.5 border-2 border-rose-300 rounded-full"
                onClick={() => removeProduct(product.name)}
            >
                <img
                    className="w-full"
                    src="/images/icon-remove-item.svg"
                    alt={`Remove ${product.name} from cart`}
                />
            </button>
        </article>
    );
}

export default CartItem;