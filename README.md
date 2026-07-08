# Terapeuta 360 · Landing page

Landing page do evento **Terapeuta 360**, com Manoel Augusto. Reconstrução
da página original com direção de arte mais leve: base clara e quente,
elegância sem fontes serifadas, e o pêssego `#F8C7A6` usado com parcimônia.
O preto aparece apenas em seções pontuais de contraste, nunca como cor dominante.

## Estrutura (8 blocos)

1. **Hero** — headline, linha fina, CTA e barra de credibilidade
2. **Contexto** — o padrão que resiste
3. **O que você vai aprender** — 6 competências
4. **Cronograma** — Manhã (o campo) / Tarde (o manejo)
5. **Na mídia** — carrossel de entrevistas
6. **Prova social** — depoimentos
7. **Entregáveis** — o que fica com você + para quem não é
8. **Preço** — ancoragem, lote e FAQ
9. **Especialista** — sobre Manoel Augusto

## Arquivos

- `index.html` — marcação e copy
- `styles.css` — design system (tokens em `:root`) e responsividade
- `script.js` — menu mobile, FAQ, carrossel e reveal ao rolar

## Como visualizar

Abra `index.html` no navegador, ou sirva localmente:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Pendências de conteúdo

Marcadas no HTML com colchetes `[ ... ]`:

- Data do evento e detalhes de plataforma/acesso
- Fotos do Manoel (placeholders elegantes no lugar)
- Vídeos das entrevistas no carrossel de mídia
- Depoimentos reais já validados nas páginas anteriores
- Restante do currículo do Manoel no bloco final
