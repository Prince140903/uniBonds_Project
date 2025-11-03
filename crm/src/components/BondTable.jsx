const BondTable = ({ bonds, onEdit, onDelete, loading }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="spinner w-12 h-12"></div>
      </div>
    )
  }

  if (!bonds || bonds.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No bonds found
      </div>
    )
  }

  return (
    <div className="table-responsive">
      <table className="data-table">
        <thead>
          <tr>
            <th>Bond ID</th>
            <th>Issuer</th>
            <th>ISIN</th>
            <th>Type</th>
            <th>Coupon (%)</th>
            <th>Yield (%)</th>
            <th>Rating</th>
            <th>Maturity</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bonds.map((bond) => (
            <tr key={bond._id || bond.bondId}>
              <td className="font-semibold">{bond.bondId}</td>
              <td>{bond.issuer}</td>
              <td className="font-mono text-xs">{bond.isin}</td>
              <td>
                <span className="badge badge-gray">{bond.type}</span>
              </td>
              <td>{bond.coupon.toFixed(2)}%</td>
              <td className="font-semibold text-[#667eea]">{bond.yield.toFixed(2)}%</td>
              <td>
                <span className="badge badge-primary">{bond.rating}</span>
              </td>
              <td>{new Date(bond.maturity).toLocaleDateString()}</td>
              <td>
                {bond.isActive ? (
                  <span className="badge badge-success">Active</span>
                ) : (
                  <span className="badge badge-gray">Inactive</span>
                )}
              </td>
              <td>
                <div className="flex gap-2">
                  <button
                    onClick={() => onEdit(bond)}
                    className="px-3 py-1 text-xs font-medium text-[#667eea] hover:bg-[#667eea]/10 rounded-md transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(bond)}
                    className="px-3 py-1 text-xs font-medium text-red-600 hover:bg-red-50 rounded-md transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BondTable

