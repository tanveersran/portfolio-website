const Copyright = ({data}) => {
    return (
        <footer className="flex flex-col items-center justify-center py-8 text-sm text-primary-dark">
            <p>{data.footerText}</p>
            <p>{data.footerText2}</p>
        </footer>
    )
}

export default Copyright;