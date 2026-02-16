export const useAuth = () => {
  const user = useState('user', () => {
    if (process.client) {
      return JSON.parse(localStorage.getItem('user')) || null
    }
    return null
  })

  const login = (username) => {
    user.value = { name: username }

    if (process.client) {
      localStorage.setItem('user', JSON.stringify(user.value))
    }
  }

  const logout = () => {
    user.value = null

    if (process.client) {
      localStorage.removeItem('user')
    }
  }

  return {
    user,
    login,
    logout
  }
}
