---
title: "Creating a Link with a Tilting Icon in TailwindCSS"
tags: ["TailwindCSS", "Tutorial"]
slug: "creating-a-link-with-a-tilting-icon-in-tailwindcss"
---

I recently checked out the [Railway](https://railway.app/) app platform and loved the little touch of the sidebar icons gently tilting when the user hovers over them. It's a delightful wink that adds some fun to the platform's design.

I wanted to replicate this in my latest project which uses Tailwind and share how I did it. To begin, let's look at the end product:

<section class=\"w-full flex flex-row justify-center items-center\">
    <div tabindex=\"0\" class=\"px-2 py-0.5 text-gray-700 rounded-full group cursor-pointer flex flex-row items-center gap-2 transition hover:text-gray-900 hover:bg-yellow-100\">
        <svg class=\"h-6 w-6 text-gray-600 inline-block  transition group-hover:rotate-0 group-hover:text-gray-900 motion-safe:group-hover:rotate-12\" xmlns=\"http://www.w3.org/2000/svg\"  fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">
  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z\" />
</svg>
        <span>Hover me!</span>
    </div>
</section>

If you want to pull this into your own site or play around with it and make it your own, the code can be found in this [Tailwind Playground](https://play.tailwindcss.com/kq1Z4rUpPa). If you want to stick around, let's unpack this code and see what we can learn about Tailwind.

## Unpacking the code

Here is the code I'm using to render the markup:

```html
<div 
  tabindex=\"0\" 
  class=\"px-2 py-0.5 text-gray-700 rounded-full group cursor-pointer
         flex flex-row items-center gap-2 transition
         hover:text-gray-900 hover:bg-yellow-100\"
>
  <svg 
    class=\"h-6 w-6 text-gray-600 inline-block transition
           group-hover:rotate-0 group-hover:text-gray-900
           motion-safe:group-hover:rotate-12\" 
    xmlns=\"http://www.w3.org/2000/svg\"  
    fill=\"none\" 
    viewBox=\"0 0 24 24\" 
    stroke=\"currentColor\"
  >
    <path
      stroke-linecap=\"round\" 
      stroke-linejoin=\"round\" 
      stroke-width=\"2\" 
      d=\"M4.318 6.318a4.5 4.5 0 000
         6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12
         7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z\" 
    />
  </svg>
  <span>Hover me!</span>
</div>
```

### `tabindex=\"0\"`

This first stop in the code tour does the work of making the `div` focusable by pressing the `tab` key. If the \"link\" is actually an anchor tag or button, this isn't strictly necessary, it's done here to demonstrate the tab focusability. When you build a website make sure to check if the actions a user can take on the site are accessible using the `tab` key. It's an easy way to make your site better for many kinds of users.

### The `group` class

In Tailwind the `group` class is used to identify a group of elements whose hover or focus states should be tied together. Here, I added the `group` class to the parent element so that I can use the `group-hover:` prefix on the icon. Using the `group` and `group-hover:` classes together, the icon will tilt no matter which part of the parent element is hovered, without it and using just the `hover:` prefix, the icon will tilt only if the icon itself is hovered.

<section class=\"flex flex-row justify-center items-center gap-4\">
    <div tabindex=\"0\" class=\"px-2 py-0.5 text-gray-700 rounded-full group cursor-pointer flex flex-row items-center gap-2 transition hover:text-gray-900 hover:bg-yellow-100\">
        <svg class=\"h-6 w-6 text-gray-600 inline-block  transition group-hover:rotate-0 group-hover:text-gray-900 motion-safe:group-hover:rotate-12\" xmlns=\"http://www.w3.org/2000/svg\"  fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">
  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z\" />
</svg>
        <span>Using <code>group-hover:</code></span>
    </div>
    <div tabindex=\"0\" class=\"px-2 py-0.5 text-gray-700 rounded-full cursor-pointer flex flex-row items-center gap-2 transition hover:text-gray-900 hover:bg-yellow-100\">
        <svg class=\"h-6 w-6 text-gray-600 inline-block  transition hover:rotate-0 hover:text-gray-900 motion-safe:hover:rotate-12\" xmlns=\"http://www.w3.org/2000/svg\"  fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">
  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z\" />
</svg>
        <span>Using <code>hover:</code></span>
    </div>
</section>

### Using `motion-safe:` as a matter of craft

No one should be made to feel bad by looking at your website. That is why for every animation, you should allow users to override that movement by respecting their browser's `prefers-reduced-motion` with the `motion-safe:` prefix. The classes that control the tilting animation, `group-hover:rotate-0 motion-safe:group-hover:rotate-12`, tells the browser to not rotate the icon by default and only rotate it on group hover if `prefers-reduced-motion` is false.
