import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login, isAuthenticated, isAdmin } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    // Redirect if already authenticated and is admin
    if (isAuthenticated && isAdmin) {
      navigate('/dashboard', { replace: true })
    }
  }, [isAuthenticated, isAdmin, navigate])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const result = await login(formData.email, formData.password)
    
    if (result.success) {
      navigate('/dashboard')
    } else {
      setError(result.error || 'Login failed. Please try again.')
    }
    
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#667eea] to-[#764ba2] px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="font-poppins font-bold text-4xl text-white mb-3">
            UniBonds <span className="text-unibonds-orange">CRM</span>
          </h1>
          <p className="text-white/90 text-base">
            Admin Login
          </p>
        </div>

        <div className="rounded-xl bg-white shadow-2xl p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                className="text-sm font-medium leading-none text-unibonds-navy mb-2 block"
                htmlFor="email"
              >
                Email *
              </label>
              <input
                type="email"
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#667eea] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="email"
                name="email"
                placeholder="admin@example.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                className="text-sm font-medium leading-none text-unibonds-navy mb-2 block"
                htmlFor="password"
              >
                Password *
              </label>
              <input
                type="password"
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#667eea] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:from-[#5568d3] hover:to-[#6a3f8f] text-white font-semibold"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login

