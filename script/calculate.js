
function comment(){
    let v1 = document.getElementById('t1').value
    let v2 = document.createElement('p')
    let v3 = document.getElementById('d1').appendChild(v2)
    v3.innerHTML = `${v1}`
}

document.getElementById('i2').addEventListener('click', comment)


function commentt(){
    let v11 = document.getElementById('t11').value
    let v22 = document.createElement('p')
    let v33 = document.getElementById('d1').appendChild(v22)
    v33.innerHTML = `${v11}`
}

document.getElementById('i22').addEventListener('click', commentt)



function commenttt(){
    let v111 = document.getElementById('t111').value
    let v222 = document.createElement('p')
    let v333 = document.getElementById('d1').appendChild(v222)
    v333.innerHTML = `${v111}`
}

document.getElementById('i222').addEventListener('click', commenttt)