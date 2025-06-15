
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Package, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

type ReturnFormData = {
  orderNumber: string;
  email: string;
  reason: string;
  description: string;
};

const RequestReturnLabel = () => {
  const { toast } = useToast();
  const form = useForm<ReturnFormData>();

  const onSubmit = (data: ReturnFormData) => {
    console.log('Return request submitted:', data);
    toast({
      title: "Return Label Requested",
      description: "We'll send your return label to your email within 24 hours.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-8 py-6">
          <div className="flex items-center gap-4">
            <Link 
              to="/" 
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-full">
              <Package className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            Request Return Label
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Need to return an item? We'll help you get a prepaid return label sent directly to your email.
          </p>
        </div>

        {/* Return Form */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Return Information</CardTitle>
            <CardDescription>
              Please provide your order details to generate a return label
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="orderNumber"
                  rules={{ required: "Order number is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Order Number</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="e.g., EST-123456789" 
                          {...field} 
                          className="h-12"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  rules={{ 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="your@email.com" 
                          {...field} 
                          className="h-12"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="reason"
                  rules={{ required: "Return reason is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Return Reason</FormLabel>
                      <FormControl>
                        <select 
                          {...field} 
                          className="w-full h-12 px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="">Select a reason</option>
                          <option value="defective">Defective/Damaged Item</option>
                          <option value="wrong-item">Wrong Item Received</option>
                          <option value="not-as-described">Not as Described</option>
                          <option value="size-issue">Size Issue</option>
                          <option value="changed-mind">Changed Mind</option>
                          <option value="other">Other</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Details (Optional)</FormLabel>
                      <FormControl>
                        <textarea 
                          {...field} 
                          placeholder="Please provide any additional details about your return..."
                          className="w-full min-h-[100px] px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-vertical"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-12 text-lg font-medium"
                >
                  Request Return Label
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* Return Policy Info */}
        <div className="mt-12 bg-white rounded-xl p-8 shadow-sm border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Return Policy</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Return Window</h3>
              <p className="text-gray-600 mb-4">
                Items can be returned within 30 days of delivery for a full refund.
              </p>
              
              <h3 className="font-semibold text-gray-900 mb-3">Condition Requirements</h3>
              <p className="text-gray-600">
                Items must be in original condition with tags attached and original packaging.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Processing Time</h3>
              <p className="text-gray-600 mb-4">
                Return labels are typically sent within 24 hours. Refunds are processed within 5-7 business days.
              </p>
              
              <h3 className="font-semibold text-gray-900 mb-3">Free Returns</h3>
              <p className="text-gray-600">
                We offer free returns for defective items or our shipping errors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestReturnLabel;
