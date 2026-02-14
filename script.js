// ============================================================
// WATCH AUTHENTICITY CHALLENGE - Enhanced Game Engine
// ============================================================

// Watch database with rendering parameters
const watchDatabase = [
    {
        brand: "Rolex",
        model: "Submariner 116610LN",
        imageUrl: "https://commons.wikimedia.org/wiki/Special:Redirect/file/The_Rolex_Submariner_Professional.JPG?width=600",
        caseShape: "round",
        dialColor: "#0a0a0a",
        dialGradient: "#1a1a1a",
        bezelType: "diver",
        bezelColor: "#111",
        bezelAccent: "#4CAF50",
        markerStyle: "rolex",
        handStyle: "mercedes",
        handColor: "#f5f5f5",
        hasDate: true,
        datePosition: 3,
        hasCyclops: true,
        crownGuards: true,
        subDials: [],
        lumeColor: "#c8e6c9",
        brandFont: "bold 14px serif",
        hints: "Check the cyclops magnification (2.5x on genuine), crown guard shape, and lume pip alignment on bezel",
        difficulty: 1,
        visualTells: [
            "Cyclops lens magnification — genuine is exactly 2.5x, replicas under-magnify",
            "Laser-etched crown at 6 o'clock on crystal — nearly invisible to the naked eye on gen",
            "Ceramic bezel insert color depth and platinum-filled numerals",
            "Rehaut engraving alignment — 'ROLEX' text perfectly centered between indices"
        ],
        expertNote: "The VSF (VS Factory) version is the benchmark replica. Its VS3235 movement is a visual clone of the genuine, making caseback inspection difficult for novices.",
        sources: {
            genuine: "https://www.youtube.com/watch?v=UtRSHKqOIUc",
            replica: "https://www.youtube.com/watch?v=UtRSHKqOIUc"
        }
    },
    {
        brand: "Rolex",
        model: "Datejust 41",
        imageUrl: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Rolex_Datejust.JPG?width=600",
        caseShape: "round",
        dialColor: "#1a237e",
        dialGradient: "#283593",
        bezelType: "fluted",
        bezelColor: "#c0c0c0",
        bezelAccent: "#e0e0e0",
        markerStyle: "baton",
        handStyle: "dauphine",
        handColor: "#f5f5f5",
        hasDate: true,
        datePosition: 3,
        hasCyclops: true,
        crownGuards: false,
        subDials: [],
        lumeColor: "#bbdefb",
        brandFont: "bold 13px serif",
        hints: "Look at the fluted bezel pattern uniformity and the date font crispness",
        difficulty: 1
    },
    {
        brand: "Rolex",
        model: "Daytona 116500LN",
        imageUrl: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Detailed_view_of_Rolex_Daytona_chronograph_watch_and_watchstrap.jpg?width=600",
        caseShape: "round",
        dialColor: "#fafafa",
        dialGradient: "#f0f0f0",
        bezelType: "ceramic",
        bezelColor: "#222",
        bezelAccent: "#fff",
        markerStyle: "baton",
        handStyle: "dauphine",
        handColor: "#222",
        hasDate: false,
        datePosition: 0,
        hasCyclops: false,
        crownGuards: true,
        subDials: [9, 6, 3],
        lumeColor: "#e8eaf6",
        brandFont: "bold 12px serif",
        hints: "Examine the tachymeter bezel engravings and subdial spacing",
        difficulty: 2,
        visualTells: [
            "Dial color warmth — genuine 'Panda' has a slightly warm cream, replicas are pure white",
            "Ceramic bezel font thickness — replicas are often slightly bolder",
            "Chronograph pusher travel distance differs on replicas",
            "Subdial register spacing and depth perception"
        ],
        expertNote: "Use the 'Three Point Check': 1. Dial warmth. 2. Chronograph pusher travel distance. 3. Bezel font thickness (reps are often slightly bolder).",
        sources: {
            genuine: "https://wristcheck.com/discover/watch-101/rolex-daytona-real-vs-fake",
            replica: "https://wristcheck.com/discover/watch-101/rolex-daytona-real-vs-fake"
        }
    },
    {
        brand: "Patek Philippe",
        model: "Nautilus 5711/1A",
        imageUrl: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Patek-Philippe-Nautilus-5711-1A-010-1.jpg?width=600",
        caseShape: "round",
        dialColor: "#1a237e",
        dialGradient: "#0d47a1",
        bezelType: "smooth",
        bezelColor: "#b0bec5",
        bezelAccent: "#cfd8dc",
        markerStyle: "baton",
        handStyle: "dauphine",
        handColor: "#f5f5f5",
        hasDate: true,
        datePosition: 3,
        hasCyclops: false,
        crownGuards: false,
        subDials: [],
        lumeColor: "#bbdefb",
        brandFont: "bold 11px serif",
        texturePattern: "horizontal",
        hints: "Study the horizontal embossed texture on the dial and bracelet link finishing",
        difficulty: 2,
        visualTells: [
            "Gradient blue dial — fakes often lean too purple or too grey",
            "Horizontal embossed dial texture depth and uniformity",
            "Case 'ears' shape and finishing transitions between brushed and polished",
            "Bracelet link finishing precision — genuine has mirror-sharp edges"
        ],
        expertNote: "The 5711 is one of the most faked watches in the world. The gradient blue dial is notoriously difficult to replicate; fakes often lean too purple or too grey.",
        sources: {
            genuine: "https://www.watchfinder.com/articles/feature-real-100-000-patek-philippe-vs-1-000-fake",
            replica: "https://www.watchfinder.com/articles/feature-real-100-000-patek-philippe-vs-1-000-fake"
        }
    },
    {
        brand: "Omega",
        model: "Seamaster 300M",
        imageUrl: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Omega_Seamaster_James_Bond_No_Time_to_Die.jpg?width=600",
        caseShape: "round",
        dialColor: "#0d47a1",
        dialGradient: "#1565c0",
        bezelType: "diver",
        bezelColor: "#0d47a1",
        bezelAccent: "#fff",
        markerStyle: "dot",
        handStyle: "sword",
        handColor: "#f5f5f5",
        hasDate: true,
        datePosition: 6,
        hasCyclops: false,
        crownGuards: false,
        subDials: [],
        lumeColor: "#bbdefb",
        brandFont: "bold 12px sans-serif",
        texturePattern: "wave",
        hints: "Check the wave pattern on the dial and the helium escape valve at 10 o'clock",
        difficulty: 2,
        visualTells: [
            "Wave pattern dial texture — laser-etched on genuine, printed or shallow on replicas",
            "Helium escape valve at 10 o'clock — shape and proportion",
            "Black balance wheel visible through caseback — replicas have silver/gold",
            "Ceramic bezel enamel-filled numerals — depth and color consistency"
        ],
        expertNote: "VSF replicas of the Seamaster are extremely accurate externally (case and dial), making movement inspection (specifically the black balance wheel) the primary method of verification.",
        sources: {
            genuine: "https://millenarywatches.com/how-spot-fake-omega/",
            replica: "https://www.youtube.com/watch?v=5rtkz-_f29s"
        }
    },
    {
        brand: "Omega",
        model: "Speedmaster Professional",
        imageUrl: "https://commons.wikimedia.org/wiki/Special:Redirect/file/OMEGA_Speedmaster_CK2915.JPG?width=600",
        caseShape: "round",
        dialColor: "#1a1a1a",
        dialGradient: "#2a2a2a",
        bezelType: "tachymeter",
        bezelColor: "#222",
        bezelAccent: "#f5f5f5",
        markerStyle: "baton",
        handStyle: "alpha",
        handColor: "#f5f5f5",
        hasDate: false,
        datePosition: 0,
        hasCyclops: false,
        crownGuards: false,
        subDials: [9, 6, 3],
        lumeColor: "#fff9c4",
        brandFont: "bold 11px sans-serif",
        hints: "Look at the tachymeter markings — 'TACHYMETRE' not 'TACHYMETER' on genuine",
        difficulty: 3
    },
    {
        brand: "Audemars Piguet",
        model: "Royal Oak 15400ST",
        imageUrl: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Audemars_2385_Royal_Oak_resized.jpg?width=600",
        caseShape: "octagonal",
        dialColor: "#1a237e",
        dialGradient: "#283593",
        bezelType: "octagonal",
        bezelColor: "#b0bec5",
        bezelAccent: "#90a4ae",
        markerStyle: "baton",
        handStyle: "royal-oak",
        handColor: "#f5f5f5",
        hasDate: true,
        datePosition: 3,
        hasCyclops: false,
        crownGuards: false,
        subDials: [],
        lumeColor: "#c8e6c9",
        brandFont: "bold 10px sans-serif",
        texturePattern: "tapisserie",
        hints: "Check the 'Tapisserie' waffle pattern and hexagonal screw positions on the bezel",
        difficulty: 3
    },
    {
        brand: "Cartier",
        model: "Santos de Cartier",
        caseShape: "square",
        dialColor: "#fafafa",
        dialGradient: "#f5f5f5",
        bezelType: "smooth",
        bezelColor: "#b0bec5",
        bezelAccent: "#cfd8dc",
        markerStyle: "roman",
        handStyle: "sword",
        handColor: "#1565c0",
        hasDate: false,
        datePosition: 0,
        hasCyclops: false,
        crownGuards: false,
        subDials: [],
        lumeColor: "#e3f2fd",
        brandFont: "bold 12px serif",
        hints: "Look at the Roman numeral proportions and the blue sword hands — Cartier blue is very specific",
        difficulty: 2
    },
    {
        brand: "IWC",
        model: "Pilot Mark XVIII",
        imageUrl: "https://commons.wikimedia.org/wiki/Special:Redirect/file/IWC_Big_Pilot_St_Exupery_Edition_(cropped).jpg?width=600",
        caseShape: "round",
        dialColor: "#1a1a1a",
        dialGradient: "#2a2a2a",
        bezelType: "smooth",
        bezelColor: "#c0c0c0",
        bezelAccent: "#e0e0e0",
        markerStyle: "arabic",
        handStyle: "pilot",
        handColor: "#f5f5f5",
        hasDate: true,
        datePosition: 3,
        hasCyclops: false,
        crownGuards: false,
        subDials: [],
        lumeColor: "#fff9c4",
        brandFont: "bold 12px sans-serif",
        hints: "Examine the triangle marker at 12, the date window frame, and the luminous quality",
        difficulty: 1
    },
    {
        brand: "Jaeger-LeCoultre",
        model: "Reverso Classic",
        imageUrl: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Jaeger-LeCoultre-Reverso.jpg?width=600",
        caseShape: "rectangle",
        dialColor: "#fafafa",
        dialGradient: "#f0f0f0",
        bezelType: "smooth",
        bezelColor: "#c0c0c0",
        bezelAccent: "#e0e0e0",
        markerStyle: "arabic-deco",
        handStyle: "dauphine",
        handColor: "#222",
        hasDate: false,
        datePosition: 0,
        hasCyclops: false,
        crownGuards: false,
        subDials: [],
        lumeColor: "#e8eaf6",
        brandFont: "bold 9px serif",
        hints: "Look at the Art Deco numeral style and the precision of the Reverso case lines",
        difficulty: 3,
        visualTells: [
            "Flipping case mechanism — genuine is smooth and precise with a satisfying click",
            "Case lines and edge sharpness — genuine has razor-sharp transitions",
            "Art Deco numeral engraving depth and consistency",
            "Caseback engraving quality — replicas show rough or shallow etching"
        ],
        expertNote: "Reverso fakes are generally lower quality than Rolex/Patek super-clones due to the complexity of the flipping case mechanism. The mechanism feel alone is often a giveaway.",
        sources: {
            genuine: "https://www.youtube.com/watch?v=Zyr0ev9zEcM",
            replica: "https://www.youtube.com/watch?v=Zyr0ev9zEcM"
        }
    },
    {
        brand: "Patek Philippe",
        model: "Calatrava 5196",
        caseShape: "round",
        dialColor: "#fffde7",
        dialGradient: "#fff8e1",
        bezelType: "smooth",
        bezelColor: "#ffd54f",
        bezelAccent: "#ffecb3",
        markerStyle: "breguet",
        handStyle: "breguet",
        handColor: "#222",
        hasDate: false,
        datePosition: 0,
        hasCyclops: false,
        crownGuards: false,
        subDials: [],
        lumeColor: "#fff9c4",
        brandFont: "bold 10px serif",
        hints: "Study the Breguet numeral engraving depth and the Calatrava cross logo detail",
        difficulty: 3
    },
    {
        brand: "Patek Philippe",
        model: "Aquanaut 5167A",
        caseShape: "round",
        dialColor: "#263238",
        dialGradient: "#37474f",
        bezelType: "smooth",
        bezelColor: "#b0bec5",
        bezelAccent: "#cfd8dc",
        markerStyle: "baton",
        handStyle: "dauphine",
        handColor: "#f5f5f5",
        hasDate: true,
        datePosition: 3,
        hasCyclops: false,
        crownGuards: false,
        subDials: [],
        lumeColor: "#b2dfdb",
        brandFont: "bold 11px serif",
        texturePattern: "tapisserie",
        hints: "Check how the rubber strap meets the case — genuine has zero gap",
        difficulty: 2,
        visualTells: [
            "Rubber strap-to-case fit — genuine has zero gap, replicas show a hairline space",
            "Dial embossed 'grenade' pattern depth and uniformity",
            "Arabic numeral font weight and spacing",
            "Caseback Calatrava cross detail and finishing"
        ],
        expertNote: "The ZF factory version is common. Pay close attention to how the rubber strap meets the case; genuine straps have zero gap, while reps often show a hairline space.",
        sources: {
            genuine: "https://www.youtube.com/watch?v=q6_Sp6NHkRA",
            replica: "https://www.youtube.com/watch?v=q6_Sp6NHkRA"
        }
    },
    {
        brand: "Jaeger-LeCoultre",
        model: "Master Ultra Thin Moon",
        caseShape: "round",
        dialColor: "#eceff1",
        dialGradient: "#f5f5f5",
        bezelType: "smooth",
        bezelColor: "#c0c0c0",
        bezelAccent: "#e0e0e0",
        markerStyle: "baton",
        handStyle: "dauphine",
        handColor: "#222",
        hasDate: true,
        datePosition: 3,
        hasCyclops: false,
        crownGuards: false,
        subDials: [6],
        lumeColor: "#e8eaf6",
        brandFont: "bold 10px serif",
        hints: "Listen to the rotor — genuine is near-silent, replicas use a loud Miyota 9015",
        difficulty: 3,
        visualTells: [
            "Moon phase disc detail — genuine has a textured, star-filled sky",
            "Rotor noise — genuine is near-silent, replicas use a famously loud Miyota 9015",
            "Dial printing crispness — 'Jaeger-LeCoultre' text should be razor-sharp",
            "Case thickness — replicas are often slightly thicker due to movement swap"
        ],
        expertNote: "This model is often replicated using a modified Miyota 9015 movement, which is famously loud. If the rotor makes a noisy 'whirring' sound when spun, it is likely a fake.",
        sources: {
            genuine: "https://imgur.com/a/KUcptI9",
            replica: "https://www.reddit.com/r/Watches/comments/6zufay/jlc_fake_discussion_some_pretty_scary_side_by/"
        }
    },
    {
        brand: "TAG Heuer",
        model: "Carrera Chronograph",
        caseShape: "round",
        dialColor: "#fafafa",
        dialGradient: "#f0f0f0",
        bezelType: "smooth",
        bezelColor: "#c0c0c0",
        bezelAccent: "#e0e0e0",
        markerStyle: "baton",
        handStyle: "dauphine",
        handColor: "#222",
        hasDate: true,
        datePosition: 3,
        hasCyclops: false,
        crownGuards: false,
        subDials: [9, 6],
        lumeColor: "#e8eaf6",
        brandFont: "bold 11px sans-serif",
        hints: "Check the subdial register spacing and the TAG Heuer shield logo clarity",
        difficulty: 2
    }
];

