var data = {
    celular : ['59167997327'],
    enviarWhatsapp: function(cel,msg){
		let dataEncode = encodeURI(msg);
		window.open('https://wa.me/'+cel+'?text='+dataEncode, '_blank');
    },
    saludarPorWhatsapp: function(){
        this.enviarWhatsapp(this.celular[0], 'Hola Play Bolivia, quisiera informacion, vengo de su pagina web');
    },
    solicitarPlataforma: function(plataforma){
        this.enviarWhatsapp(this.celular[0], 'Hola Play Bolivia, quisiera mas informacion, para adquirir *'+plataforma+'*, vengo de su pagina web');
    },
    solicitarInformacionPlataformas: function(){
        this.enviarWhatsapp(this.celular[0], 'Hola Play Bolivia, quisiera solicitar informacion de sus plataformas, vengo de su pagina web');
    },
    solicitarInformacionJuegos: function(){
        this.enviarWhatsapp(this.celular[0], 'Hola Play Bolivia, quisiera solicitar informacion de sus recargas para juegos, vengo de su pagina web');
    },
    solicitarInformacionSuscripcion: function(){
        this.enviarWhatsapp(this.celular[0], 'Hola Play Bolivia, quisiera solicitar informacion de como suscribirme para una de sus cuentas, vengo de su pagina web');
    },
    solicitarPlataformaJuego: function(plataforma){
        this.enviarWhatsapp(this.celular[0], 'Hola Play Bolivia, quisiera mas informacion, para adquirir *'+plataforma+'*, vengo de su pagina web');
    },
    comprarPlataformaJuego: function(plataforma){
        this.enviarWhatsapp(this.celular[0], 'Hola Play Bolivia, quisiera mas informacion, para comprar *'+plataforma+'*, vengo de su pagina web');
    },
    comprarCombo: function(plataforma){
        this.enviarWhatsapp(this.celular[0], 'Hola Play Bolivia, quisiera mas informacion, para comprar el *'+plataforma+'*, vengo de su pagina web');
    },
    solicitarCombo: function(plataforma){
        this.enviarWhatsapp(this.celular[0], 'Hola Play Bolivia, quisiera mas informacion, para adquirir el *'+plataforma+'*, vengo de su pagina web');
    },
    enviarInputPlataforma: function(){
        let inputText = $('#inputPlataforma').val();
        if(inputText) {
            this.enviarWhatsapp(this.celular[0], 'Hola Play Bolivia, quisiera mas informacion, para adquirir *'+inputText+'*, vengo de su pagina web');
        }
    },
    enviarInputNombre: function(){
        let inputText = $('#inputNombre').val();
        if(inputText) {
            this.enviarWhatsapp(this.celular[0], 'Hola Play Bolivia, me llamo *'+inputText+'*, quisiera mas informacion, vengo de su pagina web');
        }
    }
}