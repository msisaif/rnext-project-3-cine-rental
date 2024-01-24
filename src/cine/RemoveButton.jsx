import removeIcon from "./../assets/delete.svg";

export default function RemoveButton({ onRemove }) {
  return (
    <>
      <button
        onClick={onRemove}
        className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white"
      >
        <img className="w-5 h-5" src={removeIcon} alt="Remove Icon" />
        <span className="max-md:hidden">Remove</span>
      </button>
    </>
  );
}
