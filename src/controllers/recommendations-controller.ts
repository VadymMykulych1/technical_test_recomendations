// src/controllers/recommendationsController.ts

import { Request, Response } from "express";
import axios from "axios";
import { RecommendationModel } from "../models/recommendation";

export const generateRecommendations = async (req: Request, res: Response) => {
  /**
   * TODO: Implement this controller function.
   *
   * Steps:
   * 1. Extract `clientId` and `productInterests` from the request body.
   * 2. Validate the input data.
   *    - Ensure `clientId` is a non-empty string.
   *    - Ensure `productInterests` is a non-empty array of non-empty strings.
   * 3. Interact with an external API to get tailored promotions.
   *    - Send a POST request to the external promotions API.
   *    - Include the `productInterests` in the request payload.
   * 4. Save the promotions in the database.
   *    - Use the `PromotionModel` to store data.
   * 5. Return the promotions in the response.
   *
   * Handle exceptions and errors appropriately.
   *
   * Hints:
   * - Use an HTTP client like `axios` or `node-fetch` for external requests.
   * - Anticipate possible errors from the external service and the database.
   * - Use try-catch blocks for error handling.
   */

  // Example (from a different context):

  const { user_id, preferences } = req.body;

  try {
    // Call the external promotions service
    const apiResponse = await axios.post("http://wiremock:8080/llm/generate", {
      preferences,
    });
    const { recommendations } = apiResponse.data;

    // Save to the database
    const newRecomendation = await RecommendationModel.create({
      user_id,
      recommendations,
      preferences,
    });

    await newRecomendation.save();
    // Send the response
    res.json({ user_id, recommendations, newRecomendation });
  } catch (error) {
    console.error("Error generating promotions:", error);
    res.status(500).json({
      error:
        "Unable to generate promotions at this time. Please try again later.",
    });
  }
};
