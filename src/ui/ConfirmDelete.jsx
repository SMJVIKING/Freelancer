function ConfirmDelete({ resourceName, onClose, onConfirm, disabled }) {
  return (
    <div>
      <h2 className="font-bold text-base mb-8">
        ایا از حذف {resourceName} مطمعن هستید؟
      </h2>
      <div className="flex items-center justify-between gap-x-16">
        <button
          disabled={disabled}
          onClick={onClose}
          className="btn btn--primary flex-1"
        >
          لغو
        </button>
        <button
          disabled={disabled}
          onClick={onConfirm}
          className="btn btn--danger flex-1 py-3"
        >
          تایید
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
