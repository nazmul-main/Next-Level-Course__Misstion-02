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
