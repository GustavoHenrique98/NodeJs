function somar(n1,n2){
    return n1+n2;
}

function subtrair(n1,n2){
    if(n1<n2){
        return n2-n1;
    }

    return n1-n2;
}

module.exports = {somar , subtrair}