#!/bin/bash

# Test script for Todo API
API_URL="http://localhost:3000"

echo "Testing Todo API..."
echo "==================="

echo "1. Testing GET /todos (should return empty array initially)"
curl -s -X GET "${API_URL}/todos" | jq .

echo -e "\n2. Creating a new todo"
TODO_ID=$(curl -s -X POST "${API_URL}/todos" \
  -H "Content-Type: application/json" \
  -d '{"title": "Learn Node.js", "description": "Complete the Node.js tutorial"}' | jq -r '.data._id')

echo "Created todo with ID: $TODO_ID"

echo -e "\n3. Getting all todos (should show 1 todo)"
curl -s -X GET "${API_URL}/todos" | jq .

echo -e "\n4. Getting single todo by ID"
curl -s -X GET "${API_URL}/todos/${TODO_ID}" | jq .

echo -e "\n5. Updating the todo"
curl -s -X PUT "${API_URL}/todos/${TODO_ID}" \
  -H "Content-Type: application/json" \
  -d '{"title": "Learn Node.js", "description": "Complete the Node.js tutorial", "completed": true}' | jq .

echo -e "\n6. Getting updated todo"
curl -s -X GET "${API_URL}/todos/${TODO_ID}" | jq .

echo -e "\n7. Creating another todo"
TODO_ID2=$(curl -s -X POST "${API_URL}/todos" \
  -H "Content-Type: application/json" \
  -d '{"title": "Build API", "description": "Create a REST API with Express"}' | jq -r '.data._id')

echo "Created second todo with ID: $TODO_ID2"

echo -e "\n8. Getting all todos (should show 2 todos)"
curl -s -X GET "${API_URL}/todos" | jq .

echo -e "\n9. Deleting first todo"
curl -s -X DELETE "${API_URL}/todos/${TODO_ID}" | jq .

echo -e "\n10. Getting all todos (should show 1 todo)"
curl -s -X GET "${API_URL}/todos" | jq .

echo -e "\nAPI testing completed!"