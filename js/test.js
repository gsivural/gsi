function isUnique(string){
	
	for (let i = 0; i < string.length; i++) {
		const k = string.slice(i,(i+1));
		if (string.lastIndexof(k)!==i){return false}
	 return true
	}
}

console.log(isUnique('abcdef'))
console.log(isUnique('1234567'))
console.log(isUnique('abcABC'))
console.log(isUnique('abcadef'))
