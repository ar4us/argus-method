/**
 * ARGUS SYSTEM — TikTok Ultra Quality Optimizer (v7.5 Hybrid)
 * WebAssembly FFmpeg Container Remuxer combined with
 * client-side brand patcher, matrix shear, and edit list injection.
 */

// ─── TRANSLATION DICTIONARY ─────────────────────────────────────────────────

const TRANSLATIONS = {
    en: {
        documentTitle: "ARGUS | TikTok Quality Optimizer",
        "hero-tag": "OPTIMIZATION_PROTOCOL // ARGUS_V7.5_HYBRID",
        "hero-title": 'TikTok Quality <span class="accent-text italic">Optimizer.</span>',
        "hero-desc": "4K & 120FPS bypass logic for professional creators. Fast MP4 container injection with zero re-encoding loss.",
        "method-title": "ARGUS PROTOCOL BYPASS",
        "method-desc": "Consolidated high-fidelity track manipulation. Rewrites structural headers and injects randomized transformation shear bounds to force maximum bitrate preservation.",
        "preset-label": "Video Preset:",
        "opt-vertical": "Vertical (9:16)",
        "opt-square": "Square (1:1)",
        "opt-landscape": "Landscape (16:9)",
        "method-recommend": "Recommended: 1080p 60FPS (Direct Stream)",
        "warning-title": "CRITICAL SAFETY WARNING",
        "warning-desc": 'Forcing <span class="text-white font-medium">4K 120FPS</span> metadata may trigger duplicate spam detection on micro-servers, causing shadowbans. Stick to recommended values for natural reach.',
        "drop-title": "Select or drag file to optimize",
        "drop-subtitle": "Argus Container Optimization · Zero Re-encoding",
        "progress-indicator-text": "SYSTEM_OPTIMIZING...",
        "terminal-title": "LOG_CONSOLE",
        "terminal-welcome": "> Awaiting media payload injection...",
        "status-standby": "Standby",
        "status-optimizing": "Optimizing",
        "status-ready": "Ready",
        "download-success-title": "> INJECTION COMPLETED SUCCESSFULLY",
        "btn-save": "Save Video",
        "btn-reset": "Optimize Another",
        "auto-detect-badge": "AUTO_DETECT",
        
        // Dynamic Terminal Logs
        logInit: "Initializing Argus Method: ",
        logRead: "Reading binary stream...",
        logPreset: "Active profile layout: ",
        logApply: "Applying Argus Method Bypass protocols...",
        logInjected: "✓ Injected Argus Method [Hash Jitter: ",
        logComplete: "Process complete in ",
        logReady: "Ready to Post ✓",
        logAwaiting: "System ready. Awaiting user action.",
        logFailed: "Optimization Failed.",
        logError: "Fatal Error: ",
        
        // Advanced Demuxer logs
        logScan: "Scanning MP4 container...",
        logMissingMoov: "Error: Missing moov/mdat payload.",
        logAlreadyPatched: "Warning: Video already patched (ELST signature detected).",
        logBrand: "✓ Patched brand stream: isom",
        logMetaStrip: "✓ Extracted container metadata",
        logTrakFound: "✓ Video track identified",
        logCodec: "✓ Codec detected: ",
        logTimescale: "✓ Timescale normalized: ",
        logSamples: "✓ Sample index: ",
        logStripNals: "Scanning for codec fingerprint NALs...",
        logNalsRemoved: "✓ Stripped fingerprint NALs: ",
        logFaststart: "✓ Injected Faststart (moov → front)",
        logRecalc: "✓ Chunk offsets recalculated",
        logMatrixPatched: "✓ Cybernetic Trick Shear matrix applied [Shear: ",
        logBtrtPatched: "✓ Stream bitrate patched: ",
        logElstPatched: "✓ Edit list (ELST) patched"
    },
    ar: {
        documentTitle: "آرغوس | نظام تحسين جودة تيك توك",
        "hero-tag": "بروتوكول التحسين // نظام_آرغوس_V7.5_هجين",
        "hero-title": 'مُحسِّن جودة <span class="accent-text italic">تيك توك.</span>',
        "hero-desc": "تخطي قيود الجودة لـ 4K و 120FPS للمبدعين المحترفين. حقن فوري في حاويات MP4 بدون أي خسارة في معالجة الفيديو.",
        "method-title": "تجاوز بروتوكول آرغوس",
        "method-desc": "تعديل المسار الصوتي والمرئي عالي الدقة. يقوم بإعادة كتابة الترويسات الهيكلية وحقن مصفوفات إزاحة عشوائية لفرض الحفاظ على أقصى معدل نقل للبيانات.",
        "preset-label": "أبعاد الفيديو:",
        "opt-vertical": "عمودي (9:16)",
        "opt-square": "مربع (1:1)",
        "opt-landscape": "أفقي (16:9)",
        "method-recommend": "موصى به: 1080p 60FPS (تدفق مباشر)",
        "warning-title": "تحذير أمان حرج",
        "warning-desc": 'قد يؤدي فرض بيانات <span class="text-white font-medium">4K 120FPS</span> إلى إطلاق آليات كشف المحتوى المتكرر على الخوادم، مما يسبب حظرًا خفيًا (Shadowban). التزم بالقيم الموصى بها.',
        "drop-title": "اختر ملف فيديو أو اسحبه هنا لتحسينه",
        "drop-subtitle": "تحسين حاوية آرغوس · بدون إعادة ترميز الفيديوهات",
        "progress-indicator-text": "جاري تحسين الفيديو...",
        "terminal-title": "وحدة التحكم والتقارير",
        "terminal-welcome": "> في انتظار إدخال ملف الفيديو للبدء...",
        "status-standby": "في الانتظار",
        "status-optimizing": "جاري التحسين",
        "status-ready": "مستعد",
        "download-success-title": "> اكتملت عملية الحقن والتحسين بنجاح",
        "btn-save": "حفظ الفيديو المعالج",
        "btn-reset": "تحسين فيديو آخر",
        "auto-detect-badge": "كشف تلقائي",
        
        // Dynamic Terminal Logs
        logInit: "بدء تهيئة بروتوكول آرغوس: ",
        logRead: "جاري قراءة البيانات الثنائية للملف...",
        logPreset: "نمط أبعاد الفيديو النشط: ",
        logApply: "جاري تطبيق خوارزمية تخطي حدود الضغط...",
        logInjected: "✓ تم حقن تشفير آرغوس [تذبذب البصمة: ",
        logComplete: "اكتملت العملية بنجاح في غضون ",
        logReady: "جاهز للنشر الآن ✓",
        logAwaiting: "النظام مستعد. في انتظار تحميل الملف.",
        logFailed: "فشلت عملية التحسين.",
        logError: "خطأ فادح: ",

        // Advanced Demuxer logs
        logScan: "جاري مسح حاوية MP4...",
        logMissingMoov: "خطأ: مفقود بيانات moov/mdat الأساسية.",
        logAlreadyPatched: "تحذير: تم تطبيق الترقيع مسبقاً (تم كشف توقيع ELST).",
        logBrand: "✓ تم ترقيع نمط الفيديو: isom",
        logMetaStrip: "✓ تم تجريد الحاوية من الميتاداتا الزائدة",
        logTrakFound: "✓ تم تحديد مسار الفيديو",
        logCodec: "✓ الكودك المكتشف: ",
        logTimescale: "✓ تم توحيد المقياس الزمني: ",
        logSamples: "✓ فهرس العينات: ",
        logStripNals: "جاري البحث عن بصمات الكودك الافتراضية NALs...",
        logNalsRemoved: "✓ تم حذف بصمات الفيديو الرقمية: ",
        logFaststart: "✓ تم تطبيق ميزة البداية السريعة Faststart",
        logRecalc: "✓ تم إعادة حساب إزاحات الفيديو بنجاح",
        logMatrixPatched: "✓ تم تطبيق مصفوفة الإزاحة الخادعة [إزاحة: ",
        logBtrtPatched: "✓ تم ترقيع معدل نقل البيانات: ",
        logElstPatched: "✓ تم ترقيع قائمة التعديل (ELST)"
    }
};

