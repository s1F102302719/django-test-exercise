let elements=document.getElementsByTagName('li');

let Comp_counts=0;
let NoComp_counts=0;
for (const element of elements) {
let text=element.textContent;

if (text=="Status: Completed") {
    Comp_counts++;
} else if(text=='Status: Not Completed'){
    NoComp_counts++;
}
}
let el=document.getElementById('Comp_cnt');
let ele=document.getElementById('NoComp_cnt');
el.textContent=String(Comp_counts);
ele.textContent=String(NoComp_counts);
