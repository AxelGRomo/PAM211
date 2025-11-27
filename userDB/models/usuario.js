export class Usuario {
    constructor(id, nombre, fechaCreacion){
        this.id = id;
        this.nombre = nombre;
        this.fechaCreacion = fechaCreacion || new Date().toISOString();
    }

    // Validaciones del modelo
    static validar(nombre, id = null) {
        if (!nombre || nombre.trim().length === 0) {
            throw new Error('El nombre no puede estar vacio');
        }
        if (nombre.length > 50) {
            throw new Error('El nombre no puede tener mas de 50 caracteres');
        }
        if (id !== null && (isNaN(id) || id <= 0)) {
            throw new Error('El ID debe ser un numero positivo');
        }
    return true;
    }
}



