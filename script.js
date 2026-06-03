document.addEventListener('DOMContentLoaded', () => {
    const btnCalcular = document.getElementById('btn-calcular');
    const inputHectares = document.getElementById('hectares');
    const divResultado = document.getElementById('resultado');
    
    const resAgua = document.getElementById('res-agua');
    const resCarbono = document.getElementById('res-carbono');

    btnCalcular.addEventListener('click', () => {
        const hectares = parseFloat(inputHectares.value);

        // Validação simples
        if (isNaN(hectares) || hectares <= 0) {
            alert('Por favor, insira um número válido de hectares.');
            return;
        }

        // Fatores fictícios baseados em médias de sustentabilidade agro
        // Economia por hectare/ano: 15.000 litros de água e 250kg de CO2
        const aguaPoupada = hectares * 15000;
        const carbonoReduzido = hectares * 250;

        // Atualiza os textos na tela formatando os números para o padrão brasileiro
        resAgua.textContent = aguaPoupada.toLocaleString('pt-BR');
        resCarbono.textContent = carbonoReduzido.toLocaleString('pt-BR');

        // Mostra a div de resultados removendo a classe 'hidden'
        divResultado.classList.remove('hidden');
    });
});