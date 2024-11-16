export default function Card({ li }) {
  console.log(li);
  return (
    <div
      className="h-[150px] w-[124px] rounded-2xl
    "
    >
      <img src={li} alt="" className="h-full w-28 rounded-2xl" />
    </div>
  );
}
