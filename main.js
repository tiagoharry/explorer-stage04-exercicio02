const studants = [
 {
    name: "Tiago", 
    grade1: 6,
    grade2: 8
},
{
    name: "Raquel", 
    grade1: 9,
    grade2: 10
},
{
    name: "Roberto", 
    grade1: 3,
    grade2: 5
},
{
    name: "João", 
    grade1: 2,
    grade2: 7
},
]

for(let index of studants) {
    const media = (index.grade1 + index.grade2) / 2;

    if(media >= 7) {
        alert(`Parabéns ${index.name}! \n Você foi aprovado(a) no concurso com a média ${media}!`);
    }else {
        alert(`${index.name}, não foi desta vez. \n Você foi reprovado com a média ${media}. Tente novamente!`);
    }
}
