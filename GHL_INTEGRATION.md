# Go High Level Integration Guide

## Overview

The LeadCatalyst website contact form is pre-configured for seamless integration with Go High Level (GHL). All form fields are named according to GHL's standard contact field naming conventions.

## Form Fields Mapping

| Form Field | GHL Field Name | Type | Required |
|------------|----------------|------|----------|
| First Name | `firstName` | text | Yes |
| Last Name | `lastName` | text | Yes |
| Email | `email` | email | Yes |
| Phone | `phone` | tel | No |
| Company | `company` | text | No |
| Industry | `industry` | select | Yes |
| Message | `message` | textarea | Yes |

## Industry Options

The industry dropdown includes the following values:

- `legal` - Legal / Personal Injury
- `insurance` - Insurance
- `financial` - Financial Services
- `realestate` - Real Estate
- `wealth` - Wealth Management
- `b2b` - B2B Services
- `other` - Other

## Integration Methods

### Option 1: GHL Webhook (Recommended)

1. In Go High Level, navigate to **Settings > Integrations > Webhooks**
2. Create a new webhook and copy the webhook URL
3. Update the `handleSubmit` function in `ContactSection.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  const formData = new FormData(e.currentTarget);
  const data = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    company: formData.get('company'),
    industry: formData.get('industry'),
    message: formData.get('message'),
    source: 'LeadCatalyst Website',
    tags: ['website-lead', 'contact-form']
  };

  try {
    const response = await fetch('YOUR_GHL_WEBHOOK_URL', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setIsSubmitted(true);
      toast.success("Thank you! We'll be in touch within 24 hours.");
    } else {
      throw new Error('Submission failed');
    }
  } catch (error) {
    toast.error("Something went wrong. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};
```

### Option 2: GHL Embedded Form

Replace the entire form with a GHL embedded form:

1. In GHL, go to **Sites > Forms**
2. Create a new form with matching fields
3. Copy the embed code
4. Replace the form in `ContactSection.tsx` with an iframe:

```tsx
<iframe
  src="YOUR_GHL_FORM_URL"
  style={{ width: '100%', height: '600px', border: 'none' }}
  title="Contact Form"
/>
```

### Option 3: GHL API Integration

For more control, use the GHL API directly:

1. Get your GHL API key from **Settings > API Keys**
2. Create contacts via the API:

```typescript
const createContact = async (data: ContactFormData) => {
  const response = await fetch('https://rest.gohighlevel.com/v1/contacts/', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer YOUR_API_KEY`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      companyName: data.company,
      customField: {
        industry: data.industry,
        message: data.message,
      },
      source: 'LeadCatalyst Website',
      tags: ['website-lead'],
    }),
  });
  return response.json();
};
```

## Automation Workflows

After integration, set up these recommended GHL workflows:

### 1. Instant Response
- Trigger: New contact created with tag "website-lead"
- Action: Send automated email/SMS acknowledgment

### 2. Lead Assignment
- Trigger: New contact created
- Action: Assign to team member based on industry field

### 3. Follow-up Sequence
- Trigger: New contact created
- Action: Add to nurture campaign

## Custom Fields Setup

Create these custom fields in GHL to capture all form data:

1. **Industry** (Dropdown)
   - Options: Legal, Insurance, Financial Services, Real Estate, Wealth Management, B2B Services, Other

2. **Lead Source** (Text)
   - Default: "LeadCatalyst Website"

3. **Initial Message** (Long Text)
   - For storing the contact form message

## Testing

1. Submit a test form on the website
2. Verify the contact appears in GHL
3. Check all fields are mapped correctly
4. Test automation workflows

## Support

For GHL-specific questions, refer to:
- [Go High Level Documentation](https://help.gohighlevel.com/)
- [GHL API Reference](https://highlevel.stoplight.io/docs/integrations)

For website-related questions, contact the development team.
