interface Props {
    text: string
    onClick: () => void
}

function Button({ text, onClick }: Props) {
    return (
        <button
            className="bg-red rounded-full text-rose-50 p-3 cursor-pointer"
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default Button;