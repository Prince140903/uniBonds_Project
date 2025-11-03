import { useState, useEffect } from 'react'
import BondTable from '../components/BondTable'
import BondModal from '../components/BondModal'
import DeleteConfirm from '../components/DeleteConfirm'
import api from '../services/api'

const Dashboard = () => {
  const [bonds, setBonds] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({
    type: '',
    rating: '',
    isActive: '',
  })
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 20,
    total: 0,
    totalPages: 0,
  })
  const [showModal, setShowModal] = useState(false)
  const [editingBond, setEditingBond] = useState(null)
  const [deleteBond, setDeleteBond] = useState(null)
  const [error, setError] = useState('')

  const fetchBonds = async () => {
    try {
      setLoading(true)
      setError('')
      const params = {
        page: pagination.page,
        limit: pagination.limit,
        ...filters,
      }
      
      if (searchTerm) {
        params.search = searchTerm
      }

      const response = await api.getBonds(params)
      
      if (response.success) {
        setBonds(response.data)
        setPagination(prev => ({
          ...prev,
          total: response.pagination.total,
          totalPages: response.pagination.totalPages,
        }))
      }
    } catch (err) {
      setError(err.message || 'Failed to fetch bonds')
      console.error('Error fetching bonds:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchBonds()
  }, [pagination.page, filters])

  const handleSearch = (e) => {
    e.preventDefault()
    setPagination(prev => ({ ...prev, page: 1 }))
    fetchBonds()
  }

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }))
    setPagination(prev => ({ ...prev, page: 1 }))
  }

  const handleCreate = () => {
    setEditingBond(null)
    setShowModal(true)
  }

  const handleEdit = (bond) => {
    setEditingBond(bond)
    setShowModal(true)
  }

  const handleDelete = (bond) => {
    setDeleteBond(bond)
  }

  const handleSave = async (bondData) => {
    try {
      if (editingBond) {
        await api.updateBond(editingBond._id || editingBond.bondId, bondData)
      } else {
        await api.createBond(bondData)
      }
      setShowModal(false)
      setEditingBond(null)
      fetchBonds()
    } catch (err) {
      throw err
    }
  }

  const confirmDelete = async () => {
    try {
      await api.deleteBond(deleteBond._id || deleteBond.bondId)
      setDeleteBond(null)
      fetchBonds()
    } catch (err) {
      console.error('Error deleting bond:', err)
      alert('Failed to delete bond: ' + (err.message || 'Unknown error'))
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-poppins font-bold text-3xl text-unibonds-navy">Bonds Management</h2>
          <p className="text-gray-600 mt-1">Manage all bonds in the system</p>
        </div>
        <button
          onClick={handleCreate}
          className="btn btn-primary"
        >
          + Create New Bond
        </button>
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      <div className="card">
        <div className="card-body">
          {/* Search and Filters */}
          <form onSubmit={handleSearch} className="mb-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <input
                type="text"
                placeholder="Search by issuer, ISIN, or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#667eea] focus-visible:ring-offset-2"
              />
              <select
                value={filters.type}
                onChange={(e) => handleFilterChange('type', e.target.value)}
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#667eea] focus-visible:ring-offset-2"
              >
                <option value="">All Types</option>
                <option value="G-Sec">G-Sec</option>
                <option value="PSU">PSU</option>
                <option value="NBFC">NBFC</option>
                <option value="Corporate">Corporate</option>
                <option value="Municipal">Municipal</option>
                <option value="Tax-Free">Tax-Free</option>
              </select>
              <select
                value={filters.rating}
                onChange={(e) => handleFilterChange('rating', e.target.value)}
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#667eea] focus-visible:ring-offset-2"
              >
                <option value="">All Ratings</option>
                <option value="SOV">SOV</option>
                <option value="AAA">AAA</option>
                <option value="AA+">AA+</option>
                <option value="AA">AA</option>
                <option value="AA-">AA-</option>
                <option value="A+">A+</option>
                <option value="A">A</option>
                <option value="A-">A-</option>
                <option value="BBB+">BBB+</option>
                <option value="BBB">BBB</option>
                <option value="BBB-">BBB-</option>
              </select>
              <select
                value={filters.isActive}
                onChange={(e) => handleFilterChange('isActive', e.target.value)}
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#667eea] focus-visible:ring-offset-2"
              >
                <option value="">All Status</option>
                <option value="true">Active</option>
                <option value="false">Inactive</option>
              </select>
            </div>
            <button
              type="submit"
              className="btn btn-secondary"
            >
              Search
            </button>
          </form>

          {/* Bonds Table */}
          <BondTable
            bonds={bonds}
            onEdit={handleEdit}
            onDelete={handleDelete}
            loading={loading}
          />

          {/* Pagination */}
          {pagination.totalPages > 1 && (
            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Showing {(pagination.page - 1) * pagination.limit + 1} to {Math.min(pagination.page * pagination.limit, pagination.total)} of {pagination.total} bonds
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setPagination(prev => ({ ...prev, page: prev.page - 1 }))}
                  disabled={pagination.page === 1}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                <span className="px-4 py-2 text-sm font-medium text-gray-700">
                  Page {pagination.page} of {pagination.totalPages}
                </span>
                <button
                  onClick={() => setPagination(prev => ({ ...prev, page: prev.page + 1 }))}
                  disabled={pagination.page >= pagination.totalPages}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Create/Edit Modal */}
      {showModal && (
        <BondModal
          bond={editingBond}
          onClose={() => {
            setShowModal(false)
            setEditingBond(null)
          }}
          onSave={handleSave}
        />
      )}

      {/* Delete Confirmation */}
      {deleteBond && (
        <DeleteConfirm
          bond={deleteBond}
          onClose={() => setDeleteBond(null)}
          onConfirm={confirmDelete}
        />
      )}
    </div>
  )
}

export default Dashboard

