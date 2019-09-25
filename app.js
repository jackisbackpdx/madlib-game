function makeMadLib() {
    const inputs = document.querySelectorAll('input');
    const spans = document.querySelectorAll('span');
    for(let i = 0; i < inputs.length; i++) {
        spans[i].textContent = inputs[i].value.toUpperCase();
        spans[i].style.color = colorGenerator();
    }

    const hidden = document.getElementById('get-p');
    hidden.classList.remove('hidden');
    hidden.classList.add('displayed');

    const bodyStyles = document.getElementById('update-page');
    bodyStyles.classList.remove('prev-page');
    bodyStyles.classList.add('new-page');

    console.log('make madlib was clicked');

    document.getElementById('zoo-img').style.display = 'flex';

    const labels = document.querySelectorAll('label');
    for(let i = 0; i < labels.length; i++) {
        labels[i].style.color = 'white';
    }
    
    document.getElementById('form').style.display = 'none';
    
}

function clearFunction() {
    const newPara = document.getElementById('get-p');
    newPara.classList.remove('displayed');
    newPara.classList.add('hidden');
    
    const newBody = document.getElementById('update-page');
    newBody.classList.remove('new-page');
    newBody.classList.add('prev-page');
    console.log('clear was clicked');
    document.getElementById('zoo-img').style.display = 'none';
    document.getElementById('form').style.display = 'initial';
    
    const labelColor = document.querySelectorAll('label');
    for(let i = 0; i < labelColor.length; i++) {
        labelColor[i].style.color = 'black';
    }
}

function colorGenerator() {
    let colors = [];
    for(let i = 0; i < 3; i ++) {
        const randNumber = Math.floor(Math.random() * (255));
        colors.push(randNumber);
    }
    
    const color = 'rgb(' + colors[0] + ', ' + colors[1] + ', ' + colors[2] + ')';
    console.log(color);
    return color;
}
