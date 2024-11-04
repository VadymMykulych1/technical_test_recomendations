// src/models/Recommendation.ts

// TODO: Define the Mongoose schema and model for storing recommendations.

// Hints:
// - Define a schema that includes:
//   - `userRef`: string
//   - `suggestions`: string[]
// - Create a TypeScript interface for type safety (without using the 'I' prefix).
// - Export the Mongoose model to be used in other parts of your application.

// Example (from a different application):

import mongoose, { Document, Schema } from "mongoose";

// Define an interface for the document
export interface RecommendationDocument extends Document {
  user_id: string;
  recommendations: string[];
  preferences: string[];
}

// Create the schema
const RecommendationSchema: Schema = new Schema({
  user_id: { type: String, required: true },
  recommendations: { type: [String] },
  preferences: { type: [String], required: true },
});

// Export the model
export const RecommendationModel = mongoose.model<RecommendationDocument>(
  "Recommendation",
  RecommendationSchema
);

// Apply this pattern to create your `Recommendation` model.
