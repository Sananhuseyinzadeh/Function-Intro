function click(){
    let inp_value = document.getElementById('Groups').value;
    if(inp_value.slice(-3,-2)==1){
        document.body.style.backgroundColor = 'yellow'
        document.getElementById('Word').innerHTML = 'Seher Qrupu'
        document.getElementById('Word').style.color = 'black'
    }
    else if(inp_value.slice(-3,-2)==2){
        document.body.style.backgroundColor = 'red'
        document.getElementById('Word').innerHTML = 'Gunorta Qrupu'
        document.getElementById('Word').style.color = 'black'
    }
    else if(inp_value.slice(-3,-2)==3){
        document.body.style.backgroundColor = 'black'
        document.getElementById('Word').innerHTML = 'Axsam Qrupu'
        document.getElementById('Word').style.color = 'White'
    }
}


function planets(){
    if(document.body.style.backgroundColor = 'white'){
        document.body.style.backgroundColor = 'black'
        document.getElementById('sun').style.color='black'
        document.getElementById('sun').style.color='white'
        document.getElementById('moon').style.backgroundColor = 'white'
        document.getElementById('moon').style.color = 'white'
    }
    else{
        document.body.style.backgroundColor = 'white'
        document.getElementById('moon').style.backgroundColor = 'black'
        document.getElementById('moon').style.color = 'white'
        document.getElementById('sun').style.backgroundColor = 'white'
        document.getElementById('sun').style.color = 'white'
    }
}