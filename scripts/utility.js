function hideElementById(){
    const navId= document.getElementById('nav');
    navId.classList.add('hidden');
    const bannerId= document.getElementById('banner');
    bannerId.classList.add('hidden');
    const mainId= document.getElementById('main');
    mainId.classList.add('hidden');
    const footerId= document.getElementById('footer');
    footerId.classList.add('hidden');
}
function showElementById(){
    const elementId = document.getElementById('modal');
    elementId.classList.remove('hidden');
}