import { useState, useEffect } from 'react'

const BondModal = ({ bond, onClose, onSave }) => {
  const isEditing = !!bond
  const [formData, setFormData] = useState({
    bondId: '',
    issuer: '',
    isin: '',
    type: 'G-Sec',
    coupon: '',
    yield: '',
    rating: 'AAA',
    ratingAgency: '',
    maturity: '',
    minInvestment: '',
    faceValue: '',
    tradable: true,
    frequency: 'Annual',
    description: '',
    isActive: true,
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (bond) {
      // Format maturity date for input
      const maturityDate = bond.maturity 
        ? new Date(bond.maturity).toISOString().split('T')[0]
        : ''
      
      setFormData({
        bondId: bond.bondId || '',
        issuer: bond.issuer || '',
        isin: bond.isin || '',
        type: bond.type || 'G-Sec',
        coupon: bond.coupon || '',
        yield: bond.yield || '',
        rating: bond.rating || 'AAA',
        ratingAgency: bond.ratingAgency || '',
        maturity: maturityDate,
        minInvestment: bond.minInvestment || '',
        faceValue: bond.faceValue || '',
        tradable: bond.tradable !== undefined ? bond.tradable : true,
        frequency: bond.frequency || 'Annual',
        description: bond.description || '',
        isActive: bond.isActive !== undefined ? bond.isActive : true,
      })
    }
  }, [bond])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validate = () => {
    const newErrors = {}

    if (!formData.bondId) newErrors.bondId = 'Bond ID is required'
    if (!formData.issuer) newErrors.issuer = 'Issuer is required'
    if (!formData.isin) newErrors.isin = 'ISIN is required'
    if (!formData.type) newErrors.type = 'Type is required'
    if (!formData.coupon || formData.coupon < 0 || formData.coupon > 100) {
      newErrors.coupon = 'Coupon must be between 0 and 100'
    }
    if (!formData.yield || formData.yield < 0 || formData.yield > 100) {
      newErrors.yield = 'Yield must be between 0 and 100'
    }
    if (!formData.rating) newErrors.rating = 'Rating is required'
    if (!formData.ratingAgency) newErrors.ratingAgency = 'Rating Agency is required'
    if (!formData.maturity) newErrors.maturity = 'Maturity date is required'
    if (!formData.minInvestment || formData.minInvestment < 0) {
      newErrors.minInvestment = 'Min Investment must be >= 0'
    }
    if (!formData.faceValue || formData.faceValue < 0) {
      newErrors.faceValue = 'Face Value must be >= 0'
    }
    if (!formData.frequency) newErrors.frequency = 'Frequency is required'
    if (!formData.description) newErrors.description = 'Description is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validate()) {
      return
    }

    setLoading(true)
    try {
      const bondData = {
        ...formData,
        bondId: parseInt(formData.bondId),
        coupon: parseFloat(formData.coupon),
        yield: parseFloat(formData.yield),
        minInvestment: parseFloat(formData.minInvestment),
        faceValue: parseFloat(formData.faceValue),
        maturity: new Date(formData.maturity),
      }
      
      await onSave(bondData)
    } catch (error) {
      alert('Failed to save bond: ' + (error.message || 'Unknown error'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content max-w-3xl" onClick={(e) => e.stopPropagation()}>
        <div className="card">
          <div className="card-header flex items-center justify-between">
            <h3 className="text-xl font-bold text-unibonds-navy">
              {isEditing ? 'Edit Bond' : 'Create New Bond'}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bond ID *
                  </label>
                  <input
                    type="number"
                    name="bondId"
                    value={formData.bondId}
                    onChange={handleChange}
                    disabled={isEditing}
                    className={`flex h-10 w-full rounded-md border ${errors.bondId ? 'border-red-300' : 'border-gray-300'} bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#667eea] focus-visible:ring-offset-2 ${isEditing ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                    required
                  />
                  {errors.bondId && <p className="text-xs text-red-600 mt-1">{errors.bondId}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ISIN *
                  </label>
                  <input
                    type="text"
                    name="isin"
                    value={formData.isin}
                    onChange={handleChange}
                    className={`flex h-10 w-full rounded-md border ${errors.isin ? 'border-red-300' : 'border-gray-300'} bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#667eea] focus-visible:ring-offset-2`}
                    required
                  />
                  {errors.isin && <p className="text-xs text-red-600 mt-1">{errors.isin}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Issuer *
                  </label>
                  <input
                    type="text"
                    name="issuer"
                    value={formData.issuer}
                    onChange={handleChange}
                    className={`flex h-10 w-full rounded-md border ${errors.issuer ? 'border-red-300' : 'border-gray-300'} bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#667eea] focus-visible:ring-offset-2`}
                    required
                  />
                  {errors.issuer && <p className="text-xs text-red-600 mt-1">{errors.issuer}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Type *
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className={`flex h-10 w-full rounded-md border ${errors.type ? 'border-red-300' : 'border-gray-300'} bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#667eea] focus-visible:ring-offset-2`}
                    required
                  >
                    <option value="G-Sec">G-Sec</option>
                    <option value="PSU">PSU</option>
                    <option value="NBFC">NBFC</option>
                    <option value="Corporate">Corporate</option>
                    <option value="Municipal">Municipal</option>
                    <option value="Tax-Free">Tax-Free</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Coupon (%) *
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="100"
                    name="coupon"
                    value={formData.coupon}
                    onChange={handleChange}
                    className={`flex h-10 w-full rounded-md border ${errors.coupon ? 'border-red-300' : 'border-gray-300'} bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#667eea] focus-visible:ring-offset-2`}
                    required
                  />
                  {errors.coupon && <p className="text-xs text-red-600 mt-1">{errors.coupon}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Yield (%) *
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="100"
                    name="yield"
                    value={formData.yield}
                    onChange={handleChange}
                    className={`flex h-10 w-full rounded-md border ${errors.yield ? 'border-red-300' : 'border-gray-300'} bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#667eea] focus-visible:ring-offset-2`}
                    required
                  />
                  {errors.yield && <p className="text-xs text-red-600 mt-1">{errors.yield}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Rating *
                  </label>
                  <select
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    className={`flex h-10 w-full rounded-md border ${errors.rating ? 'border-red-300' : 'border-gray-300'} bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#667eea] focus-visible:ring-offset-2`}
                    required
                  >
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
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Rating Agency *
                  </label>
                  <input
                    type="text"
                    name="ratingAgency"
                    value={formData.ratingAgency}
                    onChange={handleChange}
                    className={`flex h-10 w-full rounded-md border ${errors.ratingAgency ? 'border-red-300' : 'border-gray-300'} bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#667eea] focus-visible:ring-offset-2`}
                    required
                  />
                  {errors.ratingAgency && <p className="text-xs text-red-600 mt-1">{errors.ratingAgency}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Maturity Date *
                  </label>
                  <input
                    type="date"
                    name="maturity"
                    value={formData.maturity}
                    onChange={handleChange}
                    className={`flex h-10 w-full rounded-md border ${errors.maturity ? 'border-red-300' : 'border-gray-300'} bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#667eea] focus-visible:ring-offset-2`}
                    required
                  />
                  {errors.maturity && <p className="text-xs text-red-600 mt-1">{errors.maturity}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Frequency *
                  </label>
                  <select
                    name="frequency"
                    value={formData.frequency}
                    onChange={handleChange}
                    className={`flex h-10 w-full rounded-md border ${errors.frequency ? 'border-red-300' : 'border-gray-300'} bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#667eea] focus-visible:ring-offset-2`}
                    required
                  >
                    <option value="Monthly">Monthly</option>
                    <option value="Quarterly">Quarterly</option>
                    <option value="Semi-Annual">Semi-Annual</option>
                    <option value="Annual">Annual</option>
                    <option value="Cumulative">Cumulative</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Min Investment *
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    name="minInvestment"
                    value={formData.minInvestment}
                    onChange={handleChange}
                    className={`flex h-10 w-full rounded-md border ${errors.minInvestment ? 'border-red-300' : 'border-gray-300'} bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#667eea] focus-visible:ring-offset-2`}
                    required
                  />
                  {errors.minInvestment && <p className="text-xs text-red-600 mt-1">{errors.minInvestment}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Face Value *
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    name="faceValue"
                    value={formData.faceValue}
                    onChange={handleChange}
                    className={`flex h-10 w-full rounded-md border ${errors.faceValue ? 'border-red-300' : 'border-gray-300'} bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#667eea] focus-visible:ring-offset-2`}
                    required
                  />
                  {errors.faceValue && <p className="text-xs text-red-600 mt-1">{errors.faceValue}</p>}
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="tradable"
                    name="tradable"
                    checked={formData.tradable}
                    onChange={handleChange}
                    className="h-4 w-4 text-[#667eea] focus:ring-[#667eea] border-gray-300 rounded"
                  />
                  <label htmlFor="tradable" className="ml-2 text-sm text-gray-700">
                    Tradable
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="isActive"
                    name="isActive"
                    checked={formData.isActive}
                    onChange={handleChange}
                    className="h-4 w-4 text-[#667eea] focus:ring-[#667eea] border-gray-300 rounded"
                  />
                  <label htmlFor="isActive" className="ml-2 text-sm text-gray-700">
                    Active
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className={`flex w-full rounded-md border ${errors.description ? 'border-red-300' : 'border-gray-300'} bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#667eea] focus-visible:ring-offset-2`}
                  required
                />
                {errors.description && <p className="text-xs text-red-600 mt-1">{errors.description}</p>}
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="btn btn-secondary"
                  disabled={loading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {loading ? 'Saving...' : isEditing ? 'Update Bond' : 'Create Bond'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BondModal

