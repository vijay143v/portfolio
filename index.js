var typed = new Typed(".typing",{
    strings:["","Web Designer","web Developer","Animator","Freelancer"],
    typeSpeed:60,
    BackSpeed:60,
    loop:true
})
var typed = new Typed(".typingg",{
    strings:["","Web Designer","web Developer","Animator","Freelancer"],
    typeSpeed:60,
    BackSpeed:60,
    loop:true
})

name = document.getElementById("name").value;
mail = document.getElementById("mail").value;
sub = document.getElementById("sub").value;
mess = document.getElementById("mess").value;
function fun()
{
if(name == "" | mail == "")
{
    alert("fill all cerdientials before submitting!")
}
if(sub == "" | mess == "")
{
    alert("fill all cerdientials before submitting!")
}
}