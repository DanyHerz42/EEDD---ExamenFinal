extraer(){
  if (this._inicio.prioridad === 1) {
    let aux = this._inicio;
    this._inicio = this._inicio.siguiente;
    return aux;
  } else if (!this._inicio.prioridad === 1) {
    let temp = this._inicio;
    let bandera = false;
    while (temp.siguiente) {
      if (temp.prioridad === 1) {
        bandera = true;
        let aux = temp;
        temp.anterior.siguiente = temp.siguiente;
        temp.siguiente.anterior = temp.anterior;
        return aux;
      }
      temp = temp.siguiente;
    }
    if (bandera === false) {
      let aux = this._inicio;
      this._inicio = this._inicio.siguiente;
      return aux;
    }
  }
}