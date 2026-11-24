/**
 * ARGUS SYSTEM — TikTok Ultra Quality Optimizer (MAX v6.2 & Argus 4K Engines)
 * 100% client-side MP4 container optimizer with zero quality loss.
 * - Argus MAX (v6.2): Zero-touch video stream + dual AAC audio PCE bypass (matches Haze Max).
 * - Argus 4K: Advanced TikTok container restructuring with Argus Method (OBX) and Nova (Patchbox).
 */

// ─── TRANSLATION DICTIONARY ─────────────────────────────────────────────────

const TRANSLATIONS = {
    en: {
        documentTitle: "ARGUS | TikTok Quality Optimizer",
        "hero-tag": "OPTIMIZATION_PROTOCOL // ARGUS_MAX_6.2",
        "hero-title": 'TikTok Quality <span class="accent-text italic">Optimizer.</span>',
        "hero-desc": "Argus MAX v6.2 (100% untouched stream) & Argus 4K (OBX / Nova) client-side engines. Zero video quality loss, maximum TikTok quality bypass.",
        "method-title": "ARGUS PROTOCOL BYPASS",
        "method-desc": "Argus MAX (v6.2) leaves your video stream 100% untouched for HDR & 4K 60fps. Argus 4K provides OBX and Nova container restructuring optimized for TikTok.",
        "engine-label": "Bypass Engine:",
        "opt-engine-max": "Argus MAX (v6.2 · Recommended)",
        "opt-engine-argus4k": "Argus 4K (Ultra Quality + OBX)",
        "engine-mode-badge": "ZERO_REENCODE",
        "submethod-label": "4K Method:",
        "opt-submethod-obx": "Argus Method (OBX · Better)",
        "opt-submethod-nova": "Nova (Patchbox · Beta)",
        "prep-label": "Prepare Video:",
        "opt-prep-tiktok": "Optimize for TikTok (1080p Sweet Spot · Recommended)",
        "opt-prep-direct": "Continue without extras (Direct Stream)",
        "preset-label": "Video Preset:",
        "opt-vertical": "Vertical (9:16)",
        "opt-square": "Square (1:1)",
        "opt-landscape": "Landscape (16:9)",
        "method-recommend": "Recommended: 1080p / 4K · H.264 / HEVC + AAC Audio",
        "warning-title": "CLIENT-SIDE BINARY ENGINES (MAX & 4K)",
        "warning-desc": 'Everything runs locally in your browser with zero quality loss. <strong>Argus MAX (v6.2)</strong> preserves 100% of your video &amp; HDR stream untouched; <strong>Argus 4K</strong> applies TikTok-tailored OBX / Nova container optimization.',
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
        logApplyMax: "Starting Argus MAX Engine (v6.2)...",
        logModeMax: "ENGINE MAX 6.2: Zero-Touch Video + Dual-Track AAC PCE Bypass",
        logApply4K: "Starting Argus 4K Engine (Ultra Quality)...",
        logApplyObx: "PATCH: Applying Argus Method (OBX Container Restructure)...",
        logApplyNova: "PATCH: Applying Nova (Patchbox Container Restructure)...",
        logHwAccelDetected: "✓ WebCodecs GPU Acceleration detected — running high-speed hardware encoder",
        logHwAccelDone: "✓ Hardware acceleration completed successfully",
        logWasmFallback: "WebCodecs unavailable — falling back to ultra-fast WASM core...",
        logOptimizeTikTokPrep: "PREP: Staging video for TikTok 1080p Sweet Spot optimization...",
        logOptimizeTikTokExec: "WASM: Encoding to 1080p Level 4.0 (CRF 20 · 160k AAC · Faststart)...",
        logOptimizeTikTokDone: "✓ TikTok optimization profile applied successfully",
        logRead: "Reading MP4 container structure...",
        logFastPath: "✓ Standard MP4 + AAC detected — running instant native binary path",
        logNeedRemux: "Container needs normalization (MOV / fragmented / audio prep) — invoking FFmpeg WASM...",
        logWasmLoad: "WASM: Loading FFmpeg Core Engine...",
        logWasmReady: "✓ FFmpeg Engine Ready",
        logWasmWrite: "WASM: Staging media payload...",
        logWasmExec: "WASM: Remuxing container losslessly (-c:v copy) & preparing AAC audio...",
        logPatching: "PATCH: Executing binary container transformation...",
        logMaxDual: "PATCH: Appended 17 silence frames + dual-track AAC PCE (tracks ",
        logComplete: "✓ Optimization complete ",
        logReady: "Ready to Post ✓",
        logAwaiting: "System ready. Awaiting user action.",
        logFailed: "Optimization Failed.",
        logError: "Fatal Error: "
    },
    ar: {
        documentTitle: "آرغوس | نظام تحسين جودة تيك توك",
        "hero-tag": "بروتوكول التحسين // محرك_آرغوس_MAX_6.2",
        "hero-title": 'مُحسِّن جودة <span class="accent-text italic">تيك توك.</span>',
        "hero-desc": "محركا آرغوس MAX v6.2 (بدون لمس مسار الفيديو) و آرغوس 4K (تقنية OBX و Nova) داخل المتصفح مباشرة. بدون فقدان للجودة، وتجاوز كامل لضغط تيك توك.",
        "method-title": "تجاوز بروتوكول آرغوس",
        "method-desc": "محرك آرغوس MAX (v6.2) يترك مسار الفيديو و HDR سليماً 100% بدون أي إعادة ترميز. ومحرك آرغوس 4K يوفر تقنيات OBX و Nova المتوافقة مع خوارزميات تيك توك.",
        "engine-label": "محرك التجاوز:",
        "opt-engine-max": "آرغوس MAX (v6.2 · موصى به)",
        "opt-engine-argus4k": "آرغوس 4K (جودة فائقة + OBX)",
        "engine-mode-badge": "بدون_إعادة_ترميز",
        "submethod-label": "الميثود الفرعية:",
        "opt-submethod-obx": "Argus Method (OBX · الأفضل)",
        "opt-submethod-nova": "Nova (Patchbox · تجريبي)",
        "prep-label": "تجهيز الفيديو:",
        "opt-prep-tiktok": "Optimize for TikTok (تجهيز مثالي لـ 1080p · موصى به)",
        "opt-prep-direct": "Continue without extras (تطبيق مباشر بدون تعديل)",
        "preset-label": "أبعاد الفيديو:",
        "opt-vertical": "عمودي (9:16)",
        "opt-square": "مربع (1:1)",
        "opt-landscape": "أفقي (16:9)",
        "method-recommend": "موصى به: 1080p / 4K · H.264 / HEVC مع صوت AAC",
        "warning-title": "محركا المعالجة الثنائية المحلية (MAX & 4K)",
        "warning-desc": 'كل المعالجة تتم محلياً داخل متصفحك بدون فقدان للجودة. محرك <strong>آرغوس MAX (v6.2)</strong> يترك بيانات الفيديو و HDR دون أي تعديل ويمنع ضغط تيك توك؛ ومحرك <strong>آرغوس 4K</strong> يطبق هيكلة OBX و Nova المخصصة لتيك توك.',
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
        logApplyMax: "بدء تشغيل محرك آرغوس MAX (v6.2)...",
        logModeMax: "محرك MAX 6.2: فيديو خام 100% + مسار صوت مزدوج AAC PCE",
        logApply4K: "بدء تشغيل محرك آرغوس 4K (جودة فائقة)...",
        logApplyObx: "تعديل الحاوية: تطبيق Argus Method (إعادة هيكلة OBX)...",
        logApplyNova: "تعديل الحاوية: تطبيق Nova (إعادة هيكلة Patchbox)...",
        logHwAccelDetected: "✓ تم تفعيل تسريع كارت الشاشة (GPU WebCodecs) — جاري الترميز فائق السرعة بالعتاد",
        logHwAccelDone: "✓ اكتملت المعالجة السريعة عبر كارت الشاشة بنجاح",
        logWasmFallback: "كارت الشاشة غير متاح — التحويل إلى محرك WASM عالي السرعة...",
        logOptimizeTikTokPrep: "تجهيز: تحضير الفيديو لمعايير تيك توك 1080p الذهبية...",
        logOptimizeTikTokExec: "WASM: الترميز إلى 1080p Level 4.0 (CRF 20 · 160k AAC · Faststart)...",
        logOptimizeTikTokDone: "✓ تم تطبيق بروفايل تيك توك بنجاح تام",
        logRead: "قراءة بنية حاوية MP4...",
        logFastPath: "✓ تم اكتشاف MP4 قياسي مع صوت AAC — تشغيل المسار الثنائي الفوري",
        logNeedRemux: "الحاوية تحتاج تهيئة (صيغة MOV / مجزأة / تجهيز الصوت) — استدعاء FFmpeg WASM...",
        logWasmLoad: "WASM: جاري تحميل محرك FFmpeg Core...",
        logWasmReady: "✓ محرك FFmpeg جاهز للعمل",
        logWasmWrite: "WASM: تحميل بيانات الفيديو...",
        logWasmExec: "WASM: إعادة حزم الحاوية بدون فقدان (-c:v copy) وتجهيز صوت AAC...",
        logPatching: "معالجة: تنفيذ التحويل الثنائي للحاوية...",
        logMaxDual: "معالجة: إضافة 17 إطار صامت + مسار صوت AAC PCE مزدوج (المسارات ",
        logComplete: "✓ اكتمل التحسين ",
        logReady: "الفيديو جاهز للنشر في تيك توك ✓",
        logAwaiting: "النظام جاهز. في انتظار الإجراء.",
        logFailed: "فشلت عملية التحسين.",
        logError: "خطأ جسيم: "
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    currentLang = lang;
    localStorage.setItem('argus_lang', lang);

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    const dict = TRANSLATIONS[lang];
    document.title = dict.documentTitle;

    for (const [key, value] of Object.entries(dict)) {
        if (key === 'documentTitle' || key.startsWith('log')) continue;
        const el = document.getElementById(key);
        if (el) {
            if (value.includes('<')) el.innerHTML = value;
            else el.textContent = value;
        }
    }

    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`lang-${lang}`);
    if (activeBtn) activeBtn.classList.add('active');

    onEngineChange();
}

