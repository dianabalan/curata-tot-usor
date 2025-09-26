# Paperform Integration Guide

This guide explains how to use the Paperform integration in your React application.

## Overview

I've created a complete Paperform integration system with the following components:

### 1. `usePaperform` Hook (`src/hooks/usePaperform.ts`)
- Loads the Paperform embed script automatically
- Ensures the script is loaded only once across the application
- Handles async loading

### 2. `PaperformModal` Component (`src/components/PaperformModal.tsx`)
- Custom modal wrapper for Paperform embeds
- Uses shadcn/ui Dialog component
- Responsive design with scroll support
- Automatic form initialization

### 3. `PaperformButton` Component (`src/components/PaperformButton.tsx`)
- Ready-to-use button component
- Supports both custom modal and Paperform's native popup
- Inherits all Button component props
- Automatic script loading

## Usage

### Step 1: Get Your Paperform ID
1. Go to your Paperform dashboard
2. Find your form and copy the form ID/slug from the URL
3. Replace `"YOUR_PAPERFORM_ID_HERE"` in the components with your actual form ID

### Step 2: Choose Integration Method

#### Option A: Custom Modal (Recommended)
```tsx
<PaperformButton 
  formId="your-form-id"
  size="lg" 
  className="your-custom-classes"
  modalTitle="Custom Title"
  usePopup={false} // Use custom modal
>
  Button Text
</PaperformButton>
```

#### Option B: Paperform Native Popup
```tsx
<PaperformButton 
  formId="your-form-id"
  size="lg" 
  className="your-custom-classes"
  usePopup={true} // Use Paperform's native popup
>
  Button Text
</PaperformButton>
```

### Step 3: Update Your Form ID
Replace `"YOUR_PAPERFORM_ID_HERE"` in both:
- `src/components/HeroSection.tsx` (line 31)
- `src/components/CTASection.tsx` (line 43)

## Props Reference

### PaperformButton Props
- `formId` (string, required): Your Paperform form ID/slug
- `children` (ReactNode, required): Button content
- `className` (string, optional): Custom CSS classes
- `size` (string, optional): Button size ("sm", "default", "lg", "icon")
- `variant` (string, optional): Button variant
- `modalTitle` (string, optional): Custom modal title
- `usePopup` (boolean, optional): Use native popup (true) or custom modal (false)

### PaperformModal Props
- `isOpen` (boolean, required): Modal open state
- `onClose` (function, required): Close callback
- `formId` (string, required): Paperform form ID
- `title` (string, optional): Modal title

## Examples

### Basic Usage
```tsx
import { PaperformButton } from '@/components/PaperformButton';

function MyComponent() {
  return (
    <PaperformButton formId="my-form-slug">
      Order Now
    </PaperformButton>
  );
}
```

### Advanced Usage
```tsx
<PaperformButton 
  formId="contact-form"
  size="lg"
  className="bg-blue-600 hover:bg-blue-700"
  modalTitle="Contact Us"
  usePopup={false}
>
  Get In Touch
</PaperformButton>
```

### Direct Modal Usage
```tsx
import { useState } from 'react';
import { PaperformModal } from '@/components/PaperformModal';

function MyComponent() {
  const [showForm, setShowForm] = useState(false);
  
  return (
    <>
      <button onClick={() => setShowForm(true)}>
        Open Form
      </button>
      <PaperformModal
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        formId="my-form-id"
        title="Fill Out Form"
      />
    </>
  );
}
```

## Benefits of This Implementation

1. **Performance**: Script loads once and is reused
2. **UX**: Smooth modal experience with custom styling
3. **Flexibility**: Choose between modal or popup
4. **Responsive**: Works on all screen sizes
5. **Type Safe**: Full TypeScript support
6. **Consistent**: Uses your existing design system

## Troubleshooting

### Form Not Loading
- Verify your form ID is correct
- Check browser console for errors
- Ensure Paperform form is published and accessible

### Styling Issues
- The modal is responsive by default
- Customize via the `className` prop
- Paperform inherits some styles from your site

### Script Loading
- The hook ensures script loads automatically
- No manual script injection needed
- Works with React's strict mode
