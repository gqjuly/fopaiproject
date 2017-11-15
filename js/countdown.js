function show_student_time(){
		
		var LSTR_ndate=new Date(); 
		var LSTR_Year=LSTR_ndate.getFullYear(); 
		var LSTR_Month=LSTR_ndate.getMonth()+1; 
		var LSTR_Date=LSTR_ndate.getDate(); 
		var be_Date=LSTR_ndate.getDate()-1; 
		var span_dt_sj01 = document.getElementById("span_dt_sj01")
		var span_dt_dt = document.getElementById("span_dt_dt")

		span_dt_sj01.innerHTML=LSTR_Year+'年'+LSTR_Month+'月'+LSTR_Date+'日'

		 window.setTimeout("show_student_time()", 1000);
		 BirthDay=new Date(LSTR_Year,LSTR_Month-1,LSTR_Date+1);
		 today=new Date();
		 timeold=(BirthDay.getTime()-today.getTime());
		 sectimeold=timeold/1000
		 secondsold=Math.floor(sectimeold);
		 msPerDay=24*60*60*1000 
		 e_daysold=timeold/msPerDay
		 daysold=Math.floor(e_daysold);
		 e_hrsold=(e_daysold-daysold)*24;
		 hrsold=Math.floor(e_hrsold);
		 e_minsold=(e_hrsold-hrsold)*60;
		 minsold=Math.floor((e_hrsold-hrsold)*60);
		 seconds=Math.floor((e_minsold-minsold)*60);
		 span_dt_dt.innerHTML=hrsold+"小时"+minsold+"分"+seconds+"秒" ;
	 
	}
	show_student_time();