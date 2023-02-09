function useLogout(){
  const logout = ()=>{
    localStorage.removeItem("token")
  }
  return {logout}
}
export default useLogout