// Possible defects for replicas
const DEFECT_TYPES = [
    { id: 'marker_align', label: 'Misaligned hour markers', description: 'One or more hour markers are slightly rotated' },
    { id: 'dial_color', label: 'Dial color off', description: 'The dial color is subtly different from genuine' },
    { id: 'hand_length', label: 'Hand proportions wrong', description: 'The minute or hour hand length is slightly off' },
    { id: 'text_position', label: 'Brand text misaligned', description: 'The brand name position is slightly off-center' },
    { id: 'date_size', label: 'Date window size', description: 'The date window is slightly too large or small' },
    { id: 'lume_color', label: 'Lume color wrong', description: 'The luminous material color is not quite right' },
    { id: 'bezel_align', label: 'Bezel alignment off', description: 'Bezel markings are slightly misaligned' },
    { id: 'crown_size', label: 'Crown proportion', description: 'The crown is slightly too large or small' }
];

// Image-specific defects (CSS filter-based for real photo manipulation)
const IMAGE_DEFECT_TYPES = [
    {
        id: 'color_shift',
        label: 'Dial color off',
        description: 'The dial color doesn\'t match the genuine — common in replicas',
        getFilter: (intensity) => `hue-rotate(${3 + intensity * 2}deg)`,
        getTransform: () => ''
    },
    {
        id: 'warm_shift',
        label: 'Metal tone wrong',
        description: 'The case/bracelet metal tone is warmer than genuine',
        getFilter: (intensity) => `sepia(${0.05 + intensity * 0.03})`,
        getTransform: () => ''
    },
    {
        id: 'finish_quality',
        label: 'Surface finish different',
        description: 'The finishing appears less refined — typical of replica polishing',
        getFilter: (intensity) => `brightness(${0.96 - intensity * 0.01}) contrast(${1.03 + intensity * 0.01})`,
        getTransform: () => ''
    },
    {
        id: 'oversaturated',
        label: 'Colors oversaturated',
        description: 'Colors appear slightly more vivid than genuine — cheap dial paint',
        getFilter: (intensity) => `saturate(${1.1 + intensity * 0.05})`,
        getTransform: () => ''
    },
    {
        id: 'alignment_off',
        label: 'Bezel/dial misaligned',
        description: 'Components appear slightly rotated — an assembly defect',
        getFilter: () => '',
        getTransform: (intensity) => `rotate(${0.4 + intensity * 0.2}deg)`
    },
    {
        id: 'proportion_wrong',
        label: 'Case proportions off',
        description: 'The case dimensions are subtly different from genuine',
        getFilter: () => '',
        getTransform: (intensity) => `scale(${1.01 + intensity * 0.005}, ${1 - intensity * 0.003})`
    },
    {
        id: 'less_sharp',
        label: 'Details lack crispness',
        description: 'Engravings and text appear less sharp — poor quality control',
        getFilter: (intensity) => `blur(${0.3 + intensity * 0.1}px)`,
        getTransform: () => ''
    },
    {
        id: 'lume_brightness',
        label: 'Lume application uneven',
        description: 'The luminous material appears differently from genuine',
        getFilter: (intensity) => `brightness(${1.04 + intensity * 0.02}) hue-rotate(${-2 - intensity}deg)`,
        getTransform: () => ''
    }
];

// ============================================================
// CANVAS WATCH RENDERER
// ============================================================
class WatchRenderer {
    constructor(size = 500) {
        this.size = size;
        this.canvas = document.createElement('canvas');
        this.canvas.width = size;
        this.canvas.height = size;
        this.ctx = this.canvas.getContext('2d');
        this.cx = size / 2;
        this.cy = size / 2;
        this.radius = size * 0.42;
    }

    render(watch, defects = []) {
        const ctx = this.ctx;
        const { cx, cy, radius, size } = this;
        ctx.clearRect(0, 0, size, size);

        // Background
        ctx.fillStyle = '#0d0d1a';
        ctx.fillRect(0, 0, size, size);

        // Determine case shape parameters
        const isRound = watch.caseShape === 'round' || watch.caseShape === 'octagonal';
        const isSquare = watch.caseShape === 'square';
        const isRect = watch.caseShape === 'rectangle';

        // Draw lugs
        this._drawLugs(watch);

        // Draw case
        this._drawCase(watch, defects);

        // Draw bezel
        this._drawBezel(watch, defects);

        // Draw dial
        this._drawDial(watch, defects);

        // Draw texture if applicable
        if (watch.texturePattern) {
            this._drawDialTexture(watch, defects);
        }

        // Draw markers
        this._drawMarkers(watch, defects);

        // Draw subdials
        if (watch.subDials && watch.subDials.length > 0) {
            this._drawSubDials(watch, defects);
        }

        // Draw date window
        if (watch.hasDate) {
            this._drawDateWindow(watch, defects);
        }

        // Draw brand text
        this._drawBrandText(watch, defects);

        // Draw hands
        this._drawHands(watch, defects);

        // Draw crown
        this._drawCrown(watch, defects);

        // Draw crystal reflection
        this._drawCrystalReflection(watch);

        return this.canvas.toDataURL();
    }

