import Image from "next/image";

export default function Card({ li }) {
  console.log(li);
  return (
    <div
      className="h-[150px] w-[124px] rounded-2xl
    "
    >
      <div className="h-full w-28 rounded-2xl border-2" style={{
        backgroundImage:`url(${li})`,
        backgroundSize:"contain",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center"
      }}></div>
      {/* <Image  src={li} alt="" width={300} height={330}  objectFit={"contain"} objectPosition="center"  className="w-28 h-full rounded-2xl"/> */}
      {/* <img src={li}  alt="" className="h-full w-28 rounded-2xl" /> */}
    </div>
  );
}
