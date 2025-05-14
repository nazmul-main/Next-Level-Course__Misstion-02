# 6-1 $match, $project Aggregation Stage

## $match Stage
- Filters documents based on specified conditions
- Similar to find() operation but used in aggregation pipeline
- Syntax: `{ $match: { <field>: <value> } }`
- Example: `{ $match: { age: { $gt: 25 } } }`

## $project Stage
- Shapes documents by including, excluding, or transforming fields
- Used to modify document structure in aggregation pipeline
- Syntax: `{ $project: { <field>: <1 or 0 or expression> } }`
- Example: `{ $project: { name: 1, age: 1, _id: 0 } }`

# 6-2 $addFields, $out, $merge Aggregation Stage

## $addFields Stage
- Adds new fields to documents
- Existing field values remain unchanged unless explicitly replaced
- Syntax: `{ $addFields: { <newField>: <expression> } }`
- Example: `{ $addFields: { totalPrice: { $multiply: ["$price", "$quantity"] } } }`

## $out Stage
- Writes aggregation pipeline results to a collection
- Must be the last stage in the pipeline
- Syntax: `{ $out: "<collection>" }`
- Example: `{ $out: "newCollection" }`

## $merge Stage
- Merges aggregation pipeline results into a collection
- Can update existing documents or insert new ones
- Syntax: `{ $merge: { into: "<collection>", on: "<field>" } }`
- Example: `{ $merge: { into: "target", on: "_id" } }`
