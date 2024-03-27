document.addEventListener("DOMContentLoaded", function() {
    const pontos = document.querySelectorAll('.ponto');
    const imagens = document.querySelector('.conteudo');

    pontos.forEach((ponto, index) => {
        ponto.addEventListener('click', () => {
            scrollToImage(index);
        });
    });

    function scrollToImage(index) {
        const imagensArray = document.querySelectorAll('.conteudo img');
        const targetImage = imagensArray[index];
        targetImage.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        updateActivePoint(index);
    }

    function updateActivePoint(index) {
        pontos.forEach((ponto, pontoIndex) => {
            if (pontoIndex === index) {
                ponto.classList.add('ativo');
            } else {
                ponto.classList.remove('ativo');
            }
        });
    }
});
