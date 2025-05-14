
import React from "react";
import { Link } from "react-router-dom";
import Button from "@/components/common/Button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-app-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Page not found
        </p>
        <Link to="/">
          <Button>Return to Dashboard</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
