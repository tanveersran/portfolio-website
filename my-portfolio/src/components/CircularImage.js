import Image from "next/image";
const CircularImage = ({ src, alt }) => {
    return (
        <Image src={src} alt={alt} width={350} height={350} className="rounded-full border-4 border-secondary-dark" />
    );
}

export default CircularImage;