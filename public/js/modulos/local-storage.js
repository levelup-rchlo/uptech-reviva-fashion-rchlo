export function pullLocalStorage(local) {
    return JSON.parse(localStorage.getItem(local));
}
export function pushLocalStorage(local, listaProdutos) {
    return localStorage.setItem(local, JSON.stringify(listaProdutos));
}
