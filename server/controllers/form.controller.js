const { GetFormList, AddForm, GetListCount } = require("../models/form.model");
const { Bad, Success, NanoIdLength, ItemPerPage } = require("../utils/constant");
const { FormGenerate } = require("../utils/message");

module.exports = {
  Add_Form: async (req, res) => {
    try {
      const { nanoid } = await import("nanoid");
      const id = nanoid(NanoIdLength);
      const response = await AddForm({ ...req.body, id });
      return res.status(Success).json({ message: FormGenerate, status: Success });
    } catch (err) {
      return res.status(Bad).json({ message: err.message, status: Bad });
    }
  },
  Get_Form_List: async (req, res) => {
    try {
      let offset = req.query.page == 1 ? 0 : (req.query.page - 1) * ItemPerPage;
      const Count = await GetListCount();
      const response = await GetFormList({ limit: ItemPerPage, offset });
      return res.status(Success).json({ data: { list: response.rows, totalCount: Count.rows[0].count, itemPerPage: ItemPerPage }, status: Success });
    } catch (err) {
      return res.status(Bad).json({ message: err.message, status: Bad });
    }
  },
};
