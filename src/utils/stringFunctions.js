export function translateType(type) {

    switch(type) {
        case 'salad':
            return 'Saladas'
        case 'protein':
            return 'Proteinas'
        case 'spices':
            return 'Temperos'
        default: 
            return type
    }
}