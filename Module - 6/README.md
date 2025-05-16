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

# 6-3 $group, $sum, $push Aggregation Stage

## $group Stage
- Groups documents by specified expression
- Performs aggregations on grouped data
- Syntax: `{ $group: { _id: <expression>, <field>: { <accumulator>: <expression> } } }`
- Example: `{ $group: { _id: "$category", count: { $sum: 1 } } }`

## $sum Operator
- Calculates sum of numeric values for grouped documents
- Returns total when used with $group
- Syntax: `{ $sum: <expression> }`
- Example: `{ $group: { _id: "$department", totalSalary: { $sum: "$salary" } } }`

## $push Operator
- Creates an array of values from grouped documents
- Adds field values to array for each document
- Syntax: `{ $push: <expression> }`
- Example: `{ $group: { _id: "$category", items: { $push: "$name" } } }`

# 6-4 Advanced $group & $project Operations
## Aggregation Operators with $group

### $sum
- Calculates sum of numeric values for grouped documents
- Returns total when used with $group
- Syntax: `{ $sum: <expression> }`
- Example: `{ $group: { _id: "$department", totalSalary: { $sum: "$salary" } } }`

### $max
- Finds maximum value in grouped documents
- Returns highest value when used with $group
- Syntax: `{ $max: <expression> }`
- Example: `{ $group: { _id: "$department", highestSalary: { $max: "$salary" } } }`

### $min
- Finds minimum value in grouped documents
- Returns lowest value when used with $group
- Syntax: `{ $min: <expression> }`
- Example: `{ $group: { _id: "$store", lowestPrice: { $min: "$price" } } }`

### $avg
- Calculates average of numeric values in grouped documents
- Returns mean value when used with $group
- Syntax: `{ $avg: <expression> }`
- Example: `{ $group: { _id: "$class", averageScore: { $avg: "$score" } } }`

### $subtract
- Subtracts two numeric values in grouped documents
- Returns difference when used with $group
- Syntax: `{ $subtract: [ <expression1>, <expression2> ] }`
- Example: `{ $group: { _id: "$order", profit: { $subtract: ["$revenue", "$cost"] } } }`

# 6-5 Explore $group with $unwind aggregation stage

## $unwind Stage
- Deconstructs an array field to create separate documents
- Creates a new document for each element in the array
- Syntax: `{ $unwind: <field path> }`
- Example: `{ $unwind: "$tags" }`

## Using $unwind with $group
- Commonly used to group array elements after unwinding
- Enables aggregation on array elements
- Syntax: `{ $unwind: <arrayField>, $group: { _id: <expression>, <field>: { <accumulator>: <expression> } } }`
- Example: `{
    $unwind: "$interests"
},
{
    $group: { _id: "$age", interestsPerAge: {$push: "$interests"}}
}`

# 6-6 $bucket, $sort, and $limit aggregation stage

## $bucket Stage
- Groups documents into buckets based on specified boundaries
- Creates categories for data analysis
- Syntax: `{ $bucket: { groupBy: <expression>, boundaries: [<array>], default: <literal> } }`
- Example: `{ $bucket: { groupBy: "$age", boundaries: [0, 18, 30, 50, 80], default: "Other" } }`

## $sort Stage
- Sorts documents based on specified fields
- Can sort in ascending (1) or descending (-1) order
- Syntax: `{ $sort: { <field>: <1 or -1> } }`
- Example: `{ $sort: { age: -1, name: 1 } }`

## $limit Stage
- Limits the number of documents passed to the next stage
- Useful for pagination and top-N queries
- Syntax: `{ $limit: <positive integer> }`
- Example: `{ $limit: 5 }`

# 6-7 $facet Multiple Pipeline Aggregation Stage

## $facet Stage
- Processes multiple aggregation pipelines within a single stage
- Allows parallel execution of different aggregation operations
- Each facet can have its own pipeline stages
- Outputs results in separate fields
### Syntax
- `{
    $facet: {
        <field1>: [<pipeline1>],
        <field2>: [<pipeline2>],
        ...
    }
}`
### Example
- `{
    $facet: {
        totalSales: [{$match: {status: "completed"}}, {$group: {_id: null, total: {$sum: "$amount"}}}],
        averageSales: [{$match: {status: "completed"}}, {$group: {_id: null, average: {$avg: "$amount"}}}],
        salesByCategory: [{$match: {status: "completed"}}, {$group: {_id: "$category", total: {$sum: "$amount"}}}]                                          
    }
}`

# 6-8 $lookup stage, embedding vs referencing

## $lookup Stage
- Performs a left outer join with another collection
- Adds a new array field containing matching documents
- Useful for combining data from multiple collections
- Syntax: `{ $lookup: { from: <collection>, localField: <field>, foreignField: <field>, as: <output array field> } }`
- Example: `{ $lookup: { from: "orders", localField: "_id", foreignField: "userId", as: "userOrders" } }`

## Data Modeling: Embedding vs Referencing

### Embedding
- Stores related data in a single document
- Better for data that is queried together frequently
- Advantages:
  - Single query retrieves all related data
  - Better performance for read operations
  - Maintains data atomicity
- Example:
