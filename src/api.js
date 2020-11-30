export function getInfoProfile() {
    return fetch('https://randomuser.me/api/').then((response) => response.json());
}
