export const getUserLogin = () => {
    const locUser = JSON.parse(localStorage.getItem('user'))
    return locUser ? locUser[0] : undefined
}