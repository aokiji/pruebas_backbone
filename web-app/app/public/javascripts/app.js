var Cliente = Backbone.Model.extend({
    idAttribute: 'nombre_cliente',
    validate: function(attrs){
        if ("nombre_cliente" in attrs){
            return "Se esperaba un nombre de cliente";
        }
    }
});

Clientes = Backbone.Collection.extend({
    model: Cliente,
    url: 'api/clientes',
});

var SelectorClientes = Backbone.View.extend({
    initialize: function() {
        this.listenTo(this.collection, 'sync', this.render);
        this.component = webix.ui({
            isolate: true,
            view: 'combo',
            label: 'Cliente'
            }, this.el);
    },
    render: function() {
        this.component.define('suggest', this.collection.map(function(e){return e.id}));
        this.component.refresh();
    },
});

var clientes = new Clientes();


webix.ready(function(){
    vista = new WebixView({ 
        config: {
            type: "wide", cols: [
            { template: "<div class='selector_clientes' style='height: 100%'></div>", width: 300 },
            { type: "wide", rows: [
                { template: "top", height: 150 },
                { template: "bottom" }]}]},
        el: ".app"});

    vista.render();
    sel = new SelectorClientes({el: ".selector_clientes", collection: clientes});
    clientes.fetch();
});

