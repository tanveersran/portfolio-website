import Image from "next/image";

const CircularImage = ({ src, alt }) => {
    return (
        <div className={`w-200 h-200 rounded-full overflow-hidden border-8 border-secondary-dark`}>
            <Image src={src} alt={alt} width={200} height={200} className="object-cover" />
        </div>
    );
}

export default CircularImage;