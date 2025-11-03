const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`
    const token = localStorage.getItem('token')
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    try {
      const response = await fetch(url, config)
      
      const contentType = response.headers.get('content-type')
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text()
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${text || response.statusText}`)
        }
        try {
          return JSON.parse(text)
        } catch {
          return { success: true, data: text }
        }
      }

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || `HTTP ${response.status}: ${response.statusText}`)
      }

      return data
    } catch (error) {
      if (error.message.includes('429') || error.message.includes('Too many')) {
        throw new Error('429: Too many requests')
      }
      throw error
    }
  }

  // Auth endpoints
  async login(email, password) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    })
  }

  async getMe() {
    return this.request('/auth/me')
  }

  // Bonds endpoints
  async getBonds(filters = {}) {
    const queryParams = new URLSearchParams()
    Object.keys(filters).forEach(key => {
      if (filters[key] !== undefined && filters[key] !== null && filters[key] !== '') {
        queryParams.append(key, filters[key])
      }
    })
    const queryString = queryParams.toString()
    return this.request(`/bonds${queryString ? `?${queryString}` : ''}`)
  }

  async getBondById(id) {
    return this.request(`/bonds/${id}`)
  }

  async createBond(bondData) {
    return this.request('/bonds', {
      method: 'POST',
      body: JSON.stringify(bondData),
    })
  }

  async updateBond(id, bondData) {
    return this.request(`/bonds/${id}`, {
      method: 'PUT',
      body: JSON.stringify(bondData),
    })
  }

  async deleteBond(id) {
    return this.request(`/bonds/${id}`, {
      method: 'DELETE',
    })
  }
}

export default new ApiService()

