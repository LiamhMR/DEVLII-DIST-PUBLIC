export async function submitForm(email, message) {
    // Obtiene la dirección IP del usuario
    const ip = await getUserIP();

    const data = {
        ip,
        email,
        message,
    };

    try {
        const response = await fetch('/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        return result; // Devuelve el resultado para manejarlo en el componente
    } catch (error) {
        console.error('Error:', error);
        throw error; // Lanza el error para manejarlo en el componente
    }
}

async function getUserIP() {
    const response = await fetch('https://api.ipify.org?format=json'); 
    const data = await response.json();
    return data.ip;
}
