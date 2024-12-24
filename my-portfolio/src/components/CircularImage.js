import Image from "next/image";

const CircularImage = ({ src, alt }) => {
    return (
        <>  
            {/* For desktop view*/}
            <div className={`hidden lg:flex rounded-full overflow-hidden border-8 border-secondary-dark`}>
                <Image src={src} alt={alt} width={300} height={300} className="object-cover" />
            </div>
        
            {/* For mobile/tablet view */}
            <div className={`flex lg:hidden rounded-full overflow-hidden border-8 border-secondary-dark`}>
                <Image src={src} alt={alt} width={200} height={200} className="object-cover" />
            </div>
        </>

    );
}

export default CircularImage;