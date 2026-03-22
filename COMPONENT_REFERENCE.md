# Component Reference Guide

## Quick File Location Reference

### 🆕 New Components Created

1. **ContactForm Component**
   - Path: `/src/app/components/ContactForm.tsx`
   - Purpose: Lead capture form with WhatsApp integration
   - Features: 8 fields, validation, WhatsApp redirect, success state

2. **WhatsAppButton Component**
   - Path: `/src/app/components/WhatsAppButton.tsx`
   - Purpose: Floating WhatsApp contact button
   - Features: Blinking animation, bottom-right fixed position, tooltip

3. **PrivacyPolicyModal Component**
   - Path: `/src/app/components/PrivacyPolicyModal.tsx`
   - Purpose: Display full privacy policy
   - Features: Scrollable modal, 13 sections, dark theme

4. **TermsModal Component**
   - Path: `/src/app/components/TermsModal.tsx`
   - Purpose: Display terms and conditions
   - Features: Scrollable modal, 19 sections, dark theme

5. **AboutModal Component**
   - Path: `/src/app/components/AboutModal.tsx`
   - Purpose: Display company information
   - Features: AI automation focus, company mission, features

### 📝 Updated Components

1. **App Component**
   - Path: `/src/app/App.tsx`
   - Changes: 
     - Replaced `FinalCTA` with `ContactForm`
     - Added `WhatsAppButton`
   - New imports: `ContactForm`, `WhatsAppButton`

2. **Hero Component**
   - Path: `/src/app/components/Hero.tsx`
   - Changes:
     - Added `scrollToForm` function
     - Changed CTA button to scroll to form instead of WhatsApp
   - Button now: `href="#contact-form"` with `onClick={scrollToForm}`

3. **Navbar Component**
   - Path: `/src/app/components/Navbar.tsx`
   - Changes:
     - Added `scrollToForm` function
     - "Book Demo" button scrolls to form
     - Mobile menu button also scrolls to form
   - Both buttons: `href="#contact-form"` with `onClick={scrollToForm}`

4. **Footer Component**
   - Path: `/src/app/components/Footer.tsx`
   - Changes:
     - Added "Company" section (4th column)
     - Added state for 3 modals
     - Added modal imports
     - Grid changed from `md:grid-cols-3` to `md:grid-cols-4`
   - New subsections: About, Privacy Policy, Terms and Conditions

5. **Dialog Component**
   - Path: `/src/app/components/ui/dialog.tsx`
   - Changes:
     - Fixed `DialogOverlay` to use `React.forwardRef`
     - Added `displayName` for better debugging
   - Fix: Resolves React ref warning

## Component Tree Structure

```
App
├── Navbar (updated - scroll to form)
├── Hero (updated - scroll to form)
├── Problem
├── Solution
├── Services
├── HowItWorks
├── Benefits
├── Pricing
├── Demo
├── ContactForm (NEW - replaces FinalCTA)
├── Footer (updated - Company section)
│   ├── PrivacyPolicyModal (NEW)
│   ├── TermsModal (NEW)
│   └── AboutModal (NEW)
└── WhatsAppButton (NEW - floating)
```

## Component Props & State

### ContactForm
```typescript
// No props (self-contained)

// Internal state:
const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  businessName: '',
  businessDescription: '',
  helpNeeded: '',
  biggestProblem: '',
  demoCall: 'yes'
});
const [isSubmitted, setIsSubmitted] = useState(false);
```

### WhatsAppButton
```typescript
// No props or state (static component)
// Hardcoded WhatsApp link
```

### Modal Components (AboutModal, PrivacyPolicyModal, TermsModal)
```typescript
interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
```

### Footer (Modal State)
```typescript
const [privacyOpen, setPrivacyOpen] = useState(false);
const [termsOpen, setTermsOpen] = useState(false);
const [aboutOpen, setAboutOpen] = useState(false);
```

## Event Handlers

### Scroll to Form
```typescript
const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const formSection = document.getElementById('contact-form');
  if (formSection) {
    formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
```
Used in: Hero.tsx, Navbar.tsx

### Form Submit
```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // Format message for WhatsApp
  const message = `...formatted data...`;
  const whatsappUrl = `https://wa.me/917481952818?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
  setIsSubmitted(true);
  // Reset after 3 seconds
};
```
Used in: ContactForm.tsx

## Styling Patterns

### Form Inputs
```typescript
className="w-full px-4 py-3 bg-[#111827] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
```

### Primary Buttons
```typescript
className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 hover:scale-105 transition-all"
```

### Modal Content
```typescript
className="max-w-4xl max-h-[80vh] overflow-y-auto bg-[#111827] text-gray-100 border-gray-700"
```

### Floating Button (WhatsApp)
```typescript
className="fixed bottom-6 right-6 z-50"
```

## Animation Classes

### Pulsing (WhatsApp Button)
```typescript
// Ring effect
className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"

