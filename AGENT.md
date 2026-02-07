# AI Avatar Workshop - Slidev Design System

## Project Overview
This is a 5-class AI Avatar Workshop presentation built with Slidev. The slides combine educational content with interactive elements and consistent visual design patterns.

## 2-Hour Media Deck (slides_2H.md)

### Scope and Goal
- `slides_2H.md` is a standalone 2-hour workshop deck.
- This version is media-first: photos, videos, and external interactive apps.
- Students are not expected to implement code in this deck.

### Teaching Mode
- Focus on visual intuition, exploration, and discussion.
- Prioritize:
  - Local images and local media from `/public/images/`
  - External links to live demos, playgrounds, and app showcases
  - Short guided reflection prompts

### Time Structure (Must Keep 120 Minutes Total)
- Block 1: AI Foundations Through Photos (30 min)
- Block 2: Video Theater (20 min)
- Block 3: Playground Safari (40 min)
- Block 4: Real-World Use Cases and Ethics (15 min)
- Block 5: Mini Showcase and Vote (15 min)
- Each slide in this deck should keep presenter notes with explicit clock ranges.
- If adding/removing slides, rebalance all downstream clock ranges to end at `120:00`.

### Core Content Requirements for slides_2H.md
- Keep the deck interactive and visual.
- Avoid coding-lab instructions and long code walkthroughs.
- Keep external demo links as clickable `<a href="...">` elements.
- Keep Staticrypt compatibility:
  - Use HTML links for external websites
  - Do not use `@click="window.open(...)"` for external links
  - Avoid iframe-heavy dependency for critical lesson flow

### Avatar Training Explainer Subsection
- Include intuitive model-training explanation for talking photo/avatar generation.
- Prefer simple terminology:
  - dataset, model, loss, epoch, inference
- Keep visuals intuitive:
  - high-level pipeline (input -> encode -> fuse -> generate -> output)
  - loss terms (lip-sync, identity, temporal smoothness)
- Use formatted text blocks and progressive reveal where possible.

### Featured Avatar AI Showcase Links
- Include and keep these highlighted in avatar app exploration slides:
  - `https://huggingface.co/spaces/r3gm/wan2-2-fp8da-aoti-preview`
  - `https://huggingface.co/spaces/KlingTeam/LivePortrait`

### Update Checklist for slides_2H.md
1. Verify all local asset paths under `/images/...` exist in `/public/images/`.
2. Verify no external-link `@click="window.open(...)"` usage.
3. Keep presenter-note blocks balanced and chronologically continuous.
4. Keep slide pacing suitable for projector readability (avoid dense tiny text).
5. Preserve media-first learning style (watch, explore, discuss).

## Design Principles

### Layout Patterns

#### 1. Two-Column Title Layout
**Usage:** Most content slides with images
```markdown
---
layout: two-cols-title
columns: is-X
align: c-lt-ct
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

#### 2. Top Title Layout
**Usage:** Slides with prominent title and centered content below
```markdown
---
layout: top-title
align: c
color: light
---

:: title ::
# Slide Title

:: content ::
<div class="flex justify-center mt-8">
Content or media here
</div>
```

#### 3. Center Layout
**Usage:** Title slides, single-focus content
```markdown
---
layout: center
class: text-center
---
```

#### 4. Three-Column Grid
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

### CSS Spacing Issues
- **H2/H3 spacing problems**: Fixed with custom CSS rules for ns-c-tight and ns-c-supertight
- **Raw HTML display**: Remove excessive indentation in Slidev sections
- **Alignment issues**: Use c-lt-ct instead of c-lm-cm for better visual balance

### Repository Link Verification
- **Always verify links**: Check GitHub repositories before adding to slides
- **Use official sources**: Prefer official repositories (e.g., pytorch/examples, streamlit/cookbook)
- **Test functionality**: Ensure examples can be cloned and run successfully

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

### ⚠️ Staticrypt Compatibility Issues
**CRITICAL**: Vue.js `@click="window.open(...)"` buttons don't work with Staticrypt encryption.

**The Problem:**
- Vue.js click handlers get encrypted and become non-functional
- External links using `@click="window.open('URL', '_blank')"` will not respond
- iframes embedding external content also fail to load

**The Solution:**
```html
<!-- ❌ DON'T: Vue.js @click (doesn't work with Staticrypt) -->
<button @click="window.open('https://example.com', '_blank')" class="...">
  Link Text
</button>

