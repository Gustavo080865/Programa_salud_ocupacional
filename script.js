document.addEventListener('DOMContentLoaded', () => {
    const moduleListSection = document.getElementById('modules');
    const moduleDetailSection = document.getElementById('module-detail');
    const detailTitle = document.getElementById('detail-title');
    const detailContent = document.getElementById('detail-content');
    const backToModulesBtn = document.getElementById('back-to-modules');
    const registrationForm = document.getElementById('registration-form');
    const registrationMessage = document.getElementById('registration-message');

    // Sample data for modules (could be fetched from an API in a real application)
    const modulesData = {
        modulo1: {
            title: "Módulo 1: Marco Legal General de SST",
            content: `
                <p>Este módulo cubre los fundamentos legales que rigen la Seguridad y Salud en el Trabajo. Es esencial para comprender el marco sobre el cual se construyen todas las demás normativas.</p>
                <h3>Temas Clave:</h3>
                <ul>
                    <li>Ley General de SST (ej. Ley 29783 en Perú, Ley 31/1995 en España)</li>
                    <li>Decretos Supremos y Reglamentos clave</li>
                    <li>Principios fundamentales de la SST</li>
                    <li>Roles y responsabilidades de empleadores y trabajadores</li>
                    <li>Organismos reguladores y su función</li>
                </ul>
                <p>Se analizarán casos prácticos y se discutirán las implicaciones de estas leyes en la gestión diaria de la salud ocupacional.</p>
            `
        },
        modulo2: {
            title: "Módulo 2: Normativas Específicas por Sector",
            content: `
                <p>Las regulaciones de SST varían significativamente entre diferentes sectores económicos. Este módulo se enfoca en las normativas específicas que aplican a industrias particulares.</p>
                <h3>Sectores a Cubrir:</h3>
                <ul>
                    <li><strong>Sector Salud:</strong> Bioseguridad, manejo de residuos peligrosos, protección contra patógenos.</li>
                    <li><strong>Construcción:</strong> Alturas, excavaciones, equipos pesados, prevención de caídas.</li>
                    <li><strong>Manufactura:</strong> Maquinaria, sustancias químicas, ruido, ergonomía.</li>
                    <li><strong>Minería:</strong> Riesgos geológicos, ventilación, explosivos.</li>
                    <li>Otros sectores relevantes según el contexto local.</li>
                </ul>
                <p>Se hará énfasis en la identificación de riesgos únicos y las medidas de control específicas exigidas por cada normativa sectorial.</p>
            `
        },
        modulo3: {
            title: "Módulo 3: Gestión de Riesgos y Auditorías",
            content: `
                <p>La gestión de riesgos es el pilar de un sistema de SST eficaz. Este módulo aborda las metodologías y normativas para la identificación, evaluación y control de los riesgos laborales, así como la importancia de las auditorías.</p>
                <h3>Contenidos:</h3>
                <ul>
                    <li>Metodologías de identificación de peligros y evaluación de riesgos (IPERC / AST)</li>
                    <li>Normas sobre controles operacionales y jerarquía de controles</li>
                    <li>Preparación y respuesta ante emergencias</li>
                    <li>Requisitos para la implementación de sistemas de gestión de SST (ej. ISO 45001)</li>
                    <li>Procesos y tipos de auditorías internas y externas de SST</li>
                    <li>Reporte y análisis de incidentes y accidentes de trabajo</li>
                </ul>
                <p>Los participantes aprenderán a desarrollar planes de acción correctivos y preventivos basados en los hallazgos de las evaluaciones y auditorías.</p>
            `
        },
        modulo4: {
            title: "Módulo 4: Prevención de Enfermedades Laborales",
            content: `
                <p>Este módulo se centra en las normativas y estrategias destinadas a la prevención y control de enfermedades profesionales, asegurando la salud a largo plazo de los trabajadores.</p>
                <h3>Temas Incluidos:</h3>
                <ul>
                    <li>Vigilancia de la salud de los trabajadores (exámenes médicos ocupacionales)</li>
                    <li>Normativas sobre agentes físicos, químicos, biológicos y ergonómicos</li>
                    <li>Programas de promoción de la salud y bienestar en el trabajo</li>
                    <li>Manejo de casos de enfermedades ocupacionales</li>
                    <li>Rehabilitación y reincorporación laboral</li>
                    <li>Registro y reporte de enfermedades laborales</li>
                </ul>
                <p>Se discutirán las mejores prácticas para crear entornos de trabajo saludables y el rol del personal de salud ocupacional en la implementación de estas medidas.</p>
            `
        }
    };

    // Event listeners for "Ver Contenido" buttons
    document.querySelectorAll('.learn-more-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const moduleCard = event.target.closest('.module-card');
            const moduleId = moduleCard.dataset.module;
            const moduleInfo = modulesData[moduleId];

            if (moduleInfo) {
                detailTitle.textContent = moduleInfo.title;
                detailContent.innerHTML = moduleInfo.content;
                moduleListSection.classList.add('hidden');
                moduleDetailSection.classList.remove('hidden');
            }
        });
    });

    // Event listener for "Volver a Módulos" button
    backToModulesBtn.addEventListener('click', () => {
        moduleDetailSection.classList.add('hidden');
        moduleListSection.classList.remove('hidden');
    });

    // Handle form submission
    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const institution = document.getElementById('institution').value;

        // Simple validation
        if (!name || !email) {
            registrationMessage.textContent = 'Por favor, completa todos los campos requeridos.';
            registrationMessage.className = 'error';
            registrationMessage.classList.remove('hidden');
            return;
        }

        // In a real application, you would send this data to a server
        // For this example, we'll just simulate a successful submission
        console.log('Inscripción recibida:');
        console.log(`Nombre: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Institución: ${institution}`);

        registrationMessage.textContent = `¡Gracias, ${name}! Tu inscripción ha sido recibida con éxito. Te hemos enviado un correo a ${email} con más detalles.`;
        registrationMessage.className = 'success';
        registrationMessage.classList.remove('hidden');
        registrationForm.reset(); // Clear the form

        // Optional: Hide message after a few seconds
        setTimeout(() => {
            registrationMessage.classList.add('hidden');
        }, 8000);
    });
});
