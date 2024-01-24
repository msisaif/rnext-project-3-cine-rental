export default function ModalCloseButton({ onClose }) {
  return (
    <>
      <button
        type="button"
        className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm"
        href="#"
        onClick={onClose}
      >
        Cancel
      </button>
    </>
  );
}
