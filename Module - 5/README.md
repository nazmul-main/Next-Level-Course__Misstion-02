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
  
# 5-4 $in, $nin, Implicit AND Condition

## $in (In)
- Matches any values that exist in a specified array
- Syntax: `{ field: { $in: [value1, value2, ...] } }`
- Example: `db.products.find({ category: { $in: ["electronics", "computers"] } })`

## $nin (Not In)
- Matches none of the values specified in an array
- Syntax: `{ field: { $nin: [value1, value2, ...] } }`
- Example: `db.products.find({ status: { $nin: ["discontinued", "out-of-stock"] } })`

## Implicit AND Condition
- Multiple conditions in a query document create an implicit AND operation
- Syntax: `{ field1: value1, field2: value2 }`
- Example: `db.users.find({ age: { $gte: 18 }, status: "active" })`
- All conditions must be true for a document to match

# 5-5 $and, $or, $not, $nor implicit vs explicit - Logical Operators

## $and Operator
- Explicitly combines multiple conditions with AND logic
- Syntax: `{ $and: [ { condition1 }, { condition2 }, ... ] }`
- Example: `db.users.find({ $and: [{ age: { $gte: 18 } }, { status: "active" }] })`

## $or Operator
- Combines conditions with OR logic
- Syntax: `{ $or: [ { condition1 }, { condition2 }, ... ] }`
- Example: `db.products.find({ $or: [{ price: { $lt: 100 } }, { category: "sale" }] })`

## $not Operator
- Inverts the effect of a query expression
- Syntax: `{ field: { $not: { <operator-expression> } } }`
- Example: `db.inventory.find({ price: { $not: { $gt: 100 } } })`

## $nor Operator
- Joins query clauses with a logical NOR
- Returns documents that fail all specified conditions
- Syntax: `{ $nor: [ { condition1 }, { condition2 }, ... ] }`
- Example: `db.products.find({ $nor: [{ price: { $lt: 50 } }, { sale: true }] })`

## Implicit vs Explicit AND
### Implicit AND
- Using comma-separated conditions
- More concise for simple queries
- Example: `db.users.find({ age: { $gte: 18 }, status: "active" })`

### Explicit AND ($and)
- More flexible for complex conditions
- Required when using same field multiple times
- Example: `db.inventory.find({ $and: [{ qty: { $gt: 100 } }, { qty: { $lt: 250 } }] })`

# 5-6 $exists, $type, $size

## $exists
- Matches documents that have the specified field
- Syntax: `{ field: { $exists: <boolean> } }`
- Example: `db.inventory.find({ qty: { $exists: true } })`

## $type
- Matches documents where the field is of specified BSON type
- Syntax: `{ field: { $type: <BSON type> } }`
- Example: `db.users.find({ age: { $type: "number" } })`

## $size
- Matches arrays with specified number of elements
- Syntax: `{ field: { $size: <number> } }`
- Example: `db.products.find({ tags: { $size: 3 } })`

# 5-7 $all, $elemMatch

## $all
- Matches arrays that contain all specified elements
- Syntax: `{ field: { $all: [value1, value2, ...] } }`
- Example: `db.products.find({ tags: { $all: ["electronics", "wireless"] } })`

## $elemMatch
- Matches documents that contain an array element meeting multiple criteria
- Syntax: `{ field: { $elemMatch: { <query1>, <query2>, ... } } }`
- Example: `db.products.find({ specs: { $elemMatch: { color: "red", size: "large" } } })`

# 5-8 $set, $addToSet, $push

## $set
- Updates or adds a field's value
- Syntax: `{ $set: { field: value } }`
- Example: `db.users.updateOne({ _id: 1 }, { $set: { status: "active" } })`

## $addToSet
- Adds elements to an array only if they don't exist
- Syntax: `{ $addToSet: { field: value } }`
- Example: `db.products.updateOne({ _id: 1 }, { $addToSet: { tags: "new" } })`

## $push
- Adds elements to an array
- Syntax: `{ $push: { field: value } }`
- Example: `db.posts.updateOne({ _id: 1 }, { $push: { comments: { text: "Great post!" } } })`

# 5-9 $unset, $pop, $pull, $pullAll

## $unset
- Removes specified fields from a document
- Syntax: `{ $unset: { field: "" } }`
- Example: `db.users.updateOne({ _id: 1 }, { $unset: { temporary_field: "" } })`

## $pop
- Removes first or last element of an array
- Syntax: `{ $pop: { field: 1 } }` (last element) or `{ $pop: { field: -1 } }` (first element)
- Example: `db.posts.updateOne({ _id: 1 }, { $pop: { comments: 1 } })`

## $pull
- Removes all array elements that match a specified condition
- Syntax: `{ $pull: { field: value } }`
- Example: `db.products.updateOne({ _id: 1 }, { $pull: { tags: "old" } })`

## $pullAll
- Removes all matching values from an array
- Syntax: `{ $pullAll: { field: [ value1, value2, ... ] } }`
- Example: `db.inventory.updateOne({ _id: 1 }, { $pullAll: { tags: ["expired", "discontinued"] } })`
# 5-11 Delete Documents, Drop Collection and Self-Exploration

## Delete Documents

### deleteOne
- Removes a single document that matches the filter
- Syntax: `db.collection.deleteOne(filter)`
- Example: `db.users.deleteOne({ status: "inactive" })`

### deleteMany
- Removes all documents that match the filter
- Syntax: `db.collection.deleteMany(filter)`
- Example: `db.products.deleteMany({ category: "discontinued" })`

## Drop Collection
- Removes an entire collection including all documents
- Syntax: `db.collection.drop()`
- Example: `db.temporary_collection.drop()`

## Self-Exploration Tips

### MongoDB Documentation
- Visit official MongoDB documentation (docs.mongodb.com)
- Read through examples and use cases
- Practice in MongoDB Shell

### MongoDB Compass
- Use MongoDB Compass GUI for visual exploration
- Test queries in the query builder
- Analyze query performance

### Best Practices
- Always test queries on sample data first
- Use appropriate indexes for better performance
- Regular backups before major operations
- Monitor query execution plans
