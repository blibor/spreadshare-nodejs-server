const Joi = require("joi");

const _ = require("lodash");
module.exports = class TableValidator {
  create() {
    return Joi.object().keys({
      title: Joi.string(),
      tags: Joi.array(),
      tagline: Joi.string(),
      image: Joi.string(),
      description: Joi.string(),
      isThumbnail: Joi.boolean(),
      curator: Joi.array(),
      isPublished: Joi.boolean()
    });
  }

  addColumn() {
    return Joi.object().keys({
      tableId: Joi.number(),
      title: Joi.string(),
      position: Joi.number(),
      width: Joi.number()
    });
  }

  publish() {
    return Joi.object().keys({
      isPublished: Joi.boolean()
    });
  }

  list() {
    return Joi.object().keys({
      start: Joi.number(),
      limit: Joi.number(),
      sort: Joi.string()
    });
  }

  addRow() {
    return Joi.object().keys({
      tableId: Joi.number(),
      rowColumns: Joi.array()
    });
  }

  updateTableRow() {
    return Joi.object().keys({
      tableId: Joi.number().required(),
      rowId: Joi.number().required(),
      rowColumns: Joi.array().required()
    });
  }

  deleteTableRow() {
    return Joi.object().keys({
      rowId: Joi.number().required(),
      tableId: Joi.number().required()
    });
  }
};
