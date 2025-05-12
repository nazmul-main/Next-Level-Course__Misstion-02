# Module 5-2
## MongoDB Operations Notes

## Insert Operations

### insertOne
- Inserts a single document into a collection
- Syntax: `db.collection.insertOne({ field1: value1, field2: value2 })`
- Example: `db.users.insertOne({ name: "John", age: 30 })`

### insertMany
- Inserts multiple documents into a collection
- Syntax: `db.collection.insertMany([{ doc1 }, { doc2 }])`
- Example: `db.users.insertMany([{ name: "John", age: 30 }, { name: "Jane", age: 25 }])`

## Find Operations

### find
- Retrieves multiple documents from a collection
- Syntax: `db.collection.find(query, projection)`
- Example: `db.users.find({ age: { $gt: 25 } })`

### findOne
- Retrieves a single document from a collection
- Syntax: `db.collection.findOne(query, projection)`
- Example: `db.users.findOne({ name: "John" })`

## Field Filtering & Projection

### Field Filtering
- Filter documents based on field values
- Comparison operators: `$eq`, `$gt`, `$lt`, `$gte`, `$lte`, `$ne`
- Example: `db.users.find({ age: { $gte: 18, $lte: 30 } })`

### Projection
- Specify which fields to include/exclude in results
- Include fields with 1, exclude with 0
- Syntax: `db.collection.find(query, { field1: 1, field2: 0 })`
- Example: `db.users.find({}, { name: 1, age: 1, _id: 0 })`

# 5-3 $eq, $neq, $gt, $lt, $gte, $lte

## $eq (Equal)
- Matches values that are equal to a specified value
- Syntax: `{ field: { $eq: value } }`
- Example: `db.users.find({ age: { $eq: 25 } })`

## $ne (Not Equal)
- Matches values that are not equal to a specified value
- Syntax: `{ field: { $ne: value } }`
- Example: `db.users.find({ status: { $ne: "inactive" } })`

## $gt (Greater Than)
- Matches values that are greater than a specified value
- Syntax: `{ field: { $gt: value } }`
- Example: `db.products.find({ price: { $gt: 100 } })`

## $lt (Less Than)
- Matches values that are less than a specified value
- Syntax: `{ field: { $lt: value } }`
- Example: `db.products.find({ quantity: { $lt: 20 } })`

## $gte (Greater Than or Equal)
- Matches values that are greater than or equal to a specified value
- Syntax: `{ field: { $gte: value } }`
- Example: `db.users.find({ age: { $gte: 18 } })`

## $lte (Less Than or Equal)
- Matches values that are less than or equal to a specified value
- Syntax: `{ field: { $lte: value } }`
- Example: `db.orders.find({ total: { $lte: 1000 } })`

### Combined Usage
- These operators can be combined for range queries
- Example: `db.products.find({ price: { $gte: 10, $lte: 50 } })`
