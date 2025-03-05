const { Discount } = require('../db/model/discounts.model');

const getAllDiscounts = async (req, res) => {
  try {
    const discounts = await Discount.findAll();
    res.status(200).json(discounts);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los descuentos', error });
  }
};

const createDiscount = async (req, res) => {
  try {
    const { name, percentage, start_date, end_date, status } = req.body;
    const newDiscount = await Discount.create({
      name,
      percentage,
      start_date,
      end_date,
      status,
    });
    res.status(201).json(newDiscount);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el descuento', error });
  }
};

const updateDiscount = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, percentage, start_date, end_date, status } = req.body;
    const discount = await Discount.findByPk(id);

    if (!discount) {
      return res.status(404).json({ message: 'Descuento no encontrado' });
    }

    await discount.update({ name, percentage, start_date, end_date, status });
    res.status(200).json(discount);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el descuento', error });
  }
};

const deleteDiscount = async (req, res) => {
  try {
    const { id } = req.params;
    const discount = await Discount.findByPk(id);

    if (!discount) {
      return res.status(404).json({ message: 'Descuento no encontrado' });
    }

    await discount.destroy();
    res.status(200).json({ message: 'Descuento eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el descuento', error });
  }
};

module.exports = {
  getAllDiscounts,
  createDiscount,
  updateDiscount,
  deleteDiscount,
};
