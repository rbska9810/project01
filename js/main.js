/* nav 구간 */
let navLi = document.querySelectorAll('.nav>ul>li');

for(let i = 0; i < navLi.length; i++){
  navLi[i].addEventListener('mouseover', function(){
    let item = this.querySelector('.nav-content');
    console.log(item);
    if(item){
      item.style.display = 'block';
    };
  });
  navLi[i].addEventListener('mouseout', function(){
    let item = this.querySelector('.nav-content');
    if(item){
      item.style.display = 'none';
    };
  });
}

/* choose 구간 */

let chooseTitle = document.querySelectorAll('.con-title a');
let chooseCon = document.querySelectorAll('.chooseCon');
console.log(chooseTitle, chooseCon);

chooseCon.forEach(function(div){
  div.style.display = 'none';
})

document.getElementById('chooseCon01').style.display ='block';

chooseTitle.forEach(function(link){
  link.addEventListener('click', function(e){
    e.preventDefault();
    let tab = this.getAttribute('href');
    
    chooseCon.forEach(function(div){
      div.style.display = 'none';
    });

    document.querySelector(tab).style.display = 'block';

    chooseTitle.forEach(function(link){
      
      link.classList.remove('active');
    });
    this.classList.add('active');
  });
})