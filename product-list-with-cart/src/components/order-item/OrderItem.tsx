import type { ProductCart } from "../../stores/cart.store";

interface Props {
    productCart: ProductCart
}

function OrderItem({ productCart }: Props) {
    const { product, quantity } = productCart;

    return (
        <article className="flex justify-between items-center gap-x-1 border-b border-rose-100 py-4">
            <section className="flex items-center gap-x-4">
                <img
                    className="rounded-md max-sm:w-12 max-sm:h-12 sm:w-16 sm:h-16"
                    src={product.image.thumbnail}
                    alt={`Thumbnail of ${product.name}`}
                />
                <article className="flex flex-col gap-y-1">
                    <h5 className="font-semibold line-clamp-1">{product.name}</h5>
                    <article className="flex gap-x-4">
                        <span className="text-red font-semibold">{quantity}x</span>
                        <span className="text-rose-500">@ ${product.price.toFixed(2)}</span>
                    </article>
                </article>
            </section>
            <span className="font-semibold text-rose-900">${(product.price * quantity).toFixed(2)}</span>
        </article>
    );
}

export default OrderItem;