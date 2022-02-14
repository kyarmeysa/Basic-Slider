var models = [
    {
        breed: 'American Bully',
        image: 'img/bully.jpg',
        link: 'https://en.wikipedia.org/wiki/American_Bully'

    },
    {
        breed: 'Euopean Doberman',
        image: 'img/dobi.jpg',
        link: 'https://en.wikipedia.org/wiki/Dobermann'

    },
    {
        breed: 'Sivas Kangal',
        image: 'img/kangal.jpg',
        link: 'https://en.wikipedia.org/wiki/Kangal_Shepherd_Dog'

    },
    {
        breed: 'Rottweiler',
        image: 'img/rott.jpg',
        link: 'https://en.wikipedia.org/wiki/Rottweiler'

    },
    {
        breed: 'Tosa Inu',
        image: 'img/tosa.jpg',
        link: 'https://en.wikipedia.org/wiki/Tosa_(dog)'

    }

];
var index = 0;
var count = models.length;
var settings={
    duration: '2000',
    random:true
};
var interval;



init(settings);

document.querySelector('.left').addEventListener('click', function () {
    
    index--;
    ShowSlide(index);
    console.log(index)

});
document.querySelector('.right').addEventListener('click', function () {
    
    index++;
    ShowSlide(index);
    

});
document.querySelectorAll('.icon').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })

});
document.querySelectorAll('.icon').forEach (function (item){
    item.addEventListener('mouseleave', function(){
        init(settings);
    })
})


function ShowSlide(i) {
    index=i;
    if(i<0){
        index=count-1;

    }
    if(i>= count){
        index=0;
    }
   

    document.querySelector('.card-title').textContent = models[index].breed;
    document.querySelector('.card-img-top').setAttribute('src', models[index].image);
    document.querySelector('.card-link').setAttribute('href', models[index].link);


}
function init(settings){
    
    var prev;
    interval =setInterval(function(){
        if(settings.random){
            do {
                index= Math.floor(Math.random() * count);
            } while (index===prev);
            prev=index;
            
        }
        
        else{
            if(count==index+1){
                index= -1;

            }
            ShowSlide(index);
            index++;

        }
        console.log(index);
        ShowSlide(index);

    }, settings.duration)

}



