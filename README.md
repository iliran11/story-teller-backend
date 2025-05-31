# Story Teller Backend

A Node.js Express API for generating topics, sub-topics, and explanations using OpenAI.
## API Endpoints

### Topics

#### GET `/topics`
- **Description**: Retrieve a list of available topics
- **Method**: GET
- **Query Parameters**: None
- **Response**: 
  ```json
  {
    "data": [/* array of topics */]
  }
  ```

### Sub-Topics

#### GET `/sub-topics`
- **Description**: Get sub-topics for a specific topic
- **Method**: GET
- **Query Parameters**: 
  - `topic` (required) - The topic to get sub-topics for
- **Example**: `/sub-topics?topic=science`
- **Response**: 
  ```json
  {
    "data": [/* array of sub-topics */]
  }
  ```
- **Error Response** (400): 
  ```json
  {
    "error": "Topic query parameter is required"
  }
  ```

### Explainer

#### GET `/explainer/topic`
- **Description**: Get detailed explanation/description for a specific topic
- **Method**: GET
- **Query Parameters**: 
  - `topic` (required) - The topic to get explanation for
- **Example**: `/explainer/topic?topic=quantum-physics`
- **Response**: 
  ```json
  {
    "data": "/* detailed explanation text */"
  }
  ```
- **Error Response** (400): 
  ```json
  {
    "error": "Topic query parameter is required"
  }
  ```

## Error Handling

All endpoints include error handling middleware that returns a 500 status with the following format:
```json
{
  "error": "Something went wrong!",
  "message": "/* specific error message */"
}
```

## Dependencies

- **express**: Web framework for Node.js
- **openai**: OpenAI API client
- **lodash**: Utility library
- **@dotenvx/dotenvx**: Environment variable loading

## Development Dependencies

- **nodemon**: Development server with auto-restart 