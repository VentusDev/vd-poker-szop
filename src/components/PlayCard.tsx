type Props = {
    img: string
}

const PlayCard = ({ img }: Props) => {
  return (
    <label className={`block w-[130px] h-[210px] m-1 relative cursor-pointer animate-[wiggle_1s_ease-in-out_infinite] `} >
    <input type="checkbox"
    />
    <div className="back rotate-y-180 absolute left-0 top-0 w-full h-full drop-shadow-sm rounded-2xl bg-gray-700 backface-hidden transition-all duration-1000 label-checked:bg-red-600  bg-contain" style={{backgroundImage: `url("/img/cardBack.svg")`}}></div>
    <div className="front absolute left-0 top-0 w-full h-full drop-shadow-sm rounded-2xl  backface-hidden bg-gray-100 transition-all duration-1000 label-checked:bg-red-600 bg-contain bg-no-repeat border-4 border-transparent" style={{backgroundImage: `url("${img}")`}}></div>

  
  </label>
  )
}

export default PlayCard