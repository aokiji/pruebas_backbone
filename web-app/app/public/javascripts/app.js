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
    url: '/clientes_eolica',
    parse: function(data) {
        return data.list;
    }
});

webix.ready(function(){
    vista = new WebixView({ 
        config: {
            type: "wide", cols: [
            { template: "left", width: 300 },
            { type: "wide", rows: [
                { template: "top", height: 150 },
                { template: "bottom" }]}]},
        el: ".app"});

    vista.render();
});

