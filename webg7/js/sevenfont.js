var selectedlanguageindex =1;
function changeLanguage(langarg)
{
	switch(langarg)
	{
	case 0:document.aksrcart.src ='cart/hexnumbersChart.png';break;
	case 1:document.aksrcart.src ='cart/voiceChart.png';break;
	case 2:document.aksrcart.src ='cart/symbolsChart.png';break;
	case 3:document.aksrcart.src ='cart/englishChart.png';break;
	case 4:document.aksrcart.src ='cart/hinwicart.png';break;
	case 5:document.aksrcart.src ='cart/xelugucart.png';break;
	case 6:document.aksrcart.src ='cart/KnARacart.png';break;
	case 7:document.aksrcart.src ='cart/malayalamcart.png';break;
	case 8:document.aksrcart.src ='cart/tamilcart.png';break;
	case 9:document.aksrcart.src ='cart/oriyacart.png';break;
	case 10:document.aksrcart.src ='cart/banglacart.png';break;
	case 11:document.aksrcart.src ='cart/punjabicart.png';break;
	case 12:document.aksrcart.src ='cart/gujaraticart.png';break;
	default:document.aksrcart.src ='piqcrs/0.GIF';break;
	}
	selectedlanguageindex =langarg;
	document['foto1'].src ='piqcrs/0.gif';
	document['foto2'].src ='piqcrs/0.gif';
	document['foto3'].src ='piqcrs/0.gif';
	document['foto4'].src ='piqcrs/0.gif';
	document['foto5'].src ='piqcrs/0.gif';
	document['foto6'].src ='piqcrs/0.gif';
	document.getElementById('foto1lbl').innerHTML = '';
	document.getElementById('foto1lb2').innerHTML = '';
	document.getElementById('foto1lb3').innerHTML = '';
	document.getElementById('foto1lb4').innerHTML = '';
	document.getElementById('foto1lb5').innerHTML = '';
	document.getElementById('foto1lb6').innerHTML = '';	
}
function SetValues()
{
   var s = 'X=' + window.event.clientX +  ' Y=' + window.event.clientY ;
	window.status = s;
}
function handleCharClick(arg)
{//alert('selectedlanguageindex is '+selectedlanguageindex+' and arg is '+arg);
	/*ver=3DparseInt(navigator.appVersion) ;
	ie4=3D(ver>3  && navigator.appName!=3D"Netscape")?1:0 ;
	ns4=3D(ver>3  && navigator.appName=3D=3D"Netscape")?1:0 ;
	ns3=3D(ver=3D=3D3 && navigator.appName=3D=3D"Netscape")?1:0 ;	*/
	switch (selectedlanguageindex)
	{
		case 0: showNmbrs(arg);break;
		case 1: show7Voice(arg);break;
		case 2: showSymbols(arg);break;
		case 3: showCharEnglish(arg);break;
		case 4: showCharHindi(arg);break;
		case 5: showCharTelugu(arg);break;
		case 6: showCharKannada(arg);break;
		case 7: showCharMalayalam(arg);break;
		case 8: showCharTamil(arg);break;
		case 9: showCharOriya(arg);break;
		case 10: showCharBangla(arg);break;
		case 11: showCharPunjabi(arg);break;
		case 12: showCharGujarati(arg);break;
	}
	/*if(4 < selectedlanguageindex)
	{
		//document.soundk.src =3D arg + '.mp3';
		//if (ie4)=20
			//document.all['BGSOUND_ID'].src=3Darg + '.mp3';
		//if ( (ns4||ns3) && navigator.javaEnabled() && =
//navigator.mimeTypes['audio/mp3'] && self.document.soundk.IsReady() )
		//{self.document.soundk.play() }
	}*/
}
// function playChar(arg)
// {
	// /*ver=parseInt(navigator.appVersion) ;
	// ie4=(ver>3  && navigator.appName!="Netscape")?1:0 ;
	// ns4=(ver>3  && navigator.appName=="Netscape")?1:0 ;
	// ns3=(ver==3 && navigator.appName=="Netscape")?1:0 ;	*/
	// switch (selectedlanguageindex)
	// {
		// //case 0: completeNmbrs(arg);break;
		// case 1: complete7Voice(arg);break;
		// //case 2: completeSymbols(arg);break;
		// case 3: completeCharEnglish(arg);break;
		// case 4: completeCharHindi(arg);break;
		// //case 5: completeCharMarathi(arg);break;
	// }
	// /*if(4 < selectedlanguageindex)
	// {
		// //document.soundk.src =arg + '.mp3';
		// //if (ie4)=20
			// document.all['BGSOUND_ID'].src=3Darg + '.mp3';
		// //if ((ns4||ns3) && navigator.javaEnabled() && =
// navigator.mimeTypes['audio/mp3'] && self.document.soundk.IsReady() )
		// //{self.document.soundk.play() }
	// }*/
// }
function playNmbrs(vhichKeyDigit)
{
	switch (vhichKeyDigit)
	{
		case 0:ta1.value += "0";break;
		case 1:ta1.value += "1";break;
		case 2:ta1.value += "3";break;
		case 4:ta1.value += "4";break;
		case 5:ta1.value += "5";break;
		case 6:ta1.value += "6";break;
		case 7:ta1.value += "7";break;
		case 8:ta1.value += "8";break;
		case 9:ta1.value += "9";break;
	}
}
