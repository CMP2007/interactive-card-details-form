# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./images/screenshot1.jpg.jpg)
![](./images/screenshot2.jpg.jpg)


### Links

- Solution URL:(https://www.frontendmentor.io/solutions/interactive-card-details-form-solution-KoUJeVFM7N)
- Live Site URL:(https://cmp2007.github.io/interactive-card-details-form/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

The biggest obstacle I found in this design was the CSS styles, particularly with the data pseudo-element 'YY', since, unlike other pseudo-elements, the properties transform: translate in this way, it seemed that everything was down to the The reference element that uses these properties to position itself was being changed, causing the pseudo-element's position to be affected at times. However, I couldn't determine exactly what was causing this conflict. The solution I found was to clear the browser cache while working to force it to load the updated files again. However, the error persisted in some cases without me knowing why."

```css
.borderInputSmall2::after{
            transform: translate( -4.6rem, -.05rem);
            width: 4.7rem;
            height: 3rem;
        }
```

 If anyone knows what could have happened or if I misused their properties or syntax, I would appreciate it if you let me know. Likewise, any correction or suggestion is appreciated.


### Continued development

En este momento quiero seguir realizando retos y prácticas basadas en HTML, CSS y JS para desarrollar una buena base antes de continuar con mi camino de aprendizaje.

## Author

- Frontend Mentor - [@CMP2007](https://www.frontendmentor.io/profile/CMP2007)