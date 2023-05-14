migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7k5xs77cf4ct5ax")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tp0gdmko",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7k5xs77cf4ct5ax")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tp0gdmko",
    "name": "contents",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