let currentLang = 'en';

// ─── LANGUAGE TOGGLE LOGIC ──────────────────────────────────────────────────

function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    currentLang = lang;
    localStorage.setItem('argus_lang', lang);

    // Update html attributes
    const htmlEl = document.documentElement;
    htmlEl.setAttribute('lang', lang);
    htmlEl.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Toggle active state on buttons
    const btnEn = document.getElementById('lang-en');
    const btnAr = document.getElementById('lang-ar');
    if (btnEn) btnEn.classList.toggle('active', lang === 'en');
    if (btnAr) btnAr.classList.toggle('active', lang === 'ar');

    // Update static elements
    const dict = TRANSLATIONS[lang];
    document.title = dict.documentTitle;

    for (const [key, value] of Object.entries(dict)) {
        const el = document.getElementById(key);
        if (el) {
            if (key === 'hero-title' || key === 'warning-desc') {
                el.innerHTML = value; // Preserve internal tags
            } else {
                el.textContent = value;
            }
        }
    }

    // Update dynamic terminal text if on standby
    const welcomeLog = document.getElementById('terminal-welcome');
    if (welcomeLog) {
        welcomeLog.textContent = dict['terminal-welcome'];
    }

    const statusIndicator = document.getElementById('status-text');
    if (statusIndicator && !argusIsProcessing) {
        statusIndicator.textContent = dict['status-standby'];
    }
}

// ─── BINARY STREAM HELPERS ──────────────────────────────────────────────────

function be32(v, o) { return v.getUint32(o, false); }
function wr32(v, o, val) { v.setUint32(o, val >>> 0, false); }
function be64(v, o) {
    if (typeof v.getBigUint64 === 'function') return Number(v.getBigUint64(o, false));
    return v.getUint32(o, false) * 0x100000000 + v.getUint32(o + 4, false);
}
function wr64(v, o, val) {
    if (typeof v.setBigUint64 === 'function') { v.setBigUint64(o, BigInt(val), false); return; }
    v.setUint32(o, Math.floor(val / 0x100000000), false);
    v.setUint32(o + 4, val % 0x100000000, false);
}
function ascii4(u8, o) { return String.fromCharCode(u8[o], u8[o+1], u8[o+2], u8[o+3]); }

function findSig(u8, s0, s1, s2, s3) {
    for (let i = 0; i <= u8.length - 4; i++) {
        if (u8[i] === s0 && u8[i+1] === s1 && u8[i+2] === s2 && u8[i+3] === s3) return i;
    }
    return -1;
}

// ─── MP4 CONTAINER BOX PARSER ────────────────────────────────────────────────

const CONTAINER_BOXES = new Set([
    'moov','trak','mdia','minf','stbl','edts',\n    'udta','meta','ilst','dinf','stsd','avc1','avc3','hvc1','hev1','mp4a'\n]);

function parseBoxes(u8, view, start, end) {
    const out = [];
    let p = start;
    while (p + 8 <= end) {
        let size = be32(view, p);
        const type = ascii4(u8, p + 4);
        let header = 8;
        if (size === 1) { if (p + 16 > end) break; size = be64(view, p + 8); header = 16; }
        else if (size === 0) { size = end - p; }
        if (size < header || p + size > end) break;

        const box = { type, start: p, header, end: p + size, children: [] };
        let cs = p + header;
        if (type === 'meta') cs += 4;
        else if (type === 'stsd') cs += 8;
        else if (type === 'avc1' || type === 'avc3' || type === 'hvc1' || type === 'hev1') cs = p + header + 78;
        else if (type === 'mp4a') cs = p + header + 28;
        if (CONTAINER_BOXES.has(type) && cs < p + size) box.children = parseBoxes(u8, view, cs, p + size);
        out.push(box);
        p += size;
    }
    return out;
}

function walkBoxes(boxes, fn) { for (const b of boxes) { fn(b); walkBoxes(b.children, fn); } }

function findPath(root, path) {
    let cur = [root];
    for (const t of path) { const n = []; for (const c of cur) n.push(...c.children.filter(x => x.type === t)); cur = n; }
    return cur;
}

// ─── CODEC DETECTOR ──────────────────────────────────────────────────────────

function detectCodec(videoTrak) {
    const stsd = findPath(videoTrak, ['mdia','minf','stbl','stsd'])[0];
    if (!stsd) return 'unknown';
    for (const c of stsd.children) {
        if (c.type === 'avc1' || c.type === 'avc3') return 'h264';
        if (c.type === 'hvc1' || c.type === 'hev1') return 'hevc';
    }
    return 'unknown';
}

// ─── CYBERNETIC TRICK SHEAR MATRIX BYPASS ────────────────────────────────────