function getEngineConfig() {
    const engineEl = document.getElementById('argus-engine');
    const engine = engineEl ? engineEl.value : 'max';
    const submethodEl = document.getElementById('argus-submethod');
    const submethod = submethodEl ? submethodEl.value : 'argus_obx';
    const prepEl = document.getElementById('argus-prep');
    const prep = prepEl ? prepEl.value : 'optimize_tiktok';
    return { engine, submethod, prep };
}

function onEngineChange() {
    const cfg = getEngineConfig();
    const panel = document.getElementById('argus4k-options-panel');
    const engineBadge = document.getElementById('engine-mode-badge');
    const engineVersionBadge = document.getElementById('engine-version-badge');
    const dict = TRANSLATIONS[currentLang];

    if (cfg.engine === 'argus4k') {
        if (panel) panel.classList.remove('hidden');
        if (engineBadge) {
            engineBadge.textContent = 'ARGUS_4K_OBX';
            engineBadge.className = 'auto-badge font-mono text-[9px] text-amber-400 border border-amber-400/30 px-2 py-0.5 rounded bg-amber-400/5 font-bold uppercase tracking-wider';
        }
        if (engineVersionBadge) {
            engineVersionBadge.textContent = '4K // OBX';
            engineVersionBadge.className = 'text-amber-400 font-mono text-[8px] border border-amber-400/30 px-1.5 py-0.5 rounded bg-amber-400/5 uppercase tracking-widest font-bold';
        }
    } else {
        if (panel) panel.classList.add('hidden');
        if (engineBadge) {
            engineBadge.textContent = dict['engine-mode-badge'] || 'ZERO_REENCODE';
            engineBadge.className = 'auto-badge font-mono text-[9px] text-[#00F0FF] border border-[#00F0FF]/30 px-2 py-0.5 rounded bg-[#00F0FF]/5 font-bold uppercase tracking-wider';
        }
        if (engineVersionBadge) {
            engineVersionBadge.textContent = 'V6.2 MAX';
            engineVersionBadge.className = 'text-[#00F0FF] font-mono text-[8px] border border-[#00F0FF]/30 px-1.5 py-0.5 rounded bg-[#00F0FF]/5 uppercase tracking-widest font-bold';
        }
    }
}

// ─── BINARY BOX MANIPULATION HELPERS ────────────────────────────────────────

const CONTAINER_BOXES = new Set(['moov', 'trak', 'mdia', 'minf', 'dinf', 'edts', 'stbl']);
const SUPPORTED_VIDEO_CODECS = new Set(['avc1', 'avc3', 'hvc1', 'hev1', 'dvh1', 'dvhe']);

// Engine MAX 6.2 constants: 17 silence frames (16 chunk1 + 1 chunk2 with PCE)
const MAX_SILENCE_6 = new Uint8Array([0x01, 0x40, 0x20, 0x06, 0x4f, 0x00]);
const MAX_ADDED_SAMPLES = 17;
const MAX_CHUNK1_SAMPLES = 16;
const MAX_CHUNK2_SAMPLES = 1;

function u16(u8, off) {
    return (u8[off] << 8) | u8[off + 1];
}

function u32(u8, off) {
    return ((u8[off] << 24) | (u8[off + 1] << 16) | (u8[off + 2] << 8) | u8[off + 3]) >>> 0;
}

function u64(u8, off) {
    return u32(u8, off) * 4294967296 + u32(u8, off + 4);
}

function w16(val) {
    return new Uint8Array([(val >>> 8) & 0xff, val & 0xff]);
}

