
from odoo import models, fields, api

class PaletteTracking(models.Model):
    _name = "palette.tracking"
    _description = "Palette Tracking"
    picking_id= fields.Many2one('stock.picking',required=True, string='Picking')
    partner_id = fields.Many2one('res.partner', string='Partner') # (fill it on creation)
    license_plate= fields.Char(string='License Plate')
    picking_partner_id = fields.Many2one('partner_id', string='Picking Partner')
    picking_date_done= fields.Date.to_datetime(string='Picking Date Done')
    palette_count_plus = fields.Integer(string='Palette Count Plus')
    palette_count_minus = fields.Integer(string='Palette Count Minus')
    balance = fields.Integer(compute="_compute_amount")

    @api.depends('palette_count_plus','palette_count_minus')
    def _compute_amount(self):
            self.balance = self.palette_count_plus - self.palette_count_minus
