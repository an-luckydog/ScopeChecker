Component({
    properties: {
        contact: {
            type: Object
        }
    },
    data: {},
    methods: {
        cl_btn: function() {
            this.triggerEvent("getfun");
        }
    }
});