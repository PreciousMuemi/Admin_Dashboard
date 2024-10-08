import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import FeedbackList from './FeedbackList';

const UserFeedback = ({ feedback }) => {
  return (
    <Card className="bg-gradient-to-br from-yellow-200 to-green-200 border-none shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-green-800">User Feedback</CardTitle>
        <CardDescription className="text-green-700">View feedback from Endocare users</CardDescription>
      </CardHeader>
      <CardContent>
        <FeedbackList feedback={feedback} />
      </CardContent>
    </Card>
  );
};

export default UserFeedback;