import { Produto } from "./produto";
export function pullLocalStorage(local: string): Produto[] {
    return JSON.parse(<string>localStorage.getItem(local));
}
export function pushLocalStorage(local: string, listaProdutos: Produto[]): void {
    return localStorage.setItem(local, JSON.stringify(listaProdutos));
}