<!-- ✅ DO: HTML links (work with Staticrypt) -->
<a href="https://example.com" target="_blank" class="... block text-center">
  Link Text
</a>
```

**Essential Styling Classes:**
- Add `block` class for full-width button appearance
- Add `text-center` class to center text like buttons
- Maintain all original button styling (colors, hover effects, etc.)

**Exceptions (Keep as Vue.js):**
- Slidev navigation: `@click="$slidev.nav.go(X)"` - These work fine
- Internal slide interactions within Slidev framework

**Conversion Pattern:**
1. Replace `<button @click="window.open('URL', '_blank')"` with `<a href="URL" target="_blank"`
2. Replace `</button>` with `</a>`
3. Add `block text-center` to classes for proper button-like appearance

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

4. **PyTorch Deep Learning Integration** (Class 2)
   - Comprehensive PyTorch curriculum from basics to advanced
   - Tensor operations and neural network fundamentals
   - Computer vision applications for avatar technology
   - Structured Google Colab learning tracks (Beginner/Intermediate/Advanced)
   - Bronze/Silver/Gold challenge projects with real datasets
   - Interactive hands-on coding exercises

5. **Development Environment Setup** (Class 2)
   - Complete local development setup guide
   - GitHub account creation and GitHub Desktop installation
   - Anaconda Python environment with PowerShell configuration
   - VS Code editor setup with essential extensions
   - Step-by-step testing and verification procedures

6. **Hands-On Streamlit Projects** (Class 2)
   - 5 verified working project examples with real repositories
   - NYC Uber Pickups dashboard, chatbot interfaces, 30 Days Challenge
   - Machine learning demos and custom app building
   - All repository links tested and verified working

7. **PyTorch Training Lab** (Class 2)
   - Real-time model training experience with MNIST dataset
   - Live observation of weights, biases, and loss progression
   - CPU-friendly training requiring no GPU (2-3 minutes)
   - Complete pipeline from training to Streamlit deployment
   - Official PyTorch examples repository integration

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
- **CSS Spacing Fixes**: Added h2/h3 spacing rules for ns-c-tight and ns-c-supertight containers
- **Alignment Updates**: Changed all c-lm-cm to c-lt-ct for better visual balance

## Content Structure Overview

### 📋 Complete Workshop Structure
1. **Class 1: AI Foundations & Python** (30+ slides)
   - AI history and neural network milestones
   - Python programming fundamentals
   - Machine learning concepts
   - Avatar technology foundations

2. **Class 2: Web Apps & PyTorch Deep Learning** (50+ slides)  
   - Development environment setup (GitHub, Anaconda, VS Code)
   - Web development basics with Streamlit
   - Hands-on Streamlit projects with working repositories
   - API integration and HTTP protocols
   - PyTorch fundamentals and tensor operations
   - Neural network building with hands-on Colab labs
   - Real-time PyTorch training lab with MNIST
   - Computer vision for avatar applications
   - Complete pipeline from training to deployment

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

### 📝 Git Workflow Policy
**IMPORTANT**: When instructed to "commit and push", always commit ALL changes in the project:

```bash
# Always stage ALL changes (not just specific files)
git add .

# Commit with descriptive message
git commit -m "Descriptive commit message with all changes"

