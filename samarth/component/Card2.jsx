export default function Card2({ li }) {
  console.log(li);
  return (
    <div
      className=" w-[124px] rounded-2xl
    "
    >
      <img src={li} alt="" className=" w-28 rounded-2xl" />
    </div>
  );
}
