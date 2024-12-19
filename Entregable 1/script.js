document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('turnos-container');
    const apiURL = 'https://643bf1434477945573639f3c.mockapi.io/api/turnos';

    
    fetch(apiURL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (!Array.isArray(data) || data.length === 0) {
                throw new Error('La API no devolvió datos válidos.');
            }

            data.forEach(turno => {
                
                if (!turno.dia || !turno.hora || !turno.atencion || !turno.id) {
                    console.warn('Turno inválido:', turno);
                    return;
                }

                const card = document.createElement('div');
                card.className = 'card';

                card.innerHTML = `
                    <h3>${turno.dia}</h3>
                    <p><strong>Hora:</strong> ${turno.hora}</p>
                    <p><strong>Atención:</strong> ${turno.atencion}</p>
                    <p><strong>ID:</strong> ${turno.id}</p>
                `;

                container.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Hubo un problema con la operación de fetch:', error);
            container.innerHTML = '<p style="color: red; text-align: center;">Error al cargar los turnos.</p>';
        });
});
