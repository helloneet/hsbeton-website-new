/// <reference path="../pb_data/types.d.ts" />
migrate(
  (app) => {
    const existing = (() => {
      try {
        return app.findCollectionByNameOrId('leads');
      } catch (e) {
        return null;
      }
    })();
    if (existing) return;

    const collection = new Collection({
      name: 'leads',
      type: 'base',
      listRule: null,
      viewRule: null,
      createRule: '',
      updateRule: null,
      deleteRule: null,
      fields: [
        { name: 'name', type: 'text', required: true, max: 120 },
        { name: 'company', type: 'text', required: false, max: 160 },
        { name: 'phone', type: 'text', required: true, max: 40 },
        { name: 'email', type: 'email', required: false },
        { name: 'product', type: 'text', required: false, max: 120 },
        { name: 'message', type: 'text', required: false, max: 3000 },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
      ],
    });

    app.save(collection);
  },
  (app) => {
    try {
      app.delete(app.findCollectionByNameOrId('leads'));
    } catch (e) {
      // already removed
    }
  }
);
