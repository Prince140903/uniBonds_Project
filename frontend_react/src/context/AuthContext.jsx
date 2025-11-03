import { createContext, useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Check if user is logged in on mount
    const checkAuth = async () => {
      const token = localStorage.getItem('token')
      if (token) {
        try {
          const response = await api.getMe()
          if (response.success) {
            setUser(response.data)
          }
        } catch (error) {
          localStorage.removeItem('token')
        }
      }
      setLoading(false)
    }

    checkAuth()
  }, [])

  const signup = async (userData) => {
    try {
      setError(null)
      const response = await api.signup(userData)
      if (response.success) {
        localStorage.setItem('token', response.data.token)
        setUser(response.data)
        return { success: true, data: response.data }
      }
    } catch (error) {
      setError(error.message)
      return { success: false, error: error.message }
    }
  }

  const login = async (email, password) => {
    try {
      setError(null)
      const response = await api.login(email, password)
      if (response.success) {
        localStorage.setItem('token', response.data.token)
        setUser(response.data)
        return { success: true, data: response.data }
      }
    } catch (error) {
      setError(error.message)
      return { success: false, error: error.message }
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
    setError(null)
  }

  const updateUser = (userData) => {
    setUser((prev) => ({ ...prev, ...userData }))
  }

  const value = {
    user,
    loading,
    error,
    signup,
    login,
    logout,
    updateUser,
    isAuthenticated: !!user,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

