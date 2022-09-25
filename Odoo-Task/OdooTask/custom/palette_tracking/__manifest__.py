{
    'name' : 'Palette Tracking',
    'version' : '1.0.0',
    'summary': 'Palette Tracking',
    'sequence': -100, # to appear at the top apps in Odoo ui
    'description': """Palette Tracking""",
    'depends' : ['base', 'sale', 'sale_management', 'stock', 'sale_stock'],
    'data': [], # the views (xml files)
    'application': True,
    'installable': True,
    'auto_install': False,
    'license': 'LGPL-3',
}