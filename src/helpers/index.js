export function formatDate(dateString) {
    if (!dateString) return '';
    const dateObject = new Date(dateString)

    const dia = dateObject.getDate();
    const mes = dateObject.getMonth() + 1;
    const ano = dateObject.getFullYear();

    return `${dia}/${mes}/${ano}`;
}