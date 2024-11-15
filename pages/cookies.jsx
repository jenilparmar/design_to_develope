import { addCodeToCookieArray , getCodesFromCookie , removeCodeFromCookie } from "@/Jenil/Components/addCodeToCookies";


export default function Cookies() {
  const handleAddCode = () => {
    try {
     addCodeToCookieArray('sdfgfd');
      alert('Code added!');
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleGetCodes = () => {
    const codes = getCodesFromCookie();
    alert(codes[0])
    console.log('Saved Codes:', codes);
  };

  const handleRemoveCode = () => {
    removeCodeFromCookie('sdkfjn');
    alert('Code removed!');
  };

  return (
    <div>
    <div className="ml-20 flex flex-col">
    <button onClick={handleAddCode}>Add Code</button>
      <button onClick={handleGetCodes}>Get Codes</button>
      <button onClick={handleRemoveCode}>Remove Code</button>
    </div>
    </div>
  );
}
