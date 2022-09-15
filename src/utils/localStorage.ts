const getLocalStorage = (key: string) => localStorage.getItem(key)

const setLocalStorage = (key: string, value: any) => localStorage.setItem(key, JSON.stringify(value))

const removeLocalStorage = (key: string) => localStorage.removeItem(key)

export {
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage
}
