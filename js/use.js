function validate(){
	let test = /\(\d{2}\)\s\d{4,5}-?\d{4}/g.test(form.num.value)

	if(test)
		form.submit()
	else{
		alert("Pra conquistar o crush você terá que fazer melhor do que isto.")
		return    
	}
}

jQuery("input.telInput")
        .mask("(99) 99999-9999")
        .focusout(function (event) {  
            var target, phone, element;  
            target = (event.currentTarget) ? event.currentTarget : event.srcElement;  
            phone = target.value.replace(/\D/g, '');
            element = $(target);  
            element.unmask();  
            if(phone.length > 10) {  
                element.mask("(99) 99999-999?9");  
            } else {  
                element.mask("(99) 9999-9999?9");  
            }  
        });