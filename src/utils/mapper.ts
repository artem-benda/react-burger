import { TOrderStatus } from "./types"

export const mapOrderStatus = (status: TOrderStatus): string => {
    switch(status) {
        case 'done': return "Завершен";
        case 'created': return "Новый";
        case 'pending': return "Готовится";
    }
}