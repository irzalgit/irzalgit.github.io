  
  function kirim1() {
  let poin = 0;
  
  const jno31 = document.querySelector("#jno31");
  const jno32 = document.querySelector("#jno32");
  const jno33 = document.querySelector("#jno33");
  const jno34 = document.querySelector("#jno34");
  const jno35 = document.querySelector("#jno35");
  const jno36 = document.querySelector("#jno36");
  const jno37 = document.querySelector("#jno37");
  const jno38 = document.querySelector("#jno38");
  const jno39 = document.querySelector("#jno39");
  const jno40 = document.querySelector("#jno40");
  const jno51 = document.querySelector("#jno51");
  const jno52 = document.querySelector("#jno52");
  const jno53 = document.querySelector("#jno53");
  const jno54 = document.querySelector("#jno54");
  const jno55 = document.querySelector("#jno55");
  const nilaitotal=document.querySelector('#nilaitotal');
  const nilai1=document.querySelector('#nilai1')
  if (jno31.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno31.innerHTML = response;

  if (jno32.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno32.innerHTML = response;

  if (jno33.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno33.innerHTML = response;

  if (jno34.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno34.innerHTML = response;

  if (jno35.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno35.innerHTML = response;

  if (jno36.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno36.innerHTML = response;

  if (jno37.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno37.innerHTML = response;

  if (jno38.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno38.innerHTML = response;

  if (jno39.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno39.innerHTML = response;

  if (jno40.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno40.innerHTML = response;

  if (jno51.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno51.innerHTML = response;

  if (jno52.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno52.innerHTML = response;

  if (jno53.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno53.innerHTML = response;

  if (jno54.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno54.innerHTML = response;

  if (jno55.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno55.innerHTML = response;

  nilai1.innerHTML = poin;
  
  nilaitotal.innerHTML = poin+scoretotal();


  const optionsno31 = document.getElementsByName("no31");
  for (let i = 0; i < optionsno31.length; i++) {
      optionsno31[i].checked = false;
  }
  const optionsno32 = document.getElementsByName("no32");
  for (let i = 0; i < optionsno32.length; i++) {
      optionsno32[i].checked = false;
  }
  const optionsno33 = document.getElementsByName("no33");
  for (let i = 0; i < optionsno33.length; i++) {
      optionsno33[i].checked = false;
  }
  const optionsno34 = document.getElementsByName("no34");
  for (let i = 0; i < optionsno34.length; i++) {
      optionsno34[i].checked = false;
  }

  const optionsno35 = document.getElementsByName("no35");
  for (let i = 0; i < optionsno35.length; i++) {
      optionsno35[i].checked = false;
  }

  const optionsno36 = document.getElementsByName("no36");
  for (let i = 0; i < optionsno36.length; i++) {
      optionsno36[i].checked = false;
  }
  const optionsno37 = document.getElementsByName("no37");
  for (let i = 0; i < optionsno37.length; i++) {
      optionsno37[i].checked = false;
  }
  const optionsno38 = document.getElementsByName("no38");
  for (let i = 0; i < optionsno38.length; i++) {
      optionsno38[i].checked = false;
  }
  const optionsno39 = document.getElementsByName("no39");
  for (let i = 0; i < optionsno39.length; i++) {
      optionsno39[i].checked = false;
  }

  const optionsno40 = document.getElementsByName("no40");
  for (let i = 0; i < optionsno40.length; i++) {
      optionsno40[i].checked = false;
  }
  
  const optionsno51 = document.getElementsByName("no51");
  for (let i = 0; i < optionsno51.length; i++) {
      optionsno51[i].checked = false;
  }
  const optionsno52 = document.getElementsByName("no52");
  for (let i = 0; i < optionsno52.length; i++) {
      optionsno52[i].checked = false;
  }
  const optionsno53 = document.getElementsByName("no53");
  for (let i = 0; i < optionsno53.length; i++) {
      optionsno53[i].checked = false;
  }
  const optionsno54 = document.getElementsByName("no54");
  for (let i = 0; i < optionsno54.length; i++) {
      optionsno54[i].checked = false;
  }

  const optionsno55 = document.getElementsByName("no55");
  for (let i = 0; i < optionsno55.length; i++) {
      optionsno55[i].checked = false;
  }
  scoretotal();
}
function kirim20() {
  let poin = 0;

  const sno20101=document.querySelector('#sno20101')
  const sno20102=document.querySelector('#sno20102')
  const sno20103=document.querySelector('#sno20103')
  const sno20104=document.querySelector('#sno20104')
  const sno20105=document.querySelector('#sno20105')
  const sno20106=document.querySelector('#sno20106')
  const sno20107=document.querySelector('#sno20107')
  const sno20108=document.querySelector('#sno20108')
  const sno20109=document.querySelector('#sno20109')
  const sno20110=document.querySelector('#sno20110')
  const sno20111=document.querySelector('#sno20111')
  const sno20112=document.querySelector('#sno20112')
  const sno20113=document.querySelector('#sno20113')
  const sno20114=document.querySelector('#sno20114')
  const sno20115=document.querySelector('#sno20115')
  const sno20116=document.querySelector('#sno20116')
  const sno20117=document.querySelector('#sno20117')
  const sno20118=document.querySelector('#sno20118')
  const sno20119=document.querySelector('#sno20119')
  const sno20120=document.querySelector('#sno20120')
  const sno20121=document.querySelector('#sno20121')
  const sno20122=document.querySelector('#sno20122')
  const sno20123=document.querySelector('#sno20123')
  const sno20124=document.querySelector('#sno20124')
  const sno20131=document.querySelector('#sno20131')
  const sno20132=document.querySelector('#sno20132')
  const sno20133=document.querySelector('#sno20133')
  const sno20134=document.querySelector('#sno20134')
  const sno20135=document.querySelector('#sno20135')
  const sno20136=document.querySelector('#sno20136')
  const sno20137=document.querySelector('#sno20137')
  const sno20138=document.querySelector('#sno20138')
  const sno20139=document.querySelector('#sno20139')
  const sno20140=document.querySelector('#sno20140')
  const sno20141=document.querySelector('#sno20141')
  const sno20142=document.querySelector('#sno20142')
  const sno20143=document.querySelector('#sno20143')
  const sno20144=document.querySelector('#sno20144')
  const nilai20=document.querySelector('#nilai20')
 


  if (sno20101.value=="statistika" || sno20101.value=="Statistika" ){
    response="ok";poin=poin+10} 
  else {
    response="x"}
  rsno20101.innerHTML=response
  

  
     if (sno20102.value=="histogram" || sno20102.value=="Histogram" ){
       response="ok";poin=poin+10
     }else {
       response="x"
     }
     rsno20102.innerHTML=response
     
     if (sno20103.value=="77,1"){
      response="ok";poin=poin+10} 
    else {
      response="x"}
    rsno20103.innerHTML=response
    
  
    
       if (sno20104.value=="172,5"){
         response="ok";poin=poin+10
       }else {
         response="x"
       }
       rsno20104.innerHTML=response
       
    
       if (sno20105.value=="5"){
        response="ok";poin=poin+10} 
      else {
        response="x"}
      rsno20105.innerHTML=response
      
    
      
         if (sno20106.value=="55,9"){
           response="ok";poin=poin+10
         }else {
           response="x"
         }
         rsno20106.innerHTML=response
         
      
         if (sno20107.value=="5"){
          response="ok";poin=poin+10} 
        else {
          response="x"}
        rsno20107.innerHTML=response
        
      
        
           if (sno20108.value=="20"){
             response="ok";poin=poin+10
           }else {
             response="x"
           }
           rsno20108.innerHTML=response
           
        
           if (sno20109.value=="53,8"){
            response="ok";poin=poin+10} 
          else {
            response="x"}
          rsno20109.innerHTML=response
          
     
        
          if (sno20110.value=="6"){
            response="ok";poin=poin+10
          }else {
            response="x"
          }
          rsno20110.innerHTML=response
          
       
          if (sno20111.value=="11"){
           response="ok";poin=poin+10} 
         else {
           response="x"}
         rsno20111.innerHTML=response   
          
          
         if (sno20112.value=="x+z=2"){
          response="ok";poin=poin+10} 
        else {
          response="x"}
        rsno20112.innerHTML=response   
         
        if (sno20113.value=="menghilangkan" || sno20113.value=="membuang" || sno20113.value=="menyingkirkan" ){
          response="ok";poin=poin+10} 
        else {
          response="x"}
        rsno20113.innerHTML=response   
         
        if (sno20114.value=="4"){
          response="ok";poin=poin+10} 
        else {
          response="x"}
        rsno20114.innerHTML=response   
         
        if (sno20115.value=="7"){
          response="ok";poin=poin+10} 
        else {
          response="x"}
        rsno20115.innerHTML=response   
         
        if (sno20116.value=="3"){
          response="ok";poin=poin+10} 
        else {
          response="x"}
        rsno20116.innerHTML=response   
         
        if (sno20117.value=="4x+3y+z=14000" || sno20117.value=="2x+4y+z=11000" || sno20117.value=="5x+2z=8000" ){
          response="ok";poin=poin+10} 
        else {
          response="pilih salah satu saja "}
        rsno20117.innerHTML=response   
         
        if (sno20118.value=="4"){
          response="ok";poin=poin+10} 
        else {
          response="x"}
        rsno20118.innerHTML=response   
         
         
        if (sno20119.value=="-3"){
          response="ok";poin=poin+10} 
        else {
          response="x"}
        rsno20119.innerHTML=response   
                      

        if (sno20120.value=="-1,2,4"){
          response="ok";poin=poin+10} 
        else {
          response="format penulisan x,y,z"}
        rsno20120.innerHTML=response   


        if (sno20121.value=="-2"){
          response="ok";poin=poin+10} 
        else {
          response="x"}
        rsno20121.innerHTML=response   
        
        if (sno20122.value=="3"){
          response="ok";poin=poin+10} 
        else {
          response="x"}
        rsno20122.innerHTML=response   

        if (sno20123.value=="1000"){
          response="ok";poin=poin+10} 
        else {
          response="x"}
        rsno20123.innerHTML=response   


        if (sno20124.value=="x+y=80;5x+3y=340"){
          response="ok";poin=poin+10} 
        else {
          response="format penulisan  f1;f2"}
        rsno20124.innerHTML=response   


        if (sno20131.value=="34" ){
          response="ok";poin=poin+10} 
        else {
          response="x"}
        rsno20131.innerHTML=response
        
      
        
           if (sno20132.value=="26" ){
             response="ok";poin=poin+10
           }else {
             response="x"
           }
           rsno20132.innerHTML=response
           
           if (sno20133.value=="2"){
            response="ok";poin=poin+10} 
          else {
            response="x"}
          rsno20133.innerHTML=response
          
        
          
             if (sno20134.value=="2,3"){
               response="ok";poin=poin+10
             }else {
               response="format x,y"
             }
             rsno20134.innerHTML=response
             
          
             if (sno20135.value=="-1/2"){
              response="ok";poin=poin+10} 
            else {
              response="x"}
            rsno20135.innerHTML=response
            
          
            
               if (sno20136.value=="d"){
                 response="ok";poin=poin+10
               }else {
                 response="x"
               }
               rsno20136.innerHTML=response
               
            
               if (sno20137.value=="3/2"){
                response="ok";poin=poin+10} 
              else {
                response="x"}
              rsno20137.innerHTML=response
              
            
              
                 if (sno20138.value=="2"){
                   response="ok";poin=poin+10
                 }else {
                   response="x"
                 }
                 rsno20138.innerHTML=response
                 
              
                 if (sno20139.value=="d"){
                  response="ok";poin=poin+10} 
                else {
                  response="x"}
                rsno20139.innerHTML=response
                
           
              
                if (sno20140.value=="e"){
                  response="ok";poin=poin+10
                }else {
                  response="x"
                }
                rsno20140.innerHTML=response
                
             
                if (sno20141.value=="ytgf11"){
                 response="ok";poin=poin+10} 
               else {
                 response="x"}
               rsno20141.innerHTML=response   
                
                
               if (sno20142.value=="6"){
                response="ok";poin=poin+10} 
              else {
                response="x"}
              rsno20142.innerHTML=response   
               
              if (sno20143.value=="7" ){
                response="ok";poin=poin+10} 
              else {
                response="x"}
              rsno20143.innerHTML=response   
               
              if (sno20144.value=="e"){
                response="ok";poin=poin+10} 
              else {
                response="x"}
              rsno20144.innerHTML=response   
        


  nilai20.innerHTML = poin;



}


function kirim2() {
  let poin = 0;
  
   const jno101 = document.querySelector("#jno101");
   const jno102 = document.querySelector("#jno102");
   const jno103 = document.querySelector("#jno103");
   const jno104 = document.querySelector("#jno104");
   const jno105 = document.querySelector("#jno105");
   const jno106 = document.querySelector("#jno106");
   const jno107 = document.querySelector("#jno107");
   const jno108 = document.querySelector("#jno108");
   const jno109 = document.querySelector("#jno109");
   const jno110 = document.querySelector("#jno110");
       
   const sno101=document.querySelector('#sno101')
   const sno102=document.querySelector('#sno102')
   
   const nilai2=document.querySelector('#nilai2')
  
   if (jno101.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno101.innerHTML = response;
   if (jno102.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno102.innerHTML = response;
  if (jno103.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno103.innerHTML = response;
  if (jno104.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno104.innerHTML = response;
  if (jno105.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno105.innerHTML = response;
 
  if (jno106.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno106.innerHTML = response;
  if (jno107.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno107.innerHTML = response;
  if (jno108.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno108.innerHTML = response;
  if (jno109.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno109.innerHTML = response;
  if (jno110.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno110.innerHTML = response;


  if (sno101.value=="3"){
    response="ok";poin=poin+25} 
  else {
    response="x"}
  rsno101.innerHTML=response
  

  
     if (sno102.value=="-1"){
       response="ok";poin=poin+25
     }else {
       response="x"
     }
     rsno102.innerHTML=response
     
  

  nilai2.innerHTML = poin;
  
  
  const optionsno101 = document.getElementsByName("no101");
  for (let i = 0; i < optionsno101.length; i++) {
      optionsno101[i].checked = false;
  }
  const optionsno102 = document.getElementsByName("no102");
  for (let i = 0; i < optionsno102.length; i++) {
      optionsno102[i].checked = false;
  }
  const optionsno103 = document.getElementsByName("no103");
  for (let i = 0; i < optionsno103.length; i++) {
      optionsno103[i].checked = false;
  }
  const optionsno104 = document.getElementsByName("no104");
  for (let i = 0; i < optionsno104.length; i++) {
      optionsno104[i].checked = false;
  }

  const optionsno105 = document.getElementsByName("no105");
  for (let i = 0; i < optionsno105.length; i++) {
      optionsno105[i].checked = false;
  }

  const optionsno106 = document.getElementsByName("no106");
  for (let i = 0; i < optionsno106.length; i++) {
      optionsno106[i].checked = false;
  }
  const optionsno107 = document.getElementsByName("no107");
  for (let i = 0; i < optionsno107.length; i++) {
      optionsno107[i].checked = false;
  }
  const optionsno108 = document.getElementsByName("no108");
  for (let i = 0; i < optionsno108.length; i++) {
      optionsno108[i].checked = false;
  }
  const optionsno109 = document.getElementsByName("no109");
  for (let i = 0; i < optionsno109.length; i++) {
      optionsno109[i].checked = false;
  }

  const optionsno110 = document.getElementsByName("no110");
  for (let i = 0; i < optionsno110.length; i++) {
      optionsno110[i].checked = false;
  }
  scoretotal();
}
function kirimptd() {
  let poin = 0;
  
   const jno111 = document.querySelector("#jno111");
   const jno112 = document.querySelector("#jno112");
   const jno113 = document.querySelector("#jno113");
   const jno114 = document.querySelector("#jno114");
   const jno115 = document.querySelector("#jno115");
   const jno116 = document.querySelector("#jno116");
   const jno117 = document.querySelector("#jno117");
   const jno118 = document.querySelector("#jno118");
   const jno119 = document.querySelector("#jno119");
   const jno120 = document.querySelector("#jno120");
       
   const sno101=document.querySelector('#sno101')
   const sno102=document.querySelector('#sno102')
   
   const nilaib3=document.querySelector('#nilaib3')
  
   if (jno111.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno111.innerHTML = response;
   if (jno112.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno112.innerHTML = response;
  if (jno113.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno113.innerHTML = response;
  if (jno114.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno114.innerHTML = response;
  if (jno115.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno115.innerHTML = response;
 
  if (jno116.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno116.innerHTML = response;
  if (jno117.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno117.innerHTML = response;
  if (jno118.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno118.innerHTML = response;
  if (jno119.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno119.innerHTML = response;
  if (jno120.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno120.innerHTML = response;


  if (sno101.value=="3"){
    response="ok";poin=poin+25} 
  else {
    response="x"}
  rsno101.innerHTML=response
  

  
     if (sno102.value=="-1"){
       response="ok";poin=poin+25
     }else {
       response="x"
     }
     rsno102.innerHTML=response
     
  

  nilaiptd.innerHTML = poin;

  
  const optionsno111 = document.getElementsByName("no111");
  for (let i = 0; i < optionsno111.length; i++) {
      optionsno111[i].checked = false;
  }
  const optionsno112 = document.getElementsByName("no112");
  for (let i = 0; i < optionsno112.length; i++) {
      optionsno112[i].checked = false;
  }
  const optionsno113 = document.getElementsByName("no113");
  for (let i = 0; i < optionsno113.length; i++) {
      optionsno113[i].checked = false;
  }
  const optionsno114 = document.getElementsByName("no114");
  for (let i = 0; i < optionsno114.length; i++) {
      optionsno114[i].checked = false;
  }

  const optionsno115 = document.getElementsByName("no115");
  for (let i = 0; i < optionsno115.length; i++) {
      optionsno115[i].checked = false;
  }

  const optionsno116 = document.getElementsByName("no116");
  for (let i = 0; i < optionsno116.length; i++) {
      optionsno116[i].checked = false;
  }
  const optionsno117 = document.getElementsByName("no117");
  for (let i = 0; i < optionsno117.length; i++) {
      optionsno117[i].checked = false;
  }
  const optionsno118 = document.getElementsByName("no118");
  for (let i = 0; i < optionsno118.length; i++) {
      optionsno118[i].checked = false;
  }
  const optionsno119 = document.getElementsByName("no119");
  for (let i = 0; i < optionsno119.length; i++) {
      optionsno119[i].checked = false;
  }

  const optionsno120 = document.getElementsByName("no120");
  for (let i = 0; i < optionsno120.length; i++) {
      optionsno120[i].checked = false;
  }
  
}

function kirimkua() {
  let poin = 0;
  const jno71 = document.querySelector("#jno71");
  const jno72 = document.querySelector("#jno72");
  const jno73 = document.querySelector("#jno73");
  const jno74 = document.querySelector("#jno74");
  const jno75 = document.querySelector("#jno75");

  const jno77 = document.querySelector("#jno77");
  const jno78 = document.querySelector("#jno78");
  const jno79 = document.querySelector("#jno79");
  const jno80 = document.querySelector("#jno80");
  const jno172 = document.querySelector("#jno172");
  const jno173 = document.querySelector("#jno173");
  const jno174 = document.querySelector("#jno174");
  const jno175 = document.querySelector("#jno175");
  const jno176 = document.querySelector("#jno176");
  const jno177 = document.querySelector("#jno177");
  const jno178 = document.querySelector("#jno178");
  const jno179 = document.querySelector("#jno179");
  const jno180 = document.querySelector("#jno180");
  const jno181 = document.querySelector("#jno181");
  const jno182 = document.querySelector("#jno182");
  const jno183 = document.querySelector("#jno183");
  const jno184 = document.querySelector("#jno184");
  const jno185 = document.querySelector("#jno185");
  const jno186 = document.querySelector("#jno186");
  const jno187 = document.querySelector("#jno187");
  const jno188 = document.querySelector("#jno188");
  const jno189 = document.querySelector("#jno189");
  const jno190 = document.querySelector("#jno190");
  const jno191 = document.querySelector("#jno191");
  const jno192 = document.querySelector("#jno192");

  if (jno71.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno71.innerHTML = response;

  if (jno72.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno72.innerHTML = response;

  if (jno73.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno73.innerHTML = response;

  if (jno74.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno74.innerHTML = response;

  if (jno75.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno75.innerHTML = response;

  if (jno77.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno77.innerHTML = response;

  if (jno78.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno78.innerHTML = response;

  if (jno79.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno79.innerHTML = response;

  if (jno80.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno80.innerHTML = response;

  if (jno172.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno172.innerHTML = response;

  if (jno173.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno173.innerHTML = response;

  if (jno174.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno174.innerHTML = response;

  if (jno175.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno175.innerHTML = response;

  if (jno176.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno176.innerHTML = response;

  if (jno177.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno177.innerHTML = response;

  if (jno178.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno178.innerHTML = response;

  if (jno179.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno179.innerHTML = response;

  if (jno180.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno180.innerHTML = response;

  if (jno181.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno181.innerHTML = response;

  if (jno182.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno182.innerHTML = response;

  if (jno183.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno183.innerHTML = response;

  if (jno184.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno184.innerHTML = response;

  if (jno185.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno185.innerHTML = response;

  if (jno186.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno186.innerHTML = response;

  if (jno187.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno187.innerHTML = response;

  if (jno188.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno188.innerHTML = response;

  if (jno189.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno189.innerHTML = response;

  if (jno190.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno190.innerHTML = response;

  if (jno191.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno191.innerHTML = response;

  if (jno192.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno192.innerHTML = response;

  nilaikua.innerHTML = poin;

  if (jno71.checked) jno71.checked = false;
  if (jno72.checked) jno72.checked = false;
  if (jno73.checked) jno73.checked = false;
  if (jno74.checked) jno74.checked = false;
  if (jno75.checked) jno75.checked = false;
  if (jno77.checked) jno77.checked = false;
  if (jno78.checked) jno78.checked = false;
  if (jno79.checked) jno79.checked = false;
  if (jno80.checked) jno80.checked = false;
  if (jno172.checked) jno172.checked = false;
  if (jno173.checked) jno173.checked = false;
  if (jno174.checked) jno174.checked = false;
  if (jno175.checked) jno175.checked = false;
  if (jno176.checked) jno176.checked = false;
  if (jno177.checked) jno177.checked = false;

  if (jno178.checked) jno178.checked = false;
  if (jno179.checked) jno179.checked = false;
  if (jno180.checked) jno180.checked = false;
  if (jno181.checked) jno181.checked = false;
  if (jno182.checked) jno182.checked = false;
  if (jno183.checked) jno183.checked = false;
  if (jno184.checked) jno184.checked = false;
  if (jno185.checked) jno185.checked = false;
  if (jno186.checked) jno186.checked = false;
  if (jno187.checked) jno187.checked = false;
  if (jno188.checked) jno188.checked = false;
  if (jno189.checked) jno189.checked = false;
  if (jno190.checked) jno190.checked = false;
  if (jno191.checked) jno191.checked = false;
  if (jno192.checked) jno192.checked = false;
  
}

function kirim7() {
  let poin7 = 0;
  const jno11 = document.querySelector("#jno11");
  const jno12 = document.querySelector("#jno12");
  const jno13 = document.querySelector("#jno13");
  const jno14 = document.querySelector("#jno14");
  const jno15 = document.querySelector("#jno15");
  const jno16 = document.querySelector("#jno16");
  const jno17 = document.querySelector("#jno17");
  const jno18 = document.querySelector("#jno18");
  const jno19 = document.querySelector("#jno19");
  const nilai7=document.querySelector("#nilai7");

  const sno11=document.querySelector('#sno11')
  const sno12=document.querySelector('#sno12')
  const sno13=document.querySelector('#sno13')
  const sno14=document.querySelector('#sno14')
 

  if (jno11.checked) {
    response = "";
    poin7 = poin7 + 10;
  } else {
    response = "";
  }
  rno11.innerHTML = response;

  if (jno12.checked) {
    response = "";
    poin7 = poin7 + 10;
  } else {
    response = "";
  }
  rno12.innerHTML = response;

  if (jno13.checked) {
    response = "";
    poin7 = poin7 + 10;
  } else {
    response = "";
  }
  rno13.innerHTML = response;

  if (jno14.checked) {
    response = "";
    poin7 = poin7 + 10;
  } else {
    response = "";
  }
  rno14.innerHTML = response;

  if (jno15.checked) {
    response = "";
    poin7 = poin7 + 10;
  } else {
    response = "";
  }
  rno15.innerHTML = response;

  if (jno16.checked) {
    response = "";
    poin7 = poin7 + 10;
  } else {
    response = "";
  }
  rno16.innerHTML = response;

  if (jno17.checked) {
    response = "";
    poin7 = poin7 + 10;
  } else {
    response = "";
  }
  rno17.innerHTML = response;

  if (jno18.checked) {
    response = "";
    poin7 = poin7 + 10;
  } else {
    response = "";
  }
  rno18.innerHTML = response;

  if (jno19.checked) {
    response = "";
    poin7 = poin7 + 10;
  } else {
    response = "";
  }
  rno19.innerHTML = response;

nilai7.innerHTML=poin7;



const optionsno11 = document.getElementsByName("no11");
for (let i = 0; i < optionsno11.length; i++) {
    optionsno11[i].checked = false;
}
const optionsno12 = document.getElementsByName("no12");
for (let i = 0; i < optionsno12.length; i++) {
    optionsno12[i].checked = false;
}
const optionsno13 = document.getElementsByName("no13");
for (let i = 0; i < optionsno13.length; i++) {
    optionsno13[i].checked = false;
}
const optionsno14 = document.getElementsByName("no14");
for (let i = 0; i < optionsno14.length; i++) {
    optionsno14[i].checked = false;
}

const optionsno15 = document.getElementsByName("no15");
for (let i = 0; i < optionsno15.length; i++) {
    optionsno15[i].checked = false;
}

const optionsno16 = document.getElementsByName("no16");
for (let i = 0; i < optionsno16.length; i++) {
    optionsno16[i].checked = false;
}
const optionsno17 = document.getElementsByName("no17");
for (let i = 0; i < optionsno17.length; i++) {
    optionsno17[i].checked = false;
}
const optionsno18 = document.getElementsByName("no18");
for (let i = 0; i < optionsno18.length; i++) {
    optionsno18[i].checked = false;
}
const optionsno19 = document.getElementsByName("no19");
for (let i = 0; i < optionsno19.length; i++) {
    optionsno19[i].checked = false;
}

scoretotal();
}

function kirim8() {
  let poin8 = 0;
  
  const jno21 = document.querySelector("#jno21");
  const jno22 = document.querySelector("#jno22");
  const jno23 = document.querySelector("#jno23");
  const jno24 = document.querySelector("#jno24");
  const jno25 = document.querySelector("#jno25");
  const jno26 = document.querySelector("#jno26");
  const jno27 = document.querySelector("#jno27");
  const jno28 = document.querySelector("#jno28");
  const jno29 = document.querySelector("#jno29");
  const jno30 = document.querySelector("#jno30");

  const nilai8=document.querySelector('#nilai8')



  if (jno21.checked) {
    response = "";
    poin8 = poin8 + 10;
  } else {
    response = "";
  }
  rno21.innerHTML = response;

  if (jno22.checked) {
    response = "";
    poin8 = poin8 + 10;
  } else {
    response = "";
  }
  rno22.innerHTML = response;

  if (jno23.checked) {
    response = "";
    poin8 = poin8 + 10;
  } else {
    response = "";
  }
  rno23.innerHTML = response;

  if (jno24.checked) {
    response = "";
    poin8 = poin8 + 10;
  } else {
    response = "";
  }
  rno24.innerHTML = response;

  if (jno25.checked) {
    response = "";
    poin8 = poin8 + 10;
  } else {
    response = "";
  }
  rno25.innerHTML = response;

  if (jno26.checked) {
    response = "";
    poin8 = poin8 + 10;
  } else {
    response = "";
  }
  rno26.innerHTML = response;

  if (jno27.checked) {
    response = "";
    poin8 = poin8 + 10;
  } else {
    response = "";
  }
  rno27.innerHTML = response;

  if (jno28.checked) {
    response = "";
    poin8 = poin8 + 10;
  } else {
    response = "";
  }
  rno28.innerHTML = response;

  if (jno29.checked) {
    response = "";
    poin8 = poin8 + 10;
  } else {
    response = "";
  }
  rno29.innerHTML = response;

  if (jno30.checked) {
    response = "";
    poin8 = poin8 + 10;
  } else {
    response = "";
  }
  rno30.innerHTML = response;

nilai8.innerHTML=poin8;
  
  

const optionsno21 = document.getElementsByName("no21");
for (let i = 0; i < optionsno21.length; i++) {
    optionsno21[i].checked = false;
}
const optionsno22 = document.getElementsByName("no22");
for (let i = 0; i < optionsno22.length; i++) {
    optionsno22[i].checked = false;
}
const optionsno23 = document.getElementsByName("no23");
for (let i = 0; i < optionsno23.length; i++) {
    optionsno23[i].checked = false;
}
const optionsno24 = document.getElementsByName("no24");
for (let i = 0; i < optionsno24.length; i++) {
    optionsno24[i].checked = false;
}

const optionsno25 = document.getElementsByName("no25");
for (let i = 0; i < optionsno25.length; i++) {
    optionsno25[i].checked = false;
}

const optionsno26 = document.getElementsByName("no26");
for (let i = 0; i < optionsno26.length; i++) {
    optionsno26[i].checked = false;
}
const optionsno27 = document.getElementsByName("no27");
for (let i = 0; i < optionsno27.length; i++) {
    optionsno27[i].checked = false;
}
const optionsno28 = document.getElementsByName("no28");
for (let i = 0; i < optionsno28.length; i++) {
    optionsno28[i].checked = false;
}
const optionsno29 = document.getElementsByName("no29");
for (let i = 0; i < optionsno29.length; i++) {
    optionsno29[i].checked = false;
}

const optionsno30 = document.getElementsByName("no30");
for (let i = 0; i < optionsno30.length; i++) {
    optionsno30[i].checked = false;
}

scoretotal();
}
function kirim6(){
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
  const jno700=document.querySelector('#jno700')
  const jno701=document.querySelector('#jno701')
  const jno702=document.querySelector('#jno702')
  const jno703=document.querySelector('#jno703')
  const jno704=document.querySelector('#jno704')
  const jno705=document.querySelector('#jno705')
  const jno706=document.querySelector('#jno706')
  const jno707=document.querySelector('#jno707')
  const jno708=document.querySelector('#jno708')
  const jno709=document.querySelector('#jno709')
  const jno710=document.querySelector('#jno710')


  const sno1=document.querySelector('#sno1')
  const sno2=document.querySelector('#sno2')
 




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
  const rno700=document.querySelector('#rno700')
  const rno701=document.querySelector('#rno701')
  const rno702=document.querySelector('#rno702')
  const rno703=document.querySelector('#rno703')
  const rno704=document.querySelector('#rno704')
  const rno705=document.querySelector('#rno705')
  const rno706=document.querySelector('#rno706')
  const rno707=document.querySelector('#rno707')
  const rno708=document.querySelector('#rno708')
  const rno709=document.querySelector('#rno709')
  const rno710=document.querySelector('#rno710')

  const rsno1=document.querySelector('#rsno1')
  const rsno2=document.querySelector('#rsno2')








  const nilaitri=document.querySelector('#nilaitri')


  let response
  let poin=0
  
  if (jno1.checked){
    response=""
    poin=poin+5
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
  poin=poin+10
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
  response=""
}
rno5.innerHTML=response


if (jno6.checked){
response=""
poin=poin+10
}else {
response=""
}
rno6.innerHTML=response


if (jno7.checked){
  response=" "
  poin=poin+10
}else {
  response=""
}
rno7.innerHTML=response


if (jno8.checked){
response=""
poin=poin+10
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


if (jno700.checked){
  response=""
  poin=poin+5
}else {
  response=""
}
rno700.innerHTML=response

if (jno701.checked){
  response=""
  poin=poin+10
}else {
  response=""
}
rno701.innerHTML=response


if (jno702.checked){
response=""
poin=poin+5
}else {
response=""
}
rno702.innerHTML=response

if (jno703.checked){
response=" "
poin=poin+10
}else {
response=""
}
rno703.innerHTML=response


if (jno704.checked){
response=" "
poin=poin+10
}else {
response=""
}
rno704.innerHTML=response




if (jno705.checked){
response=""
poin=poin+10
}else {
response=""
}
rno705.innerHTML=response


if (jno706.checked){
response=""
poin=poin+10
}else {
response=""
}
rno706.innerHTML=response


if (jno707.checked){
response=" "
poin=poin+10
}else {
response=""
}
rno707.innerHTML=response


if (jno708.checked){
response=""
poin=poin+10
}else {
response=""
}
rno708.innerHTML=response

if (jno709.checked){
response=""
poin=poin+5
}else {
response=""
}
rno709.innerHTML=response


if (jno710.checked){
response=""
poin=poin+10
}else {
response=""
}
rno710.innerHTML=response


nilaitri.innerHTML=poin

if (sno1.value == "1,57") {
  response = "";
  poin = poin + 10;
} else {
  response = "";
}
rsno1.innerHTML = response;
nilaitri.innerHTML = poin;
  

if (sno2.value == "sec") {
  response = "";
  poin = poin + 10;
} else {
  response = "";
}
rsno2.innerHTML = response;
nilaitri.innerHTML = poin;
  



  
const optionsno1 = document.getElementsByName("no1");
for (let i = 0; i < optionsno1.length; i++) {
    optionsno1[i].checked = false;
}
const optionsno2 = document.getElementsByName("no2");
for (let i = 0; i < optionsno2.length; i++) {
    optionsno2[i].checked = false;
}
const optionsno3 = document.getElementsByName("no3");
for (let i = 0; i < optionsno3.length; i++) {
    optionsno3[i].checked = false;
}
const optionsno4 = document.getElementsByName("no4");
for (let i = 0; i < optionsno4.length; i++) {
    optionsno4[i].checked = false;
}

const optionsno5 = document.getElementsByName("no5");
for (let i = 0; i < optionsno5.length; i++) {
    optionsno5[i].checked = false;
}

const optionsno6 = document.getElementsByName("no6");
for (let i = 0; i < optionsno6.length; i++) {
    optionsno6[i].checked = false;
}
const optionsno7 = document.getElementsByName("no7");
for (let i = 0; i < optionsno7.length; i++) {
    optionsno7[i].checked = false;
}
const optionsno8 = document.getElementsByName("no8");
for (let i = 0; i < optionsno8.length; i++) {
    optionsno8[i].checked = false;
}
const optionsno9 = document.getElementsByName("no9");
for (let i = 0; i < optionsno9.length; i++) {
    optionsno9[i].checked = false;
}

const optionsno10 = document.getElementsByName("no10");
for (let i = 0; i < optionsno10.length; i++) {
    optionsno10[i].checked = false;
}

const optionsno700 = document.getElementsByName("no700");
for (let i = 0; i < optionsno700.length; i++) {
    optionsno700[i].checked = false;
}
const optionsno701 = document.getElementsByName("no701");
for (let i = 0; i < optionsno701.length; i++) {
    optionsno701[i].checked = false;
}
const optionsno702 = document.getElementsByName("no702");
for (let i = 0; i < optionsno702.length; i++) {
    optionsno702[i].checked = false;
}
const optionsno703 = document.getElementsByName("no703");
for (let i = 0; i < optionsno703.length; i++) {
    optionsno703[i].checked = false;
}
const optionsno704 = document.getElementsByName("no704");
for (let i = 0; i < optionsno704.length; i++) {
    optionsno704[i].checked = false;
}

const optionsno705 = document.getElementsByName("no705");
for (let i = 0; i < optionsno705.length; i++) {
    optionsno705[i].checked = false;
}

const optionsno706 = document.getElementsByName("no706");
for (let i = 0; i < optionsno706.length; i++) {
    optionsno706[i].checked = false;
}
const optionsno707 = document.getElementsByName("no707");
for (let i = 0; i < optionsno707.length; i++) {
    optionsno707[i].checked = false;
}
const optionsno708 = document.getElementsByName("no708");
for (let i = 0; i < optionsno708.length; i++) {
    optionsno708[i].checked = false;
}
const optionsno709 = document.getElementsByName("no709");
for (let i = 0; i < optionsno709.length; i++) {
    optionsno709[i].checked = false;
}

const optionsno710 = document.getElementsByName("no710");
for (let i = 0; i < optionsno710.length; i++) {
    optionsno710[i].checked = false;
}



}

function kirim10() {
  let poin10 = 0;
  const jno600 = document.querySelector("#jno600");
  const jno601 = document.querySelector("#jno601");
  const jno602 = document.querySelector("#jno602");
  const jno603 = document.querySelector("#jno603");
  const jno604 = document.querySelector("#jno604");
  const jno605 = document.querySelector("#jno605");
  const jno606 = document.querySelector("#jno606");
  const jno607 = document.querySelector("#jno607");
  const jno608 = document.querySelector("#jno608");
  const jno609 = document.querySelector("#jno609");
  

  if (jno600.checked) {
    response = "";
    poin10 = poin10 + 10;
  } else {
    response = "";
  }
  rno600.innerHTML = response;

  if (jno601.checked) {
    response = "";
    poin10 = poin10 + 10;
  } else {
    response = "";
  }
  rno601.innerHTML = response;

  if (jno602.checked) {
    response = "";
    poin10 = poin10 + 10;
  } else {
    response = "";
  }
  rno602.innerHTML = response;

  if (jno603.checked) {
    response = "";
    poin10 = poin10 + 10;
  } else {
    response = "";
  }
  rno603.innerHTML = response;

  if (jno604.checked) {
    response = "";
    poin10 = poin10 + 10;
  } else {
    response = "";
  }
  rno604.innerHTML = response;

  if (jno605.checked) {
    response = "";
    poin10 = poin10 + 10;
  } else {
    response = "";
  }
  rno605.innerHTML = response;

  if (jno606.checked) {
    response = "";
    poin10 = poin10 + 10;
  } else {
    response = "";
  }
  rno606.innerHTML = response;

  if (jno607.checked) {
    response = "";
    poin10 = poin10 + 10;
  } else {
    response = "";
  }
  rno607.innerHTML = response;

  if (jno608.checked) {
    response = "";
    poin10 = poin10 + 10;
  } else {
    response = "";
  }
  rno608.innerHTML = response;

  if (jno609.checked) {
    response = "";
    poin10 = poin10 + 10;
  } else {
    response = "";
  }
  rno609.innerHTML = response;

nilai10.innerHTML=poin10;
  
  
  
  const options = document.getElementsByName("no600");
   for (let i = 0; i < options.length; i++) {
       options[i].checked = false;
   }
   const options1 = document.getElementsByName("no601");
   for (let i = 0; i < options1.length; i++) {
       options1[i].checked = false;
   }
   const options2 = document.getElementsByName("no602");
   for (let i = 0; i < options2.length; i++) {
       options2[i].checked = false;
   }
   const options3 = document.getElementsByName("no603");
   for (let i = 0; i < options3.length; i++) {
       options3[i].checked = false;
   }
   const options4 = document.getElementsByName("no604");
   for (let i = 0; i < options4.length; i++) {
       options4[i].checked = false;
   }

   const options5 = document.getElementsByName("no605");
   for (let i = 0; i < options5.length; i++) {
       options5[i].checked = false;
   }
   const options6 = document.getElementsByName("no606");
   for (let i = 0; i < options6.length; i++) {
       options6[i].checked = false;
   }
   const options7 = document.getElementsByName("no607");
   for (let i = 0; i < options7.length; i++) {
       options7[i].checked = false;
   }
   const options8 = document.getElementsByName("no608");
   for (let i = 0; i < options8.length; i++) {
       options8[i].checked = false;
   }
   const options9 = document.getElementsByName("no609");
   for (let i = 0; i < options9.length; i++) {
       options9[i].checked = false;
   }
   scoretotal();
}
function kirim4() {
  let poin4 = 0;
  
  const jno131 = document.querySelector("#jno131");
  const jno132 = document.querySelector("#jno132");
  const jno133 = document.querySelector("#jno133");
  const jno134 = document.querySelector("#jno134");
  const jno135 = document.querySelector("#jno135");
  const jno136 = document.querySelector("#jno136");
  const jno137 = document.querySelector("#jno137");
  
  const nilai4=document.querySelector('#nilai4')


  if (jno131.checked) {
    response = "";
    poin4 = poin4 + 10;
  } else {
    response = "";
  }
  rno131.innerHTML = response;

  if (jno132.checked) {
    response = "";
    poin4 = poin4 + 10;
  } else {
    response = "";
  }
  rno132.innerHTML = response;

  if (jno133.checked) {
    response = "";
    poin4 = poin4 + 10;
  } else {
    response = "";
  }
  rno133.innerHTML = response;

  if (jno134.checked) {
    response = "";
    poin4 = poin4 + 10;
  } else {
    response = "";
  }
  rno134.innerHTML = response;

  if (jno135.checked) {
    response = "";
    poin4 = poin4 + 10;
  } else {
    response = "";
  }
  rno135.innerHTML = response;


  if (jno136.checked) {
    response = "";
    poin4 = poin4 + 10;
  } else {
    response = "";
  }
  rno136.innerHTML = response;

  
  if (jno137.checked) {
    response = "";
    poin4 = poin4 + 10;
  } else {
    response = "";
  }
  rno137.innerHTML = response;

nilai4.innerHTML=poin4;
  
  
  
   const options131 = document.getElementsByName("no131");
   for (let i = 0; i < options131.length; i++) {
       options131[i].checked = false;
   }
   const options132 = document.getElementsByName("no132");
   for (let i = 0; i < options132.length; i++) {
       options132[i].checked = false;
   }
   const options133 = document.getElementsByName("no133");
   for (let i = 0; i < options133.length; i++) {
       options133[i].checked = false;
   }
   const options134 = document.getElementsByName("no134");
   for (let i = 0; i < options134.length; i++) {
       options134[i].checked = false;
   }
   const options135 = document.getElementsByName("no135");
   for (let i = 0; i < options135.length; i++) {
       options135[i].checked = false;
   }
   const options136 = document.getElementsByName("no136");
   for (let i = 0; i < options136.length; i++) {
       options136[i].checked = false;
   }
   const options137 = document.getElementsByName("no137");
   for (let i = 0; i < options137.length; i++) {
       options137[i].checked = false;
   }
   scoretotal();
}



function kirim5() {
  let poin5 = 0;
  
  const jno138 = document.querySelector("#jno138");
  const jno139 = document.querySelector("#jno139");
  const jno140 = document.querySelector("#jno140");
  const jno141 = document.querySelector("#jno141");
  const jno142 = document.querySelector("#jno142");
  
  const nilaider=document.querySelector('#nilaider')


  if (jno138.checked) {
    response = "";
    poin5 = poin5 + 10;
  } else {
    response = "";
  }
  rno138.innerHTML = response;

  if (jno139.checked) {
    response = "";
    poin5 = poin5 + 10;
  } else {
    response = "";
  }
  rno139.innerHTML = response;

  if (jno140.checked) {
    response = "";
    poin5 = poin5 + 10;
  } else {
    response = "";
  }
  rno140.innerHTML = response;

  if (jno141.checked) {
    response = "";
    poin5 = poin5 + 10;
  } else {
    response = "";
  }
  rno141.innerHTML = response;

  if (jno142.checked) {
    response = "";
    poin5 = poin5 + 10;
  } else {
    response = "";
  }
  rno142.innerHTML = response;

nilaider.innerHTML=poin5;
  
  
  
   const options138 = document.getElementsByName("no138");
   for (let i = 0; i < options138.length; i++) {
       options138[i].checked = false;
   }
   const options139 = document.getElementsByName("no139");
   for (let i = 0; i < options139.length; i++) {
       options139[i].checked = false;
   }
   const options140 = document.getElementsByName("no140");
   for (let i = 0; i < options140.length; i++) {
       options140[i].checked = false;
   }
   const options141 = document.getElementsByName("no141");
   for (let i = 0; i < options141.length; i++) {
       options141[i].checked = false;
   }
   const options142 = document.getElementsByName("no142");
   for (let i = 0; i < options142.length; i++) {
       options142[i].checked = false;
   }
   scoretotal();
}


function kirim9() {
  let poin9 = 0;
  const jno161 = document.querySelector("#jno961");
  const jno962 = document.querySelector("#jno962");
  const jno963 = document.querySelector("#jno963");
  const jno964 = document.querySelector("#jno964");
  const jno965 = document.querySelector("#jno965");
  
  const nilai9=document.querySelector('#nilai9')


  if (jno961.checked) {
    response = "";
    poin9 = poin9 + 10;
  } else {
    response = "";
  }
  rno961.innerHTML = response;

  if (jno962.checked) {
    response = "";
    poin9 = poin9 + 10;
  } else {
    response = "";
  }
  rno962.innerHTML = response;

  if (jno963.checked) {
    response = "";
    poin9 = poin9 + 10;
  } else {
    response = "";
  }
  rno963.innerHTML = response;

  if (jno964.checked) {
    response = "";
    poin9 = poin9 + 10;
  } else {
    response = "";
  }
  rno964.innerHTML = response;

  if (jno965.checked) {
    response = "";
    poin9 = poin9 + 10;
  } else {
    response = "";
  }
  rno965.innerHTML = response;

nilai9.innerHTML=poin9;
  
  
  
   const options61 = document.getElementsByName("no961");
   for (let i = 0; i < options61.length; i++) {
       options61[i].checked = false;
   }
   const options62 = document.getElementsByName("no962");
   for (let i = 0; i < options62.length; i++) {
       options62[i].checked = false;
   }
   const options63 = document.getElementsByName("no963");
   for (let i = 0; i < options63.length; i++) {
       options63[i].checked = false;
   }
   const options64 = document.getElementsByName("no964");
   for (let i = 0; i < options64.length; i++) {
       options64[i].checked = false;
   }

   const options65 = document.getElementsByName("no965");
   for (let i = 0; i < options65.length; i++) {
       options65[i].checked = false;
   }
   scoretotal();
}

function kirim10e() {
  let poin9 = 0;
  const jno961 = document.querySelector("#jno961");
  const jno962 = document.querySelector("#jno962");
  const jno963 = document.querySelector("#jno963");
  const jno964 = document.querySelector("#jno964");
  const jno965 = document.querySelector("#jno965");
  
  const nilai9=document.querySelector('#nilai9')


  if (jno961.checked) {
    response = "";
    poin9 = poin9 + 10;
  } else {
    response = "";
  }
  rno961.innerHTML = response;

  if (jno962.checked) {
    response = "";
    poin9 = poin9 + 10;
  } else {
    response = "";
  }
  rno962.innerHTML = response;

  if (jno963.checked) {
    response = "";
    poin9 = poin9 + 10;
  } else {
    response = "";
  }
  rno963.innerHTML = response;

  if (jno964.checked) {
    response = "";
    poin9 = poin9 + 10;
  } else {
    response = "";
  }
  rno964.innerHTML = response;

  if (jno965.checked) {
    response = "";
    poin9 = poin9 + 10;
  } else {
    response = "";
  }
  rno965.innerHTML = response;

nilai9.innerHTML=poin9;
  
  
  
   const options61 = document.getElementsByName("no961");
   for (let i = 0; i < options61.length; i++) {
       options61[i].checked = false;
   }
   const options62 = document.getElementsByName("no962");
   for (let i = 0; i < options62.length; i++) {
       options62[i].checked = false;
   }
   const options63 = document.getElementsByName("no963");
   for (let i = 0; i < options63.length; i++) {
       options63[i].checked = false;
   }
   const options64 = document.getElementsByName("no964");
   for (let i = 0; i < options64.length; i++) {
       options64[i].checked = false;
   }

   const options65 = document.getElementsByName("no965");
   for (let i = 0; i < options65.length; i++) {
       options65[i].checked = false;
   }
   scoretotal();
}
function kirim11() {
  let poin11 = 0;
  const jno81 = document.querySelector("#jno81");
  const jno82 = document.querySelector("#jno82");
  const jno83 = document.querySelector("#jno83");
  const jno84 = document.querySelector("#jno84");
  const jno85 = document.querySelector("#jno85");
  const jno86 = document.querySelector("#jno86");
  const jno87 = document.querySelector("#jno87");
  const jno88 = document.querySelector("#jno88");
  const jno89 = document.querySelector("#jno89");
  const jno90 = document.querySelector("#jno90");
  
  const nilai11=document.querySelector('#nilai11')


  if (jno81.checked) {
    response = "";
    poin11 = poin11 + 10;
  } else {
    response = "";
  }
  rno81.innerHTML = response;

  if (jno82.checked) {
    response = "";
    poin11 = poin11 + 10;
  } else {
    response = "";
  }
  rno82.innerHTML = response;

  if (jno83.checked) {
    response = "";
    poin11 = poin11 + 10;
  } else {
    response = "";
  }
  rno83.innerHTML = response;

  if (jno84.checked) {
    response = "";
    poin11 = poin11 + 10;
  } else {
    response = "";
  }
  rno84.innerHTML = response;

  if (jno85.checked) {
    response = "";
    poin11 = poin11 + 10;
  } else {
    response = "";
  }
  rno85.innerHTML = response;

  if (jno86.checked) {
    response = "";
    poin11 = poin11 + 10;
  } else {
    response = "";
  }
  rno86.innerHTML = response;

  if (jno87.checked) {
    response = "";
    poin11 = poin11 + 10;
  } else {
    response = "";
  }
  rno87.innerHTML = response;

  if (jno88.checked) {
    response = "";
    poin11 = poin11 + 10;
  } else {
    response = "";
  }
  rno88.innerHTML = response;

  if (jno89.checked) {
    response = "";
    poin11 = poin11 + 10;
  } else {
    response = "";
  }
  rno89.innerHTML = response;

  if (jno90.checked) {
    response = "";
    poin11 = poin11 + 10;
  } else {
    response = "";
  }
  rno90.innerHTML = response;

nilai11.innerHTML=poin11;
  
  
  
const options81 = document.getElementsByName("no81");
for (let i = 0; i < options81.length; i++) {
    options81[i].checked = false;
}
const options82 = document.getElementsByName("no82");
for (let i = 0; i < options82.length; i++) {
    options82[i].checked = false;
}
const options83 = document.getElementsByName("no83");
for (let i = 0; i < options83.length; i++) {
    options83[i].checked = false;
}
const options84 = document.getElementsByName("no84");
for (let i = 0; i < options84.length; i++) {
    options84[i].checked = false;
}

const options85 = document.getElementsByName("no85");
for (let i = 0; i < options85.length; i++) {
    options85[i].checked = false;
}

   const options86 = document.getElementsByName("no86");
   for (let i = 0; i < options86.length; i++) {
       options86[i].checked = false;
   }
   const options87 = document.getElementsByName("no87");
   for (let i = 0; i < options87.length; i++) {
       options87[i].checked = false;
   }
   const options88 = document.getElementsByName("no88");
   for (let i = 0; i < options88.length; i++) {
       options88[i].checked = false;
   }
   const options89 = document.getElementsByName("no89");
   for (let i = 0; i < options89.length; i++) {
       options89[i].checked = false;
   }

   const options90 = document.getElementsByName("no90");
   for (let i = 0; i < options90.length; i++) {
       options90[i].checked = false;
   }
   scoretotal();
}

function kirim12() {
  let poin12 = 0;
  const jno91 = document.querySelector("#jno91");
  const jno92 = document.querySelector("#jno92");
  const jno93 = document.querySelector("#jno93");
  const jno94 = document.querySelector("#jno94");
  const jno95 = document.querySelector("#jno95");
  
  const nilai12=document.querySelector('#nilai12')


  if (jno91.checked) {
    response = "";
    poin12 = poin12 + 10;
  } else {
    response = "";
  }
  rno91.innerHTML = response;

  if (jno92.checked) {
    response = "";
    poin12 = poin12 + 10;
  } else {
    response = "";
  }
  rno92.innerHTML = response;

  if (jno93.checked) {
    response = "";
    poin12 = poin12 + 10;
  } else {
    response = "";
  }
  rno93.innerHTML = response;

  if (jno94.checked) {
    response = "";
    poin12 = poin12 + 10;
  } else {
    response = "";
  }
  rno94.innerHTML = response;

  if (jno95.checked) {
    response = "";
    poin12 = poin12 + 10;
  } else {
    response = "";
  }
  rno95.innerHTML = response;

nilai12.innerHTML=poin12;
  
  
  
   const options91 = document.getElementsByName("no91");
   for (let i = 0; i < options91.length; i++) {
       options91[i].checked = false;
   }
   const options92 = document.getElementsByName("no92");
   for (let i = 0; i < options92.length; i++) {
       options92[i].checked = false;
   }
   const options93 = document.getElementsByName("no93");
   for (let i = 0; i < options93.length; i++) {
       options93[i].checked = false;
   }
   const options94 = document.getElementsByName("no94");
   for (let i = 0; i < options94.length; i++) {
       options94[i].checked = false;
   }

   const options95 = document.getElementsByName("no95");
   for (let i = 0; i < options95.length; i++) {
       options95[i].checked = false;
   }
   scoretotal();
}
function kirim13() {
  let poin13 = 0;
  const jno121 = document.querySelector("#jno121");
  const jno122 = document.querySelector("#jno122");
  const jno123 = document.querySelector("#jno123");
  const jno124 = document.querySelector("#jno124");
  const jno125 = document.querySelector("#jno125");
  const jno126 = document.querySelector("#jno126");
  const jno127 = document.querySelector("#jno127");
  const jno128 = document.querySelector("#jno128");
  const jno129 = document.querySelector("#jno129");
  const jno130 = document.querySelector("#jno130");
  
  const nilai13=document.querySelector('#nilai13')


  if (jno121.checked) {
    response = "";
    poin13 = poin13 + 10;
  } else {
    response = "";
  }
  rno121.innerHTML = response;

  if (jno122.checked) {
    response = "";
    poin13 = poin13 + 10;
  } else {
    response = "";
  }
  rno122.innerHTML = response;

  if (jno123.checked) {
    response = "";
    poin13 = poin13 + 10;
  } else {
    response = "";
  }
  rno123.innerHTML = response;

  if (jno124.checked) {
    response = "";
    poin13 = poin13 + 10;
  } else {
    response = "";
  }
  rno124.innerHTML = response;

  if (jno125.checked) {
    response = "";
    poin13 = poin13 + 10;
  } else {
    response = "";
  }
  rno125.innerHTML = response;
  if (jno126.checked) {
    response = "";
    poin13 = poin13 + 10;
  } else {
    response = "";
  }
  rno126.innerHTML = response;

  if (jno127.checked) {
    response = "";
    poin13 = poin13 + 10;
  } else {
    response = "";
  }
  rno127.innerHTML = response;

  if (jno128.checked) {
    response = "";
    poin13 = poin13 + 10;
  } else {
    response = "";
  }
  rno128.innerHTML = response;

  if (jno129.checked) {
    response = "";
    poin13 = poin13 + 10;
  } else {
    response = "";
  }
  rno129.innerHTML = response;

  if (jno130.checked) {
    response = "";
    poin13 = poin13 + 10;
  } else {
    response = "";
  }
  rno130.innerHTML = response;

nilai13.innerHTML=poin13;
  
  
  
   const options121 = document.getElementsByName("no121");
   for (let i = 0; i < options121.length; i++) {
       options121[i].checked = false;
   }
   const options122 = document.getElementsByName("no122");
   for (let i = 0; i < options122.length; i++) {
       options122[i].checked = false;
   }
   const options123 = document.getElementsByName("no123");
   for (let i = 0; i < options123.length; i++) {
       options123[i].checked = false;
   }
   const options124 = document.getElementsByName("no124");
   for (let i = 0; i < options124.length; i++) {
       options124[i].checked = false;
   }

   const options125 = document.getElementsByName("no125");
   for (let i = 0; i < options125.length; i++) {
       options125[i].checked = false;
   }
   scoretotal();
}

function kirim14() {
  let poin14 = 0;
  const jno41 = document.querySelector("#jno41");
  const jno42 = document.querySelector("#jno42");
  const jno43 = document.querySelector("#jno43");
  const jno44 = document.querySelector("#jno44");
  const jno45 = document.querySelector("#jno45");
  const jno46 = document.querySelector("#jno46");
  const jno47 = document.querySelector("#jno47");
  const jno48 = document.querySelector("#jno48");
  const jno49 = document.querySelector("#jno49");
  const jno50 = document.querySelector("#jno50");
  
  const nilai14=document.querySelector('#nilai14')


  if (jno41.checked) {
    response = "";
    poin14 = poin14 + 10;
  } else {
    response = "";
  }
  rno41.innerHTML = response;

  if (jno42.checked) {
    response = "";
    poin14 = poin14 + 10;
  } else {
    response = "";
  }
  rno42.innerHTML = response;

  if (jno43.checked) {
    response = "";
    poin14 = poin14 + 10;
  } else {
    response = "";
  }
  rno43.innerHTML = response;

  if (jno44.checked) {
    response = "";
    poin14 = poin14 + 10;
  } else {
    response = "";
  }
  rno44.innerHTML = response;

  if (jno45.checked) {
    response = "";
    poin14 = poin14 + 10;
  } else {
    response = "";
  }
  rno45.innerHTML = response;

  if (jno46.checked) {
    response = "";
    poin14 = poin14 + 10;
  } else {
    response = "";
  }
  rno46.innerHTML = response;

  if (jno47.checked) {
    response = "";
    poin14 = poin14 + 10;
  } else {
    response = "";
  }
  rno47.innerHTML = response;

  if (jno48.checked) {
    response = "";
    poin14 = poin14 + 10;
  } else {
    response = "";
  }
  rno48.innerHTML = response;

  if (jno49.checked) {
    response = "";
    poin14 = poin14 + 10;
  } else {
    response = "";
  }
  rno49.innerHTML = response;

  if (jno50.checked) {
    response = "";
    poin14 = poin14 + 10;
  } else {
    response = "";
  }
  rno50.innerHTML = response;

nilai14.innerHTML=poin14;
  
  
  
const options41 = document.getElementsByName("no41");
for (let i = 0; i < options41.length; i++) {
    options41[i].checked = false;
}
const options42 = document.getElementsByName("no42");
for (let i = 0; i < options42.length; i++) {
    options42[i].checked = false;
}
const options43 = document.getElementsByName("no43");
for (let i = 0; i < options43.length; i++) {
    options43[i].checked = false;
}
const options44 = document.getElementsByName("no44");
for (let i = 0; i < options44.length; i++) {
    options44[i].checked = false;
}

const options45 = document.getElementsByName("no45");
for (let i = 0; i < options45.length; i++) {
    options45[i].checked = false;
}

   const options46 = document.getElementsByName("no46");
   for (let i = 0; i < options46.length; i++) {
       options46[i].checked = false;
   }
   const options47 = document.getElementsByName("no47");
   for (let i = 0; i < options47.length; i++) {
       options47[i].checked = false;
   }
   const options48 = document.getElementsByName("no48");
   for (let i = 0; i < options48.length; i++) {
       options48[i].checked = false;
   }
   const options49 = document.getElementsByName("no49");
   for (let i = 0; i < options49.length; i++) {
       options49[i].checked = false;
   }

   const options50 = document.getElementsByName("no50");
   for (let i = 0; i < options50.length; i++) {
       options50[i].checked = false;
   }
   scoretotal();
}



function kirim17() {
  let poin17 = 0;
  const jno1701 = document.querySelector("#jno1701");
  const jno1702 = document.querySelector("#jno1702");
  const jno1703 = document.querySelector("#jno1703");
  const jno1704 = document.querySelector("#jno1704");
  const jno1705 = document.querySelector("#jno1705");
  const jno1706 = document.querySelector("#jno1706");
  const jno1707 = document.querySelector("#jno1707");
  const jno1708 = document.querySelector("#jno1708");
  const jno1709 = document.querySelector("#jno1709");
  const jno1710 = document.querySelector("#jno1710");
  const jno1711 = document.querySelector("#jno1711");
  const jno1712 = document.querySelector("#jno1712");
  const jno1713 = document.querySelector("#jno1713");
  const jno1714 = document.querySelector("#jno1714");
  const jno1715 = document.querySelector("#jno1715");
  const jno1716 = document.querySelector("#jno1716");
  const nilai17=document.querySelector('#nilai17')


  if (jno1701.checked) {
    response = "";
    poin17 = poin17 + 10;
  } else {
    response = "";
  }
  rno1701.innerHTML = response;

  if (jno1702.checked) {
    response = "";
    poin17 = poin17 + 10;
  } else {
    response = "";
  }
  rno1702.innerHTML = response;

  if (jno1703.checked) {
    response = "";
    poin17 = poin17 + 10;
  } else {
    response = "";
  }
  rno1703.innerHTML = response;

  if (jno1704.checked) {
    response = "";
    poin17 = poin17 + 10;
  } else {
    response = "";
  }
  rno1704.innerHTML = response;

  if (jno1705.checked) {
    response = "";
    poin17 = poin17 + 10;
  } else {
    response = "";
  }
  rno1705.innerHTML = response;


  if (jno1706.checked) {
    response = "";
    poin17 = poin17 + 10;
  } else {
    response = "";
  }
  rno1706.innerHTML = response;

  if (jno1707.checked) {
    response = "";
    poin17 = poin17 + 10;
  } else {
    response = "";
  }
  rno1707.innerHTML = response;

  if (jno1708.checked) {
    response = "";
    poin17 = poin17 + 10;
  } else {
    response = "";
  }
  rno1708.innerHTML = response;

  if (jno1709.checked) {
    response = "";
    poin17 = poin17 + 10;
  } else {
    response = "";
  }
  rno1709.innerHTML = response;

  if (jno1710.checked) {
    response = "";
    poin17 = poin17 + 10;
  } else {
    response = "";
  }
  rno1710.innerHTML = response;

  if (jno1711.checked) {
    response = "";
    poin17 = poin17 + 10;
  } else {
    response = "";
  }
  rno1711.innerHTML = response;

  if (jno1712.checked) {
    response = "";
    poin17 = poin17 + 10;
  } else {
    response = "";
  }
  rno1712.innerHTML = response;

  if (jno1713.checked) {
    response = "";
    poin17 = poin17 + 10;
  } else {
    response = "";
  }
  rno1713.innerHTML = response;

  if (jno1714.checked) {
    response = "";
    poin17 = poin17 + 10;
  } else {
    response = "";
  }
  rno1714.innerHTML = response;
  if (jno1715.checked) {
    response = "";
    poin17 = poin17 + 10;
  } else {
    response = "";
  }
  rno1715.innerHTML = response;
  if (jno1716.checked) {
    response = "";
    poin17 = poin17 + 10;
  } else {
    response = "";
  }
  rno1716.innerHTML = response;
nilai17.innerHTML=poin17;
  
  

   const optionsno1701 = document.getElementsByName("no1701");
   for (let i = 0; i < optionsno1701.length; i++) {
       optionsno1701[i].checked = false;
   }
   const optionsno1702 = document.getElementsByName("no1702");
   for (let i = 0; i < optionsno1702.length; i++) {
       optionsno1702[i].checked = false;
   }
   const optionsno1703 = document.getElementsByName("no1703");
   for (let i = 0; i < optionsno1703.length; i++) {
       optionsno1703[i].checked = false;
   }
   const optionsno1704 = document.getElementsByName("no1704");
   for (let i = 0; i < optionsno1704.length; i++) {
       optionsno1704[i].checked = false;
   }

   const optionsno1705 = document.getElementsByName("no1705");
   for (let i = 0; i < optionsno1705.length; i++) {
       optionsno1705[i].checked = false;
   }

   const optionsno1706 = document.getElementsByName("no1706");
   for (let i = 0; i < optionsno1706.length; i++) {
       optionsno1706[i].checked = false;
   }
   const optionsno1707 = document.getElementsByName("no1707");
   for (let i = 0; i < optionsno1707.length; i++) {
       optionsno1707[i].checked = false;
   }
   const optionsno1708 = document.getElementsByName("no1708");
   for (let i = 0; i < optionsno1708.length; i++) {
       optionsno1708[i].checked = false;
   }
   const optionsno1709 = document.getElementsByName("no1709");
   for (let i = 0; i < optionsno1709.length; i++) {
       optionsno1709[i].checked = false;
   }

   const optionsno1710 = document.getElementsByName("no1710");
   for (let i = 0; i < optionsno1710.length; i++) {
       optionsno1710[i].checked = false;
   }
   const optionsno1711 = document.getElementsByName("no1711");
   for (let i = 0; i < optionsno1711.length; i++) {
       optionsno1711[i].checked = false;
   }
   const optionsno1712 = document.getElementsByName("no1712");
   for (let i = 0; i < optionsno1712.length; i++) {
       optionsno1712[i].checked = false;
   }
   const optionsno1713 = document.getElementsByName("no1713");
   for (let i = 0; i < optionsno1713.length; i++) {
       optionsno1713[i].checked = false;
   }
   const optionsno1714 = document.getElementsByName("no1714");
   for (let i = 0; i < optionsno1714.length; i++) {
       optionsno1714[i].checked = false;
   }
   const optionsno1715 = document.getElementsByName("no1715");
   for (let i = 0; i < optionsno1715.length; i++) {
       optionsno1715[i].checked = false;
   }

   const optionsno1716 = document.getElementsByName("no1716");
   for (let i = 0; i < optionsno1716.length; i++) {
       optionsno1716[i].checked = false;
   }
   scoretotal();
}

function kirim16() {
  let poin16 = 0;
  const jno61 = document.querySelector("#jno61");
  const jno62 = document.querySelector("#jno62");
  const jno63 = document.querySelector("#jno63");
  const jno64 = document.querySelector("#jno64");
  const jno65 = document.querySelector("#jno65");
  const jno66 = document.querySelector("#jno66");
  const jno67 = document.querySelector("#jno67");
  const jno68 = document.querySelector("#jno68");
  const jno69 = document.querySelector("#jno69");
  const jno70 = document.querySelector("#jno70");
  const nilai16=document.querySelector('#nilai16')


  if (jno61.checked) {
    response = "";
    poin16 = poin16 + 10;
  } else {
    response = "";
  }
  rno61.innerHTML = response;

  if (jno62.checked) {
    response = "";
    poin16 = poin16 + 10;
  } else {
    response = "";
  }
  rno62.innerHTML = response;

  if (jno63.checked) {
    response = "";
    poin16 = poin16 + 10;
  } else {
    response = "";
  }
  rno63.innerHTML = response;

  if (jno64.checked) {
    response = "";
    poin16 = poin16 + 10;
  } else {
    response = "";
  }
  rno64.innerHTML = response;

  if (jno65.checked) {
    response = "";
    poin16 = poin16 + 10;
  } else {
    response = "";
  }
  rno65.innerHTML = response;


  if (jno66.checked) {
    response = "";
    poin16 = poin16 + 10;
  } else {
    response = "";
  }
  rno66.innerHTML = response;

  if (jno67.checked) {
    response = "";
    poin16 = poin16 + 10;
  } else {
    response = "";
  }
  rno67.innerHTML = response;

  if (jno68.checked) {
    response = "";
    poin16 = poin16 + 10;
  } else {
    response = "";
  }
  rno68.innerHTML = response;

  if (jno69.checked) {
    response = "";
    poin16 = poin16 + 10;
  } else {
    response = "";
  }
  rno69.innerHTML = response;

  if (jno70.checked) {
    response = "";
    poin16 = poin16 + 10;
  } else {
    response = "";
  }
  rno70.innerHTML = response;



nilai16.innerHTML=poin16;
  
  

   const optionsno61 = document.getElementsByName("no61");
   for (let i = 0; i < optionsno61.length; i++) {
       optionsno61[i].checked = false;
   }
   const optionsno62 = document.getElementsByName("no62");
   for (let i = 0; i < optionsno62.length; i++) {
       optionsno62[i].checked = false;
   }
   const optionsno63 = document.getElementsByName("no63");
   for (let i = 0; i < optionsno63.length; i++) {
       optionsno63[i].checked = false;
   }
   const optionsno64 = document.getElementsByName("no64");
   for (let i = 0; i < optionsno64.length; i++) {
       optionsno64[i].checked = false;
   }

   const optionsno65 = document.getElementsByName("no65");
   for (let i = 0; i < optionsno65.length; i++) {
       optionsno65[i].checked = false;
   }
 
   const optionsno66 = document.getElementsByName("no66");
   for (let i = 0; i < optionsno66.length; i++) {
       optionsno66[i].checked = false;
   }
   const optionsno67 = document.getElementsByName("no67");
   for (let i = 0; i < optionsno67.length; i++) {
       optionsno67[i].checked = false;
   }
   const optionsno68 = document.getElementsByName("no68");
   for (let i = 0; i < optionsno68.length; i++) {
       optionsno68[i].checked = false;
   }
   const optionsno69 = document.getElementsByName("no69");
   for (let i = 0; i < optionsno69.length; i++) {
       optionsno69[i].checked = false;
   }

   const optionsno70 = document.getElementsByName("no70");
   for (let i = 0; i < optionsno70.length; i++) {
       optionsno70[i].checked = false;
   }
   
}
function kirim18() {
  let poin18 = 0;
  const jno1801 = document.querySelector("#jno1801");
  const jno1802 = document.querySelector("#jno1802");
  const jno1803 = document.querySelector("#jno1803");
  const jno1804 = document.querySelector("#jno1804");
  const jno1805 = document.querySelector("#jno1805");
  const jno1806 = document.querySelector("#jno1806");
  const jno1807 = document.querySelector("#jno1807");
  const jno1808 = document.querySelector("#jno1808");
  const jno1809 = document.querySelector("#jno1809");
  const jno1810 = document.querySelector("#jno1810");
  
  
  if (jno1801.checked) {
    response = "ok";
    poin18 = poin18 + 10;
  } else {
    response = "";
  }
rno1801.innerHTML = response;

if (jno1802.checked) {
  response = "";
  poin18 = poin18 + 10;
} else {
  response = "";
}
rno1802.innerHTML = response;

if (jno1803.checked) {
  response = "";
  poin18 = poin18 + 10;
} else {
  response = "";
}
rno1803.innerHTML = response;

if (jno1804.checked) {
  response = "";
  poin18 = poin18 + 10;
} else {
  response = "";
}
rno1804.innerHTML = response;

if (jno1805.checked) {
  response = "";
  poin18 = poin18 + 10;
} else {
  response = "";
}
rno1805.innerHTML = response;

if (jno1806.checked) {
  response = "ok";
  poin18 = poin18 + 10;
} else {
  response = "";
}
rno1806.innerHTML = response;
if (jno1807.checked) {
  response = "ok";
  poin18 = poin18 + 10;
} else {
  response = "";
}
rno1807.innerHTML = response;
if (jno1808.checked) {
  response = "ok";
  poin18 = poin18 + 10;
} else {
  response = "";
}
rno1808.innerHTML = response;
if (jno1809.checked) {
  response = "ok";
  poin18 = poin18 + 10;
} else {
  response = "";
}
rno1809.innerHTML = response;
if (jno1810.checked) {
  response = "ok";
  poin18 = poin18 + 10;
} else {
  response = "";
}
rno1810.innerHTML = response;



nilai18.innerHTML=poin18;
const optionsno1801 = document.getElementsByName("no1801");
   for (let i = 0; i < optionsno1801.length; i++) {
       optionsno1801[i].checked = false;
   }

   const optionsno1802 = document.getElementsByName("no1802");
   for (let i = 0; i < optionsno1802.length; i++) {
       optionsno1802[i].checked = false;
   }

   const optionsno1803 = document.getElementsByName("no1803");
   for (let i = 0; i < optionsno1803.length; i++) {
       optionsno1803[i].checked = false;
   }


   const optionsno1804 = document.getElementsByName("no1804");
   for (let i = 0; i < optionsno1804.length; i++) {
       optionsno1804[i].checked = false;
   }

   
   const optionsno1805 = document.getElementsByName("no1805");
   for (let i = 0; i < optionsno1805.length; i++) {
       optionsno1805[i].checked = false;
   }
   
   const optionsno1806 = document.getElementsByName("no1806");
   for (let i = 0; i < optionsno1806.length; i++) {
       optionsno1806[i].checked = false;
   }

   const optionsno1807 = document.getElementsByName("no1807");
   for (let i = 0; i < optionsno1807.length; i++) {
       optionsno1807[i].checked = false;
   }
   const optionsno1808 = document.getElementsByName("no1808");
   for (let i = 0; i < optionsno1808.length; i++) {
       optionsno1808[i].checked = false;
   }
   const optionsno1809 = document.getElementsByName("no1809");
   for (let i = 0; i < optionsno1809.length; i++) {
       optionsno1809[i].checked = false;
   }
   const optionsno1810 = document.getElementsByName("no1810");
   for (let i = 0; i < optionsno1810.length; i++) {
       optionsno1810[i].checked = false;
   }


  }
  