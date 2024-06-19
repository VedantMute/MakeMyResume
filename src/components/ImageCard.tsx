import Image from "next/image"

  
  export default function ImageCard() {
    return (
      <figure className="lg:w-[500px] overflow-hidden rounded-base border-2 border-black font-base shadow-base">
        <Image src="/images/image.png" alt={''} height={100} width={998}/>
        
      </figure>
    )
  }