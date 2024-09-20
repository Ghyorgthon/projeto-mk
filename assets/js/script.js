const thumbs = document.querySelectorAll('.thumb li');
const infoSlider = document.querySelectorAll('.info-slider');
const itens = document.querySelectorAll('.item')

let index =0;


thumbs.forEach((thumb, ind) =>{
    thumb.addEventListener('click', (event) =>{
        

        setTimeout(() =>{
        document.querySelector('.thumb .selected').classList.remove('selected')
        thumb.classList.add('selected');}, 100);

        thumbs.forEach(thumb =>{
            thumb.classList.add('disable')
            setTimeout(() =>{
                thumb.classList.remove('disable')
            },450)
        })

        let anySelected = false;
        let current = event.target.parentElement.nextElementSibling;

        while(current !== null && !anySelected){
            anySelected = anySelected || current.matches('.selected');
            current = current.nextElementSibling;
            if(anySelected){
                itens[index].classList.add('previo-active');
                setTimeout(()=>{
                    document.querySelector('.item.previo-active').classList.remove('previo-active')
                }, 100);
                
                index = ind;
                itens[index].classList.add('ult-active');
                setTimeout(()=>{
                    document.querySelector('.item.ult-active').classList.remove('ult-active')
                }, 500);

            }
        }

        index = ind;

        infoSlider.forEach(slide =>{
            slide.style.transform = `translateY(${index * - 100}%)`
        })

        document.querySelector('.item.active').classList.remove('active')
        itens[index].classList.add('active')
        

    });
});