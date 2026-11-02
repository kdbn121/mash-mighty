---
name: animated-premium-website
description: Build a premium, smoothly animated, production-ready website from one prompt with a coding agent, a motion library and ready-made component registries. Use when the user wants an agency-level site fast.
---

# Animated premium website

Goal: agency-quality site, smooth motion, real copy, fast and accessible, from one prompt plus a short review loop. "One line" gets you started; the review loop is what makes it look expensive.

## Stack (default, swap if the user has one)

- Next.js (App Router) + TypeScript + Tailwind CSS
- shadcn/ui for base components
- Motion (formerly Framer Motion) for animation, imported from `motion/react`
- Optional component registries for ready-made animated blocks (for example 21st.dev, the shadcn registry). Check each component's licence.

## Steps

1. **Brief from the prompt.** Business, audience, goal (call, buy, book, sign up), tone, must-have pages. Fill gaps with sensible defaults and list them.
2. **Direction.** Run the `design-director` skill: style, type pair, colour tokens, motion language.
3. **Set up** (run in the project folder with a coding agent such as Claude Code):
   ```
   npx create-next-app@latest site --ts --tailwind --app
   cd site
   npx shadcn@latest init
   npm install motion
   ```
4. **Components.** For each section, SELECT: registry block that fits, or build it. Registry blocks usually install with a single `npx shadcn@latest add ...` command copied from the component page.
5. **Sections.** Navbar, hero, social proof, features or services, how it works, showcase, testimonials, pricing or offer, FAQ, final call to action, footer.
6. **Motion recipes.**
   - Hero: staggered fade and rise, 0.5 s, ease out, children 0.08 s apart.
   - Scroll reveal: `whileInView` with `viewport={{ once: true, amount: 0.3 }}`.
   - Hover: lift 2 to 4 px plus shadow, 150 to 200 ms.
   - Numbers: count up once on view. Logos: slow marquee.
   - Animate only `transform` and `opacity`. Wrap the app in `<MotionConfig reducedMotion="user">`.
7. **Content.** Real copy (no lorem ipsum), optimised images with `next/image`, alt text, meta title, description, Open Graph image, favicon.
8. **QA.** Check 375, 768 and 1440 px. Lighthouse 90+ on performance and accessibility. No layout shift, keyboard focus visible, contrast AA.
9. **Deploy.** Push to GitHub, import into Vercel (or similar), set env vars, add the domain.

## Master prompt (give the user this to paste)

```
Build a production-ready Next.js + Tailwind + shadcn/ui + Motion website for [BUSINESS], audience [WHO], goal [ACTION].
Style: [DIRECTION]. Sections: hero, proof, features, how it works, testimonials, pricing, FAQ, CTA, footer.
Use smooth scroll reveals, staggered hero, hover states, reduced-motion support. Real copy, responsive, Lighthouse 90+.
Then review your own result at 375/768/1440 px and fix anything that looks off.
```

## SELECT check

If an installed design skill, component registry connection or website builder tool does a section better, use it. Keep the QA step as the gate.

DONE: looks agency-level at all three widths, motion smooth and reduced-motion safe, Lighthouse 90+, deployed.

Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
