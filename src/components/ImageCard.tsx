import Image from "next/image";

  export default function ImageCard() {
    return (
      <figure className="lg:w-[500px] overflow-hidden rounded-base border-2 border-black font-base shadow-base">
        <Image className="w-full" src="./public/image.png"  width={500} height={300}  alt="image" />
        
      </figure>
    )
  }