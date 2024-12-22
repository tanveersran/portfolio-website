import Image from "next/image";
import useIsLgScreen from "@/hooks/useIsScreen";

const CircularImage = ({ src, alt }) => {
    const isLgScreen = useIsLgScreen();
    const size = isLgScreen ? 350 : 175;

    return (
        <div className={`w-${size} h-${size} rounded-full overflow-hidden border-8 border-secondary-dark`}>
            <Image src={src} alt={alt} width={size} height={size} className="object-cover" />
        </div>
    );
}

export default CircularImage;