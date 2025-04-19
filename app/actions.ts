"use server"

import { z } from "zod"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export async function submitFeedback(formData: FormData) {
  // Validate form data
  const validatedFields = formSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  })

  if (!validatedFields.success) {
    return { success: false, message: "Invalid form data. Please check your inputs." }
  }

  const { name, email, message } = validatedFields.data

  try {
    // In a real application, you would send an email here
    // For example, using a service like Nodemailer, SendGrid, etc.
    // For now, we'll just log the data and return success

    console.log("Feedback received:")
    console.log("Name:", name)
    console.log("Email:", email)
    console.log("Message:", message)
    console.log("Would be sent to: AJIRFAANKHAAN1592@gmail.com")

    // Simulate a delay to mimic sending an email
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return { success: true, message: "Thank you for your feedback! We'll review your suggestions." }
  } catch (error) {
    console.error("Error sending feedback:", error)
    return { success: false, message: "There was a problem submitting your feedback. Please try again." }
  }
}
