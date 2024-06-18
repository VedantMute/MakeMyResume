type Props = {
    imageUrl: string
  }
  
  export default function ImageCard({ imageUrl }: Props) {
    return (
      <figure className="lg:w-[500px] overflow-hidden rounded-base border-2 border-black font-base shadow-base">
        <img className="w-full " src={imageUrl} alt="image" />
        
      </figure>
    )
  }