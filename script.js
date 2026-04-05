function gerarRotaOtimizada(event) {
    event.preventDefault(); // Evita recarregar a página

    // Captura os dados obrigatórios
    const origem = document.getElementById('origem').value;
    const destino = document.getElementById('destino').value;
    const objetivo = document.getElementById('objetivo').value;
    const paradas = document.getElementById('paradas').value.split('\n').filter(p => p.trim() !== "");

    // Simulação do tempo de processamento do algoritmo (poucos segundos [1])
    const btn = document.getElementById('btn-submit');
    btn.disabled = true;
    btn.innerText = "Otimizando percurso para " + (paradas.length + 2) + " pontos...";

    setTimeout(() => {
        // Exibe o painel de resultados e o mapa simulado de Belém
        document.getElementById('painel-resultados').classList.remove('hidden');
        
        // Define o ETA (Previsão de Chegada) baseada no objetivo escolhido [4, 5]
        const tempoSimulado = objetivo === "tempo" ? "38 min" : "55 min";
        document.getElementById('eta-valor').innerText = tempoSimulado;
        
        btn.disabled = false;
        btn.innerText = "Gerar Rota Otimizada em Segundos [1]";

        console.log("Rota processada para frota em Belém.");
        alert("Sucesso! Rota gerada de " + origem + " até " + destino + " com " + paradas.length + " paradas otimizadas.");
    }, 1800);
}