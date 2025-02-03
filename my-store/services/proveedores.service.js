const boom = require('boom');
const { v4: uuidv4 } = require('uuid');
const pool = require('../libs/postgres.pool');

class ProveedoresService {
  constructor() {
    this.pool = pool;
    this.pool.on('error', (err) => console.error(err));
  }

  async create(data) {
    const query = `
      INSERT INTO proveedores (id, name, ruc, direccion, estado)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;

    const values = [
      uuidv4(),
      data.name,
      data.ruc,
      data.direccion,
      data.estado ?? true,
    ];

    const result = await this.pool.query(query, values);
    return result.rows[0]; // Retorna el proveedor recién creado
  }

  async find() {
    const query = 'SELECT * FROM proveedores';
    const result = await this.pool.query(query);
    return result.rows;
  }

  async findOne(id) {
    const query = 'SELECT * FROM proveedores WHERE id = $1';
    const result = await this.pool.query(query, [id]);

    if (result.rows.length === 0) {
      throw boom.notFound('Proveedor no encontrado');
    }

    return result.rows[0];
  }

  async update(id, changes) {
    const fields = Object.keys(changes)
      .map((key, index) => `${key} = $${index + 2}`)
      .join(', ');

    if (fields.length === 0) {
      throw boom.badRequest('No hay cambios para actualizar');
    }

    const query = `
      UPDATE proveedores
      SET ${fields}
      WHERE id = $1
      RETURNING *;
    `;
    const values = [id, ...Object.values(changes)];
    const result = await this.pool.query(query, values);

    if (result.rows.length === 0) {
      throw boom.notFound('Proveedor no encontrado');
    }

    return result.rows[0];
  }

  async delete(id) {
    const query =
      'DELETE FROM proveedores WHERE id = $1 RETURNING id';
    const result = await this.pool.query(query, [id]);

    if (result.rows.length === 0) {
      throw boom.notFound('Proveedor no encontrado');
    }

    return result.rows[0];
  }
}
module.exports = ProveedoresService;
