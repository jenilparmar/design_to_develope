import {
  addCodeToCookieArray,
  getCodesFromCookie,
  removeCodeFromCookie,
} from "@/Jenil/Components/addCodeToCookies";

export default function Cookies() {
  const handleAddCode = (code) => {
    try {
      addCodeToCookieArray(code);
      alert("Code added!");
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleGetCodes = () => {
    const codes = getCodesFromCookie();
    alert(codes[0]);
    console.log("Saved Codes:", codes);
  };

  const handleRemoveCode = (code) => {
    removeCodeFromCookie();
    alert("Code removed!" + code);
  };

  return (
    <div>
      <div className="ml-20 flex flex-col">
        <button
          onClick={() => {
            handleAddCode("wgwsdc");
          }}>
          Add Code
        </button>
        <button onClick={handleGetCodes}>Get Codes</button>
        <button
          onClick={() => {
            handleRemoveCode("FQzUzQ");
          }}>
          Remove Code
        </button>
      </div>
    </div>
  );
}
