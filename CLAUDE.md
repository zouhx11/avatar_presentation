# AI Avatar Workshop - Slidev Design System

## Project Overview
This is a 5-class AI Avatar Workshop presentation built with Slidev. The slides combine educational content with interactive elements and consistent visual design patterns.

## Design Principles

### Layout Patterns

#### 1. Two-Column Title Layout
**Usage:** Most content slides with images
```markdown
---
layout: two-cols-title
columns: is-X
align: c-lm-cm
zoom: 1.0
---

:: title ::
<div class="text-2xl">
# Slide Title
</div>

:: left ::
<div class="ns-c-tight">
Content here
</div>

::right::
Image or media here
```

**Column Ratios:**
- `columns: is-4` - Narrow left (33%), wide right (67%) - Good for minimal text + large images
- `columns: is-6` - Balanced (50/50) - Good for equal text/image weight  
- `columns: is-8` - Wide left (67%), narrow right (33%) - Good for lots of text + small images

#### 2. Center Layout
**Usage:** Title slides, single-focus content
```markdown
---
layout: center
class: text-center
---
```

#### 3. Three-Column Grid
**Usage:** When need text between two images
```markdown
<div class="grid grid-cols-3 gap-8 items-center mt-8">
  <div class="flex justify-center">
    <img src="..." class="..." />
  </div>
  <div class="text-left">
    Content here
  </div>
  <div class="flex justify-center">
    <img src="..." class="..." />
  </div>
</div>
```

### Content Organization

#### Text Compression
Use `ns-c-tight` class for compact text layouts:
```html
<div class="ns-c-tight">
## Section Title
- Bullet points
- More content
</div>
```

#### Text Sizing
- Slide titles: `text-2xl`
- Body text: `text-base` (default)
- Large emphasis: `text-xl` or `text-2xl`
- Small text: `text-sm`

### Image Standards

#### Sizing Conventions
- **Small images:** `max-h-48` (12rem/192px)
- **Medium images:** `max-h-64` (16rem/256px) 
- **Large images:** `max-h-72` (18rem/288px) or `max-h-80` (20rem/320px)

#### Common Image Classes
```html
<!-- Single large image -->
<img src="..." class="rounded max-h-80 w-full object-contain" />

<!-- Multiple images in grid -->
<div class="grid grid-cols-2 gap-3 mt-4">
  <img src="..." class="rounded h-32 w-full object-cover" />
  <img src="..." class="rounded h-32 w-full object-cover" />
</div>

<!-- Stacked images -->
<div class="flex flex-col gap-4">
  <img src="..." class="rounded max-h-48 w-full object-contain" />
  <img src="..." class="rounded max-h-48 w-full object-contain" />
</div>

<!-- Same-width images -->
<div class="flex flex-col items-center gap-4 mt-8 mb-8">
  <img src="..." class="rounded max-h-64 w-128 object-contain" />
  <img src="..." class="rounded max-h-64 w-128 object-contain" />
</div>
```

### Interactive Elements

#### Navigation Buttons
```html
<button @click="$slidev.nav.go(3)" class="bg-blue-500 text-white px-6 py-4 rounded-lg hover:bg-blue-600 transition-colors">
  🧠 Class 1: AI Foundations & Python
</button>
```

#### Progressive Reveals
```html
<v-clicks class="text-2xl leading-loose space-y-8 mt-12">
- First point
- Second point  
- Third point
</v-clicks>
```

#### Embedded Media
```html
<!-- YouTube Video -->
<div class="aspect-video w-full h-96">
  <iframe 
    src="https://www.youtube.com/embed/VIDEO_ID" 
    class="w-full h-full rounded"
    frameborder="0" 
    allowfullscreen>
  </iframe>
</div>
```

## Slide Structure Examples

### Example 1: Robotics Slide
- Layout: `two-cols-title`, `columns: is-4`
- Left: Tight text with `ns-c-tight`
- Right: 2x2 grid of images (`grid-cols-2 gap-3`)
- Images: `h-32 w-full object-cover`

### Example 2: Logic Slide  
- Layout: `two-cols-title`, `columns: is-4`
- Left: Tight text with `ns-c-tight` 
- Right: Single large image (`max-h-80 w-full object-contain`)

### Example 3: Decision Making Slide
- Layout: `center` with custom grid
- Structure: `grid-cols-3 gap-8 items-center`
- Images: `max-h-72 w-full object-contain`
- Text: `text-lg font-semibold whitespace-nowrap` for headers

### Example 4: Pac-Man Slide
- Layout: `center class: text-center`
- Images: Vertically stacked with same width
- Container: `flex flex-col items-center gap-4`
- Images: `max-h-64 w-128 object-contain`

## File Organization

### Images
- Location: `/public/images/`
- Naming: `imageN.png`, `imageN.jpeg`, or descriptive names
- Reference: `/images/filename.ext`

### Content Sections
1. **Class Navigation** - Interactive buttons to jump between classes
2. **Class 1 (30 min)** - AI Foundations, covers slides 1-22
3. **Class 2** - Web Apps & APIs  
4. **Class 3** - Avatar Technology Deep Dive
5. **Class 4** - Integration & Advanced Features
6. **Class 5** - Group Projects & Demo Day

## Common Issues & Solutions

