// Função para mostrar uma seção específica
function showSection(sectionId) {
    // Oculta todas as seções de conteúdo
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Exibe a seção desejada
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.style.display = 'block';
    }
}

// Função para alternar a visibilidade do submenu
function toggleSubmenu(event) {
    event.preventDefault(); // Evita o comportamento padrão do link

    // Obtém o submenu de Formação
    const submenu = document.getElementById('submenu');

    // Alterna a visibilidade do submenu
    if (submenu.style.display === 'block') {
        submenu.style.display = 'none';
    } else {
        submenu.style.display = 'block';
    }

    // Oculta outras seções e submenus
    hideOtherSections();
}

// Função para esconder todas as seções e submenus exceto a seção ativa
function hideOtherSections() {
    // Oculta todas as seções de conteúdo
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Oculta o submenu de Formação
    const submenu = document.getElementById('formacao-submenu');
    if (submenu) {
        submenu.style.display = 'none';
    }
}

// Inicializa a página ocultando todas as seções
document.addEventListener('DOMContentLoaded', () => {
    hideOtherSections();
});
