import type { NextApiRequest, NextApiResponse } from 'next';
import { ApiResponse, QuestionData } from '@/types';

/**
 * @swagger
 * /api/question:
 *   get:
 *     description: Returns the question data
 *     responses:
 *       200:
 *         description: Hello Question
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<QuestionData>>
) {
  const data: QuestionData = {
    id: 1,
    user: {
      name: "Boo User",
      avatar: null
    },
    createdAt: "2h ago",
    question: "What would you choose: trust or passion?",
    options: [
      { id: "trust", label: "A relationship full of trust" },
      { id: "passion", label: "A relationship full of passion" }
    ],
    likes: 231,
    comments: [
      {
        id: 1,
        user: { name: "Alice", avatar: null },
        text: "Definitely trust! Passion fades, but trust builds a foundation.",
        createdAt: "1h ago"
      },
      {
        id: 2,
        user: { name: "Bob", avatar: null },
        text: "Passion is what makes life exciting though.",
        createdAt: "30m ago"
      }
    ]
  };

  res.status(200).json({
    success: true,
    data: data
  });
}