### Hot Reload Problems
- New images in `/public/images/` may require server restart
- Solution: `Ctrl+C` then `npm run dev`

### Image Sizing Issues
- Too large: Add `max-h-X` constraints
- Wrong aspect: Use `object-contain` vs `object-cover`
- Alignment: Use `flex justify-center` or `items-center`

### Layout Problems
- Text too cramped: Use larger column ratio (is-6 → is-8)
- Content too spread: Use `ns-c-tight` class
- Images misaligned: Check grid structure and gap settings

## Development Workflow

1. **Design Pattern**: Establish layout type based on content
2. **Content Structure**: Organize text with appropriate hierarchy  
3. **Image Integration**: Size and position images consistently
4. **Interactive Elements**: Add Slidev features for engagement
5. **Testing**: Check responsiveness and visual balance

## Project Deployment & Access

### 🌐 Live Website
- **URL**: https://zouhx11.github.io/avatar_presentation
- **Password**: `AvatarWorkshop2025`
- **Protection**: Staticrypt client-side encryption (AES-256)

### 🔐 Security Implementation
- **Technology**: Staticrypt for password protection
- **Encryption**: AES-256 client-side encryption
- **Access**: Password required to decrypt and view slides
- **Development**: No password needed for `npm run dev`
- **Production**: Password protection automatically applied during GitHub Actions deployment

### 🚀 Deployment Process
1. **GitHub Actions** automatically builds slides on push to main branch
2. **Slidev** generates static site with `/avatar_presentation/` base path
3. **Staticrypt** encrypts the HTML with the workshop password
4. **GitHub Pages** serves the password-protected site

## Content Updates & Additions

### 📚 Major Content Additions
1. **a16z AI Avatars Blog Integration** (Class 3)
   - AI Avatar Revolution concepts
   - Technology Evolution Timeline  
   - Real-World Use Cases
   - Leading AI Avatar Companies
   - Emerging Trends & Challenges

2. **Neural Network Milestones** (Class 1)
   - ReLU activation function breakthrough
   - Attention mechanism evolution
   - CNN, LSTM, Transformer milestones
   - GPT development history
   - Avatar technology connections

3. **One-Shot Talking Face Generation** (Class 4)
   - Core technology concepts
   - Deep learning implementation
   - Practical code examples
   - Real-world applications
   - Future potential and challenges

### 🎨 Design System Refinements
- **Layout Optimization**: Removed custom layouts, using only neversink theme layouts
- **Content Organization**: Split overly dense slides for better readability
- **Visual Consistency**: Standardized image sizing and text compression patterns
- **Interactive Elements**: Enhanced navigation and progressive reveals

### 🔧 Technical Improvements
- **Theme Integration**: Full migration to slidev-theme-neversink built-in layouts
- **Password Protection**: Implemented Staticrypt for secure access
- **GitHub Actions**: Automated build and deployment pipeline
- **Performance**: Optimized for fast loading and responsive design

## Content Structure Overview

### 📋 Complete Workshop Structure
1. **Class 1: AI Foundations & Python** (30+ slides)
   - AI history and neural network milestones
   - Python programming fundamentals
   - Machine learning concepts
   - Avatar technology foundations

2. **Class 2: Web Apps & APIs** (20+ slides)  
   - Web development basics
   - API integration
   - Frontend/backend architecture
   - Real-time communication

3. **Class 3: Avatar Technology Deep Dive** (25+ slides)
   - Avatar industry landscape (a16z insights)
   - Leading companies and technologies
   - Technical implementation details
   - Market trends and opportunities

4. **Class 4: Integration & Advanced Features** (20+ slides)
   - One-shot talking face generation
   - Advanced animation techniques
   - System integration patterns
   - Performance optimization

5. **Class 5: Demo Day & Projects** (15+ slides)
   - Project presentations
   - Portfolio development
   - Career guidance
   - Next steps and resources

### 🎯 Key Learning Outcomes
- **Technical Skills**: Python, web development, AI/ML concepts
- **Practical Applications**: Building real avatar applications
- **Industry Knowledge**: Understanding AI avatar market and technologies
- **Project Experience**: Complete end-to-end development workflow

## Commands & Workflow

### 🛠️ Development Commands
```bash
# Local development (no password)
npm run dev

# Build for GitHub Pages
npm run build:github

# Apply password protection (local testing)
npm run protect

# Export to PDF
npm run export
```

### 🔄 Deployment Workflow
1. Make changes to slides.md
2. Commit and push to main branch
3. GitHub Actions automatically:
   - Builds slides with correct base path
   - Applies Staticrypt password protection
   - Deploys to GitHub Pages
4. Site accessible at https://zouhx11.github.io/avatar_presentation with password

## Future Enhancements

- More interactive demos and live coding stations
- Advanced Slidev animations and transitions  
- Student progress tracking components
- Real-time collaboration features
- Mobile-responsive optimizations
- Additional industry case studies
- Hands-on coding exercises integration

---

*This documentation captures the complete AI Avatar Workshop Slidev presentation system. The project includes comprehensive content covering AI foundations, practical implementation, and cutting-edge technologies like one-shot talking face generation. The presentation is deployed with password protection for secure access.*

**🔑 Quick Access**: Visit https://zouhx11.github.io/avatar_presentation and enter password `AvatarWorkshop2025`