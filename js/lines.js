// ===== РИСОВАНИЕ ЛИНИЙ МЕЖДУ КАРТОЧКАМИ =====
function drawLines() {
    const svg = document.getElementById('cardsLines');
    const wrapper = document.querySelector('.cards-wrapper');
    const wrapperRect = wrapper.getBoundingClientRect();

    svg.innerHTML = '';

    const cards = {
        about: document.getElementById('cardAbout').getBoundingClientRect(),
        case: document.getElementById('cardCase').getBoundingClientRect(),
        price: document.getElementById('cardPrice').getBoundingClientRect(),
        faq: document.getElementById('cardFaq').getBoundingClientRect()
    };

    function createLine(x1, y1, x2, y2) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', x1);
        line.setAttribute('y1', y1);
        line.setAttribute('x2', x2);
        line.setAttribute('y2', y2);
        svg.appendChild(line);
    }

    const points = {
        about_bottom: {
            x: (cards.about.left + cards.about.right) / 2 - wrapperRect.left,
            y: cards.about.bottom - wrapperRect.top
        },
        case_bottom: {
            x: (cards.case.left + cards.case.right) / 2 - wrapperRect.left,
            y: cards.case.bottom - wrapperRect.top
        },
        case_right: {
            x: cards.case.right - wrapperRect.left,
            y: (cards.case.top + cards.case.bottom) / 2 - wrapperRect.top
        },
        price_left: {
            x: cards.price.left - wrapperRect.left,
            y: (cards.price.top + cards.price.bottom) / 2 - wrapperRect.top
        },
        price_right: {
            x: cards.price.right - wrapperRect.left,
            y: (cards.price.top + cards.price.bottom) / 2 - wrapperRect.top
        },
        faq_left: {
            x: cards.faq.left - wrapperRect.left,
            y: (cards.faq.top + cards.faq.bottom) / 2 - wrapperRect.top
        }
    };

    createLine(points.about_bottom.x, points.about_bottom.y, points.price_left.x, points.price_left.y);
    createLine(points.case_bottom.x, points.case_bottom.y, points.price_right.x, points.price_right.y);
    createLine(points.case_right.x, points.case_right.y, points.faq_left.x, points.faq_left.y);
}

drawLines();
window.addEventListener('resize', drawLines);