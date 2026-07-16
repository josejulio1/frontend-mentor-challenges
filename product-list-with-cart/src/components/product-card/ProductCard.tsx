import type { Product } from "../../models/product.model";
import useCart from "../../stores/cart.store";

const classNameButton = 'p-3 cursor-pointer absolute bottom-0 left-6/12 -translate-x-6/12 translate-y-6/12 w-7/12 rounded-4xl flex items-center select-none';

interface Props {
    product: Product
}

function ProductCard({ product }: Props) {
    const { name, category, price, image } = product;

    const { getProduct, addProduct, removeProduct } = useCart();

    const productCart = getProduct(name);

    return (
        <article className="flex flex-col gap-y-10">
            <section className="relative">
                <picture>
                    <source srcSet={image.mobile} media="(max-width: 375px)" />
                    <source srcSet={image.tablet} media="(max-width: 992px)" />
                    <img
                        className={`rounded-xl w-full ${productCart ? 'border-3 border-red' : ''}`}
                        src={image.desktop}
                        alt={`Image of ${name}`}
                    />
                </picture>
                {
                    productCart
                        ? (
                            <article className={`${classNameButton} justify-between p-4 bg-red`}>
                                <button
                                    className="border border-white rounded-full p-1 cursor-pointer"
                                    onClick={() => removeProduct(name)}
                                >
                                    <img
                                        className="w-3 h-3"
                                        src="/images/icon-decrement-quantity.svg"
                                        alt={`Decrement quantity or remove of ${name} product`}
                                    />
                                </button>
                                <span className="text-white text-lg">{productCart.quantity}</span>
                                <button
                                    className="border border-white rounded-full p-1 cursor-pointer"
                                    onClick={() => addProduct(product)}
                                >
                                    <img
                                        className="w-3 h-3"
                                        src="/images/icon-increment-quantity.svg"
                                        alt={`Increment quantity of ${name} product`}
                                    />
                                </button>
                            </article>
                        )
                        : (
                            <button
                                className={`${classNameButton} justify-center gap-x-2 border border-rose-500 bg-white`}
                                onClick={() => addProduct(product)}
                            >
                                <img
                                    className="w-6 h-6"
                                    src="/images/icon-add-to-cart.svg"
                                    alt="Cart Icon"
                                />
                                <span className="text-lg font-semibold">Add to cart</span>
                            </button>
                        )
                }
            </section>
            <article className="flex flex-col">
                <span className="text-rose-500">{category}</span>
                <h4 className="text-rose-900 font-semibold">{name}</h4>
                <span className="text-red font-bold">${price.toFixed(2)}</span>
            </article>
        </article>
    );
}

export default ProductCard;