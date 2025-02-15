# Next.js router.push() Not Redirecting Bug

This repository demonstrates a common issue in Next.js applications where `router.push()` unexpectedly fails to redirect the user to a new page.  The issue stems from using `router.push()` outside of an event handler within a component, such as `useEffect` or similar.

## Bug Description

The provided `bug.js` file shows an example of `router.push()` within a component that does not properly redirect the user to `/another-page` when the button is clicked. This is because it does not re-render the page to reflect the navigation.