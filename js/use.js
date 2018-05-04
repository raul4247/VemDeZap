function validate(){
	let test = /\(\d{2}\)\s\d{4,5}-?\d{4}/g.test(form.num.value)

	if(test)
		form.submit()
	else{
		alert("Pra conquistar o crush você terá que fazer melhor do que isto.")
		return    
	}
}