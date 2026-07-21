import type { PropsWithChildren } from "react"

interface Props {
    color: string
    header: {
        title: string
        icon: {
            url: string
            alt: string
        }
    }
    content: {
        title: string
        description: string
    }
}

function StepCard({ color, header, content, children }: PropsWithChildren<Props>) {
    return (
        <article>
            <section className="">
                <article>
                    <img
                        src={header.icon.url}
                        alt={header.icon.alt}
                        style={{ backgroundColor: color }}
                    />
                </article>
                <span></span>
            </section>
        </article>
    );
}

export default StepCard;