export default () => {
    const container = document.createElement('div');

    const template = `
    <h1>Configuração de Email</h1>
    `;

    container.innerHTML = template;

    return container;
}