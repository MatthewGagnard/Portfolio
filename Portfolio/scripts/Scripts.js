$( function () {
    $( window ).scroll( function () {
        if ( $( this ).scrollTop() < 1000) { 			//If Top of page / Splash portion / Body1
        		$('body').removeClass('body2')
        		$('body').addClass('body1')}

        	else if($( this ).scrollTop() >= 1000 && $( this ).scrollTop() < 2000){ 			//About me Section /Body 2

        		$('body').removeClass('body3')
        		$('body').removeClass('body1')
        		$('body').addClass('body2')}


        	else if($( this ).scrollTop() >= 2000 && $( this ).scrollTop() < 3000){				// Projects portion /Body 3

        		$('body').removeClass('body2')
        		$('body').removeClass('body4')
        		$('body').addClass('body3')
        	}

        	else if($( this ).scrollTop() >= 3000 && $( this ).scrollTop() < 4000){				// Blog / Body 4
				$('body').removeClass('body3')
        		$('body').removeClass('body5')
        		$('body').addClass('body4')
        	}

        	else if($( this ).scrollTop() >= 4000){				//Contact me / Body 5

        		$('body').removeClass('body4')
        		$('body').addClass('body5')
        	}
    });
});