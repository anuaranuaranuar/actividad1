var rb_cas = document.getElementById('casado');
var rb_sol = document.getElementById('soltero');
var sexo = document.getElementById('sexos');
var boton = document.getElementById('boton');
var casado = document.getElementById('casado');
var tabla = document.getElementById('tabla');

boton.addEventListener('click', function(){
    var nombreUsuario = document.getElementById('nombre').value;
    var apellidos = document.getElementById('apellidos').value;

    if(nombreUsuario===''||apellidos==='' || sexo.options[sexo.selectedIndex].text ==='--Selecciona--'){
        if(rb_cas.checked===false && rb_sol.checked===false){
            alert('Error, faltan datos por llenar.')
        }else if(rb_cas.checked!==false || rb_sol.checked!==false){
            alert('Error, faltan datos por llenar.');
        }
    }else{
        var tr=document.createElement('tr');
        var td1=document.createElement('td');
        var td2=document.createElement('td');
        var td3=document.createElement('td');
        var td4=document.createElement('td');
        td1.appendChild(document.createTextNode(nombreUsuario));
        td2.appendChild(document.createTextNode(apellidos));
        td3.appendChild(document.createTextNode(sexo.options[sexo.selectedIndex].text));
        if(rb_cas.checked==true){
            td4.appendChild(document.createTextNode('Casado'))
        }else{
            td4.appendChild(document.createTextNode('Soltero'));
        }
        tr.append(td1, td2, td3, td4);
        tabla.appendChild(tr);
        document.getElementById('nombre').value='';
        document.getElementById('apellidos').value='';
        sexo.selectedIndex=0;
        rb_cas.checked=false;
        rb_sol.checked=false;
    }
});

rb_cas.addEventListener('click', function(){
    rb_cas.checked=true;
    rb_sol.checked=false;
})
rb_sol.addEventListener('click', function(){
    rb_sol.checked=true;
    rb_cas.checked=false;
})