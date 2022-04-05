 
  function kirim(){
    const jno1=document.querySelector('#jno1')
    const jno2=document.querySelector('#jno2')
    const jno3=document.querySelector('#jno3')
    const jno4=document.querySelector('#jno4')
    const jno5=document.querySelector('#jno5')
    const jno6=document.querySelector('#jno6')
    const jno7=document.querySelector('#jno7')
    const jno8=document.querySelector('#jno8')
    const jno9=document.querySelector('#jno9')
    const jno10=document.querySelector('#jno10')



    const sno1=document.querySelector('#sno1')
    const sno2=document.querySelector('#sno2')
    const sno3=document.querySelector('#sno3')
    const sno4=document.querySelector('#sno4')
    const sno5=document.querySelector('#sno5')
    const sno6=document.querySelector('#sno6')
    const sno7=document.querySelector('#sno7')
    const sno8=document.querySelector('#sno8')
    const sno9=document.querySelector('#sno9')
    const sno10=document.querySelector('#sno10')





    const rno1=document.querySelector('#rno1')
    const rno2=document.querySelector('#rno2')
    const rno3=document.querySelector('#rno3')
    const rno4=document.querySelector('#rno4')
    const rno5=document.querySelector('#rno5')
    const rno6=document.querySelector('#rno6')
    const rno7=document.querySelector('#rno7')
    const rno8=document.querySelector('#rno8')
    const rno9=document.querySelector('#rno9')
    const rno10=document.querySelector('#rno10')

    const rsno1=document.querySelector('#rsno1')
    const rsno2=document.querySelector('#rsno2')
    const rsno3=document.querySelector('#rsno3')
    const rsno4=document.querySelector('#rsno4')
    const rsno5=document.querySelector('#rsno5')
    const rsno6=document.querySelector('#rsno6')
    const rsno7=document.querySelector('#rsno7')
    const rsno8=document.querySelector('#rsno8')
    const rsno9=document.querySelector('#rsno9')
    const rsno10=document.querySelector('#rsno10')







    const nilai=document.querySelector('#nilai')


    let response
    let poin=0
    if (jno1.checked){
      response=""
      poin=poin+10
    }else {
      response=""
    }
    rno1.innerHTML=response
  

  if (jno2.checked){
    response=""
    poin=poin+5
  }else {
    response=""
  }
  rno2.innerHTML=response

  if (jno3.checked){
    response=" "
    poin=poin+5
  }else {
    response=""
  }
  rno3.innerHTML=response


if (jno4.checked){
  response=" "
  poin=poin+5
}else {
  response=""
}
rno4.innerHTML=response




  if (jno5.checked){
    response=""
    poin=poin+10
  }else {
    response=" "
  }
  rno5.innerHTML=response


if (jno6.checked){
  response=""
  poin=poin+5
}else {
  response=""
}
rno6.innerHTML=response


if (jno7.checked){
    response=" "
    poin=poin+5
  }else {
    response=""
  }
  rno7.innerHTML=response


if (jno8.checked){
  response=""
  poin=poin+5
}else {
  response=""
}
rno8.innerHTML=response

if (jno9.checked){
    response=""
    poin=poin+10
  }else {
    response=""
  }
  rno9.innerHTML=response


if (jno10.checked){
  response=""
  poin=poin+10
}else {
  response=""
}
rno10.innerHTML=response


if (sno1.value=="1"){
    response=""; poin=poin+15} 
else {response=""}
rsno1.innerHTML=response
nilai.innerHTML=poin
  
  

   if (sno2.value=="3"){
     response=""
     poin=poin+15
   }else {
     response=""
   }
   rsno2.innerHTML=response
 nilai.innerHTML=poin
}