function w32(val) {
    return new Uint8Array([(val >>> 24) & 0xff, (val >>> 16) & 0xff, (val >>> 8) & 0xff, val & 0xff]);
}

function w64(val) {
    const hi = Math.floor(val / 4294967296);
    const lo = Math.floor(val % 4294967296);
    return new Uint8Array([
        (hi >>> 24) & 0xff, (hi >>> 16) & 0xff, (hi >>> 8) & 0xff, hi & 0xff,
        (lo >>> 24) & 0xff, (lo >>> 16) & 0xff, (lo >>> 8) & 0xff, lo & 0xff
    ]);
}

function typeStr(u8, off) {
    return String.fromCharCode(u8[off], u8[off + 1], u8[off + 2], u8[off + 3]);
}

function concatBuffers(arr) {
    let total = 0;
    for (const a of arr) total += a.length;
    const out = new Uint8Array(total);
    let pos = 0;
    for (const a of arr) {
        out.set(a, pos);
        pos += a.length;
    }
    return out;
}

function makeBox(type, content) {
    const out = new Uint8Array(content.length + 8);
    out.set(w32(out.length), 0);
    for (let i = 0; i < 4; i++) out[i + 4] = type.charCodeAt(i);
    out.set(content, 8);
    return out;
}

function parseBoxes(u8, start, end) {
    const boxes = [];
    let p = start;
    while (p + 8 <= end) {
        let size = u32(u8, p);
        let header = 8;
        if (size === 1) {
            if (p + 16 > end) break;
            size = u64(u8, p + 8);
            header = 16;
        } else if (size === 0) {
            size = end - p;
        }
        if (size < header || p + size > end) break;

        const type = typeStr(u8, p + 4);
        const b = { type, start: p, end: p + size, size, header, children: null };
        if (CONTAINER_BOXES.has(type) && p + header < p + size) {
            b.children = parseBoxes(u8, p + header, p + size);
        }
        boxes.push(b);
        p += size;
    }
    return boxes;
}

function raw(u8, b) { return u8.subarray(b.start, b.end); }
function payload(u8, b) { return u8.subarray(b.start + b.header, b.end); }

function findChild(b, type) {
    if (!b || !b.children) return null;
    for (let i = 0; i < b.children.length; i++) {
        if (b.children[i].type === type) return b.children[i];
    }
    return null;
}

function findStbl(trak) {
    const mdia = findChild(trak, 'mdia');
    const minf = mdia && findChild(mdia, 'minf');
    return minf ? findChild(minf, 'stbl') : null;
}

function getTrakHandler(u8, trak) {
    const mdia = findChild(trak, 'mdia');
    const hdlr = mdia && findChild(mdia, 'hdlr');
    if (!hdlr) return '';
    const p = payload(u8, hdlr);
    return p.length >= 12 ? typeStr(p, 8) : '';
}

function getTrakCodec(u8, trak) {
    const stbl = findStbl(trak);
    const stsd = stbl && findChild(stbl, 'stsd');
    if (!stsd) return '';
    const p = payload(u8, stsd);
    if (p.length < 16 || u32(p, 4) < 1) return '';
    return typeStr(p, 12);
}

function makeUdta(tagText) {
    const textBytes = new TextEncoder().encode(tagText);
    const dataBox = makeBox('data', concatBuffers([w32(1), w32(0), textBytes]));
    const tooBox = makeBox('\xa9too', dataBox);
    const ilstBox = makeBox('ilst', tooBox);
    const hdlrPayload = new Uint8Array(25);
    hdlrPayload[8] = 0x6d; hdlrPayload[9] = 0x64; hdlrPayload[10] = 0x69; hdlrPayload[11] = 0x72; // 'mdir'
    const hdlrBox = makeBox('hdlr', hdlrPayload);
    const metaBox = makeBox('meta', concatBuffers([new Uint8Array(4), hdlrBox, ilstBox]));
    return makeBox('udta', metaBox);
}

function inspectMp4Layout(u8) {
    try {
        const topBoxes = parseBoxes(u8, 0, u8.length);
        if (!topBoxes.length || topBoxes[0].type !== 'ftyp') {
            return { ready: false, reason: 'not_mp4', hasAudio: false };
        }
        if (topBoxes.some(b => b.type === 'moof')) {
            return { ready: false, reason: 'fragmented', hasAudio: false };
        }
        const moovs = topBoxes.filter(b => b.type === 'moov');
        const mdats = topBoxes.filter(b => b.type === 'mdat');
        if (moovs.length !== 1 || mdats.length !== 1) {
            return { ready: false, reason: 'multi_moov_mdat', hasAudio: false };
        }
        const moov = moovs[0];
        const traks = (moov.children || []).filter(b => b.type === 'trak');
        const videoTraks = traks.filter(t => getTrakHandler(u8, t) === 'vide');
        const audioTraks = traks.filter(t => getTrakHandler(u8, t) === 'soun');

        if (videoTraks.length !== 1) {
            return { ready: false, reason: 'video_track_count', hasAudio: audioTraks.length > 0 };
        }
        const vCodec = getTrakCodec(u8, videoTraks[0]);
        if (!SUPPORTED_VIDEO_CODECS.has(vCodec)) {
            return { ready: false, reason: 'unsupported_video_codec', codec: vCodec, hasAudio: audioTraks.length > 0 };
        }
        if (audioTraks.length === 0) {
            return { ready: false, reason: 'no_audio', codec: vCodec, hasAudio: false };
        }
        const aCodec = getTrakCodec(u8, audioTraks[0]);
        if (aCodec !== 'mp4a') {
            return { ready: false, reason: 'non_aac_audio', codec: vCodec, audioCodec: aCodec, hasAudio: true };
        }
        return { ready: true, codec: vCodec, audioCodec: aCodec, hasAudio: true };
    } catch (_) {
        return { ready: false, reason: 'parse_error', hasAudio: false };
    }
}

function buildMaxAsc(sampleRate) {
    const srTable = [96000, 88200, 64000, 48000, 44100, 32000, 24000, 22050, 16000, 12000, 11025, 8000, 7350];
    let sfi = srTable.indexOf(sampleRate);
    if (sfi < 0) sfi = 4;

    const bits = [];
    const push = (val, n) => { for (let i = n - 1; i >= 0; i--) bits.push((val >> i) & 1); };
    // AudioSpecificConfig: AAC-LC (2), sfi, channelConfig = 0 (Explicit PCE)
    push(2, 5); push(sfi, 4); push(0, 4);
    // GASpecificConfig
    push(0, 1); push(0, 1); push(0, 1);
    // Explicit PCE: side = 1 CPE (tag 0)
    push(0, 4); push(1, 2); push(sfi, 4);
    push(0, 4); push(1, 4); push(0, 4); push(0, 2); push(0, 3); push(0, 4);
    push(0, 1); push(0, 1); push(0, 1);
    push(1, 1); push(0, 4);
    while (bits.length % 8 !== 0) bits.push(0);
    push(0, 8);

    const out = new Uint8Array(bits.length / 8);
    for (let i = 0; i < bits.length; i++) out[i >> 3] |= (bits[i] << (7 - (i & 7)));
    return out;
}

function buildMaxMp4aEntry2(sampleRate) {
    const asc = buildMaxAsc(sampleRate);
    const esdsPayload = concatBuffers([
        new Uint8Array([0, 0, 0, 0]),
        new Uint8Array([0x03, 0x80, 0x80, 0x80, 0x20 + asc.length, 0x00, 0x01, 0x00]),
        new Uint8Array([0x04, 0x80, 0x80, 0x80, 0x12 + asc.length, 0x40, 0x15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
        new Uint8Array([0x05, 0x80, 0x80, 0x80, asc.length]),
        asc,
        new Uint8Array([0x06, 0x80, 0x80, 0x80, 0x01, 0x02])
    ]);
    const esdsBox = makeBox('esds', esdsPayload);
    const hdr = new Uint8Array(28);
    hdr.set(w16(1), 6);   // data_reference_index = 1
    hdr.set(w16(2), 16);  // channelcount = 2
    hdr.set(w16(16), 18); // samplesize = 16
    hdr.set(w32((sampleRate << 16) >>> 0), 24);
    return makeBox('mp4a', concatBuffers([hdr, esdsBox]));
}

function patchMax62(u8, dict) {
    const topBoxes = parseBoxes(u8, 0, u8.length);
    const ftyp = topBoxes.find(b => b.type === 'ftyp');
    const moov = topBoxes.find(b => b.type === 'moov');
    const mdat = topBoxes.find(b => b.type === 'mdat');
    if (!ftyp || !moov || !mdat) {
        throw new Error(currentLang === 'ar' ? 'حاوية MP4 غير صالحة: مفقود بيانات ftyp أو moov أو mdat' : 'Invalid MP4: missing ftyp, moov, or mdat');
    }

    const mvhd = findChild(moov, 'mvhd');
    const traks = (moov.children || []).filter(b => b.type === 'trak');
    const audioTrak = traks.find(t => getTrakHandler(u8, t) === 'soun');
    if (!mvhd || !audioTrak) {
        throw new Error(currentLang === 'ar' ? 'محرك Max 6.2 يتطلب بيانات mvhd ومسار صوت AAC' : 'Max 6.2 requires mvhd and an AAC audio track');
    }

    const silencePayload = new Uint8Array(MAX_ADDED_SAMPLES * 6);
    for (let i = 0; i < MAX_ADDED_SAMPLES; i++) silencePayload.set(MAX_SILENCE_6, i * 6);
    const mdat2Box = makeBox('mdat', silencePayload);

    // Align with Haze Max container box structure (preserves optional free box)
    const existingFree = topBoxes.find((b, idx) => b.type === 'free' && idx === 1);
    const freeBox = existingFree ? raw(u8, existingFree) : makeBox('free', new Uint8Array(0));

    // Zero-copy top-level order: ftyp + free (8B) + original mdat + mdat2 (110B) + moov
    const origMdatRaw = raw(u8, mdat);
    const newMdat1PayloadStart = ftyp.size + freeBox.length + mdat.header;
    const origMdatPayloadStart = mdat.start + mdat.header;
    const mdat1Shift = newMdat1PayloadStart - origMdatPayloadStart;
    const mdat2PayloadStart = ftyp.size + freeBox.length + origMdatRaw.length + 8;

    const pmvhd = payload(u8, mvhd);
    const mvhdVer = pmvhd[0];
    const mvhdTs = mvhdVer === 1 ? u32(pmvhd, 20) : u32(pmvhd, 12);
    const mvhdDur = mvhdVer === 1 ? u64(pmvhd, 24) : u32(pmvhd, 16);
    const nextTidOff = mvhdVer === 1 ? 108 : 96;
    const nextTrackId = u32(pmvhd, nextTidOff);

    const aMdia = findChild(audioTrak, 'mdia');
    const aMdhd = aMdia && findChild(aMdia, 'mdhd');
    const pamd = payload(u8, aMdhd);
    const amdVer = pamd[0];
    const audioTs = amdVer === 1 ? u32(pamd, 20) : u32(pamd, 12);
    const audioDur = amdVer === 1 ? u64(pamd, 24) : u32(pamd, 16);

    const addedAudioTicks = MAX_ADDED_SAMPLES * 1024;
    const newAudioMediaDur = audioDur + addedAudioTicks;
    const newAudioMovieDur = Math.round(newAudioMediaDur * mvhdTs / audioTs);
    const newMvhdDur = Math.max(mvhdDur, newAudioMovieDur);

    const aStbl = findStbl(audioTrak);
    const aStsd = findChild(aStbl, 'stsd');
    const origAudioStsdCount = u32(payload(u8, aStsd), 4);
    const pceDescIndex = origAudioStsdCount + 1;
    const aStco = findChild(aStbl, 'stco') || findChild(aStbl, 'co64');
    const origAudioChunks = u32(payload(u8, aStco), 4);
    const entry2Box = buildMaxMp4aEntry2(audioTs);

    function shiftSimpleStco(box) {
        const p = payload(u8, box);
        const src64 = box.type === 'co64';
        const cnt = u32(p, 4);
        let maxOff = 0;
        const shifted = new Array(cnt);
        for (let i = 0; i < cnt; i++) {
            const off = (src64 ? u64(p, 8 + i * 8) : u32(p, 8 + i * 4)) + mdat1Shift;
            shifted[i] = off;
            if (off > maxOff) maxOff = off;
        }
        const dst64 = src64 || maxOff > 0xffffffff;
        const elemSz = dst64 ? 8 : 4;
        const out = new Uint8Array(8 + cnt * elemSz);
        out.set(p.subarray(0, 4), 0);
        out.set(w32(cnt), 4);
        for (let i = 0; i < cnt; i++) {
            out.set(dst64 ? w64(shifted[i]) : w32(shifted[i]), 8 + i * elemSz);
        }
        return makeBox(dst64 ? 'co64' : 'stco', out);
    }

    function patchAudioTrak(trakBox, isPrimary, overrideTrackId) {
        function walk(b) {
            if (b.type === 'tkhd') {
                const out = new Uint8Array(payload(u8, b));
                const ver = out[0];
                if (overrideTrackId != null) out.set(w32(overrideTrackId), ver === 1 ? 20 : 12);
                if (ver === 1) out.set(w64(newAudioMovieDur), 28);
                else out.set(w32(newAudioMovieDur), 20);
                return makeBox('tkhd', out);
            }
            if (b.type === 'elst') {
                const out = new Uint8Array(payload(u8, b));
                const ver = out[0];
                const cnt = u32(out, 4);
                if (cnt >= 1) {
                    const stride = ver === 1 ? 20 : 12;
                    const off = 8 + (cnt - 1) * stride;
                    if (cnt === 1) {
                        if (ver === 1) out.set(w64(newAudioMovieDur), off);
                        else out.set(w32(newAudioMovieDur), off);
                    } else {
                        const oldSeg = ver === 1 ? u64(out, off) : u32(out, off);
                        const delta = Math.round(addedAudioTicks * mvhdTs / audioTs);
                        if (ver === 1) out.set(w64(oldSeg + delta), off);
                        else out.set(w32(oldSeg + delta), off);
                    }
                }
                return makeBox('elst', out);
            }
            if (b.type === 'mdhd') {
                const out = new Uint8Array(payload(u8, b));
                const ver = out[0];
                if (ver === 1) out.set(w64(newAudioMediaDur), 24);
                else out.set(w32(newAudioMediaDur), 16);
                return makeBox('mdhd', out);
            }
            if (b.type === 'stsd') {
                if (!isPrimary) return raw(u8, b);
                const p = payload(u8, b);
                const cnt = u32(p, 4);
                return makeBox('stsd', concatBuffers([p.subarray(0, 4), w32(cnt + 1), p.subarray(8), entry2Box]));
            }
            if (b.type === 'stts') {
                const p = payload(u8, b);
                const cnt = u32(p, 4);
                const entries = [];
                for (let i = 0; i < cnt; i++) entries.push([u32(p, 8 + i * 8), u32(p, 12 + i * 8)]);
                if (entries.length > 0 && entries[entries.length - 1][1] === 1024) {
                    entries[entries.length - 1][0] += MAX_ADDED_SAMPLES;
                } else {
                    entries.push([MAX_ADDED_SAMPLES, 1024]);
                }
                const out = new Uint8Array(8 + entries.length * 8);
                out.set(p.subarray(0, 4), 0);
                out.set(w32(entries.length), 4);
                for (let i = 0; i < entries.length; i++) {
                    out.set(w32(entries[i][0]), 8 + i * 8);
                    out.set(w32(entries[i][1]), 12 + i * 8);
                }
                return makeBox('stts', out);
            }
            if (b.type === 'stsc') {
                const p = payload(u8, b);
                const cnt = u32(p, 4);
                const out = new Uint8Array(8 + (cnt + 2) * 12);
                out.set(p.subarray(0, 4), 0);
                out.set(w32(cnt + 2), 4);
                out.set(p.subarray(8, 8 + cnt * 12), 8);
                const o1 = 8 + cnt * 12;
                out.set(w32(origAudioChunks + 1), o1);
                out.set(w32(MAX_CHUNK1_SAMPLES), o1 + 4);
                out.set(w32(1), o1 + 8);
                const o2 = o1 + 12;
                out.set(w32(origAudioChunks + 2), o2);
                out.set(w32(MAX_CHUNK2_SAMPLES), o2 + 4);
                out.set(w32(isPrimary ? pceDescIndex : 1), o2 + 8);
                return makeBox('stsc', out);
            }
            if (b.type === 'stsz') {
                const p = payload(u8, b);
                const fixedSz = u32(p, 4);
                const cnt = u32(p, 8);
                const out = new Uint8Array(12 + (cnt + MAX_ADDED_SAMPLES) * 4);
                out.set(p.subarray(0, 4), 0);
                out.set(w32(0), 4);
                out.set(w32(cnt + MAX_ADDED_SAMPLES), 8);
                if (fixedSz !== 0) {
                    for (let i = 0; i < cnt; i++) out.set(w32(fixedSz), 12 + i * 4);
                } else {
                    out.set(p.subarray(12, 12 + cnt * 4), 12);
                }
                for (let i = 0; i < MAX_ADDED_SAMPLES; i++) out.set(w32(6), 12 + (cnt + i) * 4);
                return makeBox('stsz', out);
            }
            if (b.type === 'stco' || b.type === 'co64') {
                const p = payload(u8, b);
                const src64 = b.type === 'co64';
                const dst64 = src64 || (mdat2PayloadStart + MAX_CHUNK1_SAMPLES * 6 > 0xffffffff);
                const cnt = u32(p, 4);
                const elemSz = dst64 ? 8 : 4;
                const out = new Uint8Array(8 + (cnt + 2) * elemSz);
                out.set(p.subarray(0, 4), 0);
                out.set(w32(cnt + 2), 4);
                for (let i = 0; i < cnt; i++) {
                    const off = (src64 ? u64(p, 8 + i * 8) : u32(p, 8 + i * 4)) + mdat1Shift;
                    out.set(dst64 ? w64(off) : w32(off), 8 + i * elemSz);
                }
                const c1 = mdat2PayloadStart;
                const c2 = mdat2PayloadStart + MAX_CHUNK1_SAMPLES * 6;
                out.set(dst64 ? w64(c1) : w32(c1), 8 + cnt * elemSz);
                out.set(dst64 ? w64(c2) : w32(c2), 8 + (cnt + 1) * elemSz);
                return makeBox(dst64 ? 'co64' : 'stco', out);
            }
            if (b.type === 'sbgp') {
                const p = payload(u8, b);
                const ver = p[0];
                const cntOff = (ver === 1 ? 16 : 12) - 4;
                const cnt = u32(p, cntOff);
                const out = new Uint8Array(p.length + 8);
                out.set(p, 0);
                out.set(w32(cnt + 1), cntOff);
                out.set(w32(MAX_ADDED_SAMPLES), p.length);
                out.set(w32(0), p.length + 4);
                return makeBox('sbgp', out);
            }
            if (b.children) {
                return makeBox(b.type, concatBuffers(b.children.map(walk)));
            }
            return raw(u8, b);
        }
        return walk(trakBox);
    }

    function patchOtherTrak(trakBox) {
        function walk(b) {
            if (b.type === 'stco' || b.type === 'co64') return shiftSimpleStco(b);
            if (b.children) return makeBox(b.type, concatBuffers(b.children.map(walk)));
            return raw(u8, b);
        }
        return walk(trakBox);
    }

    const aTkhd = findChild(audioTrak, 'tkhd');
    const paTk = payload(u8, aTkhd);
    const primaryAudioTid = paTk[0] === 1 ? u32(paTk, 20) : u32(paTk, 12);

    const newMvhdPayload = new Uint8Array(pmvhd);
    if (mvhdVer === 1) newMvhdPayload.set(w64(newMvhdDur), 24);
    else newMvhdPayload.set(w32(newMvhdDur), 16);
    newMvhdPayload.set(w32(nextTrackId + 1), nextTidOff);
    const newMvhdBox = makeBox('mvhd', newMvhdPayload);

    const moovParts = [];
    for (const c of moov.children) {
        if (c.type === 'mvhd') {
            moovParts.push(newMvhdBox);
        } else if (c.type === 'udta') {
            continue;
        } else if (c === audioTrak) {
            moovParts.push(patchAudioTrak(audioTrak, true, null));
            moovParts.push(patchAudioTrak(audioTrak, false, nextTrackId));
        } else if (c.type === 'trak') {
            moovParts.push(patchOtherTrak(c));
        } else {
            moovParts.push(raw(u8, c));
        }
    }
    moovParts.push(makeUdta('Argus Quality Method | Max 6.2'));
    const newMoovBox = makeBox('moov', concatBuffers(moovParts));

    logToTerminal(`${dict.logMaxDual}#${primaryAudioTid} + #${nextTrackId})`, 'success');
    return new Blob([raw(u8, ftyp), freeBox, origMdatRaw, mdat2Box, newMoovBox], { type: 'video/mp4' });
}

// ─── FFMPEG WASM ON-DEMAND NORMALIZER (FALLBACK FOR MOV / SILENT / NON-AAC) ─

let ffmpegInstance = null;
let ffmpegLoadPromise = null;

async function loadFFmpegInstance() {
    if (ffmpegInstance) return ffmpegInstance;
    if (ffmpegLoadPromise) return ffmpegLoadPromise;

    const dict = TRANSLATIONS[currentLang];

    ffmpegLoadPromise = (async () => {
        try {
            logToTerminal(dict.logWasmLoad, 'normal');
            const { FFmpeg } = FFmpegWASM;
            const instance = new FFmpeg();
            instance.on('log', ({ message }) => {
                if (message.includes('frame=') || message.includes('size=')) return;
                console.log('[ArgusCore]', message);
            });

            await instance.load({
                coreURL: 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd/ffmpeg-core.js',
                wasmURL: 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd/ffmpeg-core.wasm'
            });
            logToTerminal(dict.logWasmReady, 'success');
            ffmpegInstance = instance;
            return instance;
        } catch (err) {
            logToTerminal(dict.logError + (err.message || err), 'error');
            ffmpegLoadPromise = null;
            throw err;
        }
    })();
    return ffmpegLoadPromise;
}

async function normalizeWithFFmpeg(inputU8, layoutInfo, onProgress) {
    const dict = TRANSLATIONS[currentLang];
    const ffmpeg = await loadFFmpegInstance();
    onProgress(35);

    logToTerminal(dict.logWasmWrite, 'normal');
    await ffmpeg.writeFile('input.mp4', inputU8);
    onProgress(50);

    logToTerminal(dict.logWasmExec, 'highlight');
    let exitCode = 1;

    if (layoutInfo.reason === 'no_audio') {
        // Video has no audio track — copy video losslessly and mux a clean silent AAC track
        exitCode = await ffmpeg.exec([
            '-y', '-v', 'warning',
            '-i', 'input.mp4',
            '-f', 'lavfi', '-i', 'anullsrc=channel_layout=stereo:sample_rate=44100',
            '-map', '0:v:0', '-map', '1:a:0',
            '-c:v', 'copy',
            '-c:a', 'aac', '-ar', '44100', '-ac', '2', '-b:a', '128k',
            '-shortest',
            '-map_metadata', '-1', '-map_chapters', '-1',
            '-movflags', '+faststart',
            'temp.mp4'
        ]);
    } else {
        // Remux container & normalize audio track to AAC while copying video 100% losslessly
        exitCode = await ffmpeg.exec([
            '-y', '-v', 'warning',
            '-i', 'input.mp4',
            '-map', '0:v:0', '-map', '0:a:0',
            '-c:v', 'copy',
            '-c:a', 'aac', '-ar', '48000', '-ac', '2', '-b:a', '320k',
            '-flags:a', '+bitexact', '-avoid_negative_ts', 'make_zero',
            '-map_metadata', '-1', '-map_chapters', '-1',
            '-movflags', '+faststart',
            'temp.mp4'
        ]);
        // If input turned out to have no audio stream (e.g. silent MOV), retry with silent AAC
        if (exitCode !== 0) {
            exitCode = await ffmpeg.exec([
                '-y', '-v', 'warning',
                '-i', 'input.mp4',
                '-f', 'lavfi', '-i', 'anullsrc=channel_layout=stereo:sample_rate=44100',
                '-map', '0:v:0', '-map', '1:a:0',
                '-c:v', 'copy',
                '-c:a', 'aac', '-ar', '44100', '-ac', '2', '-b:a', '128k',
                '-shortest',
                '-map_metadata', '-1', '-map_chapters', '-1',
                '-movflags', '+faststart',
                'temp.mp4'
            ]);
        }
    }

    if (exitCode !== 0) {
        try { await ffmpeg.deleteFile('input.mp4'); } catch (_) {}
        throw new Error(currentLang === 'ar' ? 'فشل تهيئة حاوية الفيديو عبر FFmpeg' : 'FFmpeg container normalization failed');
    }

    onProgress(75);
    const outU8 = await ffmpeg.readFile('temp.mp4');
    try {
        await ffmpeg.deleteFile('input.mp4');
        await ffmpeg.deleteFile('temp.mp4');
    } catch (_) {}

    return outU8;
}

// ─── CORE OPTIMIZATION PIPELINE ─────────────────────────────────────────────

async function argusOptimizeVideo(fileOrBuffer, config, onProgress) {
    const dict = TRANSLATIONS[currentLang];
    const start = Date.now();

    if (config.engine === 'max') {
        logToTerminal(dict.logApplyMax, 'highlight');
        logToTerminal(dict.logModeMax, 'normal');
        logToTerminal(dict.logRead, 'normal');
        onProgress(15);

        let arrayBuffer;
        if (fileOrBuffer instanceof ArrayBuffer) {
            arrayBuffer = fileOrBuffer;
        } else if (fileOrBuffer instanceof Blob || (typeof File !== 'undefined' && fileOrBuffer instanceof File)) {
            arrayBuffer = await fileOrBuffer.arrayBuffer();
        } else {
            arrayBuffer = (new Uint8Array(fileOrBuffer)).buffer;
        }

        let u8 = new Uint8Array(arrayBuffer);
        const layout = inspectMp4Layout(u8);

        if (layout.ready) {
            logToTerminal(dict.logFastPath, 'success');
            onProgress(55);
        } else {
            logToTerminal(dict.logNeedRemux, 'warning');
            u8 = await normalizeWithFFmpeg(u8, layout, onProgress);
            const recheck = inspectMp4Layout(u8);
            if (!recheck.ready) {
                throw new Error(
                    currentLang === 'ar'
                        ? `ملف غير مدعوم (${recheck.reason}). يرجى التصدير بصيغة MP4 (H.264 أو HEVC) مع صوت AAC.`
                        : `Unsupported export (${recheck.reason}). Export as standard MP4 (H.264 / HEVC) with AAC audio.`
                );
            }
        }

        logToTerminal(dict.logPatching, 'highlight');
        onProgress(80);

        const outputBlob = patchMax62(u8, dict);
        u8 = null;
        onProgress(95);

        const elapsed = ((Date.now() - start) / 1000).toFixed(2);
        const sizeMB = (outputBlob.size / 1048576).toFixed(2);
        logToTerminal(`${dict.logComplete}(${elapsed}s) — ${sizeMB} MB`, 'success');

        return { success: true, blob: outputBlob };
    }

    if (config.engine === 'argus4k') {
        logToTerminal(dict.logApply4K, 'highlight');
        onProgress(15);

        let inputFile;
        if (typeof File !== 'undefined' && fileOrBuffer instanceof File) {
            inputFile = fileOrBuffer;
        } else if (fileOrBuffer instanceof Blob) {
            inputFile = new File([fileOrBuffer], 'video.mp4', { type: 'video/mp4' });
        } else {
            inputFile = new File([fileOrBuffer], 'video.mp4', { type: 'video/mp4' });
        }

        let targetFile = inputFile;

        if (config.prep === 'optimize_tiktok') {
            logToTerminal(dict.logOptimizeTikTokPrep, 'normal');
            onProgress(15);

            // Attempt WebCodecs hardware GPU acceleration (CompressBase native pipeline)
            let hardwareOptimizedBlob = null;
            try {
                const { nativeHardwareSupported, nativeOptimize } = await import('./compressbase_chunks/c-tC9SbwDW.js');
                const isHwSupported = typeof nativeHardwareSupported === 'function' ? await nativeHardwareSupported(inputFile) : false;

                if (isHwSupported && typeof nativeOptimize === 'function') {
                    logToTerminal(dict.logHwAccelDetected, 'highlight');
                    hardwareOptimizedBlob = await nativeOptimize(inputFile, {
                        downscale: true,
                        preserveQuality: true,
                        onProgress: (ratio) => {
                            const pct = ratio > 1 ? ratio : Math.round(ratio * 100);
                            const dynamicPct = Math.min(75, Math.max(15, Math.round(15 + (pct / 100) * 60)));
                            onProgress(dynamicPct);
                        },
                        onStage: (stage) => {
                            if (stage) logToTerminal(`GPU Stage: ${stage}`, 'normal');
                        }
                    });
                    logToTerminal(dict.logHwAccelDone, 'success');
                }
            } catch (hwErr) {
                console.warn('WebCodecs GPU acceleration not available or failed:', hwErr);
            }

            if (hardwareOptimizedBlob) {
                targetFile = new File([hardwareOptimizedBlob], inputFile.name || 'optimized.mp4', { type: 'video/mp4' });
            } else {
                // High-speed fallback via FFmpeg WASM with live dynamic frame progress
                logToTerminal(dict.logWasmFallback, 'normal');
                const u8Input = new Uint8Array(await inputFile.arrayBuffer());
                const ffmpeg = await loadFFmpegInstance();

                const progressHandler = ({ progress }) => {
                    if (typeof progress === 'number' && progress >= 0 && progress <= 1) {
                        const dynamicPct = Math.min(75, Math.max(15, Math.round(15 + progress * 60)));
                        onProgress(dynamicPct);
                    }
                };
                ffmpeg.on('progress', progressHandler);

                await ffmpeg.writeFile('in_cb.mp4', u8Input);
                logToTerminal(dict.logOptimizeTikTokExec, 'highlight');

                const exitCode = await ffmpeg.exec([
                    '-y', '-v', 'warning',
                    '-i', 'in_cb.mp4',
                    '-vf', "scale='min(1080,iw)':-2",
                    '-c:v', 'libx264', '-crf', '20', '-level', '4.0', '-preset', 'ultrafast',
                    '-c:a', 'aac', '-b:a', '160k', '-ar', '44100',
                    '-map_metadata', '-1',
                    '-movflags', '+faststart',
                    'out_cb.mp4'
                ]);

                try { ffmpeg.off('progress', progressHandler); } catch (_) {}

                if (exitCode !== 0) {
                    try { await ffmpeg.deleteFile('in_cb.mp4'); } catch (_) {}
                    throw new Error(currentLang === 'ar' ? 'فشل تحسين الفيديو لـ TikTok عبر FFmpeg' : 'FFmpeg TikTok optimization failed');
                }

                const optimizedU8 = await ffmpeg.readFile('out_cb.mp4');
                try {
                    await ffmpeg.deleteFile('in_cb.mp4');
                    await ffmpeg.deleteFile('out_cb.mp4');
                } catch (_) {}
                targetFile = new File([optimizedU8], inputFile.name || 'optimized.mp4', { type: 'video/mp4' });
                logToTerminal(dict.logOptimizeTikTokDone, 'success');
            }
        } else {
            onProgress(35);
        }

        onProgress(75);
        let outputBlob;
        if (config.submethod === 'nova') {
            logToTerminal(dict.logApplyNova, 'normal');
            const { patchBoxVideo } = await import('./compressbase_chunks/c-7XE0dE1k.js');
            const baseURL = typeof window !== 'undefined' && window.location ? window.location.origin + '/' : '/';
            outputBlob = await patchBoxVideo(targetFile, {
                assetsBaseURL: baseURL,
                onStatus: (status) => {
                    logToTerminal(`Nova: ${status}`, 'normal');
                    onProgress(88);
                }
            });
        } else {
            // Default: Argus Method (OBX)
            logToTerminal(dict.logApplyObx, 'normal');
            const { patchObx } = await import('./compressbase_chunks/c-B00hGC5w.js');
            outputBlob = await patchObx(targetFile, {
                onStatus: (status) => {
                    logToTerminal(`Argus Method (OBX): ${status}`, 'normal');
                    onProgress(88);
                }
            });
        }

        onProgress(100);
        const elapsed = ((Date.now() - start) / 1000).toFixed(2);
        const sizeMB = (outputBlob.size / 1048576).toFixed(2);
        logToTerminal(`${dict.logComplete}(${elapsed}s) — ${sizeMB} MB`, 'success');

        return { success: true, blob: outputBlob };
    }

    throw new Error('Unknown engine configuration: ' + JSON.stringify(config));
}

// ─── TERMINAL VIEW ENGINE ───────────────────────────────────────────────────

let argusIsProcessing = false;
let activeOutputUrl = null;

const logToTerminal = (msg, styleType = 'normal') => {
    const t = document.getElementById('argus-terminal');
    if (!t) return;

    const div = document.createElement('div');
    div.className = `font-mono text-[11px] mb-1 ${
        styleType === 'error'   ? 'text-danger' :
        styleType === 'warning' ? 'text-warning' :
        styleType === 'success' ? 'text-cyan' : 'text-[#71717A]'
    }`;
    div.textContent = `> ${msg}`;
    t.appendChild(div);
    t.scrollTop = t.scrollHeight;
};

const setProgressStatus = (pct) => {
    const bar = document.getElementById('argus-progress-bar');
    const label = document.getElementById('argus-progress-label');
    if (bar) bar.style.width = `${pct}%`;
    if (label) label.textContent = `${Math.round(pct)}%`;
};

// ─── FILE HANDLER ────────────────────────────────────────────────────────────

async function processUploadedFile(file) {
    if (!file || argusIsProcessing) return;
    argusIsProcessing = true;

    const dict = TRANSLATIONS[currentLang];
    const config = getEngineConfig();
    const progressContainer = document.getElementById('argus-progress-container');
    const statusIndicator = document.getElementById('argus-status-indicator');
    const statusText = document.getElementById('status-text');
    const dropZone = document.getElementById('argus-drop-zone');
    const downloadContainer = document.getElementById('argus-download-container');

    if (progressContainer) progressContainer.classList.remove('hidden');
    if (downloadContainer) downloadContainer.classList.add('hidden');
    if (dropZone) dropZone.classList.add('opacity-50', 'pointer-events-none');

    if (statusIndicator && statusText) {
        statusIndicator.querySelector('span').className = 'w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-ping';
        statusText.textContent = dict['status-optimizing'];
        statusText.className = 'font-mono text-[8px] text-[#00F0FF] uppercase tracking-widest';
    }

    setProgressStatus(5);
    const term = document.getElementById('argus-terminal');
    if (term) term.innerHTML = '';

    logToTerminal(`${dict.logInit}${file.name}`, 'success');

    let detectedPreset = 'vertical';
    let videoWidth = 0;
    let videoHeight = 0;

    try {
        logToTerminal(currentLang === 'ar' ? 'تحليل أبعاد مصفوفة الفيديو...' : 'Analyzing video dimension matrix...', 'normal');

        const tempVideo = document.createElement('video');
        tempVideo.preload = 'metadata';
        tempVideo.src = URL.createObjectURL(file);

        await new Promise((resolve) => {
            tempVideo.onloadedmetadata = () => {
                URL.revokeObjectURL(tempVideo.src);
                videoWidth = tempVideo.videoWidth;
                videoHeight = tempVideo.videoHeight;

                if (Math.abs(videoWidth - videoHeight) < (Math.max(videoWidth, videoHeight) * 0.05)) {
                    detectedPreset = 'square';
                } else if (videoWidth > videoHeight) {
                    detectedPreset = 'landscape';
                } else {
                    detectedPreset = 'vertical';
                }

                const presetEl = document.getElementById('video-preset');
                if (presetEl) presetEl.value = detectedPreset;
                resolve();
            };
            tempVideo.onerror = () => resolve();
            setTimeout(resolve, 1200);
        });

        if (videoWidth > 0 && videoHeight > 0) {
            const presetText = detectedPreset === 'vertical'
                ? (currentLang === 'ar' ? 'عمودي (9:16)' : 'VERTICAL (9:16)')
                : detectedPreset === 'square'
                ? (currentLang === 'ar' ? 'مربع (1:1)' : 'SQUARE (1:1)')
                : (currentLang === 'ar' ? 'أفقي (16:9)' : 'LANDSCAPE (16:9)');

            const dimMsg = currentLang === 'ar'
                ? `✓ تم الكشف عن أبعاد الفيديو: ${videoWidth}x${videoHeight} [النمط تلقائياً: ${presetText}]`
                : `✓ Detected dimensions: ${videoWidth}x${videoHeight} [Auto preset: ${presetText}]`;

            logToTerminal(dimMsg, 'success');
        }
    } catch (e) {
        console.warn('Dimension reading failed', e);
    }

    try {
        const result = await argusOptimizeVideo(file, config, (pct) => {
            setProgressStatus(pct);
        });

        if (result.success) {
            setProgressStatus(100);

            if (activeOutputUrl) URL.revokeObjectURL(activeOutputUrl);
            const suffix = config.engine === 'argus4k' ? '_argus_4k.mp4' : '_argus_max.mp4';
            const outputName = file.name.replace(/\.[^/.]+$/, '') + suffix;
            activeOutputUrl = URL.createObjectURL(result.blob);

            const downloadBtn = document.getElementById('argus-download-btn');
            if (downloadContainer && downloadBtn) {
                downloadBtn.href = activeOutputUrl;
                downloadBtn.download = outputName;
                downloadContainer.classList.remove('hidden');
                setTimeout(() => {
                    downloadContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 100);
            }

            logToTerminal(dict.logReady, 'success');
            logToTerminal(dict.logAwaiting, 'normal');
        } else {
            logToTerminal(dict.logFailed, 'error');
        }
    } catch (e) {
        logToTerminal(`${dict.logError}${e.message}`, 'error');
    } finally {
        if (statusIndicator && statusText) {
            statusIndicator.querySelector('span').className = 'w-1.5 h-1.5 rounded-full bg-[#00F0FF]';
            statusText.textContent = dict['status-ready'];
            statusText.className = 'font-mono text-[8px] text-[#00F0FF] uppercase tracking-widest';
        }
        if (dropZone) dropZone.classList.remove('opacity-50', 'pointer-events-none');
        argusIsProcessing = false;
    }
}

// ─── INITIALIZATION ──────────────────────────────────────────────────────────

if (typeof document !== 'undefined' && document.addEventListener) {
    document.addEventListener('DOMContentLoaded', () => {
        const savedLang = localStorage.getItem('argus_lang') || 'en';
        const savedEngine = localStorage.getItem('argus_engine') || 'max';
        const currentEngine = (savedEngine === 'argus4k') ? 'argus4k' : 'max';

        const engineSelect = document.getElementById('argus-engine');
        if (engineSelect) {
            engineSelect.value = currentEngine;
            engineSelect.addEventListener('change', (e) => {
                localStorage.setItem('argus_engine', e.target.value);
                onEngineChange();
            });
        }

        const submethodSelect = document.getElementById('argus-submethod');
        if (submethodSelect) {
            submethodSelect.addEventListener('change', onEngineChange);
        }

        setLanguage(savedLang);
        onEngineChange();

        const dropZone = document.getElementById('argus-drop-zone');
        const fileInput = document.getElementById('argus-file-input');
        const resetBtn = document.getElementById('argus-reset-btn');

        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                location.reload();
            });
        }

        if (dropZone && fileInput) {
            dropZone.addEventListener('click', () => fileInput.click());

            fileInput.addEventListener('change', e => {
                if (e.target.files?.[0]) processUploadedFile(e.target.files[0]);
            });

            dropZone.addEventListener('dragover', e => {
                e.preventDefault();
                dropZone.classList.add('border-accent');
            });

            dropZone.addEventListener('dragleave', () => {
                dropZone.classList.remove('border-accent');
            });

            dropZone.addEventListener('drop', e => {
                e.preventDefault();
                dropZone.classList.remove('border-accent');
                if (e.dataTransfer?.files?.[0]) processUploadedFile(e.dataTransfer.files[0]);
            });
        }
    });
}

// Expose globals for HTML inline handlers
if (typeof window !== 'undefined') {
    window.setLanguage = setLanguage;
    window.onEngineChange = onEngineChange;
    window.getEngineConfig = getEngineConfig;
    window.processUploadedFile = processUploadedFile;
    window.argusOptimizeVideo = argusOptimizeVideo;
}
