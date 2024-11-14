export default function Card({ li }) {
  console.log(li);
  return (
    <div
      className="h-[158px] w-[124px] rounded-md
    "
    >
      <img src={li} alt="" className="h-full w-20 rounded-md" />
    </div>
  );
}
