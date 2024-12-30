const SelectableButton = ({ selected, title, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`flex flex-row items-center max-w-fit gap-2 px-8 py-2 rounded-3xl
        ${selected ? "bg-primary-dark text-primary-tinted scale-110" : "bg-primary-tinted text-primary-dark border-primary-dark border-2"}
        hover:bg-primary-dark hover:text-primary-tinted transition-colors`}
        >
            {title}
        </button>
    );
}

export default SelectableButton;