var models = [
    {
        breed:'American Bully',
        image:'img/bully.jpg',
        link:'https://en.wikipedia.org/wiki/American_Bully'

    },
    {
        breed:'Euopean Doberman',
        image:'img/dobi.jpg',
        link:'https://en.wikipedia.org/wiki/Dobermann'

    },
    {
        breed:'Sivas Kangal',
        image:'img/kangal.jpg',
        link:'https://en.wikipedia.org/wiki/Kangal_Shepherd_Dog'

    },
    {
        breed:'Rottweiler',
        image:'img/rott.jpg',
        link:'https://en.wikipedia.org/wiki/Rottweiler'

    },
    {
        breed:'Tosa Inu',
        image:'img/tosa.jpg',
        link:'https://en.wikipedia.org/wiki/Tosa_(dog)'

    }
   
];
var index =0;
document.querySelector('.card-title').textContent = models[index].breed;
document.querySelector('.card-img-top').setAttribute('src',models[index].image);
document.querySelector('.card-link').setAttribute('href',models[index].link);