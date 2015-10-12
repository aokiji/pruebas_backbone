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

var SelectorClientes = WebixView.extend({
    initialize: function() {
        this.listenTo(this.collection, 'sync', this.render);
    },
    tagName: "div",
    config: {
        isolate: true,
        view: "combo",
        label: 'Cliente'
    },
    beforeRender: function() {
        this.config.suggest = this.collection.map(function(e){return e.id});
    },
    afterRender: function() {
        this.getRoot().attachEvent("onChange",_.bind(this.select, this));
    },
    select: function(e) {
        this.trigger("select", e);
    }
});

var clientes = new Clientes();


webix.ready(function(){
    vista = new WebixView({ 
        config: {
            type: "wide", cols: [
            { type: "wide", width:300, height: "100%", rows: [
                { template: "left", id:"left" }]},
            { type: "wide", rows: [
                { template: "top", height: 150, id: "top" },
                { template: "bottom" }]}]},
        el: ".app"});

    vista.render();
    clientes.fetch();
    var sel = new SelectorClientes({el: $$("left"), collection: clientes});
    sel.on("select", function(e){console.log(e)});
});

