'use strict'

const Controller = require('trails/controller')

/**
 * @module TableController
 * @description table.
 */
module.exports = class TableController extends Controller {
    /**
     * create table
     * @param req
     * @param res
     * @returns {Promise<*>}
     */
    async create(req, res) {

        let model = req.body
        let {TableService} = this.app.services
        let user = req.user
        try {

            let data = {
                owner: user.id,
                title: model.title,
                tags: model.tags,
                tagline: model.tagline,
                image: model.image,
                description: model.description,
                isThumbnail: model.isThumbnail,
                curator: model.curator,
                isPublished: model.isPublished
            }

            let table = await TableService.create(data)
            return res.json({
                flag: true,
                data: table,
                message: "Success",
                code: 200
            });
        }
        catch (e) {
            return res.json({
                flag: false,
                data: e,
                message: e.message,
                code: 500
            });
        }
    }

    /**
     * add column
     * @param req
     * @param res
     * @returns {Promise<*>}
     */
    async addColumn(req, res) {
        let model = req.body
        let {TableService} = this.app.services
        let user = req.user
        let data = {
            tableId: model.tableId,
            userId: user.id,
            title: model.title,
            position: model.position,
            width: model.width
        }

        try {
            let column = await TableService.addColumn(data)
            return res.json({
                flag: true,
                data: column,
                message: "Success",
                code: 200
            });
        }
        catch (e) {
            return res.json({
                flag: false,
                data: e,
                message: e.message,
                code: 500
            });
        }
    }

    /**
     * update column
     * @param req
     * @param res
     * @returns {Promise<*>}
     */
    async updateColumn(req, res) {

        let params = req.params
        let model = req.body
        let id = parseInt(params.id);
        let {TableService} = this.app.services

        try {
            let column = await TableService.updateColumn(model, id)
            return res.json({
                flag: true,
                data: column,
                message: "Success",
                code: 200
            });
        }
        catch (e) {
            return res.json({
                flag: false,
                data: e,
                message: e.message,
                code: 500
            });
        }
    }

    /**
     * remove column
     * @param req
     * @param res
     * @returns {Promise<*>}
     */
    async removeColumn(req, res) {

        let params = req.params
        let id = parseInt(params.id);
        let {TableService} = this.app.services
        try {
            let column = await TableService.removeColumn(id)
            return res.json({
                flag: true,
                data: column,
                message: "Success",
                code: 200
            });
        }
        catch (e) {
            return res.json({
                flag: false,
                data: e,
                message: e.message,
                code: 500
            });
        }
    }

    /**
     * update table
     * @param req
     * @param res
     * @returns {Promise<*>}
     */
    async update(req, res) {

        let params = req.params
        let model = req.body
        let id = parseInt(params.id);
        let {TableService} = this.app.services

        try {
            let table = await TableService.update(model, id)
            //todo Update column pending
            return res.json({
                flag: true,
                data: table,
                message: "Success",
                code: 200
            });
        }
        catch (e) {
            return res.json({
                flag: false,
                data: e,
                message: e.message,
                code: 500
            });
        }
    }

    /**
     * table published
     * @param req
     * @param res
     * @returns {Promise<*>}
     */
    async publish(req, res) {

        let params = req.params
        let model = req.body
        let id = parseInt(params.id);
        let {TableService} = this.app.services
        let time = new Date().getTime()
        let data = {
            isPublished: model.isPublished,
            publishedAt: time
        }
        try {
            let table = await TableService.update(data, id)
            return res.json({
                flag: true,
                data: table,
                message: "Success",
                code: 200
            });
        }
        catch (e) {
            return res.json({
                flag: false,
                data: e,
                message: e.message,
                code: 500
            });
        }
    }

    /**
     * get table details
     * @param req
     * @param res
     * @returns {Promise<*>}
     */
    async tableDetail(req, res) {

        let {TableService} = this.app.services
        let params = req.params
        let id = parseInt(params.id);

        try {
            let table = await TableService.find(id)
            return res.json({
                flag: true,
                data: table,
                message: "Success",
                code: 200
            });
        }
        catch (e) {
            return res.json({
                flag: false,
                data: e,
                message: e.message,
                code: 500
            });
        }
    }

    /**
     * remove table
     * @param req
     * @param res
     * @returns {Promise<*>}
     */
    async remove(req,res){
        let params = req.params
        let id = parseInt(params.id);
        let {TableService} = this.app.services
        try {
            let table = await TableService.remove(id)
            return res.json({
                flag: true,
                data: table,
                message: "Success",
                code: 200
            });
        }
        catch (e) {
            return res.json({
                flag: false,
                data: e,
                message: e.message,
                code: 500
            });
        }
    }
}