// Breathing effect  
className="absolute inset-0 rounded-full bg-green-500 animate-pulse"
```

### Hover Effects
```typescript
// Scale up
hover:scale-105

// Shadow increase
hover:shadow-blue-500/60

// Translate
group-hover:translate-x-1
```

## ID References

### Sections with IDs
```typescript
#contact-form  → ContactForm component
#services      → Services wrapper
#how-it-works  → HowItWorks wrapper
#pricing       → Pricing wrapper
#demo          → Demo wrapper
```

## Important Constants

### WhatsApp Link
```typescript
const WHATSAPP_LINK = "https://wa.me/917481952818?text=Hi%20I%20want%20AI%20automation";
```
Found in: Multiple components

### Email
```typescript
disionaii@gmail.com
```
Found in: Modals, Footer

### Company Name
```typescript
"Dision AI"
```
Found in: All components

## Responsive Breakpoints Used

```typescript
// Mobile first approach
sm:   640px   // Small tablets
md:   768px   // Tablets  
lg:   1024px  // Laptops
xl:   1280px  // Desktops
2xl:  1536px  // Large screens
```

### Common Patterns
```typescript
// Mobile: Single column, Desktop: Multiple columns
grid grid-cols-1 md:grid-cols-2
grid grid-cols-1 md:grid-cols-3
grid grid-cols-1 md:grid-cols-4

// Mobile: Stacked, Desktop: Row
flex flex-col md:flex-row

// Mobile: Hidden, Desktop: Visible
hidden md:block
hidden md:flex
```

## Form Validation

### Required Fields
All fields in ContactForm are required:
```typescript
required
```

### Field Types
```typescript
type="text"     → Name, Business Name
type="email"    → Email (with email validation)
type="tel"      → Phone Number
<textarea>      → Long text fields
<select>        → Demo call preference
```

## WhatsApp Message Format

```typescript
const message = `
*New Demo Request*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Business Name:* ${formData.businessName}
*What does your business do?* ${formData.businessDescription}
*What do you need help with?* ${formData.helpNeeded}
*Biggest Problem:* ${formData.biggestProblem}
*Demo Call Requested:* ${formData.demoCall}
`.trim();
```

## Modal Content Structure

### Privacy Policy
- Last Updated date
- 13 main sections
- Table of contents
- Contact information

### Terms & Conditions
- Last Updated date
- 19 main sections
- Agreement details
- Legal disclaimers

### About
- Who We Are
- Our Mission
- AI Business Automation features
- Why Choose Dision AI
- Call to action

## Z-Index Layers

```typescript
z-0   → Background elements
z-10  → Content sections
z-40  → Navbar (when not fixed)
z-50  → Fixed navbar, WhatsApp button, Modals
```

## Color Palette Reference

### Primary Colors
```css
Blue Gradient: from-[#2563EB] to-[#3B82F6]
Green (WhatsApp): from-green-500 to-green-600
```

### Background Colors
```css
Darkest: bg-[#0B0F19]
Dark: bg-[#111827]
Medium: bg-[#1F2937]
```

### Text Colors
```css
White: text-white
Light Gray: text-gray-100, text-gray-200, text-gray-300
Medium Gray: text-gray-400
Dark Gray: text-gray-500, text-gray-600
```

### Border Colors
```css
Subtle: border-gray-800
Medium: border-gray-700
Accent: border-blue-500/30, border-blue-500/20
```

## Performance Optimizations

1. **Lazy State Updates**: Form resets after timeout
2. **Event Delegation**: Scroll handlers are memoized
3. **Conditional Rendering**: Modals only render when open
4. **Optimized Images**: Using ImageWithFallback component
5. **Code Splitting**: Each component is separate

## Accessibility Features

1. **ARIA Labels**: All buttons have appropriate labels
2. **Dialog Descriptions**: All modals have descriptions
3. **Focus Management**: Dialogs trap focus
4. **Keyboard Navigation**: All interactive elements accessible via keyboard
5. **Screen Reader**: Proper semantic HTML

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Requires JavaScript enabled
- CSS Grid and Flexbox support required

---

*This reference guide covers all components in the Dision AI website.*
*For setup instructions, see EXPORT_GUIDE.md*
*For complete file listing, see CODE_EXPORT.md*
