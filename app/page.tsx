import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
    Rocket,
    Link2,
    AlertTriangle,
    Clock,
    TrendingUp,
    Shield,
    Zap,
    Bell,
    Upload,
    Users,
    BarChart3,
    CheckCircle2,
    XCircle,
    DollarSign,
    Target,
    FileSpreadsheet,
    Activity,
    Sparkles,
    Download,
    Globe,
    Search,
    Calendar,
    ArrowRight,
    Play
} from "lucide-react";

export default function BacklinkCRMPage() {
    return (
        <div className="min-h-screen">
            {/* Header */}
            <header className="border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <h2 className="text-2xl font-bold">BacklinkCRM</h2>
                    <div className="flex gap-3">
                        <Button variant="outline" size="sm">Book a Demo</Button>
                        <Button size="sm">Start Free Trial</Button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-linear-to-b from-background via-destructive/5 to-background">
                {/* Background decorative elements */}
                <div className="absolute inset-0 -z-10">
                    {/* Enhanced gradient orbs */}
                    <div className="absolute -top-24 left-1/4 w-[500px] h-[500px] bg-destructive/25 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute top-32 -right-12 w-[400px] h-[400px] bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                    <div className="absolute -bottom-24 left-1/2 w-[450px] h-[450px] bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

                    {/* Dot pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(0_0_0/0.05)_1px,transparent_0)] bg-size-[48px_48px]" />

                    {/* Accent lines */}
                    <div className="absolute top-1/4 left-0 w-full h-px bg-linear-to-r from-transparent via-destructive/20 to-transparent" />
                    <div className="absolute bottom-1/4 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
                </div>

                <div className="container mx-auto px-4 py-20 md:py-28 relative">
                    <div className="max-w-5xl mx-auto text-center space-y-8">
                        <Badge variant="secondary" className="text-base px-5 py-2.5 shadow-lg border border-primary/20 animate-fade-in">
                            <Sparkles className="w-4 h-4 inline mr-2 animate-pulse" />
                            100+ SEO Teams Already Reclaimed Their Time
                        </Badge>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight bg-linear-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent animate-fade-in" style={{ animationDelay: '0.1s' }}>
                            You're losing 4+ hours every week managing backlinks on spreadsheets.
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground/90 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                            While you're updating spreadsheets, your competitors are building. Stop the manual management - monitor every backlink automatically, catch issues instantly, and scale without hiring more people.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                            <Button size="lg" className="text-lg px-10 py-7 shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 bg-linear-to-r from-primary to-primary/90 relative overflow-hidden group">
                                <span className="relative z-10 flex items-center gap-2">
                                    Start Today for FREE <ArrowRight className="w-5 h-5" />
                                </span>
                                <div className="absolute inset-0 bg-linear-to-r from-primary/0 via-white/20 to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </Button>
                            <Button size="lg" variant="outline" className="text-lg px-10 py-7 border-2 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300 flex items-center gap-2">
                                <Play className="w-5 h-5" />
                                Book a Demo
                            </Button>
                        </div>

                        <div>
                            <div className="text-sm text-muted-foreground mt-2">
                                No credit card required · Setup in minutes
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem Statement */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-destructive/10 border-2 border-destructive/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
                        <h2 className="text-3xl md:text-5xl font-serif mb-6 text-center">
                            Right now, you have no idea which of your $500 worth of backlinks just went 404.
                            <span className="text-destructive"> Or turned no-follow. Or changed anchor text.</span>
                        </h2>
                        <div className="space-y-4 text-lg text-muted-foreground/90 max-w-3xl mx-auto">
                            <p>Every hour you waste in spreadsheets is an hour not spent on growth.</p>
                            <p>Every missed link issue is DR points bleeding away.</p>
                            <p>Every manual check is a scaling bottleneck that's keeping you small.</p>
                            <p className="text-xl font-semibold text-foreground pt-4">
                                The truth: You can't scale a link-building operation on spreadsheets and prayers.
                            </p>
                            <p className="pt-4">
                                Your team is drowning in tabs. Your clients want real-time updates. Your backlinks are dying silently. And you're the one staying late to check everything manually.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Platform Introduction */}
            <section className="bg-muted/50 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <h2 className="text-3xl md:text-5xl font-serif">
                            The spreadsheet era is over. <span className="text-primary">Automated backlink monitoring is here.</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            BacklinkCRM monitors every single backlink 24/7/365. No more manual checking. No more nasty surprises. No more scaling limits.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Benefits Grid */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-serif mb-4">
                            Stop Wasting Time and Rankings. Start Scaling.
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            You didn't build a business to live in spreadsheets. One platform replaces your manual chaos.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: Activity,
                                title: "Monitor Automatically",
                                description: "Never manually check a backlink again",
                                detail: "Set it once. Monitor forever. Real-time alerts when any link changes, dies, or loses value. Sleep knowing nothing's slipping through."
                            },
                            {
                                icon: Bell,
                                title: "Catch Issues Instantly",
                                description: "Know about problems in seconds, not months",
                                detail: "That $500 guest post that went 404? You'll know immediately. No-follow switch? Instant alert. Finally, protect what you've paid for."
                            },
                            {
                                icon: TrendingUp,
                                title: "Scale Without Hiring",
                                description: "Manage 10X more links with the same team",
                                detail: "What takes 5 people in spreadsheets takes 1 person in BacklinkCRM. Stop hiring VAs for manual checks. Scale smart."
                            },
                            {
                                icon: BarChart3,
                                title: "Report in Seconds",
                                description: "Client reports that took 3 hours now take 3 clicks",
                                detail: "Auto-generated. White-labeled. Always up-to-date. Stop wasting Fridays on reporting."
                            },
                            {
                                icon: DollarSign,
                                title: "Actually Know Your ROI",
                                description: "See exactly which links drive results",
                                detail: "Stop guessing which partnerships work. Track everything. Kill what doesn't work. Double down on what does."
                            },
                            {
                                icon: Shield,
                                title: "24/7 Protection",
                                description: "Your backlinks watched around the clock",
                                detail: "While you sleep, we monitor. While you vacation, we alert. Your link profile is always protected."
                            }
                        ].map((benefit, idx) => (
                            <Card key={idx} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg group">
                                <CardHeader>
                                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                                        <benefit.icon className="w-7 h-7 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                                    <CardDescription className="text-base font-semibold text-foreground">
                                        {benefit.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{benefit.detail}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Platform Features */}
            <section className="bg-muted/30 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-serif mb-4">
                                Everything you need to stop the manual madness.
                            </h2>
                            <p className="text-xl text-muted-foreground">
                                One login. Total control. Zero manual checking.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    icon: Clock,
                                    title: "24/7 Link Monitor",
                                    description: "Your backlinks checked every hour. Changes caught instantly. While you sleep, we watch."
                                },
                                {
                                    icon: Zap,
                                    title: "Instant Alerts",
                                    description: "Link went 404? You'll know in 60 seconds. Stop discovering disasters months later."
                                },
                                {
                                    icon: Upload,
                                    title: "Bulk Operations",
                                    description: "Import 10,000 links in one click. What took days now takes minutes."
                                },
                                {
                                    icon: Users,
                                    title: "Client Dashboard",
                                    description: "Give clients their own login. You stop answering status emails forever."
                                },
                                {
                                    icon: Download,
                                    title: "Export Everything",
                                    description: "Your data, your way. One click export to any format. Never locked in."
                                },
                                {
                                    icon: Target,
                                    title: "3 Way Link Exchange Management",
                                    description: "Easily track and monitor 3 way link exchanges. Never lose track of these complex backlinks again."
                                },
                                {
                                    icon: Globe,
                                    title: "Chrome Extension",
                                    description: "Check any backlink on the web instantly. See status, anchor text, follow/nofollow, and more."
                                },
                                {
                                    icon: FileSpreadsheet,
                                    title: "White-Label Reports (Comming Soon)",
                                    description: "Branded reports in your colors. Make it look like your own tool."
                                }
                            ].map((feature, idx) => (
                                <Card key={idx}>
                                    <CardHeader>
                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                                            <feature.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* The Reality Check - Stats */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-serif text-center mb-12">
                        Here's what's actually happening while you're in spreadsheets:
                    </h2>

                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {[
                            {
                                stat: "3-5 backlinks",
                                label: "Die every week without you knowing",
                                icon: XCircle,
                                color: "destructive"
                            },
                            {
                                stat: "$2K-5K",
                                label: "Wasted annually on dead links you're still paying for",
                                icon: DollarSign,
                                color: "destructive"
                            },
                            {
                                stat: "40%",
                                label: "Of your links haven't been checked in 30 days",
                                icon: AlertTriangle,
                                color: "destructive"
                            },
                            {
                                stat: "2 hours daily",
                                label: "Your team wastes on manual checking",
                                icon: Clock,
                                color: "destructive"
                            },
                            {
                                stat: "Zero scaling",
                                label: "You can't grow because you're already drowning",
                                icon: TrendingUp,
                                color: "destructive"
                            }
                        ].map((item, idx) => (
                            <Card key={idx} className="text-center border-destructive/20 bg-destructive/5">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-2 mx-auto">
                                        <item.icon className="w-6 h-6 text-destructive" />
                                    </div>
                                    <div className="text-3xl font-bold text-destructive">{item.stat}</div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">{item.label}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="bg-muted/50 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-serif text-center mb-12">
                            From spreadsheet hell to scaled operation in 24 hours
                        </h2>

                        <div className="space-y-6">
                            {[
                                {
                                    step: "Hour 1",
                                    title: "Mass Import",
                                    description: "Upload your entire backlink spreadsheet. Every link, every partner, every detail. No manual entry.",
                                    icon: Upload
                                },
                                {
                                    step: "Hour 2",
                                    title: "Auto-Monitoring Starts",
                                    description: "Our system begins checking every link. Status, anchor text, do-follow, everything. The manual era ends.",
                                    icon: Activity
                                },
                                {
                                    step: "Day 1",
                                    title: "First Alert",
                                    description: "You'll likely discover 5-10 dead links you didn't know about. Recovery begins immediately.",
                                    icon: Bell
                                },
                                {
                                    step: "Week 1",
                                    title: "20 Hours Reclaimed",
                                    description: "No more manual checking. No more spreadsheet updates. That time is yours again. Use it to actually grow.",
                                    icon: Rocket
                                }
                            ].map((item, idx) => (
                                <Card key={idx} className="border-2 hover:border-primary transition-colors">
                                    <CardHeader>
                                        <div className="flex items-start gap-4">
                                            <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                                <item.icon className="w-8 h-8 text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <Badge variant="outline" className="mb-2">{item.step}</Badge>
                                                <CardTitle className="text-2xl mb-2">{item.title}</CardTitle>
                                                <p className="text-muted-foreground">{item.description}</p>
                                            </div>
                                        </div>
                                    </CardHeader>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Metrics */}
            {/* <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {[
                            { number: "23M+", label: "Backlinks Monitored Right Now" },
                            { number: "$4.2M", label: "In Dead Links Recovered This Year" },
                            { number: "892K", label: "Hours Saved From Manual Checking" }
                        ].map((metric, idx) => (
                            <div key={idx}>
                                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                                    {metric.number}
                                </div>
                                <div className="text-lg text-muted-foreground">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Support & Service */}
            <section className="bg-muted/30 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-serif mb-4">
                                We know you're skeptical. You've been burned before.
                            </h2>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                                This isn't another tool that takes weeks to set up. You'll be monitoring every backlink within 24 hours. Guaranteed.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: CheckCircle2,
                                    title: "Import Everything Today",
                                    description: "Send us your ugliest spreadsheet. We'll import it all. Every link, every detail. No cleanup needed."
                                },
                                {
                                    icon: Search,
                                    title: "Find Dead Links Immediately",
                                    description: "Most users discover 10-30 dead links in their first scan. That's money you can recover today."
                                },
                                {
                                    icon: Zap,
                                    title: "No Learning Curve",
                                    description: "If you can use Gmail, you can use BacklinkCRM. No training needed. No documentation to read."
                                },
                                {
                                    icon: Calendar,
                                    title: "Cancel Anytime",
                                    description: "Month-to-month. No contracts. Export everything anytime. We earn your business daily."
                                },
                                {
                                    icon: Users,
                                    title: "Real Humans on Support",
                                    description: "Actual SEO people who understand your world. Response in under 2 hours. No chatbots."
                                },
                                {
                                    icon: Download,
                                    title: "Your Data, Always Yours",
                                    description: "Export everything anytime. We're not holding your data hostage. One click, full export."
                                }
                            ].map((service, idx) => (
                                <Card key={idx} className="hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                                            <service.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <CardTitle className="text-lg">{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground">{service.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-serif text-center mb-12">
                        Frequently Asked Questions
                    </h2>

                    <Accordion type="single" collapsible className="space-y-4">
                        {[
                            {
                                q: "How fast will I see ROI?",
                                a: "Most users find enough dead links in the first day to pay for 6 months of service. The time savings kick in immediately — that's 20 hours back in your week starting now."
                            },
                            {
                                q: "What if I have 50,000+ backlinks?",
                                a: "Perfect. The more links you have, the more time you're wasting manually. We monitor millions daily. Your 50K links are nothing to our system."
                            },
                            {
                                q: "Do I need technical knowledge?",
                                a: "Zero. If you can read an email alert that says 'This link died,' you can use BacklinkCRM. It's that simple."
                            },
                            {
                                q: "What about my team?",
                                a: "Add everyone. Unlimited users. Assign links to team members. Track who's responsible for what. Finally, accountability."
                            },
                            {
                                q: "How does the monitoring work?",
                                a: "We check every link hourly for status changes, anchor text modifications, follow/nofollow switches, and more. You get instant alerts the moment something changes."
                            },
                            {
                                q: "Can I import from my current spreadsheet?",
                                a: "Yes! Upload your CSV, Excel, or Google Sheets. We'll handle the rest. Takes less than 5 minutes to import thousands of links."
                            }
                        ].map((faq, idx) => (
                            <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-lg px-6">
                                <AccordionTrigger className="text-left font-semibold">
                                    {faq.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-linear-to-br from-destructive/10 via-primary/10 to-accent/10 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h2 className="text-3xl md:text-5xl font-serif">
                            Your backlinks are dying right now. You just don't know which ones.
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Start monitoring in the next 24 hours. Find what's broken. Fix it. Scale.
                        </p>

                        <Card className="border-2 border-primary">
                            <CardContent className="pt-8 space-y-6">
                                <div className="text-xl font-semibold">
                                    30-minute demo. Three immediate outcomes:
                                </div>
                                <div className="grid md:grid-cols-3 gap-4 text-left">
                                    {[
                                        "See your actual dead links we find in real-time during the call",
                                        "Calculate exactly how many hours you'll save weekly",
                                        "Get your custom import template ready to go"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <Separator />

                                <Button size="lg" className="w-full text-lg py-7 bg-linear-to-r from-primary to-primary/90">
                                    Start Monitoring Today →
                                </Button>

                                <p className="text-sm text-muted-foreground italic">
                                    Or keep checking manually. Your competitors thank you.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t bg-muted/30 py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto text-center space-y-4">
                        <h3 className="text-xl font-bold">BacklinkCRM</h3>
                        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                            Every minute you wait, another backlink could be dying. Every hour in spreadsheets is an hour not growing. The manual era ends today.
                        </p>
                        <Separator className="my-8" />
                        <div className="text-sm text-muted-foreground">
                            © 2025 BacklinkCRM. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