# Push to origin
git push origin main
```

**Why this matters:**
- Ensures no files are left uncommitted (especially new images in `/public/images/`)
- Maintains complete project history
- Prevents deployment issues with missing assets
- Keeps repository in sync with all changes

**Common files to watch for:**
- New images in `/public/images/`
- Modified slides.md
- Updated configuration files
- Any other project assets

## Future Enhancements

- More interactive demos and live coding stations
- Advanced Slidev animations and transitions  
- Student progress tracking components
- Real-time collaboration features
- Mobile-responsive optimizations
- Additional industry case studies
- Hands-on coding exercises integration

## 🔧 Interactive ML Components TODO

### Problem: Iframe and Script Tag Limitations
- **Issue**: Direct iframe embeds and script tags don't work properly in Slidev Vue.js environment
- **Root Cause**: Vue.js template compilation restrictions and Staticrypt compatibility issues
- **Current State**: Basic iframe implementations attempted but not functional

### Solution: Vue Component Wrapper Approach
**TODO: Create custom Vue components for interactive ML demos**

1. **Create Vue Component Files** (in `/components/` directory):
   ```
   /components/TensorFlowPlayground.vue
   /components/ML5ImageClassifier.vue  
   /components/ObservableNotebook.vue
   /components/PlotlyVisualization.vue
   ```

2. **Component Structure Pattern**:
   ```vue
   <template>
     <div class="interactive-ml-component">
       <!-- Grid layout for multiple demos -->
       <div class="grid grid-cols-2 gap-4">
         <iframe :src="demoUrl1" class="w-full h-96" />
         <iframe :src="demoUrl2" class="w-full h-96" />
       </div>
     </div>
   </template>
   
   <script setup>
   const demoUrl1 = 'https://...'
   const demoUrl2 = 'https://...'
   </script>
   ```

3. **Grid-Based Multi-Demo Layout**:
   - 2x2 grid of interactive ML demos per slide
   - Each demo in its own iframe within Vue component
   - Responsive design with consistent sizing
   - Better integration with Slidev's Vue ecosystem

4. **Implementation Steps**:
   - [ ] Create individual Vue component files
   - [ ] Test iframe embedding within Vue components
   - [ ] Implement grid layouts for multiple demos per slide
   - [ ] Update slides.md to use `<ComponentName />` syntax
   - [ ] Verify Staticrypt compatibility with Vue components
   - [ ] Add proper error handling and loading states

5. **Benefits of Vue Component Approach**:
   - Proper integration with Slidev's Vue.js framework
   - Better control over iframe sizing and responsiveness  
   - Ability to add custom styling and interactions
   - Grid layouts for showcasing multiple demos simultaneously
   - Consistent with existing Slidev component patterns
   - Compatible with Staticrypt encryption

### Target Demo URLs for Grid Implementation:
- **TensorFlow.js**: `https://playground.tensorflow.org/`
- **ML5.js**: `https://editor.p5js.org/ml5/embed/ImageClassification`
- **Observable**: `https://observablehq.com/embed/@observablehq/machine-learning`
- **Plotly**: `https://plotly.com/~PlotlyBot/10.embed`
- **Additional**: Teachable Machine, TensorFlow.js examples, etc.

## 📚 Verified Working Repositories

### Development Environment & Tutorials
- **GitHub Setup**: Official GitHub and GitHub Desktop downloads
- **Anaconda**: `https://www.anaconda.com/download`
- **VS Code**: `https://code.visualstudio.com`

### Streamlit Projects (All Verified Working)
- **NYC Uber Pickups**: `https://github.com/streamlit/demo-uber-nyc-pickups`
- **Streamlit Cookbook**: `https://github.com/streamlit/cookbook`
- **30 Days Challenge**: `https://github.com/streamlit/30days`
- **Official Gallery**: `https://streamlit.io/gallery`

### PyTorch Training
- **Official Examples**: `https://github.com/pytorch/examples/tree/main/mnist`
- **MNIST Training**: CPU-friendly, 2-3 minute training time
- **Expected Results**: 98%+ accuracy, 500KB model size

### API Documentation
- **Streamlit Chat API**: `https://docs.streamlit.io/library/api-reference/chat`
- **PyTorch Tutorials**: `https://docs.pytorch.org/tutorials/`

## 🎯 Recent Major Updates (Latest Session)

### ✅ Completed Enhancements
1. **Development Environment Setup** - 6 comprehensive slides covering GitHub, Anaconda, VS Code
2. **Hands-On Streamlit Projects** - 7 slides with 5 verified working repositories
3. **PyTorch Training Lab** - 6 slides with real-time MNIST training experience
4. **CSS Spacing Fixes** - Resolved h2/h3 spacing issues in tight containers
5. **Repository Link Verification** - Replaced all broken links with working alternatives
6. **Alignment Standardization** - Updated all c-lm-cm to c-lt-ct for consistency

### 📊 Current Slide Count
- **Total Slides**: ~120+ slides
- **Class 1**: 30+ slides (AI Foundations & Python)
- **Class 2**: 50+ slides (Development Setup, Streamlit, PyTorch)
- **Class 3**: 25+ slides (Avatar Technology)
- **Class 4**: 20+ slides (Integration & Advanced)
- **Class 5**: 15+ slides (Demo Day & Projects)

---

*This documentation captures the complete AI Avatar Workshop Slidev presentation system. The project includes comprehensive content covering AI foundations, practical implementation, and cutting-edge technologies like one-shot talking face generation. The presentation is deployed with password protection for secure access.*

**🔑 Quick Access**: Visit https://zouhx11.github.io/avatar_presentation and enter password `AvatarWorkshop2025`
