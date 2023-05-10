migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7k5xs77cf4ct5ax")

  collection.name = "notes"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7k5xs77cf4ct5ax")

  collection.name = "posts"

  return dao.saveCollection(collection)
})