    _drawLugs(watch) {
        const { ctx, cx, cy, radius } = this;
        const lugWidth = radius * 0.25;
        const lugHeight = radius * 0.35;
        const lugOffset = radius * 0.95;

        ctx.save();
        const gradient = ctx.createLinearGradient(cx - lugWidth, 0, cx + lugWidth, 0);
        gradient.addColorStop(0, '#666');
        gradient.addColorStop(0.3, '#999');
        gradient.addColorStop(0.5, '#bbb');
        gradient.addColorStop(0.7, '#999');
        gradient.addColorStop(1, '#666');

        ctx.fillStyle = gradient;

        // Top lugs
        ctx.beginPath();
        ctx.roundRect(cx - lugWidth - radius * 0.15, cy - lugOffset - lugHeight * 0.3, lugWidth * 0.7, lugHeight, [4, 4, 0, 0]);
        ctx.fill();
        ctx.beginPath();
        ctx.roundRect(cx + radius * 0.15 - lugWidth * 0.2, cy - lugOffset - lugHeight * 0.3, lugWidth * 0.7, lugHeight, [4, 4, 0, 0]);
        ctx.fill();

        // Bottom lugs
        ctx.beginPath();
        ctx.roundRect(cx - lugWidth - radius * 0.15, cy + lugOffset - lugHeight * 0.7, lugWidth * 0.7, lugHeight, [0, 0, 4, 4]);
        ctx.fill();
        ctx.beginPath();
        ctx.roundRect(cx + radius * 0.15 - lugWidth * 0.2, cy + lugOffset - lugHeight * 0.7, lugWidth * 0.7, lugHeight, [0, 0, 4, 4]);
        ctx.fill();

        ctx.restore();
    }

    _drawCase(watch, defects) {
        const { ctx, cx, cy, radius } = this;

        ctx.save();
        // Case shadow
        ctx.shadowColor = 'rgba(0,0,0,0.5)';
        ctx.shadowBlur = 20;
        ctx.shadowOffsetY = 5;

        const caseGradient = ctx.createLinearGradient(cx - radius, cy - radius, cx + radius, cy + radius);
        caseGradient.addColorStop(0, '#888');
        caseGradient.addColorStop(0.2, '#aaa');
        caseGradient.addColorStop(0.4, '#ccc');
        caseGradient.addColorStop(0.6, '#bbb');
        caseGradient.addColorStop(0.8, '#999');
        caseGradient.addColorStop(1, '#777');

        ctx.fillStyle = caseGradient;

        if (watch.caseShape === 'square') {
            const s = radius * 0.85;
            ctx.beginPath();
            ctx.roundRect(cx - s, cy - s, s * 2, s * 2, radius * 0.1);
            ctx.fill();
        } else if (watch.caseShape === 'rectangle') {
            const w = radius * 0.6;
            const h = radius * 0.95;
            ctx.beginPath();
            ctx.roundRect(cx - w, cy - h, w * 2, h * 2, radius * 0.05);
            ctx.fill();
        } else if (watch.caseShape === 'octagonal') {
            this._drawOctagon(cx, cy, radius * 1.05, caseGradient);
        } else {
            ctx.beginPath();
            ctx.arc(cx, cy, radius * 1.05, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
    }

    _drawOctagon(x, y, r, fillStyle) {
        const { ctx } = this;
        ctx.beginPath();
        for (let i = 0; i < 8; i++) {
            const angle = (Math.PI * 2 * i / 8) - Math.PI / 8;
            const px = x + r * Math.cos(angle);
            const py = y + r * Math.sin(angle);
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fillStyle = fillStyle;
        ctx.fill();
    }

    _drawBezel(watch, defects) {
        const { ctx, cx, cy, radius } = this;
        const bezelAlignDefect = defects.find(d => d.id === 'bezel_align');
        const rotationOffset = bezelAlignDefect ? (Math.PI / 180) * bezelAlignDefect.amount : 0;

        ctx.save();

        if (watch.bezelType === 'diver' || watch.bezelType === 'tachymeter') {
            // Outer bezel ring
            const bezelGrad = ctx.createLinearGradient(cx - radius, cy, cx + radius, cy);
            bezelGrad.addColorStop(0, '#333');
            bezelGrad.addColorStop(0.5, watch.bezelColor);
            bezelGrad.addColorStop(1, '#333');

            if (watch.caseShape === 'octagonal') {
                this._drawOctagon(cx, cy, radius, bezelGrad);
            } else {
                ctx.beginPath();
                ctx.arc(cx, cy, radius, 0, Math.PI * 2);
                ctx.fillStyle = bezelGrad;
                ctx.fill();
            }

            // Bezel markings
            ctx.save();
            ctx.translate(cx, cy);
            ctx.rotate(rotationOffset);
            const markerRadius = radius * 0.92;

            if (watch.bezelType === 'diver') {
                // Minute markers on bezel
                for (let i = 0; i < 60; i++) {
                    const angle = (Math.PI * 2 * i / 60) - Math.PI / 2;
                    const isHour = i % 5 === 0;
                    const inner = markerRadius * (isHour ? 0.88 : 0.92);
                    const outer = markerRadius;

                    ctx.beginPath();
                    ctx.moveTo(inner * Math.cos(angle), inner * Math.sin(angle));
                    ctx.lineTo(outer * Math.cos(angle), outer * Math.sin(angle));
                    ctx.strokeStyle = watch.bezelAccent;
                    ctx.lineWidth = isHour ? 2.5 : 1;
                    ctx.stroke();
                }

                // Lume pip at 12
                const pipAngle = -Math.PI / 2;
                ctx.beginPath();
                ctx.arc(markerRadius * 0.85 * Math.cos(pipAngle), markerRadius * 0.85 * Math.sin(pipAngle), 4, 0, Math.PI * 2);
                ctx.fillStyle = watch.lumeColor;
                ctx.fill();
            } else if (watch.bezelType === 'tachymeter') {
                // Tachymeter scale
                const tachValues = [60, 70, 80, 90, 100, 120, 150, 200, 300, 500];
                tachValues.forEach((val, i) => {
                    const angle = (Math.PI * 2 * i / tachValues.length) - Math.PI / 2;
                    ctx.save();
                    ctx.translate(markerRadius * 0.9 * Math.cos(angle), markerRadius * 0.9 * Math.sin(angle));
                    ctx.rotate(angle + Math.PI / 2);
                    ctx.fillStyle = watch.bezelAccent;
                    ctx.font = '8px sans-serif';
                    ctx.textAlign = 'center';
                    ctx.fillText(val.toString(), 0, 0);
                    ctx.restore();
                });
            }
            ctx.restore();
        } else if (watch.bezelType === 'fluted') {
            // Fluted bezel
            for (let i = 0; i < 120; i++) {
                const angle = (Math.PI * 2 * i / 120);
                const brightness = Math.sin(i * Math.PI / 2) * 30 + 180;
                ctx.beginPath();
                ctx.moveTo(cx + (radius * 0.87) * Math.cos(angle), cy + (radius * 0.87) * Math.sin(angle));
                ctx.lineTo(cx + radius * Math.cos(angle), cy + radius * Math.sin(angle));
                ctx.strokeStyle = `rgb(${brightness},${brightness},${brightness})`;
                ctx.lineWidth = 2;
                ctx.stroke();
            }
        } else if (watch.bezelType === 'octagonal') {
            // Octagonal bezel with screws
            this._drawOctagon(cx, cy, radius, watch.bezelColor);
            // Draw screws at each corner
            for (let i = 0; i < 8; i++) {
                const angle = (Math.PI * 2 * i / 8) - Math.PI / 8;
                const screwR = radius * 0.95;
                const sx = cx + screwR * Math.cos(angle);
                const sy = cy + screwR * Math.sin(angle);

                ctx.beginPath();
                ctx.arc(sx, sy, 5, 0, Math.PI * 2);
                ctx.fillStyle = '#999';
                ctx.fill();
                ctx.strokeStyle = '#666';
                ctx.lineWidth = 1;
                ctx.stroke();

                // Screw slot
                ctx.beginPath();
                ctx.moveTo(sx - 3, sy - 3);
                ctx.lineTo(sx + 3, sy + 3);
                ctx.strokeStyle = '#555';
                ctx.lineWidth = 1.5;
                ctx.stroke();
            }
        } else {
            // Smooth bezel
            const bezelGrad = ctx.createLinearGradient(cx - radius, cy, cx + radius, cy);
            bezelGrad.addColorStop(0, '#888');
            bezelGrad.addColorStop(0.3, watch.bezelColor);
            bezelGrad.addColorStop(0.7, watch.bezelAccent);
            bezelGrad.addColorStop(1, '#888');

            if (watch.caseShape === 'square') {
                const s = radius * 0.82;
                ctx.beginPath();
                ctx.roundRect(cx - s, cy - s, s * 2, s * 2, radius * 0.08);
                ctx.fillStyle = bezelGrad;
                ctx.fill();
            } else if (watch.caseShape === 'rectangle') {
                const w = radius * 0.55;
                const h = radius * 0.88;
                ctx.beginPath();
                ctx.roundRect(cx - w, cy - h, w * 2, h * 2, radius * 0.04);
                ctx.fillStyle = bezelGrad;
                ctx.fill();
            } else {
                ctx.beginPath();
                ctx.arc(cx, cy, radius * 0.95, 0, Math.PI * 2);
                ctx.fillStyle = bezelGrad;
                ctx.fill();
            }
        }

        ctx.restore();
    }

    _drawDial(watch, defects) {
        const { ctx, cx, cy, radius } = this;
        const dialColorDefect = defects.find(d => d.id === 'dial_color');

        let dialColor = watch.dialColor;
        let dialGradient = watch.dialGradient;

        if (dialColorDefect) {
            dialColor = this._shiftColor(dialColor, dialColorDefect.amount);
            dialGradient = this._shiftColor(dialGradient, dialColorDefect.amount);
        }

        ctx.save();

        const dialGrad = ctx.createRadialGradient(cx - radius * 0.2, cy - radius * 0.2, 0, cx, cy, radius * 0.85);
        dialGrad.addColorStop(0, dialGradient);
        dialGrad.addColorStop(1, dialColor);

        if (watch.caseShape === 'square') {
            const s = radius * 0.72;
            ctx.beginPath();
            ctx.roundRect(cx - s, cy - s, s * 2, s * 2, radius * 0.04);
            ctx.fillStyle = dialGrad;
            ctx.fill();
        } else if (watch.caseShape === 'rectangle') {
            const w = radius * 0.47;
            const h = radius * 0.78;
            ctx.beginPath();
            ctx.roundRect(cx - w, cy - h, w * 2, h * 2, radius * 0.02);
            ctx.fillStyle = dialGrad;
            ctx.fill();
        } else {
            ctx.beginPath();
            ctx.arc(cx, cy, radius * 0.85, 0, Math.PI * 2);
            ctx.fillStyle = dialGrad;
            ctx.fill();
        }

        // Inner dial ring
        ctx.beginPath();
        if (watch.caseShape === 'square') {
            const s = radius * 0.72;
            ctx.roundRect(cx - s, cy - s, s * 2, s * 2, radius * 0.04);
        } else if (watch.caseShape === 'rectangle') {
            const w = radius * 0.47;
            const h = radius * 0.78;
            ctx.roundRect(cx - w, cy - h, w * 2, h * 2, radius * 0.02);
        } else {
            ctx.arc(cx, cy, radius * 0.85, 0, Math.PI * 2);
        }
        ctx.strokeStyle = 'rgba(255,255,255,0.1)';
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.restore();
    }

    _drawDialTexture(watch, defects) {
        const { ctx, cx, cy, radius } = this;
        ctx.save();

        // Clip to dial area
        ctx.beginPath();
        if (watch.caseShape === 'square') {
            const s = radius * 0.72;
            ctx.roundRect(cx - s, cy - s, s * 2, s * 2, radius * 0.04);
        } else {
            ctx.arc(cx, cy, radius * 0.83, 0, Math.PI * 2);
        }
        ctx.clip();

        ctx.globalAlpha = 0.15;

        if (watch.texturePattern === 'horizontal') {
            // Horizontal lines (Nautilus style)
            for (let y = cy - radius; y < cy + radius; y += 3) {
                ctx.beginPath();
                ctx.moveTo(cx - radius, y);
                ctx.lineTo(cx + radius, y);
                ctx.strokeStyle = '#fff';
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        } else if (watch.texturePattern === 'wave') {
            // Wave pattern (Seamaster style)
            for (let y = cy - radius; y < cy + radius; y += 8) {
                ctx.beginPath();
                for (let x = cx - radius; x < cx + radius; x += 1) {
                    const wave = Math.sin((x - cx) * 0.05) * 3;
                    if (x === cx - radius) ctx.moveTo(x, y + wave);
                    else ctx.lineTo(x, y + wave);
                }
                ctx.strokeStyle = '#fff';
                ctx.lineWidth = 0.8;
                ctx.stroke();
            }
        } else if (watch.texturePattern === 'tapisserie') {
            // Tapisserie/waffle pattern (Royal Oak style)
            const cellSize = 6;
            for (let y = cy - radius; y < cy + radius; y += cellSize) {
                for (let x = cx - radius; x < cx + radius; x += cellSize) {
                    ctx.fillStyle = '#fff';
                    ctx.fillRect(x + 0.5, y + 0.5, cellSize - 1, cellSize - 1);
                }
            }
        }

        ctx.restore();
    }

    _drawMarkers(watch, defects) {
        const { ctx, cx, cy, radius } = this;
        const markerDefect = defects.find(d => d.id === 'marker_align');
        const lumeDefect = defects.find(d => d.id === 'lume_color');
        const lumeColor = lumeDefect ? this._shiftColor(watch.lumeColor, lumeDefect.amount) : watch.lumeColor;

        ctx.save();

        const isLight = this._isLightColor(watch.dialColor);
        const markerColor = isLight ? '#222' : '#f5f5f5';

        if (watch.caseShape === 'square' || watch.caseShape === 'rectangle') {
            this._drawNonRoundMarkers(watch, defects, markerColor, lumeColor);
            ctx.restore();
            return;
        }

        for (let i = 0; i < 12; i++) {
            const baseAngle = (Math.PI * 2 * i / 12) - Math.PI / 2;
            let angle = baseAngle;

            // Apply misalignment defect to specific markers
            if (markerDefect && markerDefect.affectedMarkers.includes(i)) {
                angle += (Math.PI / 180) * markerDefect.amount;
            }

            // Skip 3 if date window there
            if (watch.hasDate && watch.datePosition === 3 && i === 3) continue;

            const innerR = radius * 0.7;
            const outerR = radius * 0.82;

            if (watch.markerStyle === 'rolex') {
                // Rolex applied markers
                const mWidth = i === 0 ? 8 : 6;
                const mLen = i === 0 ? outerR - innerR + 5 : outerR - innerR;
                ctx.save();
                ctx.translate(cx, cy);
                ctx.rotate(angle + Math.PI / 2);
                ctx.fillStyle = markerColor;
                ctx.shadowColor = 'rgba(0,0,0,0.3)';
                ctx.shadowBlur = 2;
                ctx.fillRect(-mWidth / 2, -outerR, mWidth, mLen);
                // Lume fill
                ctx.fillStyle = lumeColor;
                ctx.globalAlpha = 0.8;
                ctx.fillRect(-mWidth / 2 + 1, -outerR + 1, mWidth - 2, mLen - 2);
                ctx.restore();
            } else if (watch.markerStyle === 'baton') {
                const mWidth = i === 0 || i === 6 ? 5 : 3;
                const mInner = i === 0 || i === 3 || i === 6 || i === 9 ? innerR - 5 : innerR;
                ctx.save();
                ctx.translate(cx, cy);
                ctx.rotate(angle + Math.PI / 2);
                ctx.fillStyle = markerColor;
                ctx.fillRect(-mWidth / 2, -outerR, mWidth, outerR - mInner);
                ctx.restore();
            } else if (watch.markerStyle === 'dot') {
                const dotR = i === 0 || i === 3 || i === 6 || i === 9 ? 5 : 3;
                const dotDist = radius * 0.76;
                ctx.beginPath();
                ctx.arc(cx + dotDist * Math.cos(angle), cy + dotDist * Math.sin(angle), dotR, 0, Math.PI * 2);
                ctx.fillStyle = lumeColor;
                ctx.fill();
                ctx.strokeStyle = markerColor;
                ctx.lineWidth = 1;
                ctx.stroke();
            } else if (watch.markerStyle === 'arabic') {
                const nums = ['12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
                const textR = radius * 0.7;
                ctx.save();
                ctx.font = i === 0 ? 'bold 22px sans-serif' : 'bold 18px sans-serif';
                ctx.fillStyle = markerColor;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(nums[i], cx + textR * Math.cos(angle), cy + textR * Math.sin(angle));
                ctx.restore();
            } else if (watch.markerStyle === 'roman') {
                const nums = ['XII', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];
                const textR = radius * 0.68;
                ctx.save();
                ctx.font = i === 0 || i === 6 ? 'bold 18px serif' : '14px serif';
                ctx.fillStyle = markerColor;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(nums[i], cx + textR * Math.cos(angle), cy + textR * Math.sin(angle));
                ctx.restore();
            } else if (watch.markerStyle === 'breguet') {
                const nums = ['12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
                const textR = radius * 0.7;
                ctx.save();
                ctx.font = 'italic 16px serif';
                ctx.fillStyle = markerColor;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(nums[i], cx + textR * Math.cos(angle), cy + textR * Math.sin(angle));
                ctx.restore();
            }

            // Minute markers
            if (watch.markerStyle !== 'arabic' && watch.markerStyle !== 'roman' && watch.markerStyle !== 'breguet') {
                for (let m = 1; m < 5; m++) {
                    const mAngle = baseAngle + (Math.PI * 2 * m / 60);
                    const mInner = radius * 0.8;
                    const mOuter = radius * 0.83;
                    ctx.beginPath();
                    ctx.moveTo(cx + mInner * Math.cos(mAngle), cy + mInner * Math.sin(mAngle));
                    ctx.lineTo(cx + mOuter * Math.cos(mAngle), cy + mOuter * Math.sin(mAngle));
                    ctx.strokeStyle = markerColor;
                    ctx.lineWidth = 1;
                    ctx.globalAlpha = 0.6;
                    ctx.stroke();
                    ctx.globalAlpha = 1;
                }
            }
        }
        ctx.restore();
    }

    _drawNonRoundMarkers(watch, defects, markerColor, lumeColor) {
        const { ctx, cx, cy, radius } = this;
        const markerDefect = defects.find(d => d.id === 'marker_align');

        if (watch.markerStyle === 'roman') {
            const nums = ['XII', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];
            const rw = watch.caseShape === 'square' ? radius * 0.55 : radius * 0.35;
            const rh = watch.caseShape === 'square' ? radius * 0.55 : radius * 0.6;

            for (let i = 0; i < 12; i++) {
                const angle = (Math.PI * 2 * i / 12) - Math.PI / 2;
                let offsetX = 0, offsetY = 0;
                if (markerDefect && markerDefect.affectedMarkers.includes(i)) {
                    offsetX = markerDefect.amount * 0.5;
                    offsetY = markerDefect.amount * 0.3;
                }
                const fontSize = i === 0 || i === 6 ? 17 : (i === 3 || i === 9 ? 15 : 12);
                ctx.save();
                ctx.font = `bold ${fontSize}px serif`;
                ctx.fillStyle = markerColor;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(nums[i], cx + rw * Math.cos(angle) + offsetX, cy + rh * Math.sin(angle) + offsetY);
                ctx.restore();
            }
        } else if (watch.markerStyle === 'arabic-deco') {
            const nums = ['12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
            const rw = watch.caseShape === 'rectangle' ? radius * 0.3 : radius * 0.55;
            const rh = watch.caseShape === 'rectangle' ? radius * 0.62 : radius * 0.55;

            for (let i = 0; i < 12; i++) {
                const angle = (Math.PI * 2 * i / 12) - Math.PI / 2;
                let offsetX = 0;
                if (markerDefect && markerDefect.affectedMarkers.includes(i)) {
                    offsetX = markerDefect.amount * 0.5;
                }
                const fontSize = i === 0 || i === 6 ? 16 : 12;
                ctx.save();
                ctx.font = `bold ${fontSize}px serif`;
                ctx.fillStyle = markerColor;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(nums[i], cx + rw * Math.cos(angle) + offsetX, cy + rh * Math.sin(angle));
                ctx.restore();
            }
        } else {
            // Baton markers for square/rectangle
            const rw = watch.caseShape === 'square' ? radius * 0.65 : radius * 0.4;
            const rh = watch.caseShape === 'square' ? radius * 0.65 : radius * 0.7;

            for (let i = 0; i < 12; i++) {
                const angle = (Math.PI * 2 * i / 12) - Math.PI / 2;
                const outerRw = rw * 1.05;
                const outerRh = rh * 1.05;
                ctx.beginPath();
                ctx.moveTo(cx + rw * Math.cos(angle), cy + rh * Math.sin(angle));
                ctx.lineTo(cx + outerRw * Math.cos(angle), cy + outerRh * Math.sin(angle));
                ctx.strokeStyle = markerColor;
                ctx.lineWidth = i % 3 === 0 ? 3 : 1.5;
                ctx.stroke();
            }
        }
    }

    _drawSubDials(watch, defects) {
        const { ctx, cx, cy, radius } = this;
        const isLight = this._isLightColor(watch.dialColor);
        const subDialColor = isLight ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)';
        const textColor = isLight ? '#555' : '#999';
        const subR = radius * 0.18;

        watch.subDials.forEach(pos => {
            let sx, sy;
            if (pos === 9) { sx = cx - radius * 0.38; sy = cy; }
            else if (pos === 3) { sx = cx + radius * 0.38; sy = cy; }
            else if (pos === 6) { sx = cx; sy = cy + radius * 0.33; }
            else return;

            // Subdial circle
            ctx.beginPath();
            ctx.arc(sx, sy, subR, 0, Math.PI * 2);
            ctx.fillStyle = subDialColor;
            ctx.fill();
            ctx.strokeStyle = isLight ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.15)';
            ctx.lineWidth = 0.5;
            ctx.stroke();

            // Subdial markers
            for (let i = 0; i < 12; i++) {
                const angle = (Math.PI * 2 * i / 12) - Math.PI / 2;
                const inner = subR * 0.75;
                const outer = subR * 0.9;
                ctx.beginPath();
                ctx.moveTo(sx + inner * Math.cos(angle), sy + inner * Math.sin(angle));
                ctx.lineTo(sx + outer * Math.cos(angle), sy + outer * Math.sin(angle));
                ctx.strokeStyle = textColor;
                ctx.lineWidth = i % 3 === 0 ? 1.5 : 0.5;
                ctx.stroke();
            }

            // Subdial hand
            const handAngle = Math.random() * Math.PI * 2 - Math.PI / 2;
            ctx.beginPath();
            ctx.moveTo(sx, sy);
            ctx.lineTo(sx + subR * 0.65 * Math.cos(handAngle), sy + subR * 0.65 * Math.sin(handAngle));
            ctx.strokeStyle = isLight ? '#333' : '#ddd';
            ctx.lineWidth = 1;
            ctx.stroke();
        });
    }

    _drawDateWindow(watch, defects) {
        const { ctx, cx, cy, radius } = this;
        const dateDefect = defects.find(d => d.id === 'date_size');
        let dateScale = 1;
        if (dateDefect) dateScale = 1 + dateDefect.amount * 0.01;

        let dx, dy;
        if (watch.datePosition === 3) { dx = cx + radius * 0.47; dy = cy; }
        else if (watch.datePosition === 6) { dx = cx; dy = cy + radius * 0.4; }
        else return;

        const w = 20 * dateScale;
        const h = 14 * dateScale;

        ctx.save();

        // Date window background
        ctx.fillStyle = '#fff';
        ctx.fillRect(dx - w / 2, dy - h / 2, w, h);

        // Date border
        ctx.strokeStyle = '#999';
        ctx.lineWidth = 1;
        ctx.strokeRect(dx - w / 2, dy - h / 2, w, h);

        // Date text
        ctx.fillStyle = '#222';
        ctx.font = `bold ${11 * dateScale}px sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('28', dx, dy);

        // Cyclops effect
        if (watch.hasCyclops) {
            ctx.beginPath();
            ctx.arc(dx, dy, 14 * dateScale, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255,255,255,0.15)';
            ctx.fill();
            ctx.strokeStyle = 'rgba(255,255,255,0.3)';
            ctx.lineWidth = 0.5;
            ctx.stroke();
        }

        ctx.restore();
    }

    _drawBrandText(watch, defects) {
        const { ctx, cx, cy, radius } = this;
        const textDefect = defects.find(d => d.id === 'text_position');
        const offsetX = textDefect ? textDefect.amount : 0;

        const isLight = this._isLightColor(watch.dialColor);
        const textColor = isLight ? '#333' : '#f5f5f5';

        ctx.save();
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Brand name
        ctx.font = watch.brandFont;
        ctx.fillStyle = textColor;
        ctx.fillText(watch.brand.toUpperCase(), cx + offsetX, cy - radius * 0.35);

        // Model name (smaller)
        ctx.font = `9px ${watch.brandFont.includes('serif') && !watch.brandFont.includes('sans') ? 'serif' : 'sans-serif'}`;
        ctx.globalAlpha = 0.7;
        ctx.fillText(watch.model, cx + offsetX, cy - radius * 0.25);
        ctx.globalAlpha = 1;

        // "SWISS MADE" at bottom
        ctx.font = '7px sans-serif';
        ctx.globalAlpha = 0.5;
        ctx.fillText('SWISS MADE', cx, cy + radius * 0.65);

        ctx.restore();
    }

    _drawHands(watch, defects) {
        const { ctx, cx, cy, radius } = this;
        const handDefect = defects.find(d => d.id === 'hand_length');
        const handLengthMod = handDefect ? handDefect.amount * 0.01 : 0;

        const hourAngle = Math.PI * 2 * (10.2 / 12) - Math.PI / 2;
        const minAngle = Math.PI * 2 * (10 / 60) - Math.PI / 2;

        const isLight = this._isLightColor(watch.dialColor);

        ctx.save();
        ctx.translate(cx, cy);

        // Hour hand
        const hourLen = radius * (0.45 + handLengthMod);
        const hourWidth = 7;
        this._drawSingleHand(hourAngle, hourLen, hourWidth, watch.handColor, watch.handStyle, false, watch);

        // Minute hand
        const minLen = radius * (0.65 - handLengthMod);
        const minWidth = 4;
        this._drawSingleHand(minAngle, minLen, minWidth, watch.handColor, watch.handStyle, true, watch);

        // Center cap
        ctx.beginPath();
        ctx.arc(0, 0, 5, 0, Math.PI * 2);
        ctx.fillStyle = watch.handColor;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(0, 0, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#333';
        ctx.fill();

        ctx.restore();
    }

    _drawSingleHand(angle, length, width, color, style, isMinute, watch) {
        const { ctx } = this;
        ctx.save();
        ctx.rotate(angle + Math.PI / 2);

        ctx.shadowColor = 'rgba(0,0,0,0.3)';
        ctx.shadowBlur = 3;
        ctx.shadowOffsetX = 1;
        ctx.shadowOffsetY = 1;

        if (style === 'mercedes') {
            // Mercedes-style hand (Rolex)
            ctx.beginPath();
            if (!isMinute) {
                // Hour hand with circle
                ctx.moveTo(-width / 2, 10);
                ctx.lineTo(-width / 2, -length * 0.5);
                ctx.arc(0, -length * 0.5, width, Math.PI, 0);
                ctx.lineTo(width / 2, 10);
                ctx.closePath();
                ctx.fillStyle = color;
                ctx.fill();
                // Lume in circle
                ctx.beginPath();
                ctx.arc(0, -length * 0.5, width - 2, 0, Math.PI * 2);
                ctx.fillStyle = watch.lumeColor;
                ctx.globalAlpha = 0.7;
                ctx.fill();
                ctx.globalAlpha = 1;
            } else {
                ctx.beginPath();
                ctx.moveTo(-width / 2, 10);
                ctx.lineTo(-1, -length);
                ctx.lineTo(1, -length);
                ctx.lineTo(width / 2, 10);
                ctx.closePath();
                ctx.fillStyle = color;
                ctx.fill();
            }
        } else if (style === 'dauphine') {
            ctx.beginPath();
            ctx.moveTo(-width / 2, 10);
            ctx.lineTo(0, -length);
            ctx.lineTo(width / 2, 10);
            ctx.closePath();
            // Two-tone dauphine
            ctx.fillStyle = color;
            ctx.fill();
            ctx.strokeStyle = 'rgba(0,0,0,0.2)';
            ctx.lineWidth = 0.5;
            ctx.stroke();
        } else if (style === 'sword') {
            ctx.beginPath();
            ctx.moveTo(-width / 2, 10);
            ctx.lineTo(-width * 0.3, -length * 0.8);
            ctx.lineTo(0, -length);
            ctx.lineTo(width * 0.3, -length * 0.8);
            ctx.lineTo(width / 2, 10);
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.fill();
        } else if (style === 'alpha') {
            ctx.beginPath();
            ctx.moveTo(0, 10);
            ctx.lineTo(-width, -length * 0.1);
            ctx.lineTo(0, -length);
            ctx.lineTo(width, -length * 0.1);
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.fill();
        } else if (style === 'pilot') {
            ctx.beginPath();
            ctx.moveTo(-width / 2, 10);
            ctx.lineTo(-width, -length * 0.15);
            ctx.lineTo(-1, -length);
            ctx.lineTo(1, -length);
            ctx.lineTo(width, -length * 0.15);
            ctx.lineTo(width / 2, 10);
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.fill();
            // Lume strip
            ctx.fillStyle = watch.lumeColor;
            ctx.globalAlpha = 0.7;
            ctx.fillRect(-1.5, -length * 0.85, 3, length * 0.6);
            ctx.globalAlpha = 1;
        } else if (style === 'breguet') {
            ctx.beginPath();
            ctx.moveTo(-width * 0.4, 10);
            ctx.lineTo(-width * 0.3, -length * 0.7);
            // Moon tip
            ctx.arc(0, -length * 0.75, width * 0.8, Math.PI, 0, true);
            ctx.lineTo(width * 0.3, -length * 0.7);
            ctx.lineTo(0, -length);
            ctx.lineTo(-width * 0.3, -length * 0.7);
            ctx.moveTo(width * 0.4, 10);
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.fill();
        } else if (style === 'royal-oak') {
            ctx.beginPath();
            ctx.moveTo(-width / 2, 10);
            ctx.lineTo(-width * 0.6, -length * 0.6);
            ctx.lineTo(-width * 0.2, -length * 0.65);
            ctx.lineTo(0, -length);
            ctx.lineTo(width * 0.2, -length * 0.65);
            ctx.lineTo(width * 0.6, -length * 0.6);
            ctx.lineTo(width / 2, 10);
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.fill();
        } else {
            // Default baton
            ctx.fillStyle = color;
            ctx.fillRect(-width / 2, -length, width, length + 10);
        }

        ctx.restore();
    }

    _drawCrown(watch, defects) {
        const { ctx, cx, cy, radius } = this;
        const crownDefect = defects.find(d => d.id === 'crown_size');
        const crownScale = crownDefect ? 1 + crownDefect.amount * 0.01 : 1;

        const crownW = 14 * crownScale;
        const crownH = 22 * crownScale;

        ctx.save();
        const crownGrad = ctx.createLinearGradient(cx + radius * 1.04, cy - crownH / 2, cx + radius * 1.04, cy + crownH / 2);
        crownGrad.addColorStop(0, '#aaa');
        crownGrad.addColorStop(0.3, '#ddd');
        crownGrad.addColorStop(0.7, '#ccc');
        crownGrad.addColorStop(1, '#999');

        ctx.fillStyle = crownGrad;
        ctx.beginPath();
        ctx.roundRect(cx + radius * 1.02, cy - crownH / 2, crownW, crownH, [0, 3, 3, 0]);
        ctx.fill();

        // Crown knurling
        for (let i = 0; i < 5; i++) {
            const y = cy - crownH / 2 + 3 + (i * crownH / 5);
            ctx.beginPath();
            ctx.moveTo(cx + radius * 1.02 + 2, y);
            ctx.lineTo(cx + radius * 1.02 + crownW - 2, y);
            ctx.strokeStyle = 'rgba(0,0,0,0.15)';
            ctx.lineWidth = 1;
            ctx.stroke();
        }

        // Crown guards
        if (watch.crownGuards) {
            ctx.fillStyle = '#999';
            ctx.beginPath();
            ctx.moveTo(cx + radius * 0.97, cy - crownH * 0.7);
            ctx.lineTo(cx + radius * 1.05, cy - crownH * 0.4);
            ctx.lineTo(cx + radius * 0.97, cy - crownH * 0.4);
            ctx.closePath();
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(cx + radius * 0.97, cy + crownH * 0.7);
            ctx.lineTo(cx + radius * 1.05, cy + crownH * 0.4);
            ctx.lineTo(cx + radius * 0.97, cy + crownH * 0.4);
            ctx.closePath();
            ctx.fill();
        }

        ctx.restore();
    }

    _drawCrystalReflection(watch) {
        const { ctx, cx, cy, radius } = this;
        ctx.save();

        // Clip to dial shape
        ctx.beginPath();
        if (watch.caseShape === 'square') {
            const s = radius * 0.72;
            ctx.roundRect(cx - s, cy - s, s * 2, s * 2, radius * 0.04);
        } else if (watch.caseShape === 'rectangle') {
            const w = radius * 0.47;
            const h = radius * 0.78;
            ctx.roundRect(cx - w, cy - h, w * 2, h * 2, radius * 0.02);
        } else {
            ctx.arc(cx, cy, radius * 0.85, 0, Math.PI * 2);
        }
        ctx.clip();

        // Subtle crystal reflection
        const reflGrad = ctx.createLinearGradient(cx - radius, cy - radius, cx + radius * 0.5, cy + radius * 0.5);
        reflGrad.addColorStop(0, 'rgba(255,255,255,0.06)');
        reflGrad.addColorStop(0.4, 'rgba(255,255,255,0)');
        reflGrad.addColorStop(0.6, 'rgba(255,255,255,0.03)');
        reflGrad.addColorStop(1, 'rgba(255,255,255,0)');

        ctx.fillStyle = reflGrad;
        ctx.fillRect(cx - radius, cy - radius, radius * 2, radius * 2);

        ctx.restore();
    }

    _shiftColor(hex, amount) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        const shift = Math.round(amount);
        return `rgb(${Math.min(255, Math.max(0, r + shift))},${Math.min(255, Math.max(0, g + shift * 0.7))},${Math.min(255, Math.max(0, b - shift * 0.3))})`;
    }

    _isLightColor(hex) {
        if (!hex.startsWith('#')) return false;
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return (r * 299 + g * 587 + b * 114) / 1000 > 128;
    }
}

// ============================================================
// DEFECT GENERATOR
// ============================================================
class DefectGenerator {
    static generate(difficulty, round) {
        const numDefects = Math.min(2 + Math.floor(round / 4), 5);
        const intensity = Math.max(8 - difficulty - Math.floor(round / 3), 2);
        const defects = [];
        const usedTypes = new Set();

        for (let i = 0; i < numDefects; i++) {
            let type;
            do {
                type = DEFECT_TYPES[Math.floor(Math.random() * DEFECT_TYPES.length)];
            } while (usedTypes.has(type.id));
            usedTypes.add(type.id);

            const defect = { ...type };
            switch (type.id) {
                case 'marker_align':
                    defect.amount = (Math.random() > 0.5 ? 1 : -1) * (intensity * 0.5 + Math.random() * intensity * 0.5);
                    defect.affectedMarkers = this._randomMarkers(1 + Math.floor(Math.random() * 2));
                    break;
                case 'dial_color':
                    defect.amount = (Math.random() > 0.5 ? 1 : -1) * (intensity * 2 + Math.random() * intensity * 3);
                    break;
                case 'hand_length':
                    defect.amount = (Math.random() > 0.5 ? 1 : -1) * (intensity * 0.8 + Math.random() * intensity);
                    break;
                case 'text_position':
                    defect.amount = (Math.random() > 0.5 ? 1 : -1) * (intensity * 0.4 + Math.random() * intensity * 0.6);
                    break;
                case 'date_size':
                    defect.amount = (Math.random() > 0.5 ? 1 : -1) * (intensity * 1.5 + Math.random() * intensity);
                    break;
                case 'lume_color':
                    defect.amount = (Math.random() > 0.5 ? 1 : -1) * (intensity * 3 + Math.random() * intensity * 4);
                    break;
                case 'bezel_align':
                    defect.amount = (Math.random() > 0.5 ? 1 : -1) * (intensity * 0.4 + Math.random() * intensity * 0.5);
                    break;
                case 'crown_size':
                    defect.amount = (Math.random() > 0.5 ? 1 : -1) * (intensity * 1.5 + Math.random() * intensity * 2);
                    break;
            }
            defects.push(defect);
        }
        return defects;
    }

    static _randomMarkers(count) {
        const markers = [];
        const available = [1, 2, 4, 5, 7, 8, 10, 11];
        for (let i = 0; i < count; i++) {
            const idx = Math.floor(Math.random() * available.length);
            markers.push(available.splice(idx, 1)[0]);
        }
        return markers;
    }
}

// ============================================================
// SOUND ENGINE (Web Audio API)
// ============================================================
class SoundEngine {
    constructor() {
        this.enabled = true;
        this.ctx = null;
    }

    _init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
    }

    play(type) {
        if (!this.enabled) return;
        try {
            this._init();
            switch (type) {
                case 'correct': this._playCorrect(); break;
                case 'wrong': this._playWrong(); break;
                case 'streak': this._playStreak(); break;
                case 'complete': this._playComplete(); break;
                case 'click': this._playClick(); break;
                case 'reveal': this._playReveal(); break;
            }
        } catch (e) { /* Audio not available */ }
    }

    _playCorrect() {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.frequency.setValueAtTime(523, this.ctx.currentTime);
        osc.frequency.setValueAtTime(659, this.ctx.currentTime + 0.1);
        osc.frequency.setValueAtTime(784, this.ctx.currentTime + 0.2);
        gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.4);
        osc.start(this.ctx.currentTime);
        osc.stop(this.ctx.currentTime + 0.4);
    }

    _playWrong() {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(200, this.ctx.currentTime);
        osc.frequency.setValueAtTime(150, this.ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);
        osc.start(this.ctx.currentTime);
        osc.stop(this.ctx.currentTime + 0.3);
    }

    _playStreak() {
        [523, 659, 784, 1047].forEach((freq, i) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime + i * 0.1);
            gain.gain.setValueAtTime(0.12, this.ctx.currentTime + i * 0.1);
            gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + i * 0.1 + 0.15);
            osc.start(this.ctx.currentTime + i * 0.1);
            osc.stop(this.ctx.currentTime + i * 0.1 + 0.15);
        });
    }

    _playComplete() {
        [523, 659, 784, 1047, 784, 1047, 1319].forEach((freq, i) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime + i * 0.12);
            gain.gain.setValueAtTime(0.12, this.ctx.currentTime + i * 0.12);
            gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + i * 0.12 + 0.2);
            osc.start(this.ctx.currentTime + i * 0.12);
            osc.stop(this.ctx.currentTime + i * 0.12 + 0.2);
        });
    }

    _playClick() {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.frequency.setValueAtTime(800, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);
        osc.start(this.ctx.currentTime);
        osc.stop(this.ctx.currentTime + 0.05);
    }

    _playReveal() {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.frequency.setValueAtTime(400, this.ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(600, this.ctx.currentTime + 0.2);
        gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.25);
        osc.start(this.ctx.currentTime);
        osc.stop(this.ctx.currentTime + 0.25);
    }

    toggle() {
        this.enabled = !this.enabled;
        return this.enabled;
    }
}

// ============================================================
// PARTICLE / CONFETTI SYSTEM
// ============================================================
class ParticleSystem {
    constructor(container) {
        this.container = container;
        this.particles = [];
    }

    burst(x, y, count = 30, type = 'confetti') {
        for (let i = 0; i < count; i++) {
            const p = document.createElement('div');
            p.className = `particle particle-${type}`;

            if (type === 'confetti') {
                const colors = ['#d4af37', '#4CAF50', '#2196F3', '#FF5722', '#9C27B0', '#fff'];
                p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                p.style.width = (Math.random() * 8 + 4) + 'px';
                p.style.height = (Math.random() * 8 + 4) + 'px';
            } else {
                p.style.backgroundColor = type === 'success' ? '#4CAF50' : '#f44336';
                p.style.width = '6px';
                p.style.height = '6px';
                p.style.borderRadius = '50%';
            }

            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 200 + 100;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity - 150;

            p.style.left = x + 'px';
            p.style.top = y + 'px';
            p.style.position = 'fixed';
            p.style.pointerEvents = 'none';
            p.style.zIndex = '10000';
            p.style.transform = `rotate(${Math.random() * 360}deg)`;

            this.container.appendChild(p);

            const startTime = performance.now();
            const duration = 1200 + Math.random() * 600;

            const animate = (now) => {
                const elapsed = (now - startTime) / 1000;
                const progress = (now - startTime) / duration;

                if (progress >= 1) {
                    p.remove();
                    return;
                }

                const nx = x + vx * elapsed;
                const ny = y + vy * elapsed + 400 * elapsed * elapsed;

                p.style.left = nx + 'px';
                p.style.top = ny + 'px';
                p.style.opacity = 1 - progress;
                p.style.transform = `rotate(${Math.random() * 360 + elapsed * 360}deg)`;

                requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
        }
    }

    celebrate() {
        const w = window.innerWidth;
        const h = window.innerHeight;
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                this.burst(Math.random() * w, Math.random() * h * 0.5, 40, 'confetti');
            }, i * 300);
        }
    }
}

// ============================================================
// GAME ENGINE
// ============================================================
class Game {
    constructor() {
        this.renderer = new WatchRenderer(500);
        this.sound = new SoundEngine();
        this.particles = null; // Init after DOM
        this.state = {
            mode: 'classic', // classic, timeAttack, endless
            score: 0,
            round: 1,
            totalRounds: 0,
            correctAnswers: 0,
            streak: 0,
            bestStreak: 0,
            multiplier: 1,
            currentWatch: null,
            genuinePosition: null,
            currentDefects: [],
            usedWatches: [],
            isAnswered: false,
            timer: null,
            timeLeft: 0,
            gameActive: false
        };
        this.highScores = this._loadHighScores();
        this.elements = {};
    }

    init() {
        this._cacheElements();
        this.particles = new ParticleSystem(document.body);
        this._bindEvents();
        this._updateHighScoreDisplay();
        this._showScreen('start');

        // Load sound preference
        const soundPref = localStorage.getItem('watchGame_sound');
        if (soundPref === 'false') {
            this.sound.enabled = false;
            this._updateSoundButton();
        }
    }

    _cacheElements() {
        this.elements = {
            startScreen: document.getElementById('start-screen'),
            gameScreen: document.getElementById('game-screen'),
            resultScreen: document.getElementById('result-screen'),
            score: document.getElementById('score'),
            round: document.getElementById('round'),
            streak: document.getElementById('streak'),
            multiplier: document.getElementById('multiplier'),
            timer: document.getElementById('timer'),
            timerBar: document.getElementById('timer-bar'),
            timerContainer: document.getElementById('timer-container'),
            currentBrand: document.getElementById('current-brand'),
            currentModel: document.getElementById('current-model'),
            photoBadge: document.getElementById('photo-badge'),
            imageLeft: document.getElementById('image-left'),
            imageRight: document.getElementById('image-right'),
            watchLeft: document.getElementById('watch-left'),
            watchRight: document.getElementById('watch-right'),
            feedback: document.getElementById('feedback'),
            feedbackIcon: document.getElementById('feedback-icon'),
            feedbackText: document.getElementById('feedback-text'),
            feedbackDetail: document.getElementById('feedback-detail'),
            defectList: document.getElementById('defect-list'),
            visualTells: document.getElementById('visual-tells'),
            visualTellsSection: document.getElementById('visual-tells-section'),
            expertNote: document.getElementById('expert-note'),
            expertNoteSection: document.getElementById('expert-note-section'),
            learnMoreLink: document.getElementById('learn-more-link'),
            learnMoreSection: document.getElementById('learn-more-section'),
            nextBtn: document.getElementById('next-btn'),
            soundBtn: document.getElementById('sound-btn'),
            progressBar: document.getElementById('progress-bar'),
            progressText: document.getElementById('progress-text'),
            // Result screen
            finalScore: document.getElementById('final-score'),
            finalAccuracy: document.getElementById('final-accuracy'),
            finalStreak: document.getElementById('final-streak'),
            finalRating: document.getElementById('final-rating'),
            ratingStars: document.getElementById('rating-stars'),
            highScoreList: document.getElementById('high-score-list'),
            // Start screen
            bestScoreDisplay: document.getElementById('best-score-display')
        };
    }

    _bindEvents() {
        // Start screen buttons
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const mode = e.currentTarget.dataset.mode;
                this.sound.play('click');
                this.startGame(mode);
            });
        });

        // Watch selection
        this.elements.watchLeft.addEventListener('click', () => this._handleSelection('left'));
        this.elements.watchRight.addEventListener('click', () => this._handleSelection('right'));

        // Next round
        this.elements.nextBtn.addEventListener('click', () => {
            this.sound.play('click');
            this._loadNewRound();
        });

        // Sound toggle
        this.elements.soundBtn.addEventListener('click', () => {
            const enabled = this.sound.toggle();
            localStorage.setItem('watchGame_sound', enabled);
            this._updateSoundButton();
        });

        // Play again
        document.getElementById('play-again-btn').addEventListener('click', () => {
            this.sound.play('click');
            this._showScreen('start');
        });

        // Share
        document.getElementById('share-btn').addEventListener('click', () => {
            this._shareResults();
        });

        // Keyboard support
        document.addEventListener('keydown', (e) => {
            if (!this.state.gameActive) return;
            if (e.key === 'ArrowLeft' || e.key === '1' || e.key === 'a') {
                this._handleSelection('left');
            } else if (e.key === 'ArrowRight' || e.key === '2' || e.key === 'd') {
                this._handleSelection('right');
            } else if (e.key === 'Enter' || e.key === ' ') {
                if (this.state.isAnswered && !this.elements.feedback.classList.contains('hidden')) {
                    this.sound.play('click');
                    this._loadNewRound();
                }
            }
        });
    }

    startGame(mode) {
        this.state = {
            mode,
            score: 0,
            round: 1,
            totalRounds: 0,
            correctAnswers: 0,
            streak: 0,
            bestStreak: 0,
            multiplier: 1,
            currentWatch: null,
            genuinePosition: null,
            currentDefects: [],
            usedWatches: [],
            isAnswered: false,
            timer: null,
            timeLeft: mode === 'timeAttack' ? 90 : 0,
            gameActive: true
        };

        this._showScreen('game');
        this._updateScoreDisplay();

        if (mode === 'timeAttack') {
            this.elements.timerContainer.classList.remove('hidden');
            this._startTimer();
        } else {
            this.elements.timerContainer.classList.add('hidden');
        }

        this._loadNewRound();
    }

    _loadNewRound() {
        const { state, elements } = this;
        state.isAnswered = false;

        // Reset UI
        elements.feedback.classList.add('hidden');
        elements.watchLeft.classList.remove('correct', 'incorrect', 'disabled', 'selected');
        elements.watchRight.classList.remove('correct', 'incorrect', 'disabled', 'selected');
        elements.watchLeft.style.pointerEvents = '';
        elements.watchRight.style.pointerEvents = '';

        // Get available watches
        let availableWatches = watchDatabase.filter(w => !state.usedWatches.includes(w));

        if (state.mode === 'endless') {
            if (availableWatches.length === 0) {
                state.usedWatches = [];
                availableWatches = [...watchDatabase];
            }
        } else if (state.mode === 'classic' && availableWatches.length === 0) {
            this._endGame();
            return;
        } else if (state.mode === 'timeAttack' && availableWatches.length === 0) {
            state.usedWatches = [];
            availableWatches = [...watchDatabase];
        }

        // Select random watch
        const randomIndex = Math.floor(Math.random() * availableWatches.length);
        state.currentWatch = availableWatches[randomIndex];
        state.usedWatches.push(state.currentWatch);

        // Randomly position genuine
        state.genuinePosition = Math.random() < 0.5 ? 'left' : 'right';

        const watch = state.currentWatch;
        const genuineEl = state.genuinePosition === 'left' ? elements.imageLeft : elements.imageRight;
        const replicaEl = state.genuinePosition === 'left' ? elements.imageRight : elements.imageLeft;

        // Reset any previous CSS filters/transforms
        elements.imageLeft.style.filter = '';
        elements.imageLeft.style.transform = '';
        elements.imageRight.style.filter = '';
        elements.imageRight.style.transform = '';
        elements.watchLeft.classList.remove('loading-image');
        elements.watchRight.classList.remove('loading-image');

        if (watch.imageUrl) {
            // Use real photo with CSS-based defects
            const imageDefects = this._generateImageDefects(watch.difficulty, state.round);
            state.currentDefects = imageDefects.defectDescriptions;

            // Show loading state
            elements.watchLeft.classList.add('loading-image');
            elements.watchRight.classList.add('loading-image');

            // Set genuine image (no modifications)
            genuineEl.onload = () => {
                genuineEl.closest('.watch-option').classList.remove('loading-image');
            };
            genuineEl.onerror = () => {
                // Fallback to canvas on load failure (genuine = no defects)
                this._fallbackToCanvas(watch, false, [], genuineEl);
            };
            genuineEl.src = watch.imageUrl;

            // Set replica image (same photo, CSS defects applied)
            replicaEl.style.filter = imageDefects.filter;
            replicaEl.style.transform = imageDefects.transform;
            replicaEl.onload = () => {
                replicaEl.closest('.watch-option').classList.remove('loading-image');
            };
            replicaEl.onerror = () => {
                // Fallback to canvas on load failure (replica = with defects)
                state.currentDefects = DefectGenerator.generate(watch.difficulty, state.round);
                this._fallbackToCanvas(watch, true, state.currentDefects, replicaEl);
            };
            replicaEl.src = watch.imageUrl;
        } else {
            // Fallback: use canvas renderer
            genuineEl.onload = null;
            genuineEl.onerror = null;
            replicaEl.onload = null;
            replicaEl.onerror = null;
            state.currentDefects = DefectGenerator.generate(watch.difficulty, state.round);
            const genuineImg = this.renderer.render(watch, []);
            const replicaImg = this.renderer.render(watch, state.currentDefects);
            genuineEl.src = genuineImg;
            replicaEl.src = replicaImg;
        }

        // Update brand info
        elements.currentBrand.textContent = state.currentWatch.brand;
        elements.currentModel.textContent = state.currentWatch.model;
        elements.photoBadge.classList.toggle('hidden', !watch.imageUrl);

        // Update progress
        this._updateProgress();
        this._updateScoreDisplay();

        // Entrance animation
        elements.watchLeft.style.animation = 'none';
        elements.watchRight.style.animation = 'none';
        requestAnimationFrame(() => {
            elements.watchLeft.style.animation = 'slideInLeft 0.4s ease-out';
            elements.watchRight.style.animation = 'slideInRight 0.4s ease-out';
        });
    }

    _handleSelection(position) {
        if (this.state.isAnswered || !this.state.gameActive) return;
        this.state.isAnswered = true;

        const isCorrect = position === this.state.genuinePosition;
        this.state.totalRounds++;

        if (isCorrect) {
            this.state.streak++;
            if (this.state.streak > this.state.bestStreak) {
                this.state.bestStreak = this.state.streak;
            }
            this._updateMultiplier();
            const points = Math.round(100 * this.state.multiplier);
            this.state.score += points;
            this.state.correctAnswers++;

            this.sound.play('correct');
            if (this.state.streak > 0 && this.state.streak % 3 === 0) {
                setTimeout(() => this.sound.play('streak'), 300);
            }

            // Particle burst
            const rect = this.elements[position === 'left' ? 'watchLeft' : 'watchRight'].getBoundingClientRect();
            this.particles.burst(rect.left + rect.width / 2, rect.top + rect.height / 2, 20, 'success');
        } else {
            this.state.streak = 0;
            this.state.multiplier = 1;
            this.sound.play('wrong');

            const rect = this.elements[position === 'left' ? 'watchLeft' : 'watchRight'].getBoundingClientRect();
            this.particles.burst(rect.left + rect.width / 2, rect.top + rect.height / 2, 10, 'error');
        }

        // Visual feedback
        const { watchLeft, watchRight } = this.elements;
        watchLeft.style.pointerEvents = 'none';
        watchRight.style.pointerEvents = 'none';

        if (isCorrect) {
            this.elements[position === 'left' ? 'watchLeft' : 'watchRight'].classList.add('correct', 'selected');
            this.elements[position === 'left' ? 'watchRight' : 'watchLeft'].classList.add('disabled');
        } else {
            this.elements[position === 'left' ? 'watchLeft' : 'watchRight'].classList.add('incorrect', 'selected');
            const correctSide = this.state.genuinePosition === 'left' ? 'watchLeft' : 'watchRight';
            this.elements[correctSide].classList.add('correct');
        }

        this._showFeedback(isCorrect);
        this.state.round++;
        this._updateScoreDisplay();
    }

    _showFeedback(isCorrect) {
        const { elements, state } = this;
        const watch = state.currentWatch;
        elements.feedback.classList.remove('hidden', 'correct', 'incorrect');

        if (isCorrect) {
            elements.feedback.classList.add('correct');
            elements.feedbackIcon.textContent = state.streak >= 3 ? '🔥' : '✓';
            const streakText = state.streak >= 3 ? ` ${state.streak}x Streak!` : '';
            elements.feedbackText.textContent = `Correct!${streakText}`;
            const points = Math.round(100 * state.multiplier);
            elements.feedbackDetail.textContent = `+${points} points | ${watch.brand} ${watch.model} authenticated.`;

            if (state.multiplier > 1) {
                elements.feedbackDetail.textContent += ` (${state.multiplier}x multiplier!)`;
            }
        } else {
            elements.feedback.classList.add('incorrect');
            elements.feedbackIcon.textContent = '✗';
            elements.feedbackText.textContent = 'Not Quite!';
            elements.feedbackDetail.textContent = watch.hints;
        }

        // Show defects found
        const defectListEl = elements.defectList;
        defectListEl.innerHTML = '';
        state.currentDefects.forEach(d => {
            const li = document.createElement('li');
            li.textContent = d.description;
            defectListEl.appendChild(li);
        });

        // Show visual tells (real authentication knowledge)
        const tellsEl = elements.visualTells;
        tellsEl.innerHTML = '';
        if (watch.visualTells && watch.visualTells.length > 0) {
            elements.visualTellsSection.classList.remove('hidden');
            watch.visualTells.forEach(tell => {
                const li = document.createElement('li');
                li.textContent = tell;
                tellsEl.appendChild(li);
            });
        } else {
            elements.visualTellsSection.classList.add('hidden');
        }

        // Show expert note
        if (watch.expertNote) {
            elements.expertNote.textContent = watch.expertNote;
            elements.expertNoteSection.classList.remove('hidden');
        } else {
            elements.expertNoteSection.classList.add('hidden');
        }

        // Show learn more link
        if (watch.sources && watch.sources.genuine) {
            elements.learnMoreLink.href = watch.sources.genuine;
            elements.learnMoreSection.classList.remove('hidden');
        } else {
            elements.learnMoreSection.classList.add('hidden');
        }

        this.sound.play('reveal');

        // Auto-advance in time attack
        if (state.mode === 'timeAttack') {
            setTimeout(() => {
                if (state.gameActive && state.isAnswered) {
                    this._loadNewRound();
                }
            }, 1500);
        }
    }

    _generateImageDefects(difficulty, round) {
        // Select 2-4 image defects based on difficulty
        const count = Math.min(2 + Math.floor(difficulty / 2), 4);
        const intensity = Math.min(difficulty + Math.floor(round / 4), 4);

        // Shuffle and pick defects
        const shuffled = [...IMAGE_DEFECT_TYPES].sort(() => Math.random() - 0.5);
        const selected = shuffled.slice(0, count);

        // Build combined CSS filter and transform strings
        const filters = [];
        const transforms = [];
        const defectDescriptions = [];

        selected.forEach(defect => {
            const f = defect.getFilter(intensity);
            const t = defect.getTransform(intensity);
            if (f) filters.push(f);
            if (t) transforms.push(t);
            defectDescriptions.push({
                id: defect.id,
                label: defect.label,
                description: defect.description
            });
        });

        return {
            filter: filters.join(' '),
            transform: transforms.join(' '),
            defectDescriptions
        };
    }

    _fallbackToCanvas(watch, isReplica, defects, imgEl) {
        const canvasDefects = isReplica
            ? (defects && defects.length > 0 ? defects : DefectGenerator.generate(watch.difficulty, this.state.round))
            : [];
        const imgData = this.renderer.render(watch, canvasDefects);
        imgEl.style.filter = '';
        imgEl.style.transform = '';
        imgEl.onload = null;
        imgEl.onerror = null;
        imgEl.src = imgData;
        imgEl.closest('.watch-option').classList.remove('loading-image');
    }

    _updateMultiplier() {
        if (this.state.streak >= 8) this.state.multiplier = 5;
        else if (this.state.streak >= 5) this.state.multiplier = 3;
        else if (this.state.streak >= 3) this.state.multiplier = 2;
        else this.state.multiplier = 1;
    }

    _updateScoreDisplay() {
        const { elements, state } = this;
        elements.score.textContent = state.score;
        elements.round.textContent = state.mode === 'classic' ? `${state.round}/${watchDatabase.length}` : state.round;
        elements.streak.textContent = state.streak;
        elements.multiplier.textContent = `${state.multiplier}x`;
        elements.multiplier.classList.toggle('active', state.multiplier > 1);
    }

    _updateProgress() {
        if (this.state.mode !== 'classic') return;
        const progress = ((this.state.round - 1) / watchDatabase.length) * 100;
        this.elements.progressBar.style.width = `${progress}%`;
        this.elements.progressText.textContent = `${this.state.round - 1} of ${watchDatabase.length}`;
    }

    _startTimer() {
        this.elements.timer.textContent = this.state.timeLeft;
        this.state.timer = setInterval(() => {
            this.state.timeLeft--;
            this.elements.timer.textContent = this.state.timeLeft;
            this.elements.timerBar.style.width = `${(this.state.timeLeft / 90) * 100}%`;

            if (this.state.timeLeft <= 10) {
                this.elements.timerContainer.classList.add('urgent');
            }

            if (this.state.timeLeft <= 0) {
                this._endGame();
            }
        }, 1000);
    }

    _endGame() {
        this.state.gameActive = false;
        if (this.state.timer) {
            clearInterval(this.state.timer);
        }

        this.sound.play('complete');
        this.particles.celebrate();

        // Calculate results
        const accuracy = this.state.totalRounds > 0
            ? Math.round((this.state.correctAnswers / this.state.totalRounds) * 100)
            : 0;

        // Rating
        let rating, stars;
        if (accuracy >= 90 && this.state.bestStreak >= 5) {
            rating = 'Master Horologist';
            stars = 5;
        } else if (accuracy >= 80) {
            rating = 'Expert Authenticator';
            stars = 4;
        } else if (accuracy >= 65) {
            rating = 'Skilled Collector';
            stars = 3;
        } else if (accuracy >= 50) {
            rating = 'Watch Enthusiast';
            stars = 2;
        } else {
            rating = 'Apprentice';
            stars = 1;
        }

        // Update result screen
        this.elements.finalScore.textContent = this.state.score;
        this.elements.finalAccuracy.textContent = `${accuracy}%`;
        this.elements.finalStreak.textContent = this.state.bestStreak;
        this.elements.finalRating.textContent = rating;
        this.elements.ratingStars.innerHTML = '<span class="star filled">&#9733;</span>'.repeat(stars) +
            '<span class="star">&#9733;</span>'.repeat(5 - stars);

        // Save high score
        this._saveHighScore(this.state.score, accuracy, this.state.mode);

        this._showScreen('result');
    }

    _saveHighScore(score, accuracy, mode) {
        const scores = this.highScores;
        scores.push({
            score,
            accuracy,
            mode,
            date: new Date().toLocaleDateString()
        });
        scores.sort((a, b) => b.score - a.score);
        this.highScores = scores.slice(0, 10);
        localStorage.setItem('watchGame_highScores', JSON.stringify(this.highScores));
        this._updateHighScoreDisplay();
    }

    _loadHighScores() {
        try {
            return JSON.parse(localStorage.getItem('watchGame_highScores')) || [];
        } catch {
            return [];
        }
    }

    _updateHighScoreDisplay() {
        const list = this.elements.highScoreList;
        if (!list) return;
        list.innerHTML = '';

        if (this.highScores.length === 0) {
            list.innerHTML = '<li class="empty">No scores yet. Play to set a record!</li>';
            return;
        }

        this.highScores.slice(0, 5).forEach((s, i) => {
            const li = document.createElement('li');
            li.innerHTML = `<span class="rank">#${i + 1}</span>
                <span class="hs-score">${s.score}</span>
                <span class="hs-accuracy">${s.accuracy}%</span>
                <span class="hs-mode">${s.mode}</span>`;
            list.appendChild(li);
        });

        // Update best score on start screen
        if (this.elements.bestScoreDisplay && this.highScores.length > 0) {
            this.elements.bestScoreDisplay.textContent = this.highScores[0].score;
        }
    }

    _updateSoundButton() {
        this.elements.soundBtn.textContent = this.sound.enabled ? 'Sound: ON' : 'Sound: OFF';
        this.elements.soundBtn.classList.toggle('off', !this.sound.enabled);
    }

    _showScreen(screen) {
        this.elements.startScreen.classList.toggle('hidden', screen !== 'start');
        this.elements.gameScreen.classList.toggle('hidden', screen !== 'game');
        this.elements.resultScreen.classList.toggle('hidden', screen !== 'result');
    }

    _shareResults() {
        const accuracy = this.state.totalRounds > 0
            ? Math.round((this.state.correctAnswers / this.state.totalRounds) * 100)
            : 0;

        const text = `Watch Authenticity Challenge\n` +
            `Score: ${this.state.score} | Accuracy: ${accuracy}%\n` +
            `Best Streak: ${this.state.bestStreak}\n` +
            `Mode: ${this.state.mode}\n` +
            `Can you beat my score?`;

        if (navigator.share) {
            navigator.share({ title: 'Watch Authenticity Challenge', text }).catch(() => {});
        } else if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                const btn = document.getElementById('share-btn');
                btn.textContent = 'Copied!';
                setTimeout(() => { btn.textContent = 'Share Results'; }, 2000);
            });
        }
    }
}

// ============================================================
// INITIALIZE
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    const game = new Game();
    game.init();
});
