// INITIALISATION TELEGRAM      
const tg = window.Telegram.WebApp;       
tg.ready();       
tg.expand();

        
// Application des couleurs du thème Telegram
       
if (tg.themeParams.bg_color) {         
    document.body.style.backgroundColor = tg.themeParams.bg_color;       
    document.body.style.color = tg.themeParams.text_color;
        
}

      