function patchContainerMatrices(u8, view, preset, dict, log) {
    const targets = [
        [0x6D, 0x76, 0x68, 0x64], // 'mvhd'
        [0x74, 0x6B, 0x68, 0x64]  // 'tkhd'
    ];
    
    let patchedCount = 0;
    
    targets.forEach(sig => {
        let pos = 0;
        while (true) {
            let foundPos = -1;
            for (let i = pos; i <= u8.length - 4; i++) {
                if (u8[i] === sig[0] && u8[i+1] === sig[1] && u8[i+2] === sig[2] && u8[i+3] === sig[3]) {
                    foundPos = i;
                    break;
                }
            }
            if (foundPos === -1) break;
            
            const start = foundPos - 4;
            const size = be32(view, start);
            const version = u8[start + 8];
            
            const matrixOffset = version === 0 ? 48 : 60;
            const writeOffset = start + matrixOffset;
            
            if (writeOffset + 36 <= u8.length) {
                let shearX = -6111;
                let shearY = -15088;
                if (preset === 'square') {
                    shearX = -150;
                    shearY = -300;
                } else if (preset === 'landscape') {
                    shearX = -800;
                    shearY = -400;
                }
                
                const jitterX = Math.floor(Math.random() * 100) - 50; 
                const jitterY = Math.floor(Math.random() * 100) - 50;
                
                const orig = [];
                for (let i = 0; i < 9; i++) {
                    orig[i] = view.getInt32(writeOffset + (i * 4), false);
                }
                
                const m = [
                    orig[0]/65536, orig[1]/65536, orig[2]/1073741824,
                    orig[3]/65536, orig[4]/65536, orig[5]/1073741824,
                    orig[6]/65536, orig[7]/65536, orig[8]/1073741824
                ];
                
                const t = [
                    1.0, (shearX + jitterX)/65536, 0,
                    (shearY + jitterY)/65536, 1.0, 0,
                    0, 0, 1.0
                ];
                
                const r = [0,0,0, 0,0,0, 0,0,0];
                for (let row = 0; row < 3; row++) {
                    for (let col = 0; col < 3; col++) {
                        r[row*3 + col] = t[row*3 + 0]*m[0 + col] + t[row*3 + 1]*m[3 + col] + t[row*3 + 2]*m[6 + col];
                    }
                }
                
                const finalMatrix = [
                    Math.round(r[0]*65536), Math.round(r[1]*65536), Math.round(r[2]*1073741824),
                    Math.round(r[3]*65536), Math.round(r[4]*65536), Math.round(r[5]*1073741824),
                    Math.round(r[6]*65536), Math.round(r[7]*65536), Math.round(r[8]*1073741824)
                ];
                
                for (let i = 0; i < 9; i++) {
                    view.setInt32(writeOffset + (i * 4), finalMatrix[i], false);
                }
                
                patchedCount++;
            }
            pos = foundPos + 4;
        }
    });
    
    let shearX = -6111;
    let shearY = -15088;
    if (preset === 'square') {
        shearX = -150;
        shearY = -300;
    } else if (preset === 'landscape') {
        shearX = -800;
        shearY = -400;
    }
    log.push(`${dict.logMatrixPatched}${shearX}, ${shearY}]`);
    return patchedCount > 0;
}

function patchBtrt(u8, view, bitrate) {
    const pos = findSig(u8, 0x62,0x74,0x72,0x74);
    if (pos < 4) return false;
    const start = pos - 4;
    if (be32(view, start) !== 20) return false;
    wr32(view, start + 12, bitrate);
    wr32(view, start + 16, bitrate);
    return true;
}

function patchElst(u8) {
    const sig = [0x65,0x6C,0x73,0x74, 0x00,0x00,0x00,0x00];
    for (let i = 0; i <= u8.length - 12; i++) {
        let m = true;
        for (let j = 0; j < 8; j++) { if (u8[i+j] !== sig[j]) { m = false; break; } }
        if (m) { u8[i+8]=0x10; u8[i+9]=0x00; u8[i+10]=0x00; u8[i+11]=0x01; return true; }
    }
    return false;
}

// ─── APPLICATION MAIN DELEGATION ─────────────────────────────────────────────

async function processUploadedFile(file) {
    // Left as baseline for modification
}

// ─── INITIALIZATION ──────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    // Left as baseline for modification
});
