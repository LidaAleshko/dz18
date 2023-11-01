
const app = document.querySelector('.app');
const title = document.createElement('title')
title.textContent = 'dz18'
document.head.appendChild(title);
const html = document.querySelector('html');
html.setAttribute("lang", 'en');
const head = document.querySelector('head');
head.innerHTML = `
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="style.css">`

app.innerHTML = 
`
<div class="container1">
<div class="item1">
<h1>Choose Your Option</h1>
</div>
<div class="item1-1">
<p>But I must explain to you how all this mistaken idea of denouncing</p>
</div>
</div>

<div class="container2-1">
<div class="container2">
    <h2 class="h2">FREELANCER</h2>
  <div class="h1-1">  <h1 class="h1">Initially designed to</h1></div>
<p class="p1">But I must explain to you how all this mistaken idea of denouncing</p>
 <div class="button"><button class="button1">START HERE</button></div>
</div>
<div class="container3">
    <h2 class="h2">STUDIO</h2> 
    <div class="h1-1">  <h1 class="h1">Initially designed to</h1></div>
   <p class="p1">But I must explain to you how all this mistaken idea of denouncing</p>
  <div class="button">  <button class="button1">START HERE</button></div>
</div>

</div>

`
const style =document.createElement('style');
style.innerHTML = `
.app{
.container2-1 {
    width: 800px;
    height: 480px;
    border: 1px solid #E8E9ED;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
margin-bottom: 139px;
margin-top: 55px;
margin-left: 240px;
}
.container1 {
   

    margin-bottom: 10px;
    margin-top: 362px;
    margin-left: 409px;
    }
    
    
.container2 {
    border: 1px solid #E8E9ED;
    
    width: 400px;
    height: 480px;
}
.container3 {
    width: 400px;
    height: 480px;
    background-color: #8F75BE;
    border: 1px solid #E8E9ED;
}
.item1 {
    margin-left: 55px;
    color: #212121;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

}
.item1-1 {
    margin-top: 10px;
    color: #9FA3A7;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; }

.h1 {
    
    font-size: 36px;
    margin-top: 19px;
    text-align: center;
    color: #212121;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.h1-1 {
margin-left: 95px;
    height: 92px;
    width: 210px;
}
    .h2 {
       font-weight:bold;
        margin-top: 90px;

        text-align: center;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: #9FA3A7;
}
.p1 {
    text-align: center;
    font-size: 12px;
    color: #9FA3A7;
    margin-left: 55px;
    margin-top: 25px;
}

.button {
    
    color: #212121;
    margin-top: 52px;
    text-align: center;
    
    
 
}
.button1 {
    
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    background-color: white;
    border-color: #FFC80A;
    border-radius: 50px;
    height: 77px;
    width: 181px;
}}
`;
document.head.appendChild(style)
