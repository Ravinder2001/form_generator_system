const moment = require("moment/moment");
const { GetFormList, AddForm, GetListCount, ListSearch, FormSearch, FormSearchCount, FormDetails, FormDelete } = require("../models/form.model");
const { Bad, Success, NanoIdLength, ItemPerPage } = require("../utils/constant");
const { FormGenerate, FormDeleteMessage } = require("../utils/message");
const { timestampToDateString } = require("../utils/function");

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
  Form_Search: async (req, res) => {
    try {
      let offset = req.query.page == 1 ? 0 : (req.query.page - 1) * ItemPerPage;
      const Count = await FormSearchCount({ text: req.query.search, limit: ItemPerPage, offset });
      const response = await FormSearch({ text: req.query.search, limit: ItemPerPage, offset });
      return res
        .status(Success)
        .json({ data: { list: response.rows, totalCount: Number(Count.rows[0].total_count), itemPerPage: ItemPerPage }, status: Success });
    } catch (err) {
      return res.status(Bad).json({ message: err.message, status: Bad });
    }
  },
  Form_Details: async (req, res) => {
    try {
      const response = await FormDetails({ id: req.params.form_id ?? "" });

      let formDetails = response.rows.length ? response.rows[0] : null;
      let isExpired;
      if (formDetails && formDetails.form_valid_upto) {
        const isTimestampExpired = (timestamp) => {
          const currentTimestamp = new Date().getTime();
          return timestamp < currentTimestamp;
        };

        isExpired = isTimestampExpired(Number(formDetails.form_valid_upto));
      }
      return res.status(Success).json({ data: { formDetails, isExpired }, status: Success });
    } catch (err) {
      return res.status(Bad).json({ message: err.message, status: Bad });
    }
  },
  Form_Delete: async (req, res) => {
    try {
      await FormDelete({ id: req.params.form_id });
      return res.status(Success).json({ message: FormDeleteMessage, status: Success });
    } catch (err) {
      return res.status(Bad).json({ message: err.message, status: Bad });
    }
  },
};
