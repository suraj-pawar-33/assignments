

document.addEventListener('DOMContentLoaded', function(){
            let ps = document.querySelectorAll('p');
        
            ps.forEach(p=>{
                p.addEventListener('transitionend', glow);
                p.addEventListener('animationend', noglow);
            })
        });
        
        function glow(ev){
            console.log('transitionend');
            ev.currentTarget.style.animationName = 'glow';
        }
        
        function noglow(ev){
            ev.currentTarget.style.animationName = '';
            
        }
//window.scrollBy(0, 600);