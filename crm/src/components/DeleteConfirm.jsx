const DeleteConfirm = ({ bond, onClose, onConfirm }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content max-w-md" onClick={(e) => e.stopPropagation()}>
        <div className="card">
          <div className="card-header">
            <h3 className="text-xl font-bold text-unibonds-navy">Delete Bond</h3>
          </div>
          <div className="card-body">
            <p className="text-gray-700 mb-4">
              Are you sure you want to delete this bond? This action cannot be undone.
            </p>
            
            {bond && (
              <div className="bg-gray-50 p-4 rounded-md mb-4">
                <p className="font-semibold text-gray-900">Bond ID: {bond.bondId}</p>
                <p className="text-gray-600">Issuer: {bond.issuer}</p>
                <p className="text-gray-600">ISIN: {bond.isin}</p>
              </div>
            )}

            <div className="flex justify-end gap-3">
              <button
                onClick={onClose}
                className="btn btn-secondary"
              >
                Cancel
              </button>
              <button
                onClick={onConfirm}
                className="btn btn-danger"
              >
                Delete Bond
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteConfirm

