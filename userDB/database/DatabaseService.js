import { Platform } from "react-native";
import * as SQLite from "expo-sqlite";

class DatabaseService {
    constructor() {
        this.db = null;
        this.storageKey = 'usuarios';
    }

    async initialize() {
        if (Platform.OS === 'web') {
            console.log('Usando LcalStorage para web');
        } else {
            console.log('Usando SQLite para móvil');
            this.db = await SQLite.openDatabaseAsync('miapp_v2.db');
            await this.db.execAsync(`
                CREATE TABLE IF NOT EXISTS usuarios (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    nombre TEXT NOT NULL,
                    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP
                );
            `);
        }
    }

    async getAll(){
        if (Platform.OS === 'web') {
            const data = localStorage.getItem(this.storageKey);
            return data ? JSON.parse(data) : [];
        } else {
            return await this.db.getAllAsync('SELECT * FROM usuarios ORDER BY id DESC');
        }
    }

    async add(nombre) {
        if (Platform.OS === 'web') {
            const usuarios = await this.getAll();

            const nuevoUsuario = {
                id: Date.now(),
                nombre,
                fecha_creacion: new Date().toISOString()
            };

            usuarios.unshift(nuevoUsuario);
            localStorage.setItem(this.storageKey, JSON.stringify(usuarios));
            return nuevoUsuario;

        } else {
            const result = await this.db.runAsync(
                'INSERT INTO usuarios(nombre) VALUES(?)',
                nombre
                );
            return {
                id: result.lastInsertRowId,
                nombre,
                fecha_creacion: new Date().toISOString()
            };
        }
    }
    async update(id, nombre) {
        if (Platform.OS === 'web') {
            const usuarios = await this.getAll();
            const index = usuarios.findIndex(u => u.id.toString() === id.toString());

            if (index !== -1) {
                usuarios[index].nombre = nombre;
                localStorage.setItem(this.storageKey, JSON.stringify(usuarios));
                return usuarios[index];
            }
            throw new Error('Usuario no encontrado para actualizar (Web)');
        } else {
            const result = await this.db.runAsync(
                'UPDATE usuarios SET nombre = ? WHERE id = ?',
                nombre,
                id
            );
            
            if (result.changes === 0) {
                throw new Error(`Usuario con ID ${id} no encontrado para actualizar (SQLite)`);
            }

            // Para simular el retorno del objeto actualizado
            const updatedUser = await this.db.getFirstAsync('SELECT * FROM usuarios WHERE id = ?', id);
            return updatedUser;
        }
    }

    async delete(id) {
        if (Platform.OS === 'web') {
            let usuarios = await this.getAll();
            const initialLength = usuarios.length;
            usuarios = usuarios.filter(u => u.id.toString() !== id.toString());
            
            if (usuarios.length < initialLength) {
                localStorage.setItem(this.storageKey, JSON.stringify(usuarios));
                return true; // Eliminado
            }
            throw new Error('Usuario no encontrado para eliminar (Web)');
        } else {
            const result = await this.db.runAsync('DELETE FROM usuarios WHERE id = ?', id);
            
            if (result.changes === 0) {
                throw new Error(`Usuario con ID ${id} no encontrado para eliminar (SQLite)`);
            }
            return true; // Eliminado
        }
    }
}

// Exportar instancia de la clase
export default new DatabaseService();