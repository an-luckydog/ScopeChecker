Component({
    properties: {
        data: {
            type: Object,
            observer: function(t) {
                t && this.setData(t);
            }
        }
    },
    methods: {}
});