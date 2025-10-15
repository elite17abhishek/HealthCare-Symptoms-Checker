{
  "brand": {
    "name": "SymptomSense",
    "attributes": ["trustworthy", "calming", "professional", "educational", "transparent"],
    "tone_of_voice": "Compassionate, plain-language, non-alarming, clinically careful"
  },
  "design_personality": {
    "style_fusion": "Swiss grid + Minimalist functional UI with gentle glass surfaces for notices, subtle bento sections, and soft oceanic gradients (max 20% viewport)",
    "references": [
      {"source": "Dribbble symptom checker search", "url": "https://dribbble.com/tags/symptom-checker"},
      {"source": "Behance symptom checker projects", "url": "https://www.behance.net/search/projects/symptom%20checker?locale=en_US"},
      {"source": "Healthcare UI patterns (Koru UX)", "url": "https://www.koruux.com/50-examples-of-healthcare-UI/"}
    ]
  },
  "typography": {
    "fonts": {
      "heading": {"family": "Space Grotesk", "weights": [600,700]},
      "body": {"family": "Figtree", "weights": [400,500,600]},
      "code": {"family": "Source Code Pro", "weights": [400,600]}
    },
    "import_css": "@import url('https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600&family=Space+Grotesk:wght@600;700&family=Source+Code+Pro:wght@400;600&display=swap');",
    "usage": {
      "h1": "text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold font-[var(--font-heading)]",
      "h2": "text-base md:text-lg font-semibold text-foreground/90",
      "body": "text-sm md:text-base leading-7 text-foreground/90",
      "small": "text-xs leading-5 text-foreground/70"
    },
    "css_vars": {
      "--font-heading": "'Space Grotesk', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans'",
      "--font-body": "'Figtree', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans'"
    }
  },
  "color_system": {
    "palette": {
      "primary": {"50": "#edf8ff", "100": "#d6f0ff", "200": "#b8e4ff", "300": "#89d3ff", "400": "#5cbef6", "500": "#34a6e5", "600": "#1f8ecb", "700": "#1b76a6", "800": "#185f85", "900": "#154f6f"},
      "teal": {"50": "#ecfbf7", "100": "#d1f5ec", "200": "#a9ebdb", "300": "#78dec6", "400": "#49cdb0", "500": "#2bb699", "600": "#1f947f", "700": "#1c7869", "800": "#185f55", "900": "#144e47"},
      "slate": {"50": "#f7f9fb", "100": "#eef2f6", "200": "#e3e8ef", "300": "#cdd6e1", "400": "#a9b6c6", "500": "#7e8ea3", "600": "#5d6b80", "700": "#465164", "800": "#334051", "900": "#263242"},
      "success": {"50": "#effcf4", "500": "#2ea664", "700": "#237e4c"},
      "warning": {"50": "#fff8e6", "500": "#d69e2e", "700": "#a9791b"},
      "danger": {"50": "#fff1f1", "500": "#d64545", "700": "#a33434"},
      "info": {"50": "#edf7ff", "500": "#2680c2", "700": "#1d5f91"}
    },
    "semantic": {
      "background": "slate.50",
      "surface": "white",
      "text": "slate.900",
      "subtle_text": "slate.600",
      "border": "#e3e8ef",
      "ring": "#1f8ecb",
      "states": {
        "safe": {"bg": "#ecfbf7", "fg": "#1f947f", "border": "#a9ebdb"},
        "caution": {"bg": "#fff8e6", "fg": "#a9791b", "border": "#f3e0b7"},
        "urgent": {"bg": "#fff1f1", "fg": "#a33434", "border": "#f6c5c5"},
        "informational": {"bg": "#edf7ff", "fg": "#1b76a6", "border": "#b8e4ff"}
      }
    },
    "css_vars": {
      "light": {
        "--background": "0 0% 100%",
        "--foreground": "220 27% 18%",
        "--card": "0 0% 100%",
        "--card-foreground": "220 27% 18%",
        "--popover": "0 0% 100%",
        "--popover-foreground": "220 27% 18%",
        "--primary": "201 77% 54%",
        "--primary-foreground": "0 0% 100%",
        "--secondary": "188 56% 38%",
        "--secondary-foreground": "0 0% 100%",
        "--muted": "215 20% 94%",
        "--muted-foreground": "220 13% 45%",
        "--accent": "188 56% 92%",
        "--accent-foreground": "220 27% 18%",
        "--destructive": "0 63% 45%",
        "--destructive-foreground": "0 0% 100%",
        "--border": "220 20% 90%",
        "--input": "220 20% 90%",
        "--ring": "201 77% 54%",
        "--radius": "0.75rem"
      },
      "dark": {
        "--background": "220 15% 12%",
        "--foreground": "210 20% 96%",
        "--card": "220 15% 14%",
        "--card-foreground": "210 20% 96%",
        "--popover": "220 15% 12%",
        "--popover-foreground": "210 20% 96%",
        "--primary": "201 77% 54%",
        "--primary-foreground": "210 20% 96%",
        "--secondary": "172 45% 40%",
        "--secondary-foreground": "210 20% 96%",
        "--muted": "220 15% 18%",
        "--muted-foreground": "220 10% 68%",
        "--accent": "188 56% 20%",
        "--accent-foreground": "210 20% 96%",
        "--destructive": "0 72% 38%",
        "--destructive-foreground": "210 20% 96%",
        "--border": "220 15% 22%",
        "--input": "220 15% 22%",
        "--ring": "201 77% 54%"
      }
    }
  },
  "gradients_and_textures": {
    "rules": {
      "never": [
        "Dark/saturated purple-pink combos",
        "Cover >20% viewport",
        "Apply to text-heavy content",
        "Use on small UI elements <100px",
        "Stack multiple gradient layers"
      ],
      "enforcement": "If gradient exceeds 20% or harms readability, use solid colors"
    },
    "allowed_use": ["hero background", "section backgrounds (not content blocks)", "decorative overlays", "subtle CTA backgrounds"],
    "examples": [
      {
        "name": "Calm Ocean",
        "css": "bg-[linear-gradient(135deg,_#edf8ff,_#ecfbf7_60%,_#eef2f6)]"
      },
      {"name": "Teal Mist", "css": "bg-[linear-gradient(160deg,_#ecfbf7,_#d6f0ff)]"}
    ],
    "noise_overlay_css": "after:content-[''] after:fixed after:inset-0 after:pointer-events-none after:bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'160\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence baseFrequency=\'0.65\' numOctaves=\'2\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.02\'/%3E%3C/svg%3E')]"
  },
  "layout": {
    "container": "container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
    "grid": {
      "mobile_first": "grid grid-cols-4 gap-4",
      "tablet": "md:grid-cols-8",
      "desktop": "lg:grid-cols-12"
    },
    "structure": [
      "Top App Bar: logo + app name + emergency link",
      "Disclaimer Banner: sticky, below header",
      "Main: split layout on md+ (form left, results right)",
      "Bento: quick tips, education, and history cards"
    ],
    "page_sections": {
      "header": "sticky top-0 z-40 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60",
      "disclaimer": "sticky top-[3.5rem] z-30",
      "main": "py-6 md:py-10",
      "footer": "border-t py-8 text-sm text-foreground/70"
    }
  },
  "components": {
    "SymptomInputForm": {
      "purpose": "Collect symptoms, onset, duration, and severity safely",
      "uses": ["./components/ui/form", "./components/ui/input", "./components/ui/textarea", "./components/ui/select", "./components/ui/radio-group", "./components/ui/slider", "./components/ui/calendar", "./components/ui/button", "./components/ui/tooltip"],
      "micro_interactions": [
        "Tooltip hints on inputs",
        "Slider thumb scale on drag",
        "Subtle input focus ring --ring"
      ],
      "jsx_skeleton": "import { Form, FormField, FormItem, FormLabel, FormMessage } from './components/ui/form';\nimport { Input } from './components/ui/input';\nimport { Textarea } from './components/ui/textarea';\nimport { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from './components/ui/select';\nimport { RadioGroup, RadioGroupItem } from './components/ui/radio-group';\nimport { Slider } from './components/ui/slider';\nimport { Calendar } from './components/ui/calendar';\nimport { Button } from './components/ui/button';\n\nexport function SymptomForm({ onSubmit }) {\n  return (\n    <Form>\n      <form className=\"space-y-5\" onSubmit={onSubmit} data-testid=\"symptom-form\">\n        <FormField name=\"primarySymptom\" render={({ field }) => (\n          <FormItem>\n            <FormLabel>Primary symptom</FormLabel>\n            <Input {...field} placeholder=\"e.g., headache\" data-testid=\"primary-symptom-input\" />\n            <FormMessage />\n          </FormItem>\n        )} />\n        <FormField name=\"duration\" render={({ field }) => (\n          <FormItem>\n            <FormLabel>Duration</FormLabel>\n            <Select onValueChange={field.onChange} value={field.value}>\n              <SelectTrigger data-testid=\"duration-select\"><SelectValue placeholder=\"Select duration\" /></SelectTrigger>\n              <SelectContent>\n                <SelectItem value=\"hours\">Hours</SelectItem>\n                <SelectItem value=\"days\">Days</SelectItem>\n                <SelectItem value=\"weeks\">Weeks</SelectItem>\n              </SelectContent>\n            </Select>\n            <FormMessage />\n          </FormItem>\n        )} />\n        <FormField name=\"severity\" render={({ field }) => (\n          <FormItem>\n            <FormLabel>Severity</FormLabel>\n            <div className=\"pt-2\">\n              <Slider value={[field.value || 2]} min={0} max={10} step={1} onValueChange={(v)=>field.onChange(v[0])} data-testid=\"severity-slider\" />\n              <div className=\"flex justify-between text-xs text-foreground/70 mt-1\">\n                <span>Mild</span><span>Moderate</span><span>Severe</span>\n              </div>\n            </div>\n            <FormMessage />\n          </FormItem>\n        )} />\n        <FormField name=\"notes\" render={({ field }) => (\n          <FormItem>\n            <FormLabel>Other symptoms / notes</FormLabel>\n            <Textarea {...field} rows={4} data-testid=\"notes-textarea\" />\n            <FormMessage />\n          </FormItem>\n        )} />\n        <div className=\"flex gap-3\">\n          <Button type=\"submit\" data-testid=\"symptom-form-submit-button\">Check symptoms</Button>\n          <Button variant=\"ghost\" type=\"reset\" data-testid=\"symptom-form-reset-button\">Clear</Button>\n        </div>\n      </form>\n    </Form>\n  );\n}",
      "states": ["empty", "validating", "error", "submitted"],
      "validation": "Client-side required fields; server-side error banner via <Alert>"
    },
    "DisclaimerBanner": {
      "purpose": "Prominently communicate safety, AI limitations, and emergency guidance",
      "uses": ["./components/ui/alert", "./components/ui/tooltip"],
      "variant": "informational with blue accent, non-alarming",
      "jsx_skeleton": "import { Alert, AlertTitle, AlertDescription } from './components/ui/alert';\nexport const SafetyBanner = () => (\n  <Alert className=\"rounded-xl border-info-200 bg-info-50 text-info-700\" data-testid=\"safety-disclaimer-banner\">\n    <AlertTitle className=\"font-semibold\">Educational information only</AlertTitle>\n    <AlertDescription>Results are AI-assisted and not a diagnosis. If symptoms are severe or you suspect an emergency, call local emergency services immediately.</AlertDescription>\n  </Alert>\n);"
    },
    "ResultCard": {
      "purpose": "Display probable conditions with confidence, severity signals, and guidance",
      "uses": ["./components/ui/card", "./components/ui/badge", "./components/ui/progress", "./components/ui/accordion", "./components/ui/button", "./components/ui/tooltip"],
      "micro_interactions": ["hover lift (shadow-sm -> shadow-md)", "accordion smooth expand"],
      "jsx_skeleton": "import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './components/ui/card';\nimport { Badge } from './components/ui/badge';\nimport { Progress } from './components/ui/progress';\nimport { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './components/ui/accordion';\n\nexport function ResultCard({ name, probability, risk }) {\n  const riskStyle = risk === 'low' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : risk === 'medium' ? 'bg-info-50 text-info-700 border-info-200' : 'bg-warning-50 text-warning-700 border-warning-200';\n  return (\n    <Card className=\"rounded-xl\" data-testid=\"result-card\">\n      <CardHeader className=\"flex items-center justify-between gap-3\">\n        <CardTitle className=\"text-base\">{name}</CardTitle>\n        <Badge className=\"uppercase\" data-testid=\"result-card-risk\">{risk}</Badge>\n      </CardHeader>\n      <CardContent className=\"space-y-3\">\n        <div className=\"flex items-center justify-between text-xs text-foreground/70\"><span>Likelihood</span><span>{probability}%</span></div>\n        <Progress value={probability} data-testid=\"result-card-progress\" />\n        <Accordion type=\"single\" collapsible>\n          <AccordionItem value=\"details\">\n            <AccordionTrigger>Why this result?</AccordionTrigger>\n            <AccordionContent className=\"text-sm text-foreground/80\">\n              This suggestion is based on your symptoms and medical references. Always consult a clinician.\n            </AccordionContent>\n          </AccordionItem>\n        </Accordion>\n      </CardContent>\n    </Card>\n  );\n}"
    },
    "HistoryAndQueries": {
      "purpose": "View previous checks, filter by date, open details",
      "uses": ["./components/ui/tabs", "./components/ui/table", "./components/ui/accordion", "./components/ui/calendar", "./components/ui/skeleton"],
      "jsx_notes": "Use Tabs for categories (All, Saved, Recent). Table rows clickable -> Accordion detail below row. Calendar popover for date range filter.",
      "data_testids": ["history-table", "history-filter-button", "history-date-range"]
    },
    "EmergencyDialog": {
      "purpose": "Escalation pathway for concerning inputs",
      "uses": ["./components/ui/alert-dialog", "./components/ui/button"],
      "trigger_conditions": ["very high severity (>=9)", "presence of red-flag symptoms"],
      "data_testids": ["emergency-dialog", "emergency-call-button"]
    },
    "Toasts": {
      "purpose": "Non-blocking confirmations and info",
      "uses": ["./components/ui/sonner", "./components/ui/toaster"],
      "usage": "Place <Toaster /> at root; use toast() for saves/errors; keep messages short and non-alarming"
    }
  },
  "component_path": {
    "form": "/app/frontend/src/components/ui/form.jsx",
    "input": "/app/frontend/src/components/ui/input.jsx",
    "textarea": "/app/frontend/src/components/ui/textarea.jsx",
    "select": "/app/frontend/src/components/ui/select.jsx",
    "radio_group": "/app/frontend/src/components/ui/radio-group.jsx",
    "slider": "/app/frontend/src/components/ui/slider.jsx",
    "calendar": "/app/frontend/src/components/ui/calendar.jsx",
    "button": "/app/frontend/src/components/ui/button.jsx",
    "tooltip": "/app/frontend/src/components/ui/tooltip.jsx",
    "alert": "/app/frontend/src/components/ui/alert.jsx",
    "alert_dialog": "/app/frontend/src/components/ui/alert-dialog.jsx",
    "card": "/app/frontend/src/components/ui/card.jsx",
    "badge": "/app/frontend/src/components/ui/badge.jsx",
    "progress": "/app/frontend/src/components/ui/progress.jsx",
    "accordion": "/app/frontend/src/components/ui/accordion.jsx",
    "tabs": "/app/frontend/src/components/ui/tabs.jsx",
    "table": "/app/frontend/src/components/ui/table.jsx",
    "skeleton": "/app/frontend/src/components/ui/skeleton.jsx",
    "sonner": "/app/frontend/src/components/ui/sonner.jsx",
    "toaster": "/app/frontend/src/components/ui/toaster.jsx"
  },
  "buttons": {
    "shape": "Professional / Corporate: 8px radius, solid fills, minimal shadow",
    "tokens": {
      "--btn-radius": "0.5rem",
      "--btn-shadow": "0 1px 2px rgba(0,0,0,0.04)",
      "--btn-motion": "transition-colors duration-200 ease-out"
    },
    "variants": {
      "primary": "bg-primary text-primary-foreground hover:bg-[#1f8ecb] focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]",
      "secondary": "bg-teal-600 text-white hover:bg-teal-700",
      "ghost": "bg-transparent hover:bg-slate-100 text-foreground"
    },
    "sizes": {"sm": "h-8 px-3 text-sm", "md": "h-10 px-4", "lg": "h-12 px-6 text-base"}
  },
  "motion": {
    "library": "framer-motion",
    "install": "npm i framer-motion",
    "principles": ["No transition: all; only transition color/opacity/box-shadow", "Short 150–250ms, ease-out on hover", "Respect prefers-reduced-motion"],
    "examples": {
      "card_hover": "whileHover={{ y: -2 }} transition={{ type: 'tween', duration: 0.2 }}",
      "fade_in": "initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}"
    }
  },
  "data_visualization": {
    "lib": "recharts",
    "install": "npm i recharts",
    "usage": "Use <BarChart> for probabilities; fallback to <Progress> when JS disabled",
    "sample_jsx": "import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';\nexport function ProbabilityBars({ data }) {\n  return (\n    <div className=\"h-56\" data-testid=\"probability-bars\">\n      <ResponsiveContainer width=\"100%\" height=\"100%\">\n        <BarChart data={data} layout=\"vertical\">\n          <XAxis type=\"number\" hide />\n          <YAxis type=\"category\" dataKey=\"name\" width={120} />\n          <Tooltip />\n          <Bar dataKey=\"value\" fill=\"#34a6e5\" radius={[0,6,6,0]} />\n        </BarChart>\n      </ResponsiveContainer>\n    </div>\n  );\n}"
  },
  "accessibility": {
    "wcag": "AA contrast minimum; primary text on white >= 7:1 where feasible",
    "focus": "Always visible focus ring using --ring; no outline: none",
    "keyboard": "All forms tabbable; sliders operable with arrows; dialogs trap focus",
    "content": "Use non-alarming language; provide aria-live for result updates",
    "reduced_motion": "Use prefers-reduced-motion media query to disable transforms",
    "disclaimer": "Safety banner announced via role=alert and is sticky below header"
  },
  "testing_attributes": {
    "rule": "All interactive and key informational elements must include a data-testid attribute using kebab-case that defines the element's role",
    "examples": [
      "data-testid=\"symptom-form\"",
      "data-testid=\"severity-slider\"",
      "data-testid=\"safety-disclaimer-banner\"",
      "data-testid=\"result-card-progress\"",
      "data-testid=\"history-table\"",
      "data-testid=\"emergency-dialog\""
    ]
  },
  "image_urls": [
    {
      "url": "https://images.unsplash.com/photo-1651084077618-e39a16e29546?crop=entropy&cs=srgb&fm=jpg&q=85",
      "description": "Calm abstract teal-blue horizontal blend",
      "category": "hero-background",
      "usage": "Hero section background with 30% overlay of white to ensure readability"
    },
    {
      "url": "https://images.unsplash.com/photo-1651084076285-bc885cda4b41?crop=entropy&cs=srgb&fm=jpg&q=85",
      "description": "Teal oceanic texture",
      "category": "section-accent",
      "usage": "Thin decorative bands between sections; keep under 15% viewport"
    },
    {
      "url": "https://images.pexels.com/photos/7130558/pexels-photo-7130558.jpeg",
      "description": "Soft medical abstract with blues",
      "category": "empty-state",
      "usage": "Use within empty state card with 8px rounded mask"
    }
  ],
  "icons": {
    "library": "lucide-react",
    "install": "npm i lucide-react",
    "usage_example": "import { ShieldAlert, Activity, Stethoscope } from 'lucide-react'; // do not use emoji icons"
  },
  "css_and_tokens": {
    "index_css_changes": "Add Google Fonts import at top of src/index.css. Update :root tokens to the color_system.css_vars.light; keep .dark tokens in sync.",
    "utility_examples": {
      "elevated_card": "rounded-xl border bg-white shadow-sm hover:shadow-md transition-shadow duration-200",
      "focus_ring": "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2",
      "section": "py-8 sm:py-12",
      "sticky_banner": "sticky top-[3.5rem] z-30"
    }
  },
  "layouts": {
    "home": {
      "hero": "grid grid-cols-4 md:grid-cols-12 gap-6 items-center bg-white",
      "form_panel": "col-span-4 md:col-span-5 lg:col-span-5",
      "results_panel": "col-span-4 md:col-span-7 lg:col-span-7"
    },
    "history": {
      "grid": "grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4",
      "table_wrap": "col-span-4 lg:col-span-8",
      "filters": "col-span-4 lg:col-span-4"
    }
  },
  "content_patterns": {
    "disclaimer_text": "Educational information only. Not a medical diagnosis or treatment. If you have severe symptoms or an emergency, contact emergency services immediately.",
    "empty_state": "No checks yet. Start by entering your primary symptom.",
    "cta_labels": {"primary": "Check symptoms", "secondary": "Save query"}
  },
  "libraries": {
    "required": [
      {"name": "framer-motion", "install": "npm i framer-motion", "why": "entrance and hover animations respecting reduced motion"},
      {"name": "recharts", "install": "npm i recharts", "why": "simple probabilities charting"},
      {"name": "lucide-react", "install": "npm i lucide-react", "why": "iconography without emojis"}
    ],
    "optional": [
      {"name": "lottie-react", "install": "npm i lottie-react", "why": "gentle educational animations with fallback static images"}
    ]
  },
  "instructions_to_main_agent": [
    "1) Add the Google Fonts import to src/index.css and set body { font-family: var(--font-body) } and headings via utility classes.",
    "2) Replace :root tokens in src/index.css with color_system.css_vars.light and ensure .dark matches color_system.css_vars.dark.",
    "3) Build Header with logo, app name, and an 'Emergency' link styled as subtle button (data-testid=header-emergency-link).",
    "4) Render <SafetyBanner /> below Header; keep sticky on scroll.",
    "5) Implement SymptomForm (jsx_skeleton) in pages/Home.jsx left column and Results list on the right using ResultCard.",
    "6) Add Toast Toaster at app root: import { Toaster } from './components/ui/toaster' and place <Toaster /> once.",
    "7) Implement History page using Tabs + Table + Calendar filter. Ensure all interactive elements include data-testid attributes.",
    "8) Use Recharts ProbabilityBars for aggregated results when multiple conditions are returned.",
    "9) Respect gradient rules: only for hero/section backgrounds, keep under 20% viewport coverage.",
    "10) Do not center align the app container globally. Ensure focus rings are visible and all text contrast meets AA.",
    "11) Avoid purple/pink gradients entirely; prefer ocean blue/teal palette.",
    "12) Use only shadcn components from /app/frontend/src/components/ui for dropdowns, calendars, dialogs, etc."
  ]
}


<General UI UX Design Guidelines>  
    - You must **not** apply universal transition. Eg: `transition: all`. This results in breaking transforms. Always add transitions for specific interactive elements like button, input excluding transforms
    - You must **not** center align the app container, ie do not add `.App { text-align: center; }` in the css file. This disrupts the human natural reading flow of text
   - NEVER: use AI assistant Emoji characters like`🤖🧠💭💡🔮🎯📚🎭🎬🎪🎉🎊🎁🎀🎂🍰🎈🎨🎰💰💵💳🏦💎🪙💸🤑📊📈📉💹🔢🏆🥇 etc for icons. Always use **FontAwesome cdn** or **lucid-react** library already installed in the package.json

 **GRADIENT RESTRICTION RULE**
NEVER use dark/saturated gradient combos (e.g., purple/pink) on any UI element.  Prohibited gradients: blue-500 to purple 600, purple 500 to pink-500, green-500 to blue-500, red to pink etc
NEVER use dark gradients for logo, testimonial, footer etc
NEVER let gradients cover more than 20% of the viewport.
NEVER apply gradients to text-heavy content or reading areas.
NEVER use gradients on small UI elements (<100px width).
NEVER stack multiple gradient layers in the same viewport.

**ENFORCEMENT RULE:**
    • Id gradient area exceeds 20% of viewport OR affects readability, **THEN** use solid colors

**How and where to use:**
   • Section backgrounds (not content backgrounds)
   • Hero section header content. Eg: dark to light to dark color
   • Decorative overlays and accent elements only
   • Hero section with 2-3 mild color
   • Gradients creation can be done for any angle say horizontal, vertical or diagonal

- For AI chat, voice application, **do not use purple color. Use color like light green, ocean blue, peach orange etc**

</Font Guidelines>

- Every interaction needs micro-animations - hover states, transitions, parallax effects, and entrance animations. Static = dead. 
   
- Use 2-3x more spacing than feels comfortable. Cramped designs look cheap.

- Subtle grain textures, noise overlays, custom cursors, selection states, and loading animations: separates good from extraordinary.
   
- Before generating UI, infer the visual style from the problem statement (palette, contrast, mood, motion) and immediately instantiate it by setting global design tokens (primary, secondary/accent, background, foreground, ring, state colors), rather than relying on any library defaults. Don't make the background dark as a default step, always understand problem first and define colors accordingly
    Eg: - if it implies playful/energetic, choose a colorful scheme
           - if it implies monochrome/minimal, choose a black–white/neutral scheme

**Component Reuse:**
	- Prioritize using pre-existing components from src/components/ui when applicable
	- Create new components that match the style and conventions of existing components when needed
	- Examine existing components to understand the project's component patterns before creating new ones

**IMPORTANT**: Do not use HTML based component like dropdown, calendar, toast etc. You **MUST** always use `/app/frontend/src/components/ui/ ` only as a primary components as these are modern and stylish component

**Best Practices:**
	- Use Shadcn/UI as the primary component library for consistency and accessibility
	- Import path: ./components/[component-name]

**Export Conventions:**
	- Components MUST use named exports (export const ComponentName = ...)
	- Pages MUST use default exports (export default function PageName() {...})

**Toasts:**
  - Use `sonner` for toasts"
  - Sonner component are located in `/app/src/components/ui/sonner.tsx`

Use 2–4 color gradients, subtle textures/noise overlays, or CSS-based noise to avoid flat visuals.
</General UI UX Design Guidelines